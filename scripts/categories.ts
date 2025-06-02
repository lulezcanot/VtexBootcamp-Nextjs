let categsPrisma: any;

async function addCategories() {
  const { PrismaClient } = require("../lib/generated/prisma");
  categsPrisma = new PrismaClient();

  const categories = [
    {
      name: "Básico",
      description:
        "Vtex CLI, Vtex Loggin, Vtex Workspace...",
    },
    {
      name: "Intermedio",
      description:
        "Pdp, Plp, Minicartv2, My Acount...",
    },
    {
      name: "Avanzado",
      description:
        "Checkout, Componentes Custom, Modales...",
    }
  ];

  console.log("Adding Categories...");

  for (const category of categories) {
    await categsPrisma.category.create({
      data: category,
    });
  }
  console.log("Categories Added Successfully");
}

addCategories()
  .catch((e) => {
    console.log("Error Adding Categories: ", e);
  })
  .finally(async () => {
    if (categsPrisma) {
      await categsPrisma.$disconnect();
    }
  });
