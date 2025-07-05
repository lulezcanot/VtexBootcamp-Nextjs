import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/utils/connect';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ nivel: string; modulo: string; leccion: string }> }
) {
  try {
    const { nivel, modulo, leccion } = await params;

    // Primero obtener la ruta de aprendizaje
    const learningPath = await prisma.learningPath.findFirst({
      where: {
        name: nivel
      }
    });

    if (!learningPath) {
      return NextResponse.json(
        { error: 'Ruta de aprendizaje no encontrada' },
        { status: 404 }
      );
    }

    // Obtener el módulo específico
    const module = await prisma.module.findFirst({
      where: {
        learningPathId: learningPath.id,
        title: {
          contains: modulo.replace(/-/g, ' '),
          mode: 'insensitive'
        }
      }
    });

    if (!module) {
      return NextResponse.json(
        { error: 'Módulo no encontrado' },
        { status: 404 }
      );
    }

    // Obtener todas las lecciones del módulo para navegación
    const allLessons = await prisma.lesson.findMany({
      where: {
        moduleId: module.id
      },
      orderBy: {
        order: 'asc'
      },
      select: {
        id: true,
        title: true,
        order: true
      }
    });

    // Determinar qué lección obtener basado en el parámetro
    let targetLesson;
    if (leccion.startsWith('leccion-')) {
      const lessonNumber = parseInt(leccion.replace('leccion-', ''));
      targetLesson = allLessons.find(l => l.order === lessonNumber);
    } else {
      // Buscar por título similar
      targetLesson = allLessons.find(l => 
        l.title.toLowerCase().includes(leccion.replace(/-/g, ' ').toLowerCase())
      );
    }

    if (!targetLesson) {
      return NextResponse.json(
        { error: 'Lección no encontrada' },
        { status: 404 }
      );
    }

    // Obtener el contenido completo de la lección
    const lessonContent = await prisma.lesson.findUnique({
      where: {
        id: targetLesson.id
      }
    });

    if (!lessonContent) {
      return NextResponse.json(
        { error: 'Contenido de lección no encontrado' },
        { status: 404 }
      );
    }

    // Determinar lección anterior y siguiente
    const currentIndex = allLessons.findIndex(l => l.id === targetLesson.id);
    const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
    const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;

    // Parsear el contenido JSON
    let parsedContent, parsedCodeExample, parsedResources;
    
    try {
      parsedContent = lessonContent.content ? JSON.parse(lessonContent.content) : null;
      parsedCodeExample = lessonContent.codeExample ? JSON.parse(lessonContent.codeExample) : null;
      parsedResources = lessonContent.resources ? JSON.parse(lessonContent.resources) : null;
    } catch (parseError) {
      console.error('Error parsing JSON content:', parseError);
    }

    const response = {
      id: lessonContent.id,
      title: lessonContent.title,
      duration: lessonContent.duration,
      moduleInfo: `Módulo ${module.order} de ${await getModuleCount(learningPath.id)}`,
      videoUrl: lessonContent.videoUrl,
      content: parsedContent,
      codeExample: parsedCodeExample,
      resources: parsedResources,
      prevLesson: prevLesson ? `leccion-${prevLesson.order}` : null,
      nextLesson: nextLesson ? `leccion-${nextLesson.order}` : null,
      module: {
        title: module.title,
        description: module.description
      }
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error fetching lesson:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

async function getModuleCount(learningPathId: string): Promise<number> {
  const count = await prisma.module.count({
    where: {
      learningPathId: learningPathId
    }
  });
  return count;
}
