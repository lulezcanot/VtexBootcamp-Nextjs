let categsPrisma: any;

async function addCategories() {
  const { PrismaClient } = require("../lib/generated/prisma");
  categsPrisma = new PrismaClient();

  const categories = [
    {
      name: "VTEX IO CLI",
      description:
        "Instalación y uso de la CLI de VTEX IO para login, manejo de workspaces, linkeo y publicación de apps.",
    },
    {
      name: "Componentes Básicos",
      description:
        "Uso de componentes nativos como Flex Layout, RichText, Store Image, Slider Layout, entre otros.",
    },
    {
      name: "Estilos CSS Handles",
      description:
        "Aplicación de estilos personalizados a través de CSS Handles en componentes de VTEX IO.",
    },
    {
      name: "PLP",
      description:
        "Configuración y personalización de la página de listado de productos (Product List Page) en Store Framework.",
    },
    {
      name: "PDP",
      description:
        "Desarrollo y personalización de la página de producto (Product Detail Page) utilizando bloques y props.",
    },
    {
      name: "My Account Page",
      description:
        "Modificación y extensión de la página de cuenta del usuario, incluyendo secciones personalizadas.",
    },
    {
      name: "Checkout",
      description:
        "Introducción a la personalización del checkout de VTEX: componentes, validaciones y comportamiento.",
    },
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
