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

    // Verificar acceso según el nivel
    const hasAccess = await checkLevelAccess(user.id, nivel);
    const progressToUnlock = await getProgressToUnlock(user.id, nivel);

    return NextResponse.json({
      hasAccess,
      progressToUnlock,
      message: hasAccess ? 'Acceso permitido' : 'Primero empieza con la ruta principiante'
    });
  } catch (error) {
    console.error('Error checking access:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

async function checkLevelAccess(userId: string, nivel: string): Promise<boolean> {
  // Principiante siempre está disponible
  if (nivel === 'principiante') {
    return true;
  }

  // Para intermedio, necesita 70% en principiante
  if (nivel === 'intermedio') {
    const principianteProgress = await calculateLevelProgress(userId, 'principiante');
    return principianteProgress >= 70;
  }

  // Para avanzado, necesita 70% en intermedio
  if (nivel === 'avanzado') {
    const intermedioProgress = await calculateLevelProgress(userId, 'intermedio');
    return intermedioProgress >= 70;
  }

  return false;
}

async function calculateLevelProgress(userId: string, levelName: string): Promise<number> {
  try {
    // Obtener la ruta de aprendizaje
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

    // Contar total de lecciones
    const totalLessons = learningPath.modules.reduce((total, module) => {
      return total + module.lessons.length;
    }, 0);

    if (totalLessons === 0) {
      return 0;
    }

    // Contar lecciones completadas
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

async function getProgressToUnlock(userId: string, nivel: string): Promise<number | null> {
  if (nivel === 'principiante') {
    return null; // Siempre disponible
  }

  if (nivel === 'intermedio') {
    const progress = await calculateLevelProgress(userId, 'principiante');
    return Math.max(0, 70 - progress);
  }

  if (nivel === 'avanzado') {
    const progress = await calculateLevelProgress(userId, 'intermedio');
    return Math.max(0, 70 - progress);
  }

  return null;
}
