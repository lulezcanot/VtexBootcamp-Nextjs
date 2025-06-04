import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import prisma from '@/utils/connect';

export async function GET(
  request: NextRequest,
  { params }: { params: { nivel: string } }
) {
  try {
    const { userId } = await auth();
    const { nivel } = params;

    if (!userId) {
      return NextResponse.json(
        { error: 'Usuario no autenticado' },
        { status: 401 }
      );
    }

    // Obtener el usuario de la base de datos
    const user = await prisma.user.findUnique({
      where: {
        clerkId: userId
      }
    });

    if (!user) {
      return NextResponse.json(
        { error: 'Usuario no encontrado' },
        { status: 404 }
      );
    }

    // Obtener la ruta de aprendizaje
    const learningPath = await prisma.learningPath.findFirst({
      where: {
        name: nivel
      },
      include: {
        modules: {
          orderBy: {
            order: 'asc'
          },
          include: {
            lessons: {
              orderBy: {
                order: 'asc'
              }
            }
          }
        }
      }
    });

    if (!learningPath) {
      return NextResponse.json(
        { error: 'Ruta de aprendizaje no encontrada' },
        { status: 404 }
      );
    }

    // Calcular progreso general del nivel
    const totalLessons = learningPath.modules.reduce((total, module) => {
      return total + module.lessons.length;
    }, 0);

    const completedLessons = await prisma.userLessonProgress.count({
      where: {
        userId: user.id,
        completedAt: {
          not: null
        },
        lesson: {
          module: {
            learningPathId: learningPath.id
          }
        }
      }
    });

    const levelProgress = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

    // Calcular progreso por módulo y determinar cuáles están desbloqueados
    const moduleProgress = await Promise.all(
      learningPath.modules.map(async (module, index) => {
        const moduleTotalLessons = module.lessons.length;
        const moduleCompletedLessons = await prisma.userLessonProgress.count({
          where: {
            userId: user.id,
            completedAt: {
              not: null
            },
            lesson: {
              moduleId: module.id
            }
          }
        });

        const moduleProgressPercent = moduleTotalLessons > 0 
          ? Math.round((moduleCompletedLessons / moduleTotalLessons) * 100) 
          : 0;

        // Determinar si el módulo está desbloqueado
        let isUnlocked = false;
        if (index === 0) {
          // El primer módulo siempre está desbloqueado
          isUnlocked = true;
        } else {
          // Los módulos siguientes se desbloquean cuando el anterior está 100% completado
          const previousModule = learningPath.modules[index - 1];
          const previousModuleTotalLessons = previousModule.lessons.length;
          const previousModuleCompletedLessons = await prisma.userLessonProgress.count({
            where: {
              userId: user.id,
              completedAt: {
                not: null
              },
              lesson: {
                moduleId: previousModule.id
              }
            }
          });
          
          const previousModuleProgress = previousModuleTotalLessons > 0 
            ? Math.round((previousModuleCompletedLessons / previousModuleTotalLessons) * 100) 
            : 0;
          
          isUnlocked = previousModuleProgress === 100;
        }

        // Obtener progreso de lecciones individuales
        const lessonProgress = await Promise.all(
          module.lessons.map(async (lesson) => {
            const progress = await prisma.userLessonProgress.findUnique({
              where: {
                userId_lessonId: {
                  userId: user.id,
                  lessonId: lesson.id
                }
              }
            });

            return {
              lessonId: lesson.id,
              lessonTitle: lesson.title,
              completed: !!progress?.completedAt,
              timeSpent: progress?.timeSpent || 0,
              completedAt: progress?.completedAt
            };
          })
        );

        return {
          moduleId: module.id,
          moduleTitle: module.title,
          moduleDescription: module.description,
          moduleDuration: module.duration,
          moduleOrder: module.order,
          totalLessons: moduleTotalLessons,
          completedLessons: moduleCompletedLessons,
          progressPercent: moduleProgressPercent,
          isUnlocked,
          isCompleted: moduleProgressPercent === 100,
          lessons: lessonProgress
        };
      })
    );

    // Obtener progreso de la ruta de aprendizaje del usuario
    const userLearningProgress = await prisma.userLearningProgress.findUnique({
      where: {
        userId_learningPathId: {
          userId: user.id,
          learningPathId: learningPath.id
        }
      }
    });

    return NextResponse.json({
      levelName: nivel,
      levelTitle: learningPath.title,
      totalLessons,
      completedLessons,
      levelProgress,
      startedAt: userLearningProgress?.startedAt,
      lastAccessedAt: userLearningProgress?.lastAccessedAt,
      completedAt: userLearningProgress?.completedAt,
      modules: moduleProgress
    });
  } catch (error) {
    console.error('Error fetching user progress:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
