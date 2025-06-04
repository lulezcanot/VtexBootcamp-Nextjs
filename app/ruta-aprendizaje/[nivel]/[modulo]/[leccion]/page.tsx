"use client";

import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

interface LessonContent {
  id: string;
  title: string;
  duration: string;
  moduleInfo: string;
  videoUrl?: string;
  content: {
    sections: Array<{
      id: string;
      type: 'heading' | 'text' | 'list';
      title?: string;
      content: string;
      items?: string[];
    }>;
  };
  codeExample?: {
    language: string;
    code: string;
    description: string;
  };
  resources: {
    documentation: Array<{ title: string; url: string; icon: string; }>;
    videos: Array<{ title: string; url: string; }>;
    links: Array<{ title: string; url: string; }>;
  };
  nextLesson?: string;
  prevLesson?: string;
}

const lessonData: Record<string, Record<string, Record<string, LessonContent>>> = {
  principiante: {
    "fundamentos-vtex-io": {
      "leccion-1": {
        id: "que-es-vtex-io",
        title: "¿Qué es VTEX IO?",
        duration: "45 minutos",
        moduleInfo: "Módulo 1 de 3",
        videoUrl: "https://www.youtube.com/embed/bXjb1ApVDWk",
        content: {
          sections: [
            {
              id: "introduccion",
              type: "heading",
              title: "Introducción a VTEX IO",
              content: "VTEX IO es una plataforma de desarrollo serverless que permite crear y gestionar aplicaciones de comercio electrónico de manera eficiente. Proporciona un conjunto completo de herramientas y servicios para construir soluciones escalables y modernas."
            },
            {
              id: "caracteristicas",
              type: "heading",
              title: "Características principales",
              content: "VTEX IO ofrece las siguientes características clave:"
            },
            {
              id: "lista-caracteristicas",
              type: "list",
              content: "",
              items: [
                "Desarrollo serverless sin configuración de infraestructura",
                "Framework basado en React para componentes modernos",
                "Sistema de builders para diferentes tipos de aplicaciones",
                "Gestión automática de dependencias y versionado",
                "Integración nativa con el ecosistema VTEX",
                "Despliegue automático y escalabilidad"
              ]
            },
            {
              id: "arquitectura",
              type: "heading",
              title: "Arquitectura de VTEX IO",
              content: "La arquitectura de VTEX IO se basa en microservicios y componentes modulares que permiten una gran flexibilidad y escalabilidad. Cada aplicación se ejecuta de forma independiente y puede comunicarse con otros servicios a través de APIs bien definidas."
            }
          ]
        },
        codeExample: {
          language: "json",
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
          description: "Ejemplo de manifest.json básico para una aplicación VTEX IO"
        },
        resources: {
          documentation: [
            { title: "Guía oficial de VTEX IO", url: "https://developers.vtex.com/docs/guides/vtex-io-documentation-what-is-vtex-io", icon: "📖" },
            { title: "Arquitectura de VTEX IO", url: "https://developers.vtex.com/docs/guides/vtex-io-documentation-what-is-vtex-io", icon: "🏗️" }
          ],
          videos: [
            { title: "Introducción a VTEX IO", url: "#" }
          ],
          links: [
            { title: "Comunidad VTEX", url: "https://community.vtex.com/" }
          ]
        },
        nextLesson: "leccion-2"
      },
      "leccion-2": {
        id: "componentes-builders",
        title: "Componentes y Builders",
        duration: "50 minutos",
        moduleInfo: "Módulo 1 de 3",
        videoUrl: "https://www.youtube.com/embed/bXjb1ApVDWk",
        content: {
          sections: [
            {
              id: "builders-intro",
              type: "heading",
              title: "¿Qué son los Builders?",
              content: "Los builders son herramientas especializadas que procesan diferentes tipos de código y recursos en VTEX IO. Cada builder tiene un propósito específico y maneja un tipo particular de aplicación o funcionalidad."
            },
            {
              id: "tipos-builders",
              type: "heading",
              title: "Tipos de Builders principales",
              content: "Estos son los builders más utilizados en VTEX IO:"
            },
            {
              id: "lista-builders",
              type: "list",
              content: "",
              items: [
                "react: Para aplicaciones React y componentes de frontend",
                "store: Para temas y configuraciones de tienda",
                "node: Para servicios backend y APIs",
                "styles: Para hojas de estilo CSS",
                "docs: Para documentación",
                "graphql: Para esquemas GraphQL"
              ]
            },
            {
              id: "store-framework",
              type: "heading",
              title: "Store Framework",
              content: "El Store Framework es el conjunto de componentes y herramientas que permite crear tiendas online completas. Incluye componentes para header, footer, páginas de producto, carrito de compras y mucho más."
            }
          ]
        },
        codeExample: {
          language: "json",
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
          description: "Manifest con múltiples builders para una aplicación completa"
        },
        resources: {
          documentation: [
            { title: "Guía de Builders", url: "https://developers.vtex.com/docs/guides/vtex-io-documentation-builders", icon: "📖" },
            { title: "Store Framework", url: "https://developers.vtex.com/docs/guides/vtex-io-documentation-what-is-vtex-store-framework", icon: "🏪" }
          ],
          videos: [],
          links: []
        },
        prevLesson: "leccion-1",
        nextLesson: "leccion-3"
      },
      "leccion-3": {
        id: "workspaces-desarrollo",
        title: "Workspaces y Desarrollo",
        duration: "40 minutos",
        moduleInfo: "Módulo 1 de 3",
        content: {
          sections: [
            {
              id: "workspaces-intro",
              type: "heading",
              title: "¿Qué son los Workspaces?",
              content: "Los workspaces son ambientes aislados de desarrollo que permiten trabajar en aplicaciones sin afectar la tienda en producción. Cada workspace es independiente y puede tener diferentes versiones de aplicaciones instaladas."
            },
            {
              id: "tipos-workspaces",
              type: "heading",
              title: "Tipos de Workspaces",
              content: "Existen diferentes tipos de workspaces según su propósito:"
            },
            {
              id: "lista-workspaces",
              type: "list",
              content: "",
              items: [
                "Master: Workspace de producción, visible para todos los usuarios",
                "Development: Workspaces de desarrollo para testing y experimentación",
                "Production: Workspaces para testing final antes de ir a master"
              ]
            },
            {
              id: "flujo-desarrollo",
              type: "heading",
              title: "Flujo de Desarrollo",
              content: "El flujo típico de desarrollo en VTEX IO incluye crear un workspace de desarrollo, hacer cambios, probar la funcionalidad, y finalmente promover los cambios a producción."
            }
          ]
        },
        codeExample: {
          language: "bash",
          code: `# Crear y usar un workspace de desarrollo
vtex use workspace-name

# Verificar workspace actual
vtex whoami

# Listar workspaces disponibles
vtex workspace list

# Promover workspace a master
vtex workspace promote`,
          description: "Comandos básicos para gestión de workspaces"
        },
        resources: {
          documentation: [
            { title: "Guía de Workspaces", url: "https://developers.vtex.com/docs/guides/vtex-io-documentation-workspace", icon: "📖" }
          ],
          videos: [],
          links: []
        },
        prevLesson: "leccion-2"
      }
    },
    "vtex-cli": {
      "leccion-1": {
        id: "instalacion-cli",
        title: "Instalación y Configuración de VTEX CLI",
        duration: "30 minutos",
        moduleInfo: "Módulo 2 de 3",
        content: {
          sections: [
            {
              id: "requisitos",
              type: "heading",
              title: "Requisitos del Sistema",
              content: "Antes de instalar VTEX CLI, asegúrate de tener Node.js versión 14 o superior instalado en tu sistema."
            },
            {
              id: "instalacion",
              type: "heading",
              title: "Instalación de VTEX CLI",
              content: "VTEX CLI se instala globalmente usando npm. Una vez instalado, tendrás acceso a todos los comandos de VTEX desde cualquier directorio."
            },
            {
              id: "configuracion",
              type: "heading",
              title: "Configuración Inicial",
              content: "Después de la instalación, necesitas autenticarte con tu cuenta VTEX para poder usar los comandos."
            }
          ]
        },
        codeExample: {
          language: "bash",
          code: `# Instalar VTEX CLI globalmente
npm install -g @vtex/cli

# Verificar instalación
vtex --version

# Login en tu cuenta VTEX
vtex login {account-name}

# Verificar autenticación
vtex whoami`,
          description: "Comandos para instalar y configurar VTEX CLI"
        },
        resources: {
          documentation: [
            { title: "Instalación de CLI", url: "https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-installation-and-command-reference", icon: "📖" }
          ],
          videos: [],
          links: [
            { title: "Node.js Download", url: "https://nodejs.org/" }
          ]
        },
        nextLesson: "leccion-2"
      },
      "leccion-2": {
        id: "comandos-basicos",
        title: "Comandos Básicos de VTEX CLI",
        duration: "45 minutos",
        moduleInfo: "Módulo 2 de 3",
        content: {
          sections: [
            {
              id: "comandos-workspace",
              type: "heading",
              title: "Comandos de Workspace",
              content: "Los comandos de workspace te permiten gestionar diferentes ambientes de desarrollo."
            },
            {
              id: "lista-workspace",
              type: "list",
              content: "",
              items: [
                "vtex use {workspace}: Crear o cambiar a un workspace",
                "vtex workspace list: Listar todos los workspaces",
                "vtex workspace delete {workspace}: Eliminar un workspace",
                "vtex workspace promote: Promover workspace a master"
              ]
            },
            {
              id: "comandos-apps",
              type: "heading",
              title: "Comandos de Aplicaciones",
              content: "Estos comandos te ayudan a gestionar aplicaciones en tu workspace."
            },
            {
              id: "lista-apps",
              type: "list",
              content: "",
              items: [
                "vtex list: Ver aplicaciones instaladas",
                "vtex install {app}: Instalar una aplicación",
                "vtex uninstall {app}: Desinstalar una aplicación",
                "vtex update: Actualizar aplicaciones"
              ]
            }
          ]
        },
        codeExample: {
          language: "bash",
          code: `# Gestión de workspaces
vtex use development
vtex workspace list
vtex workspace delete old-workspace

# Gestión de aplicaciones
vtex list
vtex install vtex.store-theme
vtex uninstall vtex.old-app
vtex update`,
          description: "Ejemplos de comandos básicos de VTEX CLI"
        },
        resources: {
          documentation: [
            { title: "Referencia de comandos", url: "https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-command-reference", icon: "📖" }
          ],
          videos: [],
          links: []
        },
        prevLesson: "leccion-1",
        nextLesson: "leccion-3"
      },
      "leccion-3": {
        id: "comandos-avanzados",
        title: "Comandos Avanzados y Debugging",
        duration: "50 minutos",
        moduleInfo: "Módulo 2 de 3",
        content: {
          sections: [
            {
              id: "debugging",
              type: "heading",
              title: "Comandos de Debugging",
              content: "VTEX CLI incluye herramientas para debugging y monitoreo de aplicaciones."
            },
            {
              id: "lista-debug",
              type: "list",
              content: "",
              items: [
                "vtex logs: Ver logs de aplicaciones",
                "vtex debug: Activar modo debug",
                "vtex inspect: Inspeccionar aplicaciones",
                "vtex test: Ejecutar tests"
              ]
            },
            {
              id: "deployment",
              type: "heading",
              title: "Comandos de Deployment",
              content: "Estos comandos te permiten publicar y gestionar versiones de tus aplicaciones."
            },
            {
              id: "lista-deploy",
              type: "list",
              content: "",
              items: [
                "vtex publish: Publicar una nueva versión",
                "vtex deploy: Desplegar aplicación",
                "vtex release: Crear un release",
                "vtex undeploy: Revertir deployment"
              ]
            }
          ]
        },
        codeExample: {
          language: "bash",
          code: `# Debugging
vtex logs --all
vtex debug --verbose
vtex inspect my-app

# Deployment
vtex publish
vtex deploy --force
vtex release major
vtex undeploy --app=my-app`,
          description: "Comandos avanzados para debugging y deployment"
        },
        resources: {
          documentation: [
            { title: "Debugging en VTEX IO", url: "https://developers.vtex.com/docs/guides/vtex-io-documentation-debugging-overview", icon: "📖" }
          ],
          videos: [],
          links: []
        },
        prevLesson: "leccion-2"
      }
    },
    "vtex-init-link": {
      "leccion-1": {
        id: "vtex-init-comando",
        title: "Comando vtex init",
        duration: "40 minutos",
        moduleInfo: "Módulo 3 de 3",
        content: {
          sections: [
            {
              id: "init-intro",
              type: "heading",
              title: "¿Qué hace vtex init?",
              content: "El comando vtex init inicializa un nuevo proyecto VTEX IO basado en templates predefinidos. Es la forma más rápida de comenzar un nuevo desarrollo."
            },
            {
              id: "templates",
              type: "heading",
              title: "Templates Disponibles",
              content: "VTEX IO ofrece varios templates para diferentes tipos de proyectos:"
            },
            {
              id: "lista-templates",
              type: "list",
              content: "",
              items: [
                "store-theme: Template para temas de tienda",
                "react-app: Template para aplicaciones React",
                "service-example: Template para servicios backend",
                "graphql-example: Template para APIs GraphQL",
                "pixel-app: Template para aplicaciones de tracking"
              ]
            },
            {
              id: "proceso-init",
              type: "heading",
              title: "Proceso de Inicialización",
              content: "Al ejecutar vtex init, el CLI te guiará a través de un proceso interactivo para seleccionar el template y configurar tu proyecto."
            }
          ]
        },
        codeExample: {
          language: "bash",
          code: `# Inicializar un nuevo proyecto
vtex init

# Seleccionar template específico
vtex init --template=store-theme

# Inicializar en directorio específico
vtex init my-project-name

# Ver templates disponibles
vtex init --list-templates`,
          description: "Diferentes formas de usar el comando vtex init"
        },
        resources: {
          documentation: [
            { title: "Guía de vtex init", url: "https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-command-reference", icon: "📖" }
          ],
          videos: [],
          links: []
        },
        nextLesson: "leccion-2"
      },
      "leccion-2": {
        id: "vtex-link-comando",
        title: "Comando vtex link",
        duration: "45 minutos",
        moduleInfo: "Módulo 3 de 3",
        content: {
          sections: [
            {
              id: "link-intro",
              type: "heading",
              title: "¿Qué hace vtex link?",
              content: "El comando vtex link conecta tu código local con el workspace de VTEX, permitiendo desarrollo en tiempo real. Los cambios se reflejan inmediatamente en tu tienda de desarrollo."
            },
            {
              id: "funcionamiento",
              type: "heading",
              title: "Cómo Funciona vtex link",
              content: "Cuando ejecutas vtex link, el CLI:"
            },
            {
              id: "lista-funcionamiento",
              type: "list",
              content: "",
              items: [
                "Sube tu código al workspace actual",
                "Instala las dependencias automáticamente",
                "Establece un túnel para sincronización en tiempo real",
                "Permite hot-reload para desarrollo rápido",
                "Muestra logs en tiempo real"
              ]
            },
            {
              id: "mejores-practicas",
              type: "heading",
              title: "Mejores Prácticas",
              content: "Para un desarrollo eficiente con vtex link, sigue estas recomendaciones:"
            },
            {
              id: "lista-practicas",
              type: "list",
              content: "",
              items: [
                "Usa un workspace de desarrollo dedicado",
                "Mantén el link activo durante el desarrollo",
                "Revisa los logs para detectar errores",
                "Usa --verbose para debugging detallado"
              ]
            }
          ]
        },
        codeExample: {
          language: "bash",
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
          description: "Diferentes opciones del comando vtex link"
        },
        resources: {
          documentation: [
            { title: "Guía de vtex link", url: "https://developers.vtex.com/docs/guides/vtex-io-documentation-linking-an-app", icon: "📖" }
          ],
          videos: [],
          links: []
        },
        prevLesson: "leccion-1",
        nextLesson: "leccion-3"
      },
      "leccion-3": {
        id: "flujo-desarrollo-completo",
        title: "Flujo de Desarrollo Completo",
        duration: "60 minutos",
        moduleInfo: "Módulo 3 de 3",
        content: {
          sections: [
            {
              id: "flujo-completo",
              type: "heading",
              title: "Flujo de Desarrollo Completo",
              content: "Aprende el flujo completo desde la inicialización hasta el deployment de una aplicación VTEX IO."
            },
            {
              id: "pasos-desarrollo",
              type: "heading",
              title: "Pasos del Desarrollo",
              content: "El flujo típico incluye estos pasos:"
            },
            {
              id: "lista-pasos",
              type: "list",
              content: "",
              items: [
                "1. Crear workspace de desarrollo",
                "2. Inicializar proyecto con vtex init",
                "3. Configurar manifest.json",
                "4. Desarrollar funcionalidades",
                "5. Usar vtex link para testing",
                "6. Hacer debugging y ajustes",
                "7. Publicar con vtex publish",
                "8. Promover a producción"
              ]
            },
            {
              id: "ejemplo-practico",
              type: "heading",
              title: "Ejemplo Práctico",
              content: "Veamos un ejemplo completo de desarrollo de una aplicación desde cero."
            }
          ]
        },
        codeExample: {
          language: "bash",
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
          description: "Flujo completo de desarrollo con VTEX IO"
        },
        resources: {
          documentation: [
            { title: "Guía de desarrollo completa", url: "https://developers.vtex.com/docs/guides/vtex-io-documentation-developing-an-app", icon: "📖" }
          ],
          videos: [],
          links: []
        },
        prevLesson: "leccion-2"
      }
    }
  },
  intermedio: {
    "plp": {
      "leccion-1": {
        id: "introduccion-plp",
        title: "Introducción a Product List Page (PLP)",
        duration: "45 minutos",
        moduleInfo: "Módulo 1 de 4",
        content: {
          sections: [
            {
              id: "que-es-plp",
              type: "heading",
              title: "¿Qué es una Product List Page?",
              content: "La Product List Page (PLP) es la página donde se muestran múltiples productos, generalmente como resultado de una búsqueda o navegación por categorías. Es una de las páginas más importantes para la experiencia de compra."
            },
            {
              id: "componentes-plp",
              type: "heading",
              title: "Componentes principales de una PLP",
              content: "Una PLP típica incluye varios componentes esenciales:"
            },
            {
              id: "lista-componentes",
              type: "list",
              content: "",
              items: [
                "Search Result: Contenedor principal de resultados",
                "Gallery: Grid de productos",
                "Product Summary: Tarjeta individual de producto",
                "Filter Navigator: Filtros de búsqueda",
                "Order By: Opciones de ordenamiento",
                "Pagination: Navegación entre páginas"
              ]
            },
            {
              id: "store-framework",
              type: "heading",
              title: "PLP en Store Framework",
              content: "En VTEX Store Framework, la PLP se construye usando bloques predefinidos que se pueden personalizar y extender según las necesidades del negocio."
            }
          ]
        },
        codeExample: {
          language: "json",
          code: `{
  "store.search": {
    "blocks": [
      "search-result-layout"
    ]
  },
  "search-result-layout": {
    "blocks": [
      "search-result-layout.desktop",
      "search-result-layout.mobile"
    ]
  },
  "search-result-layout.desktop": {
    "children": [
      "breadcrumb.search",
      "search-title.v2",
      "total-products.v2",
      "order-by.v2",
      "search-fetch-previous",
      "search-content",
      "filter-navigator.v3",
      "search-fetch-more"
    ]
  }
}`,
          description: "Estructura básica de una PLP en Store Framework"
        },
        resources: {
          documentation: [
            { title: "Guía de PLP", url: "https://developers.vtex.com/docs/guides/vtex-io-documentation-building-a-product-list-page", icon: "📖" }
          ],
          videos: [],
          links: []
        },
        nextLesson: "leccion-2"
      },
      "leccion-2": {
        id: "configuracion-gallery",
        title: "Configuración del Gallery y Product Summary",
        duration: "60 minutos",
        moduleInfo: "Módulo 1 de 4",
        content: {
          sections: [
            {
              id: "gallery-config",
              type: "heading",
              title: "Configuración del Gallery",
              content: "El componente Gallery controla cómo se muestran los productos en la grilla. Permite configurar el número de columnas, espaciado y comportamiento responsive."
            },
            {
              id: "product-summary",
              type: "heading",
              title: "Personalización del Product Summary",
              content: "El Product Summary es la tarjeta individual de cada producto. Puedes personalizar qué información mostrar y cómo se ve."
            },
            {
              id: "elementos-summary",
              type: "list",
              content: "Elementos típicos de un Product Summary:",
              items: [
                "Product Image: Imagen principal del producto",
                "Product Name: Nombre del producto",
                "Product Price: Precio y ofertas",
                "Product Rating: Calificaciones",
                "Buy Button: Botón de compra",
                "Wishlist Button: Botón de favoritos"
              ]
            }
          ]
        },
        codeExample: {
          language: "json",
          code: `{
  "gallery": {
    "props": {
      "layouts": [
        {
          "name": "grid",
          "component": "GridSummary",
          "itemsPerRow": {
            "(min-width:1300px)": 4,
            "desktop": 3,
            "tablet": 2,
            "phone": 1
          }
        }
      ],
      "GridSummary": "product-summary.shelf"
    }
  },
  "product-summary.shelf": {
    "children": [
      "product-summary-image",
      "product-summary-name",
      "product-summary-space",
      "product-summary-price",
      "product-summary-buy-button"
    ]
  }
}`,
          description: "Configuración del Gallery y Product Summary"
        },
        resources: {
          documentation: [
            { title: "Gallery Component", url: "https://developers.vtex.com/docs/apps/vtex.store-components/gallery", icon: "📖" },
            { title: "Product Summary", url: "https://developers.vtex.com/docs/apps/vtex.product-summary", icon: "📖" }
          ],
          videos: [],
          links: []
        },
        prevLesson: "leccion-1",
        nextLesson: "leccion-3"
      },
      "leccion-3": {
        id: "filtros-ordenamiento",
        title: "Filtros y Ordenamiento",
        duration: "50 minutos",
        moduleInfo: "Módulo 1 de 4",
        content: {
          sections: [
            {
              id: "filter-navigator",
              type: "heading",
              title: "Filter Navigator",
              content: "El Filter Navigator permite a los usuarios filtrar productos por diferentes criterios como precio, marca, categoría, especificaciones, etc."
            },
            {
              id: "tipos-filtros",
              type: "list",
              content: "Tipos de filtros disponibles:",
              items: [
                "Price Range: Filtro por rango de precios",
                "Brand: Filtro por marca",
                "Category: Filtro por categoría",
                "Specification: Filtros por especificaciones del producto",
                "Availability: Filtro por disponibilidad"
              ]
            },
            {
              id: "order-by",
              type: "heading",
              title: "Order By Component",
              content: "El componente Order By permite a los usuarios ordenar los resultados según diferentes criterios como relevancia, precio, nombre, etc."
            }
          ]
        },
        codeExample: {
          language: "json",
          code: `{
  "filter-navigator.v3": {
    "props": {
      "categoryFiltersMode": "href",
      "showClearByFilter": true,
      "updateOnFilterSelectionOnMobile": true
    }
  },
  "order-by.v2": {
    "props": {
      "hiddenOptions": ["OrderByNameASC", "OrderByNameDESC"],
      "showOrderTitle": true
    }
  },
  "search-content": {
    "blocks": [
      "gallery",
      "not-found"
    ]
  }
}`,
          description: "Configuración de filtros y ordenamiento"
        },
        resources: {
          documentation: [
            { title: "Filter Navigator", url: "https://developers.vtex.com/docs/apps/vtex.search-result/filter-navigator", icon: "📖" },
            { title: "Order By Component", url: "https://developers.vtex.com/docs/apps/vtex.search-result/order-by", icon: "📖" }
          ],
          videos: [],
          links: []
        },
        prevLesson: "leccion-2"
      }
    },
    "pdp": {
      "leccion-1": {
        id: "introduccion-pdp",
        title: "Introducción a Product Detail Page (PDP)",
        duration: "50 minutos",
        moduleInfo: "Módulo 2 de 4",
        content: {
          sections: [
            {
              id: "que-es-pdp",
              type: "heading",
              title: "¿Qué es una Product Detail Page?",
              content: "La Product Detail Page (PDP) es la página donde se muestra información detallada de un producto específico. Es crucial para la conversión ya que aquí el usuario toma la decisión de compra."
            },
            {
              id: "componentes-pdp",
              type: "heading",
              title: "Componentes principales de una PDP",
              content: "Una PDP completa incluye múltiples componentes:"
            },
            {
              id: "lista-componentes-pdp",
              type: "list",
              content: "",
              items: [
                "Product Images: Galería de imágenes del producto",
                "Product Name: Nombre y título del producto",
                "Product Price: Precio, descuentos y ofertas",
                "Product Description: Descripción detallada",
                "SKU Selector: Selector de variaciones",
                "Buy Button: Botón de compra",
                "Shipping Simulator: Simulador de envío",
                "Product Specifications: Especificaciones técnicas"
              ]
            }
          ]
        },
        codeExample: {
          language: "json",
          code: `{
  "store.product": {
    "children": [
      "flex-layout.row#product-breadcrumb",
      "flex-layout.row#product-main"
    ]
  },
  "flex-layout.row#product-main": {
    "props": {
      "colGap": 7,
      "rowGap": 7,
      "marginTop": 4,
      "marginBottom": 7,
      "paddingTop": 7,
      "paddingBottom": 7
    },
    "children": [
      "flex-layout.col#product-image",
      "flex-layout.col#right-col"
    ]
  }
}`,
          description: "Estructura básica de una PDP en Store Framework"
        },
        resources: {
          documentation: [
            { title: "Guía de PDP", url: "https://developers.vtex.com/docs/guides/vtex-io-documentation-building-a-product-details-page", icon: "📖" }
          ],
          videos: [],
          links: []
        },
        nextLesson: "leccion-2"
      }
    },
    "minicartv2": {
      "leccion-1": {
        id: "introduccion-minicart",
        title: "Introducción a Minicart v2",
        duration: "40 minutos",
        moduleInfo: "Módulo 3 de 4",
        content: {
          sections: [
            {
              id: "que-es-minicart",
              type: "heading",
              title: "¿Qué es Minicart v2?",
              content: "Minicart v2 es la versión mejorada del componente de carrito de compras que se muestra como un drawer o popup. Permite a los usuarios ver y gestionar los productos en su carrito sin salir de la página actual."
            },
            {
              id: "caracteristicas-v2",
              type: "heading",
              title: "Nuevas características de v2",
              content: "Minicart v2 incluye mejoras significativas:"
            },
            {
              id: "lista-caracteristicas-v2",
              type: "list",
              content: "",
              items: [
                "Mejor performance y velocidad de carga",
                "Diseño más moderno y responsive",
                "Mejor integración con checkout",
                "Soporte para cupones de descuento",
                "Calculadora de envío integrada",
                "Animaciones y transiciones mejoradas"
              ]
            }
          ]
        },
        codeExample: {
          language: "json",
          code: `{
  "minicart.v2": {
    "props": {
      "MinicartIcon": "icon-cart#minicart-icon"
    },
    "children": [
      "minicart-base-content"
    ]
  },
  "icon-cart#minicart-icon": {
    "props": {
      "size": 24
    }
  },
  "minicart-base-content": {
    "blocks": [
      "minicart-empty-state"
    ],
    "children": [
      "minicart-product-list",
      "flex-layout.row#minicart-footer"
    ]
  }
}`,
          description: "Configuración básica de Minicart v2"
        },
        resources: {
          documentation: [
            { title: "Minicart v2 Documentation", url: "https://developers.vtex.com/docs/apps/vtex.minicart", icon: "📖" }
          ],
          videos: [],
          links: []
        },
        nextLesson: "leccion-2"
      }
    },
    "my-account": {
      "leccion-1": {
        id: "introduccion-my-account",
        title: "Introducción a My Account",
        duration: "45 minutos",
        moduleInfo: "Módulo 4 de 4",
        content: {
          sections: [
            {
              id: "que-es-my-account",
              type: "heading",
              title: "¿Qué es My Account?",
              content: "My Account es la sección donde los usuarios pueden gestionar su información personal, ver historial de pedidos, direcciones, métodos de pago y otras configuraciones de cuenta."
            },
            {
              id: "secciones-my-account",
              type: "heading",
              title: "Secciones principales",
              content: "My Account incluye varias secciones importantes:"
            },
            {
              id: "lista-secciones",
              type: "list",
              content: "",
              items: [
                "Profile: Información personal del usuario",
                "Addresses: Gestión de direcciones de envío",
                "Orders: Historial de pedidos y seguimiento",
                "Credit Cards: Gestión de métodos de pago",
                "Wishlist: Lista de productos favoritos",
                "Subscriptions: Gestión de suscripciones"
              ]
            }
          ]
        },
        codeExample: {
          language: "json",
          code: `{
  "store.account": {
    "children": [
      "flex-layout.row#account-content"
    ]
  },
  "flex-layout.row#account-content": {
    "children": [
      "flex-layout.col#account-menu",
      "flex-layout.col#account-page"
    ]
  },
  "flex-layout.col#account-menu": {
    "children": [
      "vtex.my-account:my-account-menu"
    ]
  }
}`,
          description: "Estructura básica de My Account"
        },
        resources: {
          documentation: [
            { title: "My Account Documentation", url: "https://developers.vtex.com/docs/apps/vtex.my-account", icon: "📖" }
          ],
          videos: [],
          links: []
        },
        nextLesson: "leccion-2"
      }
    }
  },
  avanzado: {
    "checkout": {
      "leccion-1": {
        id: "introduccion-checkout",
        title: "Introducción al Checkout",
        duration: "60 minutos",
        moduleInfo: "Módulo 1 de 3",
        content: {
          sections: [
            {
              id: "que-es-checkout",
              type: "heading",
              title: "¿Qué es el Checkout?",
              content: "El Checkout es el proceso final donde el usuario completa su compra. Es una de las páginas más críticas para la conversión y debe estar optimizada para reducir el abandono del carrito."
            },
            {
              id: "fases-checkout",
              type: "heading",
              title: "Fases del Checkout",
              content: "El checkout típicamente incluye estas fases:"
            },
            {
              id: "lista-fases",
              type: "list",
              content: "",
              items: [
                "Cart: Revisión de productos en el carrito",
                "Identification: Login o registro del usuario",
                "Shipping: Selección de dirección y método de envío",
                "Payment: Selección de método de pago",
                "Confirmation: Confirmación final del pedido"
              ]
            }
          ]
        },
        codeExample: {
          language: "javascript",
          code: `// Personalización del checkout con CSS
window.addEventListener('load', function() {
  // Personalizar el header del checkout
  const checkoutHeader = document.querySelector('.checkout-header');
  if (checkoutHeader) {
    checkoutHeader.style.backgroundColor = '#8B5CF6';
  }
  
  // Personalizar botones
  const buttons = document.querySelectorAll('.btn-success');
  buttons.forEach(button => {
    button.style.backgroundColor = '#8B5CF6';
    button.style.borderColor = '#8B5CF6';
  });
});`,
          description: "Ejemplo de personalización básica del checkout"
        },
        resources: {
          documentation: [
            { title: "Checkout Documentation", url: "https://developers.vtex.com/docs/guides/checkout-overview", icon: "📖" }
          ],
          videos: [],
          links: []
        },
        nextLesson: "leccion-2"
      }
    },
    "componentes-custom": {
      "leccion-1": {
        id: "introduccion-componentes-custom",
        title: "Introducción a Componentes Custom",
        duration: "75 minutos",
        moduleInfo: "Módulo 2 de 3",
        content: {
          sections: [
            {
              id: "que-son-componentes-custom",
              type: "heading",
              title: "¿Qué son los Componentes Custom?",
              content: "Los componentes custom son componentes React personalizados que desarrollas desde cero para satisfacer necesidades específicas que no cubren los componentes estándar de VTEX IO."
            },
            {
              id: "cuando-usar",
              type: "heading",
              title: "Cuándo usar componentes custom",
              content: "Considera crear un componente custom cuando:"
            },
            {
              id: "lista-cuando-usar",
              type: "list",
              content: "",
              items: [
                "Necesitas funcionalidad específica no disponible",
                "Requieres integración con APIs externas",
                "Necesitas un diseño muy específico",
                "Quieres reutilizar lógica compleja",
                "Necesitas optimizaciones de performance específicas"
              ]
            }
          ]
        },
        codeExample: {
          language: "typescript",
          code: `import React, { useState } from 'react'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = ['container', 'title', 'button'] as const

interface Props {
  title: string
  buttonText: string
}

const CustomComponent: React.FC<Props> = ({ title, buttonText }) => {
  const handles = useCssHandles(CSS_HANDLES)
  const [count, setCount] = useState(0)

  return (
    <div className={handles.container}>
      <h2 className={handles.title}>{title}</h2>
      <button 
        className={handles.button}
        onClick={() => setCount(count + 1)}
      >
        {buttonText} ({count})
      </button>
    </div>
  )
}

export default CustomComponent`,
          description: "Ejemplo básico de un componente custom en VTEX IO"
        },
        resources: {
          documentation: [
            { title: "Developing Apps", url: "https://developers.vtex.com/docs/guides/vtex-io-documentation-developing-an-app", icon: "📖" }
          ],
          videos: [],
          links: []
        },
        nextLesson: "leccion-2"
      }
    },
    "mails": {
      "leccion-1": {
        id: "introduccion-mails",
        title: "Introducción a Templates de Email",
        duration: "45 minutos",
        moduleInfo: "Módulo 3 de 3",
        content: {
          sections: [
            {
              id: "que-son-mail-templates",
              type: "heading",
              title: "¿Qué son los Templates de Email?",
              content: "Los templates de email son plantillas HTML que se usan para enviar emails transaccionales y promocionales a los clientes. VTEX permite personalizar completamente estos templates."
            },
            {
              id: "tipos-emails",
              type: "heading",
              title: "Tipos de emails",
              content: "VTEX maneja diferentes tipos de emails:"
            },
            {
              id: "lista-tipos-emails",
              type: "list",
              content: "",
              items: [
                "Order Confirmation: Confirmación de pedido",
                "Payment Confirmation: Confirmación de pago",
                "Shipping Notification: Notificación de envío",
                "Delivery Confirmation: Confirmación de entrega",
                "Newsletter: Emails promocionales",
                "Abandoned Cart: Carrito abandonado"
              ]
            }
          ]
        },
        codeExample: {
          language: "html",
          code: `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Confirmación de Pedido</title>
</head>
<body>
  <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif;">
    <header style="background-color: #8B5CF6; padding: 20px; text-align: center;">
      <h1 style="color: white; margin: 0;">¡Gracias por tu compra!</h1>
    </header>
    
    <main style="padding: 20px;">
      <p>Hola {{cliente.nombre}},</p>
      <p>Tu pedido #{{pedido.numero}} ha sido confirmado.</p>
      
      <div style="border: 1px solid #ddd; padding: 15px; margin: 20px 0;">
        <h3>Resumen del pedido:</h3>
        {{#each productos}}
        <div style="border-bottom: 1px solid #eee; padding: 10px 0;">
          <strong>{{nombre}}</strong> - Cantidad: {{cantidad}} - Precio: {{precio}}
        </div>
        {{/each}}
        <div style="text-align: right; font-weight: bold; margin-top: 10px;">
          Total: {{pedido.total}}
        </div>
      </div>
    </main>
  </div>
</body>
</html>`,
          description: "Ejemplo de template de email para confirmación de pedido"
        },
        resources: {
          documentation: [
            { title: "Message Center", url: "https://help.vtex.com/en/tutorial/understanding-the-message-center--tutorials_84", icon: "📖" }
          ],
          videos: [],
          links: []
        },
        nextLesson: "leccion-2"
      }
    }
  }
};

export default function LessonPage() {
  const params = useParams();
  const router = useRouter();
  const { nivel, modulo, leccion } = params;
  
  const [timeSpent, setTimeSpent] = useState(0);

  const lesson = lessonData[nivel as string]?.[modulo as string]?.[leccion as string];

  useEffect(() => {
    // Timer para tracking de tiempo
    const interval = setInterval(() => {
      setTimeSpent(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!lesson) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Lección no encontrada</h1>
          <button 
            onClick={() => router.push(`/ruta-aprendizaje/${nivel}`)}
            className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          >
            Volver al curso
          </button>
        </div>
      </div>
    );
  }

  const handlePrevious = () => {
    if (lesson.prevLesson) {
      router.push(`/ruta-aprendizaje/${nivel}/${modulo}/${lesson.prevLesson}`);
    }
  };

  const handleNext = () => {
    if (lesson.nextLesson) {
      router.push(`/ruta-aprendizaje/${nivel}/${modulo}/${lesson.nextLesson}`);
    } else {
      // Si no hay siguiente lección, volver al curso
      router.push(`/ruta-aprendizaje/${nivel}`);
    }
  };

  // Función para extraer el ID del video de YouTube
  const getYouTubeVideoId = (url: string) => {
    const match = url.match(/(?:youtube\.com\/embed\/|youtu\.be\/)([^?&]+)/);
    return match ? match[1] : null;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <nav className="flex items-center space-x-2 text-sm text-gray-600">
              <button 
                onClick={() => router.push('/')}
                className="hover:text-purple-600 flex items-center"
              >
                <i className="fas fa-arrow-left mr-2"></i>
                Volver al inicio
              </button>
              <span>/</span>
              <span>Cursos</span>
              <span>/</span>
              <span className="capitalize">{nivel}</span>
              <span>/</span>
              <span>Fundamentos</span>
            </nav>
            
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center">
                <i className="fas fa-clock mr-1"></i>
                <span>Tiempo estimado: {lesson.duration}</span>
              </div>
              <div className="flex items-center">
                <span>{lesson.moduleInfo}</span>
                <div className="ml-2 w-16 bg-gray-200 rounded-full h-1">
                  <div className="bg-purple-600 h-1 rounded-full" style={{ width: '33%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">{lesson.title}</h1>
            
            {/* Video Player */}
            {lesson.videoUrl && (
              <div className="mb-8">
                <div className="relative w-full h-64 md:h-96 bg-black rounded-lg overflow-hidden">
                  <iframe
                    src={lesson.videoUrl}
                    title={lesson.title}
                    className="absolute inset-0 w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="text-gray-600 mt-2 text-center">Video: {lesson.title}</p>
              </div>
            )}

            {/* Content Sections */}
            <div className="space-y-6 mb-8">
              {lesson.content.sections.map((section) => (
                <div key={section.id}>
                  {section.type === 'heading' && (
                    <div>
                      <h2 className="text-xl font-bold text-gray-900 mb-3">{section.title}</h2>
                      {section.content && <p className="text-gray-700 leading-relaxed">{section.content}</p>}
                    </div>
                  )}
                  
                  {section.type === 'text' && (
                    <p className="text-gray-700 leading-relaxed">{section.content}</p>
                  )}
                  
                  {section.type === 'list' && section.items && (
                    <div>
                      {section.content && <p className="text-gray-700 leading-relaxed mb-3">{section.content}</p>}
                      <ul className="space-y-2">
                        {section.items.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Code Example */}
            {lesson.codeExample && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Ejemplo de código</h3>
                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-green-400 text-sm">
                    <code>{lesson.codeExample.code}</code>
                  </pre>
                </div>
                <p className="text-gray-600 mt-2 text-sm">{lesson.codeExample.description}</p>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between items-center pt-8 border-t">
              <button 
                onClick={handlePrevious}
                disabled={!lesson.prevLesson}
                className={`flex items-center px-4 py-2 ${
                  lesson.prevLesson 
                    ? 'text-gray-600 hover:text-purple-600' 
                    : 'text-gray-400 cursor-not-allowed'
                }`}
              >
                <i className="fas fa-arrow-left mr-2"></i>
                Anterior
              </button>
              
              <button 
                onClick={handleNext}
                className="flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
              >
                {lesson.nextLesson ? 'Siguiente lección' : 'Completar módulo'}
                <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Resources */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recursos</h3>
              
              {/* Documentation */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Documentación</h4>
                <div className="space-y-2">
                  {lesson.resources.documentation.map((doc, index) => (
                    <a 
                      key={index}
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-purple-600 hover:text-purple-800 text-sm"
                    >
                      <span className="mr-2">{doc.icon}</span>
                      {doc.title}
                    </a>
                  ))}
                </div>
              </div>

              {/* Videos */}
              {lesson.resources.videos.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">Videos Tutoriales</h4>
                  <div className="space-y-2">
                    {lesson.resources.videos.map((video, index) => (
                      <a 
                        key={index}
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-purple-600 hover:text-purple-800 text-sm"
                      >
                        <i className="fas fa-play-circle mr-2"></i>
                        {video.title}
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* External Links */}
              {lesson.resources.links.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-3">Enlaces Útiles</h4>
                  <div className="space-y-2">
                    {lesson.resources.links.map((link, index) => (
                      <a 
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-purple-600 hover:text-purple-800 text-sm"
                      >
                        <i className="fas fa-external-link-alt mr-2"></i>
                        {link.title}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Progress */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tu Progreso</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Tiempo en esta lección:</span>
                  <span>{Math.floor(timeSpent / 60)}:{(timeSpent % 60).toString().padStart(2, '0')}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Progreso del módulo:</span>
                  <span>33%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '33%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
