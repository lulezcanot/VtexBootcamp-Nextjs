const { PrismaClient } = require('../lib/generated/prisma');

const prisma = new PrismaClient();

async function seedCompleteLearningPaths() {
  console.log('🌱 Seeding complete learning paths...');

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
                          content: 'VTEX IO es una plataforma de desarrollo serverless que permite crear y gestionar aplicaciones de comercio electrónico de manera eficiente.'
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
                            'Gestión automática de dependencias y versionado'
                          ]
                        }
                      ]
                    }),
                    videoUrl: 'https://www.youtube.com/embed/bXjb1ApVDWk',
                    codeExample: JSON.stringify({
                      language: 'json',
                      code: '{"vendor": "vtex", "name": "store-theme"}',
                      description: 'Ejemplo básico de manifest.json'
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
                  },
                  {
                    title: 'Arquitectura y Componentes',
                    content: JSON.stringify({
                      sections: [
                        {
                          id: 'arquitectura',
                          type: 'heading',
                          title: 'Arquitectura de VTEX IO',
                          content: 'La arquitectura se basa en microservicios y componentes modulares.'
                        },
                        {
                          id: 'componentes',
                          type: 'heading',
                          title: 'Componentes principales',
                          content: 'Los componentes principales incluyen:'
                        },
                        {
                          id: 'lista-componentes',
                          type: 'list',
                          content: '',
                          items: [
                            'Store Framework para el frontend',
                            'Node.js para servicios backend',
                            'GraphQL para APIs',
                            'Pixel para tracking'
                          ]
                        }
                      ]
                    }),
                    codeExample: JSON.stringify({
                      language: 'json',
                      code: '{"builders": {"store": "0.x", "react": "3.x"}}',
                      description: 'Configuración de builders'
                    }),
                    resources: JSON.stringify({
                      documentation: [
                        { title: 'Arquitectura VTEX IO', url: 'https://developers.vtex.com/docs/guides/vtex-io-documentation-what-is-vtex-io', icon: '📖' }
                      ],
                      videos: [],
                      links: []
                    }),
                    duration: '50 minutos',
                    order: 2
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
                    title: 'Instalación de VTEX CLI',
                    content: JSON.stringify({
                      sections: [
                        {
                          id: 'instalacion',
                          type: 'heading',
                          title: 'Instalación de VTEX CLI',
                          content: 'VTEX CLI se instala globalmente usando npm.'
                        },
                        {
                          id: 'requisitos',
                          type: 'heading',
                          title: 'Requisitos',
                          content: 'Necesitas Node.js versión 14 o superior.'
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
                        { title: 'Instalación CLI', url: 'https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-installation-and-command-reference', icon: '📖' }
                      ],
                      videos: [],
                      links: []
                    }),
                    duration: '30 minutos',
                    order: 1
                  },
                  {
                    title: 'Comandos Básicos',
                    content: JSON.stringify({
                      sections: [
                        {
                          id: 'comandos-basicos',
                          type: 'heading',
                          title: 'Comandos Básicos',
                          content: 'Los comandos más utilizados en VTEX CLI:'
                        },
                        {
                          id: 'lista-comandos',
                          type: 'list',
                          content: '',
                          items: [
                            'vtex login: Autenticarse',
                            'vtex whoami: Ver usuario actual',
                            'vtex list: Ver apps instaladas',
                            'vtex use: Cambiar workspace'
                          ]
                        }
                      ]
                    }),
                    codeExample: JSON.stringify({
                      language: 'bash',
                      code: 'vtex login account-name\nvtex whoami\nvtex list',
                      description: 'Comandos básicos'
                    }),
                    resources: JSON.stringify({
                      documentation: [
                        { title: 'Comandos CLI', url: 'https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-command-reference', icon: '📖' }
                      ],
                      videos: [],
                      links: []
                    }),
                    duration: '45 minutos',
                    order: 2
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
                        },
                        {
                          id: 'templates',
                          type: 'heading',
                          title: 'Templates disponibles',
                          content: 'Puedes elegir entre varios templates:'
                        },
                        {
                          id: 'lista-templates',
                          type: 'list',
                          content: '',
                          items: [
                            'store-theme: Para temas de tienda',
                            'react-app: Para aplicaciones React',
                            'service-example: Para servicios backend'
                          ]
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
                        { title: 'Guía vtex init', url: 'https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-command-reference', icon: '📖' }
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
                          title: 'Comando vtex link',
                          content: 'El comando vtex link conecta tu código local con VTEX.'
                        },
                        {
                          id: 'funcionamiento',
                          type: 'heading',
                          title: 'Cómo funciona',
                          content: 'Link permite desarrollo en tiempo real con hot-reload.'
                        }
                      ]
                    }),
                    codeExample: JSON.stringify({
                      language: 'bash',
                      code: 'vtex link',
                      description: 'Conectar código local'
                    }),
                    resources: JSON.stringify({
                      documentation: [
                        { title: 'Guía vtex link', url: 'https://developers.vtex.com/docs/guides/vtex-io-documentation-linking-an-app', icon: '📖' }
                      ],
                      videos: [],
                      links: []
                    }),
                    duration: '50 minutos',
                    order: 2
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
                          content: 'La PLP es donde se muestran múltiples productos en formato de lista o grilla.'
                        },
                        {
                          id: 'componentes-plp',
                          type: 'heading',
                          title: 'Componentes principales',
                          content: 'Una PLP incluye:'
                        },
                        {
                          id: 'lista-componentes',
                          type: 'list',
                          content: '',
                          items: [
                            'Search result layout',
                            'Product summary',
                            'Filtros de búsqueda',
                            'Paginación'
                          ]
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
                  },
                  {
                    title: 'Configuración avanzada de PLP',
                    content: JSON.stringify({
                      sections: [
                        {
                          id: 'configuracion-avanzada',
                          type: 'heading',
                          title: 'Configuración avanzada',
                          content: 'Personaliza tu PLP con configuraciones avanzadas.'
                        },
                        {
                          id: 'filtros',
                          type: 'heading',
                          title: 'Filtros y ordenamiento',
                          content: 'Implementa filtros dinámicos y opciones de ordenamiento.'
                        }
                      ]
                    }),
                    codeExample: JSON.stringify({
                      language: 'json',
                      code: '{"search-result-layout": {"children": ["gallery", "not-found"]}}',
                      description: 'Layout avanzado de PLP'
                    }),
                    resources: JSON.stringify({
                      documentation: [
                        { title: 'Filtros en PLP', url: 'https://developers.vtex.com/docs/guides/vtex-io-documentation-building-a-product-list-page', icon: '📖' }
                      ],
                      videos: [],
                      links: []
                    }),
                    duration: '55 minutos',
                    order: 2
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
                          content: 'La PDP muestra información detallada de un producto específico.'
                        },
                        {
                          id: 'elementos-pdp',
                          type: 'heading',
                          title: 'Elementos principales',
                          content: 'Una PDP típica incluye:'
                        },
                        {
                          id: 'lista-elementos',
                          type: 'list',
                          content: '',
                          items: [
                            'Imágenes del producto',
                            'Información del producto',
                            'Selector de SKU',
                            'Botón de compra'
                          ]
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
                  },
                  {
                    title: 'Personalización de PDP',
                    content: JSON.stringify({
                      sections: [
                        {
                          id: 'personalizacion',
                          type: 'heading',
                          title: 'Personalización avanzada',
                          content: 'Personaliza la experiencia del usuario en la PDP.'
                        },
                        {
                          id: 'componentes-custom',
                          type: 'heading',
                          title: 'Componentes personalizados',
                          content: 'Agrega funcionalidades específicas a tu PDP.'
                        }
                      ]
                    }),
                    codeExample: JSON.stringify({
                      language: 'json',
                      code: '{"product-images": {"props": {"aspectRatio": "1:1"}}}',
                      description: 'Configuración de imágenes'
                    }),
                    resources: JSON.stringify({
                      documentation: [
                        { title: 'Personalización PDP', url: 'https://developers.vtex.com/docs/guides/vtex-io-documentation-building-a-product-details-page', icon: '📖' }
                      ],
                      videos: [],
                      links: []
                    }),
                    duration: '60 minutos',
                    order: 2
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
                        },
                        {
                          id: 'mejoras',
                          type: 'heading',
                          title: 'Mejoras de la v2',
                          content: 'Las principales mejoras incluyen:'
                        },
                        {
                          id: 'lista-mejoras',
                          type: 'list',
                          content: '',
                          items: [
                            'Mejor performance',
                            'Diseño más moderno',
                            'Mayor personalización',
                            'Mejor experiencia móvil'
                          ]
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
                  },
                  {
                    title: 'Configuración avanzada de Minicart',
                    content: JSON.stringify({
                      sections: [
                        {
                          id: 'configuracion-avanzada',
                          type: 'heading',
                          title: 'Configuración avanzada',
                          content: 'Personaliza el comportamiento del minicart.'
                        },
                        {
                          id: 'eventos',
                          type: 'heading',
                          title: 'Eventos y tracking',
                          content: 'Implementa tracking de eventos del carrito.'
                        }
                      ]
                    }),
                    codeExample: JSON.stringify({
                      language: 'json',
                      code: '{"minicart-summary": {"props": {"showDiscount": true}}}',
                      description: 'Configuración del resumen'
                    }),
                    resources: JSON.stringify({
                      documentation: [
                        { title: 'Configuración Minicart', url: 'https://developers.vtex.com/docs/apps/vtex.minicart', icon: '📖' }
                      ],
                      videos: [],
                      links: []
                    }),
                    duration: '50 minutos',
                    order: 2
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
                          content: 'My Account es donde los usuarios gestionan su información personal y pedidos.'
                        },
                        {
                          id: 'secciones',
                          type: 'heading',
                          title: 'Secciones principales',
                          content: 'My Account incluye:'
                        },
                        {
                          id: 'lista-secciones',
                          type: 'list',
                          content: '',
                          items: [
                            'Perfil del usuario',
                            'Historial de pedidos',
                            'Direcciones',
                            'Métodos de pago'
                          ]
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
                  },
                  {
                    title: 'Personalización de My Account',
                    content: JSON.stringify({
                      sections: [
                        {
                          id: 'personalizacion',
                          type: 'heading',
                          title: 'Personalización',
                          content: 'Personaliza la experiencia de My Account según tus necesidades.'
                        },
                        {
                          id: 'extensiones',
                          type: 'heading',
                          title: 'Extensiones',
                          content: 'Agrega funcionalidades adicionales a My Account.'
                        }
                      ]
                    }),
                    codeExample: JSON.stringify({
                      language: 'json',
                      code: '{"my-account-menu": {"props": {"showOrderHistory": true}}}',
                      description: 'Configuración del menú'
                    }),
                    resources: JSON.stringify({
                      documentation: [
                        { title: 'Personalización My Account', url: 'https://developers.vtex.com/docs/apps/vtex.my-account', icon: '📖' }
                      ],
                      videos: [],
                      links: []
                    }),
                    duration: '55 minutos',
                    order: 2
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
                        },
                        {
                          id: 'flujo-checkout',
                          type: 'heading',
                          title: 'Flujo del checkout',
                          content: 'El flujo típico incluye:'
                        },
                        {
                          id: 'lista-flujo',
                          type: 'list',
                          content: '',
                          items: [
                            'Información personal',
                            'Dirección de entrega',
                            'Método de pago',
                            'Confirmación del pedido'
                          ]
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
                  },
                  {
                    title: 'Personalización del Checkout',
                    content: JSON.stringify({
                      sections: [
                        {
                          id: 'personalizacion-checkout',
                          type: 'heading',
                          title: 'Personalización del Checkout',
                          content: 'Personaliza la experiencia de checkout para mejorar la conversión.'
                        },
                        {
                          id: 'mejores-practicas',
                          type: 'heading',
                          title: 'Mejores prácticas',
                          content: 'Sigue estas recomendaciones para optimizar tu checkout.'
                        }
                      ]
                    }),
                    codeExample: JSON.stringify({
                      language: 'css',
                      code: '.checkout-container { background: #f5f5f5; }',
                      description: 'Estilos personalizados'
                    }),
                    resources: JSON.stringify({
                      documentation: [
                        { title: 'Personalización Checkout', url: 'https://developers.vtex.com/docs/guides/checkout-overview', icon: '📖' }
                      ],
                      videos: [],
                      links: []
                    }),
                    duration: '70 minutos',
                    order: 2
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
                          content: 'Los componentes custom son componentes React personalizados para VTEX IO.'
                        },
                        {
                          id: 'cuando-usar',
                          type: 'heading',
                          title: 'Cuándo usar componentes custom',
                          content: 'Usa componentes custom cuando:'
                        },
                        {
                          id: 'lista-cuando',
                          type: 'list',
                          content: '',
                          items: [
                            'Necesitas funcionalidad específica',
                            'Los componentes nativos no son suficientes',
                            'Quieres reutilizar código',
                            'Necesitas integrar APIs externas'
                          ]
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
                  },
                  {
                    title: 'Desarrollo avanzado de componentes',
                    content: JSON.stringify({
                      sections: [
                        {
                          id: 'desarrollo-avanzado',
                          type: 'heading',
                          title: 'Desarrollo avanzado',
                          content: 'Técnicas avanzadas para componentes robustos y escalables.'
                        },
                        {
                          id: 'hooks-context',
                          type: 'heading',
                          title: 'Hooks y Context',
                          content: 'Usa React Hooks y Context para gestionar estado.'
                        }
                      ]
                    }),
                    codeExample: JSON.stringify({
                      language: 'typescript',
                      code: 'const [state, setState] = useState(); useEffect(() => {}, []);',
                      description: 'Uso de hooks'
                    }),
                    resources: JSON.stringify({
                      documentation: [
                        { title: 'React Hooks', url: 'https://developers.vtex.com/docs/guides/vtex-io-documentation-developing-an-app', icon: '📖' }
                      ],
                      videos: [],
                      links: []
                    }),
                    duration: '85 minutos',
                    order: 2
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
                        },
                        {
                          id: 'tipos-emails',
                          type: 'heading',
                          title: 'Tipos de emails',
                          content: 'Los principales tipos incluyen:'
                        },
                        {
                          id: 'lista-tipos',
                          type: 'list',
                          content: '',
                          items: [
                            'Confirmación de pedido',
                            'Notificación de envío',
                            'Emails promocionales',
                            'Recuperación de carrito'
                          ]
                        }
                      ]
                    }),
                    codeExample: JSON.stringify({
                      language: 'html',
                      code: '<!DOCTYPE html><html><head><title>Email</title></head><body><h1>Hola {{firstName}}</h1></body></html>',
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
                  },
                  {
                    title: 'Personalización avanzada de emails',
                    content: JSON.stringify({
                      sections: [
                        {
                          id: 'personalizacion-emails',
                          type: 'heading',
                          title: 'Personalización avanzada',
                          content: 'Crea emails dinámicos y personalizados para cada usuario.'
                        },
                        {
                          id: 'variables',
                          type: 'heading',
                          title: 'Variables dinámicas',
                          content: 'Usa variables para personalizar el contenido del email.'
                        }
                      ]
                    }),
                    codeExample: JSON.stringify({
                      language: 'html',
                      code: '<p>Hola {{firstName}}, tu pedido {{orderNumber}} está en camino.</p>',
                      description: 'Uso de variables dinámicas'
                    }),
                    resources: JSON.stringify({
                      documentation: [
                        { title: 'Variables de email', url: 'https://help.vtex.com/en/tutorial/understanding-the-message-center--tutorials_84', icon: '📖' }
                      ],
                      videos: [],
                      links: []
                    }),
                    duration: '55 minutos',
                    order: 2
                  }
                ]
              }
            }
          ]
        }
      }
    });

    console.log('✅ Complete learning paths seeded successfully!');
    console.log(`Created learning paths:`);
    console.log(`- ${principiante.title} (${principiante.modules?.length || 0} módulos)`);
    console.log(`- ${intermedio.title} (${intermedio.modules?.length || 0} módulos)`);
    console.log(`- ${avanzado.title} (${avanzado.modules?.length || 0} módulos)`);

  } catch (error) {
    console.error('❌ Error seeding complete learning paths:', error);
    throw error;
  }
}

async function main() {
  try {
    await seedCompleteLearningPaths();
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

module.exports = { seedCompleteLearningPaths };
