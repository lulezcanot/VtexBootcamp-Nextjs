import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import prisma from '@/utils/connect';

// Marcar lección como completada
export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { error: 'Usuario no autenticado' },
        { status: 401 }
      );
    }

    const { lessonId, timeSpent } = await request.json();

    if (!lessonId) {
      return NextResponse.json(
        { error: 'ID de lección requerido' },
        { status: 400 }
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

    // Verificar si la lección existe
    const lesson = await prisma.lesson.findUnique({
      where: {
        id: lessonId
      },
      include: {
        module: {
          include: {
            learningPath: true
          }
        }
      }
    });

    if (!lesson) {
      return NextResponse.json(
        { error: 'Lección no encontrada' },
        { status: 404 }
      );
    }

    // Crear o actualizar el progreso de la lección
    const lessonProgress = await prisma.userLessonProgress.upsert({
      where: {
        userId_lessonId: {
          userId: user.id,
          lessonId: lessonId
        }
      },
      update: {
        completedAt: new Date(),
        timeSpent: timeSpent || 0
      },
      create: {
        userId: user.id,
        lessonId: lessonId,
        completedAt: new Date(),
        timeSpent: timeSpent || 0
      }
    });

    // Actualizar progreso del módulo
    await updateModuleProgress(user.id, lesson.module.id);

    // Actualizar progreso de la ruta de aprendizaje
    await updateLearningPathProgress(user.id, lesson.module.learningPath.id);

    // Verificar si se desbloqueó un nuevo nivel
    const unlockedLevel = await checkForUnlockedLevel(user.id, lesson.module.learningPath.name);

    return NextResponse.json({
      success: true,
      lessonProgress,
      unlockedLevel
    });
  } catch (error) {
    console.error('Error completing lesson:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

// Actualizar tiempo gastado en lección
export async function PUT(request: NextRequest) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { error: 'Usuario no autenticado' },
        { status: 401 }
      );
    }

    const { lessonId, timeSpent } = await request.json();

    if (!lessonId || timeSpent === undefined) {
      return NextResponse.json(
        { error: 'ID de lección y tiempo requeridos' },
        { status: 400 }
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

    // Crear o actualizar el progreso de la lección
    const lessonProgress = await prisma.userLessonProgress.upsert({
      where: {
        userId_lessonId: {
          userId: user.id,
          lessonId: lessonId
        }
      },
      update: {
        timeSpent: timeSpent
      },
      create: {
        userId: user.id,
        lessonId: lessonId,
        timeSpent: timeSpent
      }
    });

    return NextResponse.json({
      success: true,
      lessonProgress
    });
  } catch (error) {
    console.error('Error updating lesson time:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

async function updateModuleProgress(userId: string, moduleId: string) {
  try {
    // Obtener todas las lecciones del módulo
    const totalLessons = await prisma.lesson.count({
      where: {
        moduleId: moduleId
      }
    });

    // Obtener lecciones completadas del módulo
    const completedLessons = await prisma.userLessonProgress.count({
      where: {
        userId: userId,
        completedAt: {
          not: null
        },
        lesson: {
          moduleId: moduleId
        }
      }
    });

    const progressPercent = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;
    const isCompleted = progressPercent === 100;

    // Actualizar progreso del módulo
    await prisma.userModuleProgress.upsert({
      where: {
        userId_moduleId: {
          userId: userId,
          moduleId: moduleId
        }
      },
      update: {
        progressPercent: progressPercent,
        completedAt: isCompleted ? new Date() : null
      },
      create: {
        userId: userId,
        moduleId: moduleId,
        progressPercent: progressPercent,
        completedAt: isCompleted ? new Date() : null
      }
    });
  } catch (error) {
    console.error('Error updating module progress:', error);
  }
}

async function updateLearningPathProgress(userId: string, learningPathId: string) {
  try {
    // Obtener todas las lecciones de la ruta de aprendizaje
    const totalLessons = await prisma.lesson.count({
      where: {
        module: {
          learningPathId: learningPathId
        }
      }
    });

    // Obtener lecciones completadas de la ruta de aprendizaje
    const completedLessons = await prisma.userLessonProgress.count({
      where: {
        userId: userId,
        completedAt: {
          not: null
        },
        lesson: {
          module: {
            learningPathId: learningPathId
          }
        }
      }
    });

    const progressPercent = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;
    const isCompleted = progressPercent === 100;

    // Actualizar progreso de la ruta de aprendizaje
    await prisma.userLearningProgress.upsert({
      where: {
        userId_learningPathId: {
          userId: userId,
          learningPathId: learningPathId
        }
      },
      update: {
        progressPercent: progressPercent,
        completedAt: isCompleted ? new Date() : null,
        lastAccessedAt: new Date()
      },
      create: {
        userId: userId,
        learningPathId: learningPathId,
        progressPercent: progressPercent,
        completedAt: isCompleted ? new Date() : null
      }
    });
  } catch (error) {
    console.error('Error updating learning path progress:', error);
  }
}

async function checkForUnlockedLevel(userId: string, currentLevelName: string): Promise<string | null> {
  try {
    // Si completó principiante al 70%, desbloquear intermedio
    if (currentLevelName === 'principiante') {
      const progress = await calculateLevelProgress(userId, 'principiante');
      if (progress >= 70) {
        return 'intermedio';
      }
    }

    // Si completó intermedio al 70%, desbloquear avanzado
    if (currentLevelName === 'intermedio') {
      const progress = await calculateLevelProgress(userId, 'intermedio');
      if (progress >= 70) {
        return 'avanzado';
      }
    }

    return null;
  } catch (error) {
    console.error('Error checking unlocked level:', error);
    return null;
  }
}

async function calculateLevelProgress(userId: string, levelName: string): Promise<number> {
  try {
    const learningPath = await prisma.learningPath.findFirst({
      where: {
        name: levelName
      },
      include: {
        modules: {
          include: {
            lessons: true
          }
        }
      }
    });

    if (!learningPath) {
      return 0;
    }

    const totalLessons = learningPath.modules.reduce((total, module) => {
      return total + module.lessons.length;
    }, 0);

    if (totalLessons === 0) {
      return 0;
    }

    const completedLessons = await prisma.userLessonProgress.count({
      where: {
        userId: userId,
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

    return Math.round((completedLessons / totalLessons) * 100);
  } catch (error) {
    console.error('Error calculating progress:', error);
    return 0;
  }
}
