"use client";

import HomeCard from "@/components/quiz/HomeCard";
import { useGlobalContext } from "@/Context/globalContext";
import { ICategory } from "@/types/types";

export default function Home() {
  const {categories} = useGlobalContext();
  return (
    <div>
      <h1 className="text-4xl font-bold">Quizz catelog</h1>
      <div className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
        {categories.map((category: ICategory)=>(
          <HomeCard key={category.id} category={category}/>
        ))}
      </div>
    </div>
  );
}
