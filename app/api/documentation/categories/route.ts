import { NextResponse } from 'next/server';
import { PrismaClient } from '@/lib/generated/prisma';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const categories = await prisma.documentationCategory.findMany({
      include: {
        sections: {
          orderBy: {
            order: 'asc'
          }
        }
      },
      orderBy: {
        order: 'asc'
      }
    });

    return NextResponse.json(categories);
  } catch (error) {
    console.error('Error fetching documentation categories:', error);
    return NextResponse.json(
      { error: 'Error al obtener las categorías de documentación' },
      { status: 500 }
    );
  }
}
