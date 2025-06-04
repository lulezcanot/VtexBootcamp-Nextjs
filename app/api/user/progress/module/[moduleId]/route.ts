import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import prisma from '@/utils/connect';

export async function GET(
  request: NextRequest,
  { params }: { params: { moduleId: string } }
) {
  try {
    const { userId } = await auth();
    const { moduleId } = params;

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

    // Obtener el módulo con sus lecciones
    const module = await prisma.module.findUnique({
      where: {
        id: moduleId
      },
      include: {
        lessons: {
          orderBy: {
            order: 'asc'
          }
        },
        learningPath: true
      }
    });

    if (!module) {
      return NextResponse.json(
        { error: 'Módulo no encontrado' },
        { status: 404 }
      );
    }

    // Obtener progreso de todas las lecciones del módulo
    const lessonProgress = await prisma.userLessonProgress.findMany({
      where: {
        userId: user.id,
        lesson: {
          moduleId: moduleId
        }
      },
      include: {
        lesson: true
      }
    });

    // Calcular estadísticas del módulo
    const totalLessons = module.lessons.length;
    const completedLessons = lessonProgress.filter(p => p.completedAt !== null).length;
    const progressPercent = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

    // Calcular tiempo total gastado en el módulo
    const totalTimeSpent = lessonProgress.reduce((total, progress) => {
      return total + (progress.timeSpent || 0);
    }, 0);

    // Determinar lección actual (primera no completada o última si todas están completadas)
    const currentLessonIndex = lessonProgress.findIndex(p => p.completedAt === null);
    const actualCurrentIndex = currentLessonIndex === -1 ? totalLessons - 1 : currentLessonIndex;

    // Mapear progreso de lecciones individuales
    const lessonsWithProgress = module.lessons.map((lesson, index) => {
      const progress = lessonProgress.find(p => p.lesson.id === lesson.id);
      return {
        id: lesson.id,
        title: lesson.title,
        order: lesson.order,
        duration: lesson.duration,
        completed: !!progress?.completedAt,
        timeSpent: progress?.timeSpent || 0,
        completedAt: progress?.completedAt,
        isCurrent: index === actualCurrentIndex
      };
    });

    return NextResponse.json({
      moduleId: module.id,
      moduleTitle: module.title,
      moduleDescription: module.description,
      learningPathName: module.learningPath.name,
      totalLessons,
      completedLessons,
      progressPercent,
      totalTimeSpent,
      currentLessonIndex: actualCurrentIndex + 1,
      lessons: lessonsWithProgress,
      isCompleted: progressPercent === 100
    });
  } catch (error) {
    console.error('Error fetching module progress:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
