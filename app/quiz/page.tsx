"use client"
import { Button } from '@/components/ui/button';
import { useGlobalContext } from '@/context/globalContext';
import { IOption, IQuestion, IResponse } from '@/types/types';
import { flag, next } from '@/utils/icons';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import toast from 'react-hot-toast';

function page() {
    const {selectedQuiz, quizSetup, setQuizSetup, setQuizResponses} = useGlobalContext();

    const router = useRouter();

    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [activeQuestion, setActiveQuestion] = React.useState(null) as any;
    const [responses, setResponses] = React.useState<IResponse[]>([]);
    const [shuffleOptions, setShuffledOptions] = React.useState<IOption[]>([]);
    const [shuffledQuestions, setShuffledQuestions] = React.useState<IQuestion[]>([]);


    if(!selectedQuiz){
        router.push("/");
        return null;
    }

    useEffect(() => {
      const filteredQuestions = selectedQuiz.questions
      .filter((q: { difficulty : string }) => {
            return (
                !quizSetup?.difficulty ||
                quizSetup?.difficulty === "unspecified" ||
                q.difficulty === quizSetup?.difficulty
            );
        })
        .slice(0, quizSetup?.questionCount);

        setShuffledQuestions(shuffleArray([...filteredQuestions]))
    }, [selectedQuiz, quizSetup])
    
    useEffect(()=>{
        if(shuffledQuestions[currentIndex]) {
            setShuffledOptions(
                shuffleArray([...shuffledQuestions[currentIndex].options])
            );
        }
    }, [shuffledQuestions, currentIndex]);



    const shuffleArray = (array: any[]) => {
        for(let i = array.length - 1; i > 0; --i) {
            const j = Math.floor(Math.random() * (i + 1));

            [array[i], array[j]] = [array[j], array[i]];
        }

        return array;
    };

    const handleActiveQuestion = (option: any) => {
        if(!shuffledQuestions[currentIndex]) return;

        const response = {
            questionId: shuffledQuestions[currentIndex].id,
            optionId: option.id,
            isCorrect: option.isCorret,
        };

        setResponses((prev) => {
            const existingIndex = prev.findIndex((res)=> {
                return res.questionId === response.questionId;
            });

            if(existingIndex !== -1){
                const updatedResponses = [...prev];
                updatedResponses[existingIndex] = response;

                return updatedResponses;
            } else {
                return [...prev, response];
            }
        });

        setActiveQuestion(option);
    };
    
    const handleNextQuestion = () => {
        if (currentIndex < shuffledQuestions.length - 1){
            setCurrentIndex((prev) => prev + 1);

            setActiveQuestion(null);
        } else {
            router.push("/results")
        }
    };

    const handleFinishQuiz = async () => {
        setQuizResponses(responses);

        const score = responses.filter((res) => res.isCorrect).length;

        try{
            await axios.post("/api/user/quiz/finish", {
                categoryId: selectedQuiz.categoryId,
                quizId: selectedQuiz.id,
                score,
                responses,
            });
        } catch (error) {
            console.log("Error finish quiz:", error)
        }

        setQuizSetup({
            questionsCount: 1,
            category: null,
            difficulty: null,
        });
        router.push("/results")
    }

    console.log("Selected Quiz: ", selectedQuiz)
    console.log("Shuffled Questions: ", shuffledQuestions)
  return (
    <div className='py-[2.5rem]'>
        {shuffledQuestions[currentIndex] ? (
            <div className='space-y-6 flex flex-col items-center justify-center'>
                <div className='flex flex-col gap-6'>
                    <p className='py-3 px-6 border-2 text-xl font-bold self-end rounded-lg shadow-[0_.3rem_0_0_rgba(0,0,0,0.1)]'>
                    Preguntas: <span>{currentIndex + 1}</span> /{""}
                    <span className='text-3xl'>{shuffledQuestions.length}</span>
                </p>
                <h1 className='mt-4 px-10 text-5xl font-bold text-center'>{shuffledQuestions[currentIndex].text}</h1>
                </div>

                <div className='pt-14 space-y-4 max-w-[800px]'>
                    {shuffleOptions.map((option, index) => (
                        <button key={index}
                        className={`relative group py-3 w-full text-center border-2 text-lg font-semibold rounded-lg
                    hover:bg-[rgba(0,0,0,0.03)] transition-all duration-200 ease-in-out
                    ${option.text === activeQuestion?.text 
                        ? "bg-green-100 border-green-500 shadow-[0_.3rem_0_0_#51bf22] hover:bg-green-100 hover:border-green-500" 
                        : "shadow-[0_.3rem_0_0_rgba(0,0,0,0.1)]"
                    }
                    `}
                    onClick={()=> handleActiveQuestion(option as IOption)}
                        >{option.text}</button>
                    ))}
                </div>
            </div>
        ):( 
            <p className='text-lg'>No se han encontrado preguntas para este cuestionario</p>
        )}
        <div className="w-full py-[4rem] border-t-2 flex items-center justify-center mt-8">
            <Button 
            className='px-10 py-6 font-bold text-white text-xl rounded-xl'
            variant={"green"}
            onClick={()=>{
                if(currentIndex < shuffledQuestions.length - 1){
                    if(activeQuestion?.id){
                        handleNextQuestion()
                    }else{
                        const sound = new Audio("/spunds/error.mp3");
                        sound.play();
                        toast.error("Seleccione una opción para continuar");
                    }
                } else {
                    if(activeQuestion?.id){
                        handleFinishQuiz();
                    }else{
                        const sound = new Audio("/spunds/error.mp3");
                        sound.play();
                        toast.error("Seleccione una opción para continuar");
                    }
                }
            }}
            >
                {currentIndex < shuffledQuestions.length - 1 ? (
                    <span className='flex items-center gap-2'>{next} Siguiente</span>
                    ) : (
                    <span className='flex items-center gap-2'>{flag} Finalizar</span>
                    )}
            </Button>
        </div>
    </div>
  )
}

export default page
