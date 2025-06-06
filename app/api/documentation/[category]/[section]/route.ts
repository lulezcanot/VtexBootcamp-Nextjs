import { NextResponse } from 'next/server';
import { PrismaClient } from '@/lib/generated/prisma';

const prisma = new PrismaClient();

export async function GET(
  request: Request,
  { params }: { params: Promise<{ category: string; section: string }> }
) {
  try {
    const { category, section } = await params;

    const documentationSection = await prisma.documentationSection.findFirst({
      where: {
        slug: section,
        category: {
          slug: category
        }
      },
      include: {
        category: true
      }
    });

    if (!documentationSection) {
      return NextResponse.json(
        { error: 'Sección de documentación no encontrada' },
        { status: 404 }
      );
    }

    return NextResponse.json(documentationSection);
  } catch (error) {
    console.error('Error fetching documentation section:', error);
    return NextResponse.json(
      { error: 'Error al obtener la sección de documentación' },
      { status: 500 }
    );
  }
}
