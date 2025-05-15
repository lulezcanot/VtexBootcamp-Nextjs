const { PrismaClient } = require("../lib/generated/prisma");

let quizzesPrisma: any;

const quizzes = [
  {
    title: "Computer Science Basics",
    description: "A quiz about fundamental computer science concepts.",
    categoryId: "682437ffb873211449719762", // Replace with the actual category ID
  },
  {
    title: "Programming Fundamentals",
    description: "Test your knowledge of basic programming concepts.",
    categoryId: "682437ffb873211449719763",
  },
  {
    title: "Data Structures",
    description: "Assess your understanding of data structures.",
    categoryId: "68243800b873211449719764",
  },
  {
    title: "Physics",
    description: "Test your knowledge of physics",
    categoryId: "68243800b873211449719765",
  },
  {
    title: "Biology",
    description: "Test your knowledge of physics",
    categoryId: "68243800b873211449719766",
  },
  {
    title: "Chemistry",
    description: "Test your knowledge of physics",
    categoryId: "68243801b873211449719767",
  },
    {
    title: "Prueba",
    description: "Test checkout",
    categoryId: "68243801b873211449719768",
  },
];

async function seedQuizzes() {
  quizzesPrisma = new PrismaClient();

  console.log("Seeding quizzes...");

  for (const quiz of quizzes) {
    const craetedQuiz = await quizzesPrisma.quiz.create({
      data: quiz,
    });

    console.log("Created quiz: ", `${craetedQuiz.title}`);
  }

  console.log("Seeding quizzes completed.");
}

seedQuizzes()
  .catch((e) => {
    console.log("Error seeding quizzes: ", e);
  })
  .finally(async () => {
    await quizzesPrisma.$disconnect();
  });