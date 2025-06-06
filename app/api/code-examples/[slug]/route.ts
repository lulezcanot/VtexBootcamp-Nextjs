import { NextResponse } from 'next/server';
import { PrismaClient } from '@/lib/generated/prisma';

const prisma = new PrismaClient();

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    const codeExample = await prisma.codeExample.findUnique({
      where: {
        slug: slug
      }
    });

    if (!codeExample) {
      return NextResponse.json(
        { error: 'Ejemplo de código no encontrado' },
        { status: 404 }
      );
    }

    return NextResponse.json(codeExample);
  } catch (error) {
    console.error('Error fetching code example:', error);
    return NextResponse.json(
      { error: 'Error al obtener el ejemplo de código' },
      { status: 500 }
    );
  }
}
