const { PrismaClient } = require('../lib/generated/prisma');

const prisma = new PrismaClient();

async function seedLearningPaths() {
  console.log('🌱 Seeding learning paths...');

  try {
    // Limpiar datos existentes
    await prisma.userLessonProgress.deleteMany();
    await prisma.userModuleProgress.deleteMany();
    await prisma.userLearningProgress.deleteMany();
    await prisma.lesson.deleteMany();
    await prisma.module.deleteMany();
    await prisma.learningPath.deleteMany();

    // Crear ruta de aprendizaje PRINCIPIANTE
    const principiante = await prisma.learningPath.create({
      data: {
        name: 'principiante',
        title: 'Principiante',
        description: 'Fundamentos de Vtex IO, Vtex CLI, Vtex Init & Link',
        image: '/imagenes/image--básico.png',
        order: 1,
        modules: {
          create: [
            {
              title: 'Fundamentos de Vtex IO',
              description: 'Conoce los conceptos básicos, arquitectura y componentes principales de VTEX IO',
              duration: '2 horas',
              order: 1,
              lessons: {
                create: [
                  {
                    title: '¿Qué es VTEX IO?',
                    content: JSON.stringify({
                      sections: [
                        {
                          id: 'introduccion',
                          type: 'heading',
                          title: 'Introducción a VTEX IO',
                          content: 'VTEX IO es una plataforma de desarrollo serverless que permite crear y gestionar aplicaciones de comercio electrónico de manera eficiente.'
                        }
                      ]
                    }),
                    videoUrl: 'https://www.youtube.com/embed/bXjb1ApVDWk',
                    codeExample: JSON.stringify({
                      language: 'json',
                      code: '{"vendor": "vtex", "name": "store-theme"}',
                      description: 'Ejemplo básico'
                    }),
                    resources: JSON.stringify({
                      documentation: [
                        { title: 'Guía oficial de VTEX IO', url: 'https://developers.vtex.com/docs/guides/vtex-io-documentation-what-is-vtex-io', icon: '📖' }
                      ],
                      videos: [],
                      links: []
                    }),
                    duration: '45 minutos',
                    order: 1
                  }
                ]
              }
            },
            {
              title: 'Vtex CLI',
              description: 'Aprende a usar la interfaz de línea de comandos de VTEX',
              duration: '1.5 horas',
              order: 2,
              lessons: {
                create: [
                  {
                    title: 'Instalación de VTEX CLI',
                    content: JSON.stringify({
                      sections: [
                        {
                          id: 'instalacion',
                          type: 'heading',
                          title: 'Instalación de VTEX CLI',
                          content: 'VTEX CLI se instala globalmente usando npm.'
                        }
                      ]
                    }),
                    codeExample: JSON.stringify({
                      language: 'bash',
                      code: 'npm install -g @vtex/cli',
                      description: 'Comando de instalación'
                    }),
                    resources: JSON.stringify({
                      documentation: [
                        { title: 'Instalación de CLI', url: 'https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-installation-and-command-reference', icon: '📖' }
                      ],
                      videos: [],
                      links: []
                    }),
                    duration: '30 minutos',
                    order: 1
                  }
                ]
              }
            },
            {
              title: 'Vtex Init & Link',
              description: 'Domina los comandos vtex init y vtex link',
              duration: '2 horas',
              order: 3,
              lessons: {
                create: [
                  {
                    title: 'Comando vtex init',
                    content: JSON.stringify({
                      sections: [
                        {
                          id: 'init-intro',
                          type: 'heading',
                          title: 'Comando vtex init',
                          content: 'El comando vtex init inicializa un nuevo proyecto VTEX IO.'
                        }
                      ]
                    }),
                    codeExample: JSON.stringify({
                      language: 'bash',
                      code: 'vtex init',
                      description: 'Inicializar proyecto'
                    }),
                    resources: JSON.stringify({
                      documentation: [
                        { title: 'Guía de vtex init', url: 'https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-command-reference', icon: '📖' }
                      ],
                      videos: [],
                      links: []
                    }),
                    duration: '40 minutos',
                    order: 1
                  }
                ]
              }
            }
          ]
        }
      }
    });

    // Crear ruta de aprendizaje INTERMEDIO
    const intermedio = await prisma.learningPath.create({
      data: {
        name: 'intermedio',
        title: 'Intermedio',
        description: 'PLP, PDP, Minicartv2, My account',
        image: '/imagenes/image--intermedio.png',
        order: 2,
        modules: {
          create: [
            {
              title: 'PLP (Product List Page)',
              description: 'Desarrolla páginas de listado de productos',
              duration: '3 horas',
              order: 1,
              lessons: {
                create: [
                  {
                    title: 'Introducción a PLP',
                    content: JSON.stringify({
                      sections: [
                        {
                          id: 'que-es-plp',
                          type: 'heading',
                          title: '¿Qué es una Product List Page?',
                          content: 'La PLP es donde se muestran múltiples productos.'
                        }
                      ]
                    }),
                    codeExample: JSON.stringify({
                      language: 'json',
                      code: '{"store.search": {"blocks": ["search-result-layout"]}}',
                      description: 'Estructura básica de PLP'
                    }),
                    resources: JSON.stringify({
                      documentation: [
                        { title: 'Guía de PLP', url: 'https://developers.vtex.com/docs/guides/vtex-io-documentation-building-a-product-list-page', icon: '📖' }
                      ],
                      videos: [],
                      links: []
                    }),
                    duration: '45 minutos',
                    order: 1
                  }
                ]
              }
            },
            {
              title: 'PDP (Product Detail Page)',
              description: 'Crea páginas de detalle de producto',
              duration: '3.5 horas',
              order: 2,
              lessons: {
                create: [
                  {
                    title: 'Introducción a PDP',
                    content: JSON.stringify({
                      sections: [
                        {
                          id: 'que-es-pdp',
                          type: 'heading',
                          title: '¿Qué es una Product Detail Page?',
                          content: 'La PDP muestra información detallada de un producto.'
                        }
                      ]
                    }),
                    codeExample: JSON.stringify({
                      language: 'json',
                      code: '{"store.product": {"children": ["flex-layout.row#product-main"]}}',
                      description: 'Estructura básica de PDP'
                    }),
                    resources: JSON.stringify({
                      documentation: [
                        { title: 'Guía de PDP', url: 'https://developers.vtex.com/docs/guides/vtex-io-documentation-building-a-product-details-page', icon: '📖' }
                      ],
                      videos: [],
                      links: []
                    }),
                    duration: '50 minutos',
                    order: 1
                  }
                ]
              }
            },
            {
              title: 'Minicartv2',
              description: 'Implementa el componente Minicart v2',
              duration: '2.5 horas',
              order: 3,
              lessons: {
                create: [
                  {
                    title: 'Introducción a Minicart v2',
                    content: JSON.stringify({
                      sections: [
                        {
                          id: 'que-es-minicart',
                          type: 'heading',
                          title: '¿Qué es Minicart v2?',
                          content: 'Minicart v2 es la versión mejorada del carrito de compras.'
                        }
                      ]
                    }),
                    codeExample: JSON.stringify({
                      language: 'json',
                      code: '{"minicart.v2": {"children": ["minicart-base-content"]}}',
                      description: 'Configuración básica de Minicart v2'
                    }),
                    resources: JSON.stringify({
                      documentation: [
                        { title: 'Minicart v2 Documentation', url: 'https://developers.vtex.com/docs/apps/vtex.minicart', icon: '📖' }
                      ],
                      videos: [],
                      links: []
                    }),
                    duration: '40 minutos',
                    order: 1
                  }
                ]
              }
            },
            {
              title: 'My Account',
              description: 'Desarrolla la sección de cuenta de usuario',
              duration: '4 horas',
              order: 4,
              lessons: {
                create: [
                  {
                    title: 'Introducción a My Account',
                    content: JSON.stringify({
                      sections: [
                        {
                          id: 'que-es-my-account',
                          type: 'heading',
                          title: '¿Qué es My Account?',
                          content: 'My Account es donde los usuarios gestionan su información.'
                        }
                      ]
                    }),
                    codeExample: JSON.stringify({
                      language: 'json',
                      code: '{"store.account": {"children": ["flex-layout.row#account-content"]}}',
                      description: 'Estructura básica de My Account'
                    }),
                    resources: JSON.stringify({
                      documentation: [
                        { title: 'My Account Documentation', url: 'https://developers.vtex.com/docs/apps/vtex.my-account', icon: '📖' }
                      ],
                      videos: [],
                      links: []
                    }),
                    duration: '45 minutos',
                    order: 1
                  }
                ]
              }
            }
          ]
        }
      }
    });

    // Crear ruta de aprendizaje AVANZADO
    const avanzado = await prisma.learningPath.create({
      data: {
        name: 'avanzado',
        title: 'Avanzado',
        description: 'Checkout, Componentes custom, Mails',
        image: '/imagenes/image--avanzado.png',
        order: 3,
        modules: {
          create: [
            {
              title: 'Checkout',
              description: 'Personaliza y optimiza el proceso de checkout',
              duration: '4 horas',
              order: 1,
              lessons: {
                create: [
                  {
                    title: 'Introducción al Checkout',
                    content: JSON.stringify({
                      sections: [
                        {
                          id: 'que-es-checkout',
                          type: 'heading',
                          title: '¿Qué es el Checkout?',
                          content: 'El Checkout es el proceso final donde el usuario completa su compra.'
                        }
                      ]
                    }),
                    codeExample: JSON.stringify({
                      language: 'javascript',
                      code: 'window.addEventListener("load", function() { /* personalización */ });',
                      description: 'Ejemplo de personalización del checkout'
                    }),
                    resources: JSON.stringify({
                      documentation: [
                        { title: 'Checkout Documentation', url: 'https://developers.vtex.com/docs/guides/checkout-overview', icon: '📖' }
                      ],
                      videos: [],
                      links: []
                    }),
                    duration: '60 minutos',
                    order: 1
                  }
                ]
              }
            },
            {
              title: 'Componentes Custom',
              description: 'Desarrolla componentes personalizados desde cero',
              duration: '5 horas',
              order: 2,
              lessons: {
                create: [
                  {
                    title: 'Introducción a Componentes Custom',
                    content: JSON.stringify({
                      sections: [
                        {
                          id: 'que-son-componentes-custom',
                          type: 'heading',
                          title: '¿Qué son los Componentes Custom?',
                          content: 'Los componentes custom son componentes React personalizados.'
                        }
                      ]
                    }),
                    codeExample: JSON.stringify({
                      language: 'typescript',
                      code: 'import React from "react"; const CustomComponent = () => { return <div>Custom</div>; };',
                      description: 'Ejemplo básico de componente custom'
                    }),
                    resources: JSON.stringify({
                      documentation: [
                        { title: 'Developing Apps', url: 'https://developers.vtex.com/docs/guides/vtex-io-documentation-developing-an-app', icon: '📖' }
                      ],
                      videos: [],
                      links: []
                    }),
                    duration: '75 minutos',
                    order: 1
                  }
                ]
              }
            },
            {
              title: 'Mails',
              description: 'Crea y personaliza templates de email',
              duration: '3 horas',
              order: 3,
              lessons: {
                create: [
                  {
                    title: 'Introducción a Templates de Email',
                    content: JSON.stringify({
                      sections: [
                        {
                          id: 'que-son-mail-templates',
                          type: 'heading',
                          title: '¿Qué son los Templates de Email?',
                          content: 'Los templates de email son plantillas HTML para emails transaccionales.'
                        }
                      ]
                    }),
                    codeExample: JSON.stringify({
                      language: 'html',
                      code: '<!DOCTYPE html><html><head><title>Email</title></head><body><h1>Hola</h1></body></html>',
                      description: 'Ejemplo de template de email'
                    }),
                    resources: JSON.stringify({
                      documentation: [
                        { title: 'Message Center', url: 'https://help.vtex.com/en/tutorial/understanding-the-message-center--tutorials_84', icon: '📖' }
                      ],
                      videos: [],
                      links: []
                    }),
                    duration: '45 minutos',
                    order: 1
                  }
                ]
              }
            }
          ]
        }
      }
    });

    console.log('✅ Learning paths seeded successfully!');
    console.log(`Created learning paths:`);
    console.log(`- ${principiante.title}`);
    console.log(`- ${intermedio.title}`);
    console.log(`- ${avanzado.title}`);

  } catch (error) {
    console.error('❌ Error seeding learning paths:', error);
    throw error;
  }
}

async function main() {
  try {
    await seedLearningPaths();
  } catch (error) {
    console.error(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

if (require.main === module) {
  main();
}

module.exports = { seedLearningPaths };
