import UserStats from '@/components/UserStats';
import prisma from '@/utils/connect';
import { auth } from '@clerk/nextjs/server'
import { error } from 'console';
import React from 'react'


async function page() {

  const { userId } = await auth();

  if(!userId) {
    return { error: "You need to be logged in to view this page" }
  }

  const user = await prisma.user.findUnique({
    where: {
      clerkId: userId,
    },
    include: {
      categoryStats: {
        include: {
          category: true,
        },
      },
    },
  });

  console.log("user data", user)

  return (
    <div>
      <UserStats userStats={user}/>
    </div>
  )
}

export default page