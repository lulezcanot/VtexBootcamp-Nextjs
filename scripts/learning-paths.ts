import { PrismaClient } from '../lib/generated/prisma';

const prisma = new PrismaClient();

async function seedLearningPaths() {
  console.log('🌱 Seeding learning paths...');

  try {
    // Crear rutas de aprendizaje
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
              title: 'Introducción a VTEX IO',
              description: 'Conoce los conceptos básicos y la arquitectura de VTEX IO',
              duration: '30 minutos',
              order: 1,
              lessons: {
                create: [
                  {
                    title: 'Descripción del ecosistema',
                    content: JSON.stringify({
                      sections: [
                        {
                          id: 'que-es-vtex-io',
                          type: 'heading',
                          title: '¿Qué es VTEX IO?',
                          content: 'VTEX IO es una plataforma de desarrollo serverless que permite crear y gestionar aplicaciones de comercio electrónico de manera eficiente. Proporciona un conjunto completo de herramientas y servicios para construir soluciones escalables.'
                        },
                        {
                          id: 'componentes-principales',
                          type: 'heading',
                          title: 'Componentes principales',
                          content: ''
                        },
                        {
                          id: 'builder',
                          type: 'list',
                          content: 'Builder: Herramienta para desarrollo y construcción de aplicaciones',
                          items: [
                            'Builder: Herramienta para desarrollo y construcción de aplicaciones',
                            'CLI: Interfaz de línea de comandos para gestionar proyectos',
                            'Store Framework: Framework para crear tiendas personalizadas'
                          ]
                        }
                      ]
                    }),
                    videoUrl: 'https://example.com/video-intro-vtex-io',
                    codeExample: JSON.stringify({
                      language: 'json',
                      code: `{
  "vendor": "vtex",
  "name": "store-theme",
  "version": "0.0.1",
  "builders": {
    "styles": "2.x",
    "store": "0.x",
    "docs": "0.x"
  },
  "dependencies": {
    "vtex.store": "2.x",
    "vtex.store-header": "2.x",
    "vtex.product-summary": "2.x"
  }
}`,
                      description: 'Ejemplo de manifest.json básico para una aplicación VTEX IO'
                    }),
                    resources: JSON.stringify({
                      documentation: [
                        { title: 'Guía de inicio rápido', url: 'https://developers.vtex.com/docs/guides/vtex-io-documentation-what-is-vtex-io', icon: '📖' },
                        { title: 'Referencia de API', url: 'https://developers.vtex.com/docs/api-reference', icon: '🔗' }
                      ],
                      videos: [
                        { title: 'Introducción a VTEX IO', url: '#' },
                        { title: 'Setup del ambiente', url: '#' }
                      ],
                      links: [
                        { title: 'Comunidad VTEX', url: 'https://community.vtex.com/' },
                        { title: 'Blog de desarrollo', url: 'https://developers.vtex.com/blog' }
                      ]
                    }),
                    duration: '45 minutos',
                    order: 1
                  }
                ]
              }
            },
            {
              title: 'Configuración del Ambiente',
              description: 'Prepara tu entorno de desarrollo para VTEX IO',
              duration: '45 minutos',
              order: 2,
              lessons: {
                create: [
                  {
                    title: 'Instalación de herramientas',
                    content: JSON.stringify({
                      sections: [
                        {
                          id: 'requisitos',
                          type: 'heading',
                          title: 'Requisitos del sistema',
                          content: 'Antes de comenzar, asegúrate de tener instalado Node.js versión 14 o superior en tu sistema.'
                        },
                        {
                          id: 'instalacion-cli',
                          type: 'heading',
                          title: 'Instalación de VTEX CLI',
                          content: 'La CLI de VTEX es la herramienta principal para desarrollar aplicaciones en VTEX IO.'
                        }
                      ]
                    }),
                    codeExample: JSON.stringify({
                      language: 'bash',
                      code: `# Instalar VTEX CLI globalmente
npm install -g @vtex/cli

# Verificar instalación
vtex --version

# Login en tu cuenta VTEX
vtex login {account}`,
                      description: 'Comandos para instalar y configurar VTEX CLI'
                    }),
                    resources: JSON.stringify({
                      documentation: [
                        { title: 'Guía de instalación CLI', url: 'https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-installation-and-command-reference', icon: '📖' }
                      ],
                      videos: [],
                      links: [
                        { title: 'Node.js Download', url: 'https://nodejs.org/' }
                      ]
                    }),
                    duration: '30 minutos',
                    order: 1
                  }
                ]
              }
            },
            {
              title: 'Primeros Pasos',
              description: 'Crea tu primer proyecto con VTEX IO',
              duration: '60 minutos',
              order: 3,
              lessons: {
                create: [
                  {
                    title: 'Tu primera aplicación',
                    content: JSON.stringify({
                      sections: [
                        {
                          id: 'crear-workspace',
                          type: 'heading',
                          title: 'Crear un workspace de desarrollo',
                          content: 'Los workspaces son ambientes aislados donde puedes desarrollar y probar tus aplicaciones sin afectar la tienda en producción.'
                        },
                        {
                          id: 'clonar-template',
                          type: 'heading',
                          title: 'Clonar template básico',
                          content: 'Utilizaremos un template básico para crear nuestra primera aplicación.'
                        }
                      ]
                    }),
                    codeExample: JSON.stringify({
                      language: 'bash',
                      code: `# Crear workspace de desarrollo
vtex use {workspace-name}

# Clonar template de store theme
vtex init

# Seleccionar "store-theme" como template
# Navegar al directorio del proyecto
cd store-theme

# Hacer link de la aplicación
vtex link`,
                      description: 'Comandos para crear tu primera aplicación VTEX IO'
                    }),
                    resources: JSON.stringify({
                      documentation: [
                        { title: 'Guía de workspaces', url: 'https://developers.vtex.com/docs/guides/vtex-io-documentation-workspace', icon: '📖' }
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
              title: 'Componentes Avanzados',
              description: 'Crea componentes React complejos para VTEX IO',
              duration: '60 minutos',
              order: 1,
              lessons: {
                create: [
                  {
                    title: 'Componentes personalizados',
                    content: JSON.stringify({
                      sections: [
                        {
                          id: 'react-components',
                          type: 'heading',
                          title: 'Creando componentes React',
                          content: 'Aprende a crear componentes React personalizados para VTEX IO utilizando las mejores prácticas.'
                        }
                      ]
                    }),
                    duration: '60 minutos',
                    order: 1
                  }
                ]
              }
            }
          ]
        }
      }
    });

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
              title: 'Arquitectura Escalable',
              description: 'Diseña aplicaciones escalables y mantenibles',
              duration: '90 minutos',
              order: 1,
              lessons: {
                create: [
                  {
                    title: 'Patrones de diseño',
                    content: JSON.stringify({
                      sections: [
                        {
                          id: 'design-patterns',
                          type: 'heading',
                          title: 'Patrones de diseño en VTEX IO',
                          content: 'Explora los patrones de diseño más efectivos para crear aplicaciones escalables en VTEX IO.'
                        }
                      ]
                    }),
                    duration: '90 minutos',
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

export { seedLearningPaths };
