const { PrismaClient } = require('../lib/generated/prisma');

const prisma = new PrismaClient();

async function seedLearningPaths() {
  console.log('🌱 Seeding extended learning paths...');

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
              duration: '3 horas',
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
                          content: 'VTEX IO es una plataforma de desarrollo serverless que permite crear y gestionar aplicaciones de comercio electrónico de manera eficiente. Proporciona un conjunto completo de herramientas y servicios para construir soluciones escalables y modernas.'
                        },
                        {
                          id: 'caracteristicas',
                          type: 'heading',
                          title: 'Características principales',
                          content: 'VTEX IO ofrece las siguientes características clave:'
                        },
                        {
                          id: 'lista-caracteristicas',
                          type: 'list',
                          content: '',
                          items: [
                            'Desarrollo serverless sin configuración de infraestructura',
                            'Framework basado en React para componentes modernos',
                            'Sistema de builders para diferentes tipos de aplicaciones',
                            'Gestión automática de dependencias y versionado',
                            'Integración nativa con el ecosistema VTEX',
                            'Despliegue automático y escalabilidad'
                          ]
                        },
                        {
                          id: 'arquitectura',
                          type: 'heading',
                          title: 'Arquitectura de VTEX IO',
                          content: 'La arquitectura de VTEX IO se basa en microservicios y componentes modulares que permiten una gran flexibilidad y escalabilidad. Cada aplicación se ejecuta de forma independiente y puede comunicarse con otros servicios a través de APIs bien definidas.'
                        }
                      ]
                    }),
                    videoUrl: 'https://www.youtube.com/embed/bXjb1ApVDWk',
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
                        { title: 'Guía oficial de VTEX IO', url: 'https://developers.vtex.com/docs/guides/vtex-io-documentation-what-is-vtex-io', icon: '📖' },
                        { title: 'Arquitectura de VTEX IO', url: 'https://developers.vtex.com/docs/guides/vtex-io-documentation-what-is-vtex-io', icon: '🏗️' }
                      ],
                      videos: [
                        { title: 'Introducción a VTEX IO', url: '#' }
                      ],
                      links: [
                        { title: 'Comunidad VTEX', url: 'https://community.vtex.com/' }
                      ]
                    }),
                    duration: '45 minutos',
                    order: 1
                  },
                  {
                    title: 'Componentes y Builders',
                    content: JSON.stringify({
                      sections: [
                        {
                          id: 'builders-intro',
                          type: 'heading',
                          title: '¿Qué son los Builders?',
                          content: 'Los builders son herramientas especializadas que procesan diferentes tipos de código y recursos en VTEX IO. Cada builder tiene un propósito específico y maneja un tipo particular de aplicación o funcionalidad.'
                        },
                        {
                          id: 'tipos-builders',
                          type: 'heading',
                          title: 'Tipos de Builders principales',
                          content: 'Estos son los builders más utilizados en VTEX IO:'
                        },
                        {
                          id: 'lista-builders',
                          type: 'list',
                          content: '',
                          items: [
                            'react: Para aplicaciones React y componentes de frontend',
                            'store: Para temas y configuraciones de tienda',
                            'node: Para servicios backend y APIs',
                            'styles: Para hojas de estilo CSS',
                            'docs: Para documentación',
                            'graphql: Para esquemas GraphQL'
                          ]
                        },
                        {
                          id: 'store-framework',
                          type: 'heading',
                          title: 'Store Framework',
                          content: 'El Store Framework es el conjunto de componentes y herramientas que permite crear tiendas online completas. Incluye componentes para header, footer, páginas de producto, carrito de compras y mucho más.'
                        }
                      ]
                    }),
                    videoUrl: 'https://www.youtube.com/embed/bXjb1ApVDWk',
                    codeExample: JSON.stringify({
                      language: 'json',
                      code: `{
  "vendor": "vtex",
  "name": "my-custom-app",
  "version": "0.0.1",
  "builders": {
    "react": "3.x",
    "store": "0.x",
    "styles": "2.x",
    "node": "6.x",
    "graphql": "1.x"
  },
  "dependencies": {
    "vtex.styleguide": "9.x"
  }
}`,
                      description: 'Manifest con múltiples builders para una aplicación completa'
                    }),
                    resources: JSON.stringify({
                      documentation: [
                        { title: 'Guía de Builders', url: 'https://developers.vtex.com/docs/guides/vtex-io-documentation-builders', icon: '📖' },
                        { title: 'Store Framework', url: 'https://developers.vtex.com/docs/guides/vtex-io-documentation-what-is-vtex-store-framework', icon: '🏪' }
                      ],
                      videos: [],
                      links: []
                    }),
                    duration: '50 minutos',
                    order: 2
                  },
                  {
                    title: 'Workspaces y Desarrollo',
                    content: JSON.stringify({
                      sections: [
                        {
                          id: 'workspaces-intro',
                          type: 'heading',
                          title: '¿Qué son los Workspaces?',
                          content: 'Los workspaces son ambientes aislados de desarrollo que permiten trabajar en aplicaciones sin afectar la tienda en producción. Cada workspace es independiente y puede tener diferentes versiones de aplicaciones instaladas.'
                        },
                        {
                          id: 'tipos-workspaces',
                          type: 'heading',
                          title: 'Tipos de Workspaces',
                          content: 'Existen diferentes tipos de workspaces según su propósito:'
                        },
                        {
                          id: 'lista-workspaces',
                          type: 'list',
                          content: '',
                          items: [
                            'Master: Workspace de producción, visible para todos los usuarios',
                            'Development: Workspaces de desarrollo para testing y experimentación',
                            'Production: Workspaces para testing final antes de ir a master'
                          ]
                        },
                        {
                          id: 'flujo-desarrollo',
                          type: 'heading',
                          title: 'Flujo de Desarrollo',
                          content: 'El flujo típico de desarrollo en VTEX IO incluye crear un workspace de desarrollo, hacer cambios, probar la funcionalidad, y finalmente promover los cambios a producción.'
                        }
                      ]
                    }),
                    codeExample: JSON.stringify({
                      language: 'bash',
                      code: `# Crear y usar un workspace de desarrollo
vtex use workspace-name

# Verificar workspace actual
vtex whoami

# Listar workspaces disponibles
vtex workspace list

# Promover workspace a master
vtex workspace promote`,
                      description: 'Comandos básicos para gestión de workspaces'
                    }),
                    resources: JSON.stringify({
                      documentation: [
                        { title: 'Guía de Workspaces', url: 'https://developers.vtex.com/docs/guides/vtex-io-documentation-workspace', icon: '📖' }
                      ],
                      videos: [],
                      links: []
                    }),
                    duration: '40 minutos',
                    order: 3
                  }
                ]
              }
            },
            {
              title: 'Vtex CLI',
              description: 'Aprende a usar la interfaz de línea de comandos de VTEX',
              duration: '2.5 horas',
              order: 2,
              lessons: {
                create: [
                  {
                    title: 'Instalación y Configuración de VTEX CLI',
                    content: JSON.stringify({
                      sections: [
                        {
                          id: 'requisitos',
                          type: 'heading',
                          title: 'Requisitos del Sistema',
                          content: 'Antes de instalar VTEX CLI, asegúrate de tener Node.js versión 14 o superior instalado en tu sistema.'
                        },
                        {
                          id: 'instalacion',
                          type: 'heading',
                          title: 'Instalación de VTEX CLI',
                          content: 'VTEX CLI se instala globalmente usando npm. Una vez instalado, tendrás acceso a todos los comandos de VTEX desde cualquier directorio.'
                        },
                        {
                          id: 'configuracion',
                          type: 'heading',
                          title: 'Configuración Inicial',
                          content: 'Después de la instalación, necesitas autenticarte con tu cuenta VTEX para poder usar los comandos.'
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
vtex login {account-name}

# Verificar autenticación
vtex whoami`,
                      description: 'Comandos para instalar y configurar VTEX CLI'
                    }),
                    resources: JSON.stringify({
                      documentation: [
                        { title: 'Instalación de CLI', url: 'https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-installation-and-command-reference', icon: '📖' }
                      ],
                      videos: [],
                      links: [
                        { title: 'Node.js Download', url: 'https://nodejs.org/' }
                      ]
                    }),
                    duration: '30 minutos',
                    order: 1
                  },
                  {
                    title: 'Comandos Básicos de VTEX CLI',
                    content: JSON.stringify({
                      sections: [
                        {
                          id: 'comandos-workspace',
                          type: 'heading',
                          title: 'Comandos de Workspace',
                          content: 'Los comandos de workspace te permiten gestionar diferentes ambientes de desarrollo.'
                        },
                        {
                          id: 'lista-workspace',
                          type: 'list',
                          content: '',
                          items: [
                            'vtex use {workspace}: Crear o cambiar a un workspace',
                            'vtex workspace list: Listar todos los workspaces',
                            'vtex workspace delete {workspace}: Eliminar un workspace',
                            'vtex workspace promote: Promover workspace a master'
                          ]
                        },
                        {
                          id: 'comandos-apps',
                          type: 'heading',
                          title: 'Comandos de Aplicaciones',
                          content: 'Estos comandos te ayudan a gestionar aplicaciones en tu workspace.'
                        },
                        {
                          id: 'lista-apps',
                          type: 'list',
                          content: '',
                          items: [
                            'vtex list: Ver aplicaciones instaladas',
                            'vtex install {app}: Instalar una aplicación',
                            'vtex uninstall {app}: Desinstalar una aplicación',
                            'vtex update: Actualizar aplicaciones'
                          ]
                        }
                      ]
                    }),
                    codeExample: JSON.stringify({
                      language: 'bash',
                      code: `# Gestión de workspaces
vtex use development
vtex workspace list
vtex workspace delete old-workspace

# Gestión de aplicaciones
vtex list
vtex install vtex.store-theme
vtex uninstall vtex.old-app
vtex update`,
                      description: 'Ejemplos de comandos básicos de VTEX CLI'
                    }),
                    resources: JSON.stringify({
                      documentation: [
                        { title: 'Referencia de comandos', url: 'https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-command-reference', icon: '📖' }
                      ],
                      videos: [],
                      links: []
                    }),
                    duration: '45 minutos',
                    order: 2
                  },
                  {
                    title: 'Comandos Avanzados y Debugging',
                    content: JSON.stringify({
                      sections: [
                        {
                          id: 'debugging',
                          type: 'heading',
                          title: 'Comandos de Debugging',
                          content: 'VTEX CLI incluye herramientas para debugging y monitoreo de aplicaciones.'
                        },
                        {
                          id: 'lista-debug',
                          type: 'list',
                          content: '',
                          items: [
                            'vtex logs: Ver logs de aplicaciones',
                            'vtex debug: Activar modo debug',
                            'vtex inspect: Inspeccionar aplicaciones',
                            'vtex test: Ejecutar tests'
                          ]
                        },
                        {
                          id: 'deployment',
                          type: 'heading',
                          title: 'Comandos de Deployment',
                          content: 'Estos comandos te permiten publicar y gestionar versiones de tus aplicaciones.'
                        },
                        {
                          id: 'lista-deploy',
                          type: 'list',
                          content: '',
                          items: [
                            'vtex publish: Publicar una nueva versión',
                            'vtex deploy: Desplegar aplicación',
                            'vtex release: Crear un release',
                            'vtex undeploy: Revertir deployment'
                          ]
                        }
                      ]
                    }),
                    codeExample: JSON.stringify({
                      language: 'bash',
                      code: `# Debugging
vtex logs --all
vtex debug --verbose
vtex inspect my-app

# Deployment
vtex publish
vtex deploy --force
vtex release major
vtex undeploy --app=my-app`,
                      description: 'Comandos avanzados para debugging y deployment'
                    }),
                    resources: JSON.stringify({
                      documentation: [
                        { title: 'Debugging en VTEX IO', url: 'https://developers.vtex.com/docs/guides/vtex-io-documentation-debugging-overview', icon: '📖' }
                      ],
                      videos: [],
                      links: []
                    }),
                    duration: '50 minutos',
                    order: 3
                  }
                ]
              }
            },
            {
              title: 'Vtex Init & Link',
              description: 'Domina los comandos vtex init y vtex link',
              duration: '2.5 horas',
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
                          title: '¿Qué hace vtex init?',
                          content: 'El comando vtex init inicializa un nuevo proyecto VTEX IO basado en templates predefinidos. Es la forma más rápida de comenzar un nuevo desarrollo.'
                        },
                        {
                          id: 'templates',
                          type: 'heading',
                          title: 'Templates Disponibles',
                          content: 'VTEX IO ofrece varios templates para diferentes tipos de proyectos:'
                        },
                        {
                          id: 'lista-templates',
                          type: 'list',
                          content: '',
                          items: [
                            'store-theme: Template para temas de tienda',
                            'react-app: Template para aplicaciones React',
                            'service-example: Template para servicios backend',
                            'graphql-example: Template para APIs GraphQL',
                            'pixel-app: Template para aplicaciones de tracking'
                          ]
                        },
                        {
                          id: 'proceso-init',
                          type: 'heading',
                          title: 'Proceso de Inicialización',
                          content: 'Al ejecutar vtex init, el CLI te guiará a través de un proceso interactivo para seleccionar el template y configurar tu proyecto.'
                        }
                      ]
                    }),
                    codeExample: JSON.stringify({
                      language: 'bash',
                      code: `# Inicializar un nuevo proyecto
vtex init

# Seleccionar template específico
vtex init --template=store-theme

# Inicializar en directorio específico
vtex init my-project-name

# Ver templates disponibles
vtex init --list-templates`,
                      description: 'Diferentes formas de usar el comando vtex init'
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
                  },
                  {
                    title: 'Comando vtex link',
                    content: JSON.stringify({
                      sections: [
                        {
                          id: 'link-intro',
                          type: 'heading',
                          title: '¿Qué hace vtex link?',
                          content: 'El comando vtex link conecta tu código local con el workspace de VTEX, permitiendo desarrollo en tiempo real. Los cambios se reflejan inmediatamente en tu tienda de desarrollo.'
                        },
                        {
                          id: 'funcionamiento',
                          type: 'heading',
                          title: 'Cómo Funciona vtex link',
                          content: 'Cuando ejecutas vtex link, el CLI:'
                        },
                        {
                          id: 'lista-funcionamiento',
                          type: 'list',
                          content: '',
                          items: [
                            'Sube tu código al workspace actual',
                            'Instala las dependencias automáticamente',
                            'Establece un túnel para sincronización en tiempo real',
                            'Permite hot-reload para desarrollo rápido',
                            'Muestra logs en tiempo real'
                          ]
                        },
                        {
                          id: 'mejores-practicas',
                          type: 'heading',
                          title: 'Mejores Prácticas',
                          content: 'Para un desarrollo eficiente con vtex link, sigue estas recomendaciones:'
                        },
                        {
                          id: 'lista-practicas',
                          type: 'list',
                          content: '',
                          items: [
                            'Usa un workspace de desarrollo dedicado',
                            'Mantén el link activo durante el desarrollo',
                            'Revisa los logs para detectar errores',
                            'Usa --verbose para debugging detallado'
                          ]
                        }
                      ]
                    }),
                    codeExample: JSON.stringify({
                      language: 'bash',
                      code: `# Link básico
vtex link

# Link con logs verbosos
vtex link --verbose

# Link sin cache
vtex link --no-cache

# Unlink (desconectar)
vtex unlink

# Ver aplicaciones linkeadas
vtex list --linked`,
                      description: 'Diferentes opciones del comando vtex link'
                    }),
                    resources: JSON.stringify({
                      documentation: [
                        { title: 'Guía de vtex link', url: 'https://developers.vtex.com/docs/guides/vtex-io-documentation-linking-an-app', icon: '📖' }
                      ],
                      videos: [],
                      links: []
                    }),
                    duration: '45 minutos',
                    order: 2
                  },
                  {
                    title: 'Flujo de Desarrollo Completo',
                    content: JSON.stringify({
                      sections: [
                        {
                          id: 'flujo-completo',
                          type: 'heading',
                          title: 'Flujo de Desarrollo Completo',
                          content: 'Aprende el flujo completo desde la inicialización hasta el deployment de una aplicación VTEX IO.'
                        },
                        {
                          id: 'pasos-desarrollo',
                          type: 'heading',
                          title: 'Pasos del Desarrollo',
                          content: 'El flujo típico incluye estos pasos:'
                        },
                        {
                          id: 'lista-pasos',
                          type: 'list',
                          content: '',
                          items: [
                            '1. Crear workspace de desarrollo',
                            '2. Inicializar proyecto con vtex init',
                            '3. Configurar manifest.json',
                            '4. Desarrollar funcionalidades',
                            '5. Usar vtex link para testing',
                            '6. Hacer debugging y ajustes',
                            '7. Publicar con vtex publish',
                            '8. Promover a producción'
                          ]
                        },
                        {
                          id: 'ejemplo-practico',
                          type: 'heading',
                          title: 'Ejemplo Práctico',
                          content: 'Veamos un ejemplo completo de desarrollo de una aplicación desde cero.'
                        }
                      ]
                    }),
                    codeExample: JSON.stringify({
                      language: 'bash',
                      code: `# 1. Crear workspace
vtex use my-development-workspace

# 2. Inicializar proyecto
vtex init
# Seleccionar "store-theme"

# 3. Navegar al directorio
cd store-theme

# 4. Hacer link para desarrollo
vtex link

# 5. Hacer cambios y ver en tiempo real
# ... desarrollo ...

# 6. Publicar cuando esté listo
vtex publish

# 7. Instalar en master
vtex use master
vtex install vendor.app-name

# 8. Promover workspace si es necesario
vtex workspace promote`,
                      description: 'Flujo completo de desarrollo con VTEX IO'
                    }),
                    resources: JSON.stringify({
                      documentation: [
                        { title: 'Guía de desarrollo completa', url: 'https://developers.vtex.com/docs/guides/vtex-io-documentation-developing-an-app', icon: '📖' }
                      ],
                      videos: [],
                      links: []
                    }),
                    duration: '60 minutos',
                    order: 3
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
