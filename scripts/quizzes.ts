const { PrismaClient } = require("../lib/generated/prisma");

let quizzesPrisma: any;

const quizzes = [
  {
    title: "Introducción a VTEX CLI",
    description: "Quiz sobre los comandos fundamentales de VTEX CLI.",
    categoryId: "6837c3625cfdf7a9c99c9e3a"
  },
  {
    title: "VTEX Login y Autenticación",
    description: "Evaluación sobre el proceso de login en VTEX IO.",
    categoryId: "6837c3625cfdf7a9c99c9e3a"
  },
  {
    title: "Comprendiendo Workspaces en VTEX",
    description: "Cuestionario sobre la creación y manejo de workspaces.",
    categoryId: "6837c3625cfdf7a9c99c9e3a"
  },
  {
    title: "Primeros Pasos con VTEX IO",
    description: "Revisión de los conceptos base para comenzar en VTEX IO.",
    categoryId: "6837c3625cfdf7a9c99c9e3a"
  },
  {
    title: "Buenas Prácticas Básicas en VTEX",
    description: "Prueba tus conocimientos en buenas prácticas iniciales.",
    categoryId: "6837c3625cfdf7a9c99c9e3a"
  },
  {
    title: "PLP (Product List Pages)",
    description: "Evaluación sobre la implementación y personalización de PLPs.",
    categoryId: "6837c3625cfdf7a9c99c9e3b"
  },
  {
    title: "PDP (Product Detail Pages)",
    description: "Test sobre las páginas de detalle de producto en VTEX IO.",
    categoryId: "6837c3625cfdf7a9c99c9e3b"
  },
  {
    title: "Minicart v2: Lógica e Integración",
    description: "Conocimientos clave sobre el componente Minicart v2.",
    categoryId: "6837c3625cfdf7a9c99c9e3b"
  },
  {
    title: "Configuración de My Account",
    description: "Preguntas relacionadas al área de 'Mi cuenta' en VTEX.",
    categoryId: "6837c3625cfdf7a9c99c9e3b"
  },
  {
    title: "Construcción de Componentes Reutilizables",
    description: "Valida tus habilidades en componentes intermedios.",
    categoryId: "6837c3625cfdf7a9c99c9e3b"
  },
  {
    title: "Checkout Personalizado en VTEX",
    description: "Examen sobre cómo crear un flujo de checkout personalizado.",
    categoryId: "6837c3625cfdf7a9c99c9e3c"
  },
  {
    title: "Desarrollando Componentes Custom",
    description: "Quiz sobre la creación de componentes personalizados complejos.",
    categoryId: "6837c3625cfdf7a9c99c9e3c"
  },
  {
    title: "Uso Avanzado de Modales en VTEX",
    description: "Evaluación de integración avanzada de modales dinámicos.",
    categoryId: "6837c3625cfdf7a9c99c9e3c"
  },
  {
    title: "Integraciones con APIs Externas",
    description: "Preguntas sobre consumo de APIs externas en VTEX IO.",
    categoryId: "6837c3625cfdf7a9c99c9e3c"
  },
  {
    title: "Optimización de Performance en VTEX",
    description: "Test para evaluar tu comprensión sobre optimización en producción.",
    categoryId: "6837c3625cfdf7a9c99c9e3c"
  }
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