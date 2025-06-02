"use client";

import Banner from "@/components/Componentes-Home/Banner";
import RecursosDocumentacion from "@/components/Componentes-Home/RecursosDocumentacion"
import { useGlobalContext } from "@/Context/globalContext";
import { ICategory } from "@/types/types";
import Image from "next/image";

export default function Home() {
  const {categories} = useGlobalContext();
  return (
    <div>
      <Banner/>
      <div className='flex flex-col justify-center items-center pt-10 pb-10'>
        <h1 className='text-xl md:text-4xl font-extrabold text-black mb-10 mt-6'>Quizzes</h1>
        <div className="flex flex-row gap-32 flex-wrap justify-center">
          {categories.map((category: ICategory) => (
            <div 
              key={category.id}
              className="flex flex-col justify-center items-center bg-gradient-to-br from-purple-300 to-purple-400 rounded-lg shadow-lg p-4 m-2 w-[462px] h-72 cursor-pointer hover:-translate-y-1 transition-transform duration-300 ease-in-out"
              onClick={() => window.location.href = `/categories/${category.id}`}
            >
              <div className="rounded-lg h-52 w-auto flex items-center justify-center">
                <Image
                  src={
                    category.image
                      ? category.image
                      : `/imagenes/image--${category.name
                          .toLowerCase()
                          .split(" ")
                          .join("-")}.png`
                  }
                  width={300}
                  height={200}
                  alt={category.name}
                  className="object-contain max-w-[200px]"
                />
              </div>
              <h2 className='text-xl font-bold text-white'>{category.name}</h2>
              <p className='text-white text-center'>{category.description}</p>
            </div>
          ))}
        </div>
      </div>
      <RecursosDocumentacion/>
    </div>
  );
}
