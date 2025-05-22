"use client";

import Banner from "@/components/Componentes-Home/Banner";
import RutaAprendizaje from "@/components/Componentes-Home/RutaAprendizaje";
import RecursosDocumentacion from "@/components/Componentes-Home/RecursosDocumentacion"
import HomeCard from "@/components/quiz/HomeCard";
import { useGlobalContext } from "@/Context/globalContext";
import { ICategory } from "@/types/types";

export default function Home() {
  const {categories} = useGlobalContext();
  return (
    <div>
      <Banner/>
      <RutaAprendizaje/>
      <RecursosDocumentacion/>
      <div className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
        {categories.map((category: ICategory)=>(
          <HomeCard key={category.id} category={category}/>
        ))}
      </div>
    </div>
  );
}
