import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/utils/connect';

export async function GET(
  request: NextRequest,
  { params }: { params: { nivel: string } }
) {
  try {
    const { nivel } = params;

    // Obtener la ruta de aprendizaje con sus módulos
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
              },
              select: {
                id: true,
                title: true,
                duration: true,
                order: true
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

    return NextResponse.json(learningPath);
  } catch (error) {
    console.error('Error fetching learning path:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
