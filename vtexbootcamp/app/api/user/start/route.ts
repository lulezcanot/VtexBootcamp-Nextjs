import { auth } from "@clerk/nextjs/server";
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { userId: clerkId } = await auth();
  const { categoryId } = await req.json();

  if (!clerkId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const user = await prisma?.user.findUnique({
        where: { clerkId },
    });

    if(!user){
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const userId = user.id;

    let stat = await prisma.categoryStat.findUnique({
        where: {
            userId_categoryId: {
                categoryId,
                userId,
            },
        },
    });

    if(!stat) {
        stat = await prisma.categoryStat.create({
            data: {
                userId,
                categoryId,
                attempts: 1,
                lastAttempt: new Date(),
            },
        });
    } else {
            await prisma.categoryStat.update({
                where: {
                    userId_categoryId: {
                        userId,
                        categoryId,
                    },
                },                    
                data: {
                        attempts: stat.attempts + 1,
                        lastAttempt: new Date(),
                    },
            });
        }
  } catch (error) {
    console.log("Error starting quiz: ", error);
    return NextResponse.json({ error: "Error starting quiz" }, { status: 500 });
  }
}
