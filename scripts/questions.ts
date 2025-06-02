const questions = require("../data/preguntas.js");

let questionsPrisma: any;

async function seedQuestions() {
  const { PrismaClient } = require("../lib/generated/prisma");

  questionsPrisma = new PrismaClient();

  console.log("Seeding questions...");

  for (const question of questions) {
    const createdQuestion = await questionsPrisma.question.create({
      data: {
        text: question.text,
        quizId: "6837c57c310b0e5517df27b9",
        options: {
          create: question.options,
        },
        difficulty: question.difficulty,
      },
    });

    console.log(`Created question: ${createdQuestion.text}`);
  }
  console.log("Seeding questions completed.");
}

seedQuestions()
  .catch((e) => {
    console.log("Error seeding questions: ", e);
  })
  .finally(async () => {
    await questionsPrisma.$disconnect();
  });