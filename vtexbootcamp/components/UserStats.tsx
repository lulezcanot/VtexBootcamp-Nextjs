"use client";
import React from "react";
import { useUser } from "@clerk/nextjs";
import Loader from "./Loader";
import Image from "next/image";

function UserStats({ userStats }: any) {
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return <Loader />;
  }

  const recentAttemptDate = userStats?.categoryStats.reduce((acc:any, curr:any)=>{
    const currentDate = new Date(curr.lastAttempt);
    return currentDate > acc ? currentDate : acc;
  },
  new Date(0)
)

  return (
    <div className="flex flex-col gap-4">
      <div className="h-[15rem] px-8 flex items-center justify-center border-2 rounded-xl shadow-[0_.3rem_0_0_rgba(0,0,0,0.1)]">
        <Image
          src={user?.imageUrl || "/user.png"}
          alt="Profile Image"
          width={200}
          height={200}
          className="rounded-full border-2 shadow-[0_.3rem_0_0_rgba(0,0,0,0.1)]"
        />
      </div>

      <div className="mt-4">
        <h1 className="font-bold text-2xl">Overview</h1>
        <p className="text-muted-foreground">
          A summary of your recent activity and performance.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6 font-semibold">
        <div className="py-4 px-4 flex flex-col gap-1 border-2 rounded-lg shadow-[0_.3rem_0_0_rgba(0,0,0,0.1)]">
          <h2 className="font-bold text-xl">{user?.firstName}</h2>
          <p className="text-gray-400 font-semibold">Recent Attempt</p>
          <p className="text-sm text-gray-400 font-semibold">
            {recentAttemptDate?.toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserStats;
