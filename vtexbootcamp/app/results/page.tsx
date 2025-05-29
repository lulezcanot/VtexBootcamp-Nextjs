"use client"
import { Button } from '@/components/ui/button';
import { useGlobalContext } from '@/Context/globalContext';
import { play } from '@/utils/icons';
import { useRouter } from 'next/navigation'
import React from 'react'

function page() {
    const router = useRouter();
    const { quizResponses, selectedQuiz } = useGlobalContext();

    if(!quizResponses || quizResponses.length === 0) {
        return router.push("/");
    }

    const correctAnswers = quizResponses.filter(
        (res: { isCorrect: boolean }) => res.isCorrect
    ).length;

    const totalQuestions = quizResponses.length;
    const scorePercentage = (correctAnswers / totalQuestions) * 100;

    let message = "";

  if (scorePercentage < 25) {
    message = "Tienes que esforzarte más!";
  } else if (scorePercentage >= 25 && scorePercentage < 50) {
    message = "Lo estás consiguiendo. Sigue practicando.";
  } else if (scorePercentage >= 50 && scorePercentage < 75) {
    message = "¡Buen esfuerzo! Estás por encima de la media.";
  } else if (scorePercentage >= 75 && scorePercentage < 100) {
    message = "¡Buen trabajo! ¡Estás tan cerca de la perfección!";
  } else if (scorePercentage === 100) {
    message = "¡Excelente! Lo has hecho todo bien.";
  }

return (
    <div className="py-20 flex flex-col gap-4">
      <h1 className="text-4xl font-bold text-center">Resultados del Quiz</h1>

      <p className="text-2xl text-center mt-4">
        Has marcado <span className="font-bold">{correctAnswers}</span> de{" "}
        {""}
        <span className="font-bold text-3xl">{totalQuestions}</span> {""}
      </p>

      <p className="text-blue-400 font-bold text-4xl text-center">
        {scorePercentage.toFixed()}%
      </p>

      <p className="text-2xl text-center mt-2 font-semibold">{message}</p>

      <div className="flex justify-center mt-8">
        <Button
          variant={"green"}
          className="px-10 py-6 font-bold text-white text-xl rounded-xl"
          onClick={() => router.push("/quiz/setup/" + `${selectedQuiz.id}`)}
        >
          {play} Play Again
        </Button>
      </div>
    </div>
  );
}

export default page