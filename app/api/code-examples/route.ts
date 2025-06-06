import { NextResponse } from 'next/server';
import { PrismaClient } from '@/lib/generated/prisma';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const codeExamples = await prisma.codeExample.findMany({
      orderBy: {
        name: 'asc'
      }
    });

    return NextResponse.json(codeExamples);
  } catch (error) {
    console.error('Error fetching code examples:', error);
    return NextResponse.json(
      { error: 'Error al obtener los ejemplos de código' },
      { status: 500 }
    );
  }
}
