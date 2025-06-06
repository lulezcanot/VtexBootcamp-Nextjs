import { PrismaClient } from '@/lib/generated/prisma';

const prisma = new PrismaClient();

async function seedDocumentation() {
  try {
    console.log('🌱 Iniciando seed de documentación...');

    // Limpiar datos existentes
    await prisma.documentationSection.deleteMany();
    await prisma.documentationCategory.deleteMany();
    await prisma.codeExample.deleteMany();

    // Crear categorías de documentación
    const vtexIOCategory = await prisma.documentationCategory.create({
      data: {
        name: 'VTEX IO',
        slug: 'vtex-io',
        icon: 'settings',
        description: 'Componentes y funcionalidades de VTEX IO',
        order: 1,
      },
    });

    const guidesCategory = await prisma.documentationCategory.create({
      data: {
        name: 'Guías Paso a Paso',
        slug: 'guias-paso-a-paso',
        icon: 'play-circle',
        description: 'Tutoriales detallados y ejemplos prácticos',
        order: 2,
      },
    });

    const apiCategory = await prisma.documentationCategory.create({
      data: {
        name: 'Referencias de API',
        slug: 'referencias-api',
        icon: 'file-text',
        description: 'Documentación completa de APIs de VTEX',
        order: 3,
      },
    });

    const practicesCategory = await prisma.documentationCategory.create({
      data: {
        name: 'Mejores Prácticas',
        slug: 'mejores-practicas',
        icon: 'package',
        description: 'Optimiza tu desarrollo siguiendo las mejores prácticas',
        order: 4,
      },
    });

    const examplesCategory = await prisma.documentationCategory.create({
      data: {
        name: 'Ejemplos de Código',
        slug: 'ejemplos-codigo',
        icon: 'code',
        description: 'Código real de producción para guiarte',
        order: 5,
      },
    });

    // Crear secciones para VTEX IO
    await prisma.documentationSection.createMany({
      data: [
        {
          title: 'Rich Text',
          slug: 'rich-text',
          categoryId: vtexIOCategory.id,
          order: 1,
          content: JSON.stringify({
            description: 'El componente Rich Text es fundamental en VTEX IO para mostrar contenido de texto enriquecido con formato HTML y Markdown. Permite crear contenido editorial dinámico y atractivo.',
            readTime: '8 min',
            tags: ['componente', 'texto', 'html', 'markdown'],
            sections: [
              {
                title: 'Descripción',
                content: 'El Rich Text es uno de los componentes más versátiles de VTEX IO. Permite mostrar contenido HTML formateado de manera segura, soporta Markdown para formateo rápido, y es ideal para descripciones de productos, contenido editorial, banners informativos y cualquier texto que requiera formato especial.'
              },
              {
                title: 'Casos de uso comunes',
                content: '• Descripciones detalladas de productos\n• Contenido editorial en páginas institucionales\n• Banners informativos con texto formateado\n• Instrucciones de uso o políticas\n• Contenido promocional con enlaces\n• Texto con formato especial en landing pages'
              },
              {
                title: 'Implementación básica',
                code: `{
  "rich-text": {
    "component": "vtex.rich-text",
    "props": {
      "text": "**Texto en negrita** y *texto en cursiva*",
      "textAlignment": "CENTER",
      "textPosition": "CENTER"
    }
  }
}`
              },
              {
                title: 'Ejemplo avanzado con HTML',
                code: `{
  "rich-text#banner": {
    "component": "vtex.rich-text",
    "props": {
      "text": "<h2>¡Oferta Especial!</h2><p>Descuento del <strong>50%</strong> en productos seleccionados. <a href='/ofertas'>Ver más</a></p>",
      "textAlignment": "CENTER",
      "textColor": "c-on-emphasis",
      "blockClass": "banner-promocional"
    }
  }
}`
              },
              {
                title: 'Props disponibles',
                content: `| Prop | Tipo | Requerido | Valor por defecto | Descripción |
|------|------|-----------|-------------------|-------------|
| text | string | Sí | - | Contenido de texto a mostrar (HTML o Markdown) |
| textAlignment | enum | No | LEFT | Alineación horizontal: LEFT, CENTER, RIGHT |
| textPosition | enum | No | LEFT | Posición del texto: LEFT, CENTER, RIGHT |
| textColor | string | No | - | Color del texto usando tokens de diseño |
| font | string | No | - | Familia de fuente a usar |
| blockClass | string | No | - | Clase CSS personalizada para styling |
| htmlId | string | No | - | ID HTML para el elemento |`
              },
              {
                title: 'Mejores prácticas',
                content: '• Usa Markdown para formateo simple y rápido\n• Evita HTML complejo que pueda afectar el rendimiento\n• Utiliza textColor con tokens de diseño para consistencia\n• Implementa blockClass para estilos personalizados\n• Mantén el contenido accesible con estructura semántica\n• Prueba el contenido en diferentes dispositivos'
              },
              {
                note: 'El Rich Text soporta Markdown básico y HTML seguro. Algunos elementos HTML pueden ser filtrados por seguridad.'
              },
              {
                warning: 'Evita usar JavaScript inline o estilos CSS inline complejos, ya que pueden ser removidos por el sanitizador.'
              }
            ],
            resources: [
              {
                title: 'Documentación oficial Rich Text - VTEX IO',
                url: 'https://developers.vtex.com/docs/apps/vtex.rich-text',
                description: 'Documentación completa del componente Rich Text'
              },
              {
                title: 'Guía de Markdown',
                url: 'https://www.markdownguide.org/basic-syntax/',
                description: 'Sintaxis básica de Markdown soportada'
              },
              {
                title: 'Tokens de diseño VTEX',
                url: 'https://styleguide.vtex.com/',
                description: 'Guía de tokens de color y tipografía'
              }
            ]
          })
        },
        {
          title: 'Flex Layout',
          slug: 'flex-layout',
          categoryId: vtexIOCategory.id,
          order: 2,
          content: JSON.stringify({
            description: 'El Flex Layout es el sistema de layout más poderoso de VTEX IO, basado en CSS Flexbox. Permite crear diseños flexibles, responsivos y complejos de manera sencilla.',
            readTime: '12 min',
            tags: ['layout', 'flexbox', 'responsive', 'grid'],
            sections: [
              {
                title: 'Descripción',
                content: 'Flex Layout es el componente fundamental para crear layouts en VTEX IO. Basado en CSS Flexbox, permite organizar otros componentes de manera flexible y responsiva. Es esencial para crear diseños complejos, grids personalizados y layouts adaptativos que funcionen en todos los dispositivos.'
              },
              {
                title: 'Casos de uso comunes',
                content: '• Crear grids de productos personalizados\n• Organizar contenido en filas y columnas\n• Diseñar headers y footers complejos\n• Crear layouts responsivos sin CSS adicional\n• Alinear componentes vertical y horizontalmente\n• Distribuir espacio entre elementos de manera uniforme'
              },
              {
                title: 'Estructura básica',
                code: `{
  "flex-layout.row": {
    "children": [
      "flex-layout.col#left",
      "flex-layout.col#right"
    ]
  },
  "flex-layout.col#left": {
    "props": {
      "width": "50%"
    },
    "children": ["rich-text#content"]
  },
  "flex-layout.col#right": {
    "props": {
      "width": "50%"
    },
    "children": ["image"]
  }
}`
              },
              {
                title: 'Ejemplo avanzado - Grid de productos',
                code: `{
  "flex-layout.row#product-grid": {
    "props": {
      "colGap": 4,
      "rowGap": 4,
      "paddingTop": 4,
      "paddingBottom": 4
    },
    "children": [
      "flex-layout.col#product-1",
      "flex-layout.col#product-2",
      "flex-layout.col#product-3"
    ]
  },
  "flex-layout.col#product-1": {
    "props": {
      "width": {
        "mobile": "100%",
        "tablet": "50%",
        "desktop": "33.33%"
      }
    },
    "children": ["product-summary"]
  }
}`
              },
              {
                title: 'Props disponibles',
                content: `| Prop | Tipo | Requerido | Valor por defecto | Descripción |
|------|------|-----------|-------------------|-------------|
| width | string/object | No | auto | Ancho del elemento (puede ser responsivo) |
| height | string/object | No | auto | Alto del elemento (puede ser responsivo) |
| paddingTop | number | No | 0 | Padding superior (0-10) |
| paddingBottom | number | No | 0 | Padding inferior (0-10) |
| paddingLeft | number | No | 0 | Padding izquierdo (0-10) |
| paddingRight | number | No | 0 | Padding derecho (0-10) |
| marginTop | number | No | 0 | Margen superior (0-10) |
| marginBottom | number | No | 0 | Margen inferior (0-10) |
| colGap | number | No | 0 | Espacio entre columnas (0-10) |
| rowGap | number | No | 0 | Espacio entre filas (0-10) |
| blockClass | string | No | - | Clase CSS personalizada |
| htmlId | string | No | - | ID HTML para el elemento |`
              },
              {
                title: 'Props específicas de flex-layout.row',
                content: `| Prop | Tipo | Requerido | Valor por defecto | Descripción |
|------|------|-----------|-------------------|-------------|
| colSizing | enum | No | auto | Comportamiento de columnas: auto, equal |
| colJustify | enum | No | start | Justificación: start, center, end, between, around |
| rowJustify | enum | No | start | Justificación vertical: start, center, end, between, around |
| fullWidth | boolean | No | false | Si debe ocupar todo el ancho disponible |
| preserveLayoutOnMobile | boolean | No | false | Mantener layout en móvil |`
              },
              {
                title: 'Mejores prácticas',
                content: '• Usa valores responsivos para width cuando sea necesario\n• Aprovecha colGap y rowGap en lugar de margins manuales\n• Utiliza colSizing="equal" para columnas de igual tamaño\n• Implementa preserveLayoutOnMobile con cuidado\n• Combina con blockClass para estilos personalizados\n• Prueba en diferentes dispositivos para verificar responsividad'
              },
              {
                note: 'Flex Layout soporta valores responsivos usando objetos con breakpoints: mobile, tablet, desktop.'
              },
              {
                warning: 'Evita anidar demasiados flex-layouts ya que puede afectar el rendimiento. Usa la estructura más simple posible.'
              }
            ],
            resources: [
              {
                title: 'Documentación oficial Flex Layout - VTEX IO',
                url: 'https://developers.vtex.com/docs/apps/vtex.flex-layout',
                description: 'Documentación completa del componente Flex Layout'
              },
              {
                title: 'CSS Flexbox Guide',
                url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
                description: 'Guía completa de CSS Flexbox'
              },
              {
                title: 'Responsive Design en VTEX IO',
                url: 'https://developers.vtex.com/docs/guides/vtex-io-documentation-using-css-handles-for-store-customization',
                description: 'Guía de diseño responsivo en VTEX IO'
              }
            ]
          })
        },
        {
          title: 'Minicart',
          slug: 'minicart',
          categoryId: vtexIOCategory.id,
          order: 3,
          content: JSON.stringify({
            description: 'El Minicart es el componente esencial del carrito de compras que permite a los usuarios ver productos agregados, modificar cantidades y proceder al checkout de manera fluida.',
            readTime: '10 min',
            tags: ['ecommerce', 'carrito', 'checkout'],
            sections: [
              {
                title: 'Descripción',
                content: 'El Minicart es uno de los componentes más críticos en cualquier tienda de e-commerce. Proporciona una vista rápida del carrito de compras sin necesidad de navegar a una página separada, mejorando significativamente la experiencia del usuario y las tasas de conversión.'
              },
              {
                title: 'Casos de uso comunes',
                content: '• Vista rápida del carrito sin cambiar de página\n• Modificación de cantidades de productos\n• Eliminación de productos del carrito\n• Cálculo automático de totales y descuentos\n• Acceso directo al proceso de checkout\n• Mostrar productos relacionados o recomendados'
              },
              {
                title: 'Implementación básica',
                code: `{
  "minicart.v2": {
    "component": "vtex.minicart",
    "props": {
      "variation": "drawer"
    }
  }
}`
              },
              {
                title: 'Props disponibles',
                content: `| Prop | Tipo | Requerido | Valor por defecto | Descripción |
|------|------|-----------|-------------------|-------------|
| variation | enum | No | drawer | Tipo de visualización: drawer, popup, link |
| drawerSlideDirection | enum | No | rightToLeft | Dirección del drawer: rightToLeft, leftToRight |
| quantityDisplay | enum | No | not-empty | Cuándo mostrar cantidad: always, not-empty, never |
| itemCountMode | enum | No | distinct | Modo de conteo: distinct, total |
| backdropMode | enum | No | visible | Backdrop del drawer: visible, none |
| customPixelEventId | string | No | - | ID personalizado para eventos de pixel |
| blockClass | string | No | - | Clase CSS personalizada |`
              },
              {
                title: 'Mejores prácticas',
                content: '• Usa variation="drawer" para mejor experiencia móvil\n• Configura quantityDisplay según tu estrategia de UX\n• Implementa eventos de tracking para analytics\n• Asegúrate de que el diseño sea consistente con tu tema\n• Prueba la funcionalidad en diferentes dispositivos\n• Considera la velocidad de carga del componente'
              },
              {
                warning: 'Asegúrate de que el Minicart esté correctamente configurado con el checkout de tu tienda y que los eventos de analytics estén funcionando.'
              }
            ],
            resources: [
              {
                title: 'Documentación oficial Minicart - VTEX IO',
                url: 'https://developers.vtex.com/docs/apps/vtex.minicart',
                description: 'Documentación completa del componente Minicart'
              },
              {
                title: 'Order Manager Context',
                url: 'https://developers.vtex.com/docs/apps/vtex.order-manager',
                description: 'Context para manejar el estado del carrito'
              }
            ]
          })
        },
        {
          title: 'Banner',
          slug: 'banner',
          categoryId: vtexIOCategory.id,
          order: 4,
          content: JSON.stringify({
            description: 'Componente versátil para mostrar banners promocionales, informativos y de marketing con soporte para imágenes, texto y enlaces.',
            readTime: '8 min',
            tags: ['banner', 'promocional', 'marketing', 'imagen'],
            sections: [
              {
                title: 'Descripción',
                content: 'El componente Banner es fundamental para crear contenido promocional atractivo. Permite combinar imágenes, texto y enlaces de manera efectiva, siendo ideal para promociones, anuncios de productos y contenido de marketing.'
              },
              {
                title: 'Casos de uso comunes',
                content: '• Banners promocionales en homepage\n• Anuncios de ofertas especiales\n• Destacar nuevos productos o categorías\n• Banners informativos sobre envíos o políticas\n• Call-to-action para campañas específicas\n• Banners estacionales o de temporada'
              },
              {
                title: 'Implementación básica',
                code: `{
  "banner#home": {
    "component": "vtex.store-components",
    "props": {
      "image": {
        "mobile": "assets/banner-mobile.jpg",
        "desktop": "assets/banner-desktop.jpg"
      },
      "link": {
        "url": "/ofertas-especiales"
      },
      "alt": "Ofertas especiales - Hasta 50% de descuento"
    }
  }
}`
              },
              {
                title: 'Props disponibles',
                content: `| Prop | Tipo | Requerido | Valor por defecto | Descripción |
|------|------|-----------|-------------------|-------------|
| image | object/string | Sí | - | URL de imagen o objeto con mobile/desktop |
| link | object | No | - | Objeto con url y target para navegación |
| alt | string | Sí | - | Texto alternativo para accesibilidad |
| width | number | No | - | Ancho del banner en píxeles |
| height | number | No | - | Alto del banner en píxeles |
| preload | boolean | No | false | Si la imagen debe precargarse |
| blockClass | string | No | - | Clase CSS personalizada |
| experimentalPreventLayoutShift | boolean | No | false | Prevenir cambios de layout |`
              },
              {
                title: 'Mejores prácticas',
                content: '• Usa imágenes optimizadas para web (WebP cuando sea posible)\n• Implementa imágenes responsivas con mobile/desktop\n• Siempre incluye texto alt descriptivo\n• Considera el preload para banners above-the-fold\n• Mantén consistencia en dimensiones\n• Optimiza el peso de las imágenes para mejor rendimiento'
              },
              {
                note: 'El Banner soporta imágenes responsivas automáticamente cuando se proporciona un objeto con mobile y desktop.'
              }
            ],
            resources: [
              {
                title: 'Documentación oficial Banner - VTEX IO',
                url: 'https://developers.vtex.com/docs/apps/vtex.store-components/banner',
                description: 'Documentación completa del componente Banner'
              },
              {
                title: 'Optimización de imágenes',
                url: 'https://developers.vtex.com/docs/guides/vtex-io-documentation-best-practices-for-optimizing-images',
                description: 'Mejores prácticas para optimizar imágenes en VTEX IO'
              }
            ]
          })
        },
        {
          title: 'Breadcrumb',
          slug: 'breadcrumb',
          categoryId: vtexIOCategory.id,
          order: 5,
          content: JSON.stringify({
            description: 'Componente de navegación que muestra la ruta jerárquica actual del usuario, mejorando la experiencia de navegación y SEO.',
            readTime: '6 min',
            tags: ['navegación', 'breadcrumb', 'seo', 'ux'],
            sections: [
              {
                title: 'Descripción',
                content: 'El Breadcrumb es un elemento de navegación esencial que muestra la ubicación actual del usuario dentro de la jerarquía del sitio. Mejora la experiencia del usuario al proporcionar contexto y facilitar la navegación, además de beneficiar el SEO.'
              },
              {
                title: 'Casos de uso comunes',
                content: '• Navegación en páginas de producto\n• Orientación en categorías profundas\n• Mejora de SEO con structured data\n• Facilitar el retroceso en la navegación\n• Mostrar jerarquía de contenido\n• Reducir la tasa de rebote'
              },
              {
                title: 'Implementación básica',
                code: `{
  "breadcrumb": {
    "component": "vtex.breadcrumb",
    "props": {
      "showOnMobile": true,
      "homeIconSize": 26,
      "caretIconSize": 8
    }
  }
}`
              },
              {
                title: 'Props disponibles',
                content: `| Prop | Tipo | Requerido | Valor por defecto | Descripción |
|------|------|-----------|-------------------|-------------|
| showOnMobile | boolean | No | false | Si mostrar breadcrumb en móvil |
| homeIconSize | number | No | 26 | Tamaño del ícono de home en píxeles |
| caretIconSize | number | No | 8 | Tamaño del ícono separador en píxeles |
| termArg | string | No | - | Argumento para términos de búsqueda |
| defaultTerm | string | No | - | Término por defecto para mostrar |
| blockClass | string | No | - | Clase CSS personalizada |`
              },
              {
                title: 'Mejores prácticas',
                content: '• Mantén showOnMobile=true para mejor UX móvil\n• Usa tamaños de íconos apropiados para tu diseño\n• Asegúrate de que los enlaces funcionen correctamente\n• Implementa structured data para SEO\n• Mantén consistencia visual con tu tema\n• Prueba la navegación en diferentes niveles de profundidad'
              },
              {
                note: 'El Breadcrumb se genera automáticamente basado en la estructura de navegación y la página actual.'
              }
            ],
            resources: [
              {
                title: 'Documentación oficial Breadcrumb - VTEX IO',
                url: 'https://developers.vtex.com/docs/apps/vtex.breadcrumb',
                description: 'Documentación completa del componente Breadcrumb'
              },
              {
                title: 'SEO y Structured Data',
                url: 'https://developers.google.com/search/docs/data-types/breadcrumb',
                description: 'Guía de Google sobre breadcrumbs y SEO'
              }
            ]
          })
        },
        {
          title: 'Footer',
          slug: 'footer',
          categoryId: vtexIOCategory.id,
          order: 6,
          content: JSON.stringify({
            description: 'Componente de pie de página que proporciona navegación secundaria, información de contacto y enlaces importantes de la tienda.',
            readTime: '10 min',
            tags: ['footer', 'navegación', 'contacto', 'layout'],
            sections: [
              {
                title: 'Descripción',
                content: 'El Footer es un componente crucial que aparece en todas las páginas de la tienda. Proporciona navegación secundaria, información de contacto, enlaces legales y otros elementos importantes para la experiencia del usuario y SEO.'
              },
              {
                title: 'Casos de uso comunes',
                content: '• Enlaces de navegación secundaria\n• Información de contacto y soporte\n• Enlaces a políticas y términos legales\n• Redes sociales y newsletter\n• Información de la empresa\n• Métodos de pago y certificaciones'
              },
              {
                title: 'Implementación básica',
                code: `{
  "footer": {
    "component": "vtex.store-footer",
    "children": [
      "footer-layout.desktop",
      "footer-layout.mobile"
    ]
  },
  "footer-layout.desktop": {
    "children": [
      "flex-layout.row#footer-desktop"
    ]
  },
  "flex-layout.row#footer-desktop": {
    "children": [
      "footer-spacer",
      "social-networks",
      "accepted-payment-methods"
    ]
  }
}`
              },
              {
                title: 'Props disponibles',
                content: `| Prop | Tipo | Requerido | Valor por defecto | Descripción |
|------|------|-----------|-------------------|-------------|
| blockClass | string | No | - | Clase CSS personalizada |
| paddingTop | number | No | 0 | Padding superior (0-10) |
| paddingBottom | number | No | 0 | Padding inferior (0-10) |
| backgroundColor | string | No | - | Color de fondo usando tokens |
| textColor | string | No | - | Color de texto usando tokens |
| borderTop | string | No | - | Borde superior usando tokens |`
              },
              {
                title: 'Mejores prácticas',
                content: '• Organiza el contenido en secciones lógicas\n• Incluye información de contacto clara\n• Asegúrate de que todos los enlaces funcionen\n• Mantén consistencia con el diseño general\n• Incluye enlaces importantes para SEO\n• Optimiza para dispositivos móviles'
              },
              {
                note: 'El Footer debe ser consistente en todas las páginas y contener información esencial para los usuarios.'
              }
            ],
            resources: [
              {
                title: 'Documentación oficial Footer - VTEX IO',
                url: 'https://developers.vtex.com/docs/apps/vtex.store-footer',
                description: 'Documentación completa del componente Footer'
              },
              {
                title: 'Footer Layout Examples',
                url: 'https://developers.vtex.com/docs/guides/vtex-io-documentation-building-a-footer',
                description: 'Ejemplos de construcción de footers'
              }
            ]
          })
        },
        {
          title: 'Header',
          slug: 'header',
          categoryId: vtexIOCategory.id,
          order: 7,
          content: JSON.stringify({
            description: 'Componente de encabezado que contiene la navegación principal, logo, búsqueda y elementos clave de la interfaz de usuario.',
            readTime: '12 min',
            tags: ['header', 'navegación', 'búsqueda', 'logo'],
            sections: [
              {
                title: 'Descripción',
                content: 'El Header es el componente más visible y crítico de cualquier tienda online. Contiene la navegación principal, el logo de la marca, la barra de búsqueda, el carrito de compras y otros elementos esenciales para la experiencia del usuario.'
              },
              {
                title: 'Casos de uso comunes',
                content: '• Navegación principal de la tienda\n• Búsqueda de productos\n• Acceso al carrito de compras\n• Login y cuenta de usuario\n• Navegación por categorías\n• Información de contacto y soporte'
              },
              {
                title: 'Implementación básica',
                code: `{
  "header": {
    "component": "vtex.store-header",
    "children": [
      "header-layout.desktop",
      "header-layout.mobile"
    ]
  },
  "header-layout.desktop": {
    "children": [
      "sticky-layout#desktop"
    ]
  },
  "sticky-layout#desktop": {
    "props": {
      "blockClass": "sticky-header"
    },
    "children": [
      "flex-layout.row#desktop"
    ]
  }
}`
              },
              {
                title: 'Props disponibles',
                content: `| Prop | Tipo | Requerido | Valor por defecto | Descripción |
|------|------|-----------|-------------------|-------------|
| blockClass | string | No | - | Clase CSS personalizada |
| inverted | boolean | No | false | Si usar colores invertidos |
| logoUrl | string | No | - | URL personalizada del logo |
| logoTitle | string | No | - | Título del logo para accesibilidad |
| searchBarVisibility | enum | No | visible | Visibilidad de búsqueda: visible, hidden |
| showSearchIcon | boolean | No | true | Si mostrar ícono de búsqueda |
| showLoginIcon | boolean | No | true | Si mostrar ícono de login |
| showWishlistIcon | boolean | No | true | Si mostrar ícono de wishlist |`
              },
              {
                title: 'Mejores prácticas',
                content: '• Mantén el header simple y funcional\n• Asegúrate de que sea responsive\n• Optimiza la búsqueda para mejor UX\n• Usa sticky layout para navegación constante\n• Incluye elementos esenciales sin sobrecargar\n• Prueba la usabilidad en móviles'
              },
              {
                note: 'El Header debe ser consistente en todas las páginas y proporcionar acceso fácil a las funciones principales.'
              }
            ],
            resources: [
              {
                title: 'Documentación oficial Header - VTEX IO',
                url: 'https://developers.vtex.com/docs/apps/vtex.store-header',
                description: 'Documentación completa del componente Header'
              },
              {
                title: 'Sticky Layout',
                url: 'https://developers.vtex.com/docs/apps/vtex.sticky-layout',
                description: 'Componente para headers pegajosos'
              }
            ]
          })
        },
        {
          title: 'Locale Switcher',
          slug: 'locale-switcher',
          categoryId: vtexIOCategory.id,
          order: 8,
          content: JSON.stringify({
            description: 'Componente para cambiar entre diferentes idiomas y configuraciones regionales de la tienda.',
            readTime: '7 min',
            tags: ['internacionalización', 'idioma', 'región', 'i18n'],
            sections: [
              {
                title: 'Descripción',
                content: 'El Locale Switcher permite a los usuarios cambiar entre diferentes idiomas y configuraciones regionales disponibles en la tienda. Es esencial para tiendas internacionales que operan en múltiples mercados.'
              },
              {
                title: 'Casos de uso comunes',
                content: '• Tiendas con múltiples idiomas\n• Operaciones internacionales\n• Cambio de moneda por región\n• Adaptación de contenido local\n• Mejora de experiencia global\n• Cumplimiento de regulaciones locales'
              },
              {
                title: 'Implementación básica',
                code: `{
  "locale-switcher": {
    "component": "vtex.locale-switcher",
    "props": {
      "locales": [
        {
          "value": "en-US",
          "label": "English (US)"
        },
        {
          "value": "es-ES", 
          "label": "Español"
        },
        {
          "value": "pt-BR",
          "label": "Português (BR)"
        }
      ]
    }
  }
}`
              },
              {
                title: 'Props disponibles',
                content: `| Prop | Tipo | Requerido | Valor por defecto | Descripción |
|------|------|-----------|-------------------|-------------|
| locales | array | Sí | - | Array de objetos con value y label |
| buttonProps | object | No | - | Props adicionales para el botón |
| showLabel | boolean | No | true | Si mostrar etiqueta del idioma |
| showFlag | boolean | No | false | Si mostrar bandera del país |
| blockClass | string | No | - | Clase CSS personalizada |
| iconProps | object | No | - | Props para el ícono del selector |`
              },
              {
                title: 'Mejores prácticas',
                content: '• Configura todos los idiomas disponibles\n• Usa códigos de idioma estándar (ISO 639-1)\n• Incluye información de región cuando sea relevante\n• Mantén consistencia en la traducción\n• Prueba la funcionalidad en todos los idiomas\n• Considera el impacto en SEO internacional'
              },
              {
                note: 'El Locale Switcher requiere configuración previa de múltiples idiomas en la cuenta VTEX.'
              }
            ],
            resources: [
              {
                title: 'Documentación oficial Locale Switcher - VTEX IO',
                url: 'https://developers.vtex.com/docs/apps/vtex.locale-switcher',
                description: 'Documentación completa del componente Locale Switcher'
              },
              {
                title: 'Internacionalización en VTEX',
                url: 'https://developers.vtex.com/docs/guides/vtex-io-documentation-internationalization',
                description: 'Guía de internacionalización en VTEX IO'
              }
            ]
          })
        },
        {
          title: 'Login',
          slug: 'login',
          categoryId: vtexIOCategory.id,
          order: 9,
          content: JSON.stringify({
            description: 'Componente de autenticación que permite a los usuarios iniciar sesión y acceder a su cuenta.',
            readTime: '9 min',
            tags: ['autenticación', 'login', 'usuario', 'cuenta'],
            sections: [
              {
                title: 'Descripción',
                content: 'El componente Login proporciona la interfaz para que los usuarios se autentiquen en la tienda. Maneja el proceso de inicio de sesión, registro y recuperación de contraseña, integrándose con el sistema de cuentas de VTEX.'
              },
              {
                title: 'Casos de uso comunes',
                content: '• Inicio de sesión de usuarios registrados\n• Registro de nuevos usuarios\n• Recuperación de contraseña\n• Acceso a cuenta personal\n• Gestión de perfil de usuario\n• Autenticación para checkout'
              },
              {
                title: 'Implementación básica',
                code: `{
  "login": {
    "component": "vtex.login",
    "props": {
      "emailAndPasswordTitle": "Iniciar Sesión",
      "accessCodeTitle": "Código de Acceso",
      "emailPlaceholder": "correo@ejemplo.com",
      "passwordPlaceholder": "Contraseña",
      "showPasswordVerificationIntoTooltip": true
    }
  }
}`
              },
              {
                title: 'Props disponibles',
                content: `| Prop | Tipo | Requerido | Valor por defecto | Descripción |
|------|------|-----------|-------------------|-------------|
| emailAndPasswordTitle | string | No | - | Título para login con email/password |
| accessCodeTitle | string | No | - | Título para login con código |
| emailPlaceholder | string | No | Email | Placeholder del campo email |
| passwordPlaceholder | string | No | Password | Placeholder del campo contraseña |
| showPasswordVerificationIntoTooltip | boolean | No | false | Mostrar verificación en tooltip |
| defaultOption | enum | No | 0 | Opción por defecto: 0 (email), 1 (código) |
| optionsTitle | string | No | - | Título de las opciones de login |
| blockClass | string | No | - | Clase CSS personalizada |`
              },
              {
                title: 'Mejores prácticas',
                content: '• Proporciona opciones claras de autenticación\n• Implementa recuperación de contraseña\n• Usa validación en tiempo real\n• Mantén la seguridad de las credenciales\n• Ofrece registro social cuando sea posible\n• Optimiza para dispositivos móviles'
              },
              {
                note: 'El componente Login se integra automáticamente con el sistema de cuentas de VTEX y maneja la autenticación de forma segura.'
              }
            ],
            resources: [
              {
                title: 'Documentación oficial Login - VTEX IO',
                url: 'https://developers.vtex.com/docs/apps/vtex.login',
                description: 'Documentación completa del componente Login'
              },
              {
                title: 'Account Management',
                url: 'https://developers.vtex.com/docs/guides/account-management',
                description: 'Gestión de cuentas en VTEX'
              }
            ]
          })
        },
        {
          title: 'Menu',
          slug: 'menu',
          categoryId: vtexIOCategory.id,
          order: 10,
          content: JSON.stringify({
            description: 'Componente de navegación que proporciona un menú estructurado para organizar categorías y páginas de la tienda.',
            readTime: '10 min',
            tags: ['navegación', 'menú', 'categorías', 'estructura'],
            sections: [
              {
                title: 'Descripción',
                content: 'El componente Menu es fundamental para la navegación de la tienda. Permite crear menús jerárquicos con categorías, subcategorías y enlaces personalizados, proporcionando una estructura de navegación clara y organizada.'
              },
              {
                title: 'Casos de uso comunes',
                content: '• Navegación principal por categorías\n• Menús desplegables con subcategorías\n• Enlaces a páginas especiales\n• Navegación móvil tipo hamburguesa\n• Menús contextuales\n• Navegación por departamentos'
              },
              {
                title: 'Implementación básica',
                code: `{
  "menu#categories": {
    "component": "vtex.menu",
    "props": {
      "items": [
        {
          "id": "menu-item-electronics",
          "type": "category",
          "iconId": null,
          "highlight": false,
          "itemProps": {
            "type": "internal",
            "href": "/electronics",
            "noFollow": false,
            "tagTitle": "Electronics",
            "text": "Electrónicos"
          }
        }
      ]
    }
  }
}`
              },
              {
                title: 'Props disponibles',
                content: `| Prop | Tipo | Requerido | Valor por defecto | Descripción |
|------|------|-----------|-------------------|-------------|
| items | array | Sí | - | Array de elementos del menú |
| orientation | enum | No | horizontal | Orientación: horizontal, vertical |
| categoryId | number | No | - | ID de categoría para menú automático |
| textType | string | No | - | Tipo de texto usando tokens |
| blockClass | string | No | - | Clase CSS personalizada |
| experimentalOptimizeRendering | boolean | No | false | Optimización experimental |`
              },
              {
                title: 'Estructura de items',
                content: `| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| id | string | Identificador único del item |
| type | enum | Tipo: category, custom, brand |
| iconId | string | ID del ícono a mostrar |
| highlight | boolean | Si destacar el elemento |
| itemProps | object | Propiedades del enlace |`
              },
              {
                title: 'Mejores prácticas',
                content: '• Organiza las categorías de forma lógica\n• Limita la profundidad de subcategorías\n• Usa nombres descriptivos y claros\n• Implementa navegación móvil apropiada\n• Mantén consistencia en la estructura\n• Prueba la usabilidad del menú'
              },
              {
                note: 'El Menu puede generar automáticamente elementos basados en la estructura de categorías de VTEX.'
              }
            ],
            resources: [
              {
                title: 'Documentación oficial Menu - VTEX IO',
                url: 'https://developers.vtex.com/docs/apps/vtex.menu',
                description: 'Documentación completa del componente Menu'
              },
              {
                title: 'Category Menu',
                url: 'https://developers.vtex.com/docs/apps/vtex.category-menu',
                description: 'Menú específico para categorías'
              }
            ]
          })
        }
      ]
    });

    // Crear secciones para Guías Paso a Paso
    await prisma.documentationSection.createMany({
      data: [
        {
          title: 'Instalación de VTEX CLI',
          slug: 'instalacion-vtex-cli',
          categoryId: guidesCategory.id,
          order: 1,
          content: JSON.stringify({
            description: 'Aprende a instalar y configurar VTEX CLI en tu entorno de desarrollo.',
            readTime: '15 min',
            tags: ['cli', 'instalación', 'setup'],
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            sections: [
              {
                title: 'Requisitos previos',
                content: 'Antes de instalar VTEX CLI, asegúrate de tener:\n• Node.js versión 14 o superior\n• npm o yarn instalado\n• Git configurado\n• Cuenta de VTEX con permisos de desarrollo'
              },
              {
                title: 'Instalación',
                code: `# Instalar VTEX CLI globalmente
npm install -g @vtex/cli

# Verificar instalación
vtex --version

# Login en tu cuenta
vtex login {account}`
              },
              {
                title: 'Configuración inicial',
                content: 'Después de la instalación, configura tu workspace de desarrollo y las credenciales necesarias.'
              }
            ],
            resources: [
              {
                title: 'Documentación oficial VTEX CLI',
                url: 'https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-vtex-io-cli-installation-and-command-reference',
                description: 'Guía completa de instalación y comandos'
              }
            ]
          })
        },
        {
          title: 'Crear tu primer componente',
          slug: 'primer-componente',
          categoryId: guidesCategory.id,
          order: 2,
          content: JSON.stringify({
            description: 'Tutorial paso a paso para crear tu primer componente personalizado en VTEX IO.',
            readTime: '25 min',
            tags: ['componente', 'desarrollo', 'tutorial'],
            sections: [
              {
                title: 'Inicializar proyecto',
                content: 'Comenzaremos creando un nuevo proyecto de componente usando VTEX CLI.'
              },
              {
                title: 'Estructura del proyecto',
                code: `vtex init
# Seleccionar: react-app-template

# Estructura generada:
my-component/
├── manifest.json
├── store/
├── react/
│   ├── components/
│   └── index.tsx
└── docs/`
              },
              {
                title: 'Desarrollo del componente',
                content: 'Implementa la lógica y el diseño de tu componente siguiendo las mejores prácticas de React y VTEX IO.'
              }
            ]
          })
        }
      ]
    });

    // Crear secciones para Ejemplos de Código
    await prisma.documentationSection.createMany({
      data: [
        {
          title: 'Ver Ejemplos',
          slug: 'ver-ejemplos',
          categoryId: examplesCategory.id,
          order: 1,
          content: JSON.stringify({
            description: 'Explora ejemplos de código real de producción para VTEX IO.',
            readTime: '5 min',
            tags: ['ejemplos', 'código', 'producción'],
            sections: [
              {
                title: 'Ejemplos Disponibles',
                content: 'Tenemos ejemplos de código real que puedes usar como base para tus proyectos:\n\n• **Accesorios-Buttons**: Componente completo con dropdown de categorías\n• Diseño responsivo con detección móvil\n• CSS Handles de VTEX IO\n• Schema para Site Editor\n• Hooks avanzados de React'
              },
              {
                title: 'Cómo usar los ejemplos',
                content: 'Cada ejemplo incluye:\n• Código TypeScript completo\n• Estilos CSS incluidos\n• Configuración de props\n• Schema para el Site Editor\n• Mejores prácticas implementadas'
              },
              {
                title: 'Acceder a los ejemplos',
                content: 'Puedes ver todos los ejemplos disponibles en la página dedicada de ejemplos de código. Cada ejemplo se puede copiar directamente al portapapeles.'
              }
            ],
            resources: [
              {
                title: 'Ver todos los ejemplos',
                url: '/documentacion/ejemplos-codigo',
                description: 'Página con todos los ejemplos de código disponibles'
              }
            ]
          })
        }
      ]
    });

    // Crear secciones para Referencias de API
    await prisma.documentationSection.createMany({
      data: [
        {
          title: 'Master Data API - GET',
          slug: 'master-data-get',
          categoryId: apiCategory.id,
          order: 1,
          content: JSON.stringify({
            description: 'Obtener documentos de Master Data usando la API REST.',
            readTime: '10 min',
            tags: ['api', 'master-data', 'get'],
            sections: [
              {
                title: 'Endpoint',
                code: `GET https://{accountName}.vtexcommercestable.com.br/api/dataentities/{dataEntityName}/documents`
              },
              {
                title: 'Parámetros de consulta',
                content: '• _fields: Campos a retornar\n• _where: Condiciones de filtrado\n• _sort: Ordenamiento\n• _limit: Límite de resultados'
              },
              {
                title: 'Ejemplo de uso',
                code: `// JavaScript
const response = await fetch(
  'https://mystore.vtexcommercestable.com.br/api/dataentities/CL/documents?_fields=email,firstName&_limit=10',
  {
    headers: {
      'X-VTEX-API-AppKey': 'your-app-key',
      'X-VTEX-API-AppToken': 'your-app-token'
    }
  }
);
const data = await response.json();`
              }
            ]
          })
        },
        {
          title: 'Master Data API - POST',
          slug: 'master-data-post',
          categoryId: apiCategory.id,
          order: 2,
          content: JSON.stringify({
            description: 'Crear nuevos documentos en Master Data.',
            readTime: '8 min',
            tags: ['api', 'master-data', 'post'],
            sections: [
              {
                title: 'Endpoint',
                code: `POST https://{accountName}.vtexcommercestable.com.br/api/dataentities/{dataEntityName}/documents`
              },
              {
                title: 'Ejemplo de creación',
                code: `// JavaScript
const newDocument = {
  email: 'user@example.com',
  firstName: 'John',
  lastName: 'Doe'
};

const response = await fetch(
  'https://mystore.vtexcommercestable.com.br/api/dataentities/CL/documents',
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-VTEX-API-AppKey': 'your-app-key',
      'X-VTEX-API-AppToken': 'your-app-token'
    },
    body: JSON.stringify(newDocument)
  }
);`
              }
            ]
          })
        }
      ]
    });

    // Crear ejemplos de código
    await prisma.codeExample.createMany({
      data: [
        {
          name: 'Accesorios-Buttons',
          slug: 'accesorios-buttons',
          description: 'Componente de botones de accesorios con dropdown de categorías y diseño responsivo.',
          language: 'typescript',
          tags: ['accesorios', 'buttons', 'dropdown', 'responsive'],
          code: `import React, { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { useCssHandles } from "vtex.css-handles";
import "./index.css";

const CSS_HANDLES = [
  "accesoriosButtonsContainer",
  "accesoriosButtonsTitle",
  "accesoriosButtonsList",
  "accesoriosButtonsListItem",
  "accesoriosButtonsLink",
  "accesoriosButtonsToggle",
  "accesoriosButtonsToggleDivLista",
  "accesoriosButtonsSeparator",
  "accesoriosButtonsHeader",
  "accesoriosButtonsCloseButton"
] as const;

interface AccesoriosButtonsProps {
  categories?: { name: string; url: string }[];
  buttonLabel?: string;
}

const AccesoriosButtons: React.FC<AccesoriosButtonsProps> = ({
  categories = [
    { name: "Integrales", url: "/integrales" },
    { name: "Abiertos", url: "/abiertos" },
    { name: "Abatibles", url: "/abatibles" },
    { name: "Doble Propósito", url: "/doble-proposito" },
    { name: "Cross", url: "/cross" }
  ],
  buttonLabel = "Guantes"
}) => {
  const { handles } = useCssHandles(CSS_HANDLES);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth <= 768);
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const buttonLabelUrl = useMemo(
    () => \`/\${buttonLabel.replace(/\\s+/g, "-").toLowerCase()}\`,
    [buttonLabel]
  );

  const handleClick = useCallback(() => {
    if (isMobile) {
      window.location.href = buttonLabelUrl;
    } else {
      setIsOpen((prev) => !prev);
    }
  }, [isMobile, buttonLabelUrl]);

  return (
    <div className={handles.accesoriosButtonsContainer} ref={containerRef}>
      <button className={handles.accesoriosButtonsToggle} onClick={handleClick}>
        {buttonLabel}
      </button>
      {!isMobile && isOpen && (
        <div className={handles.accesoriosButtonsToggleDivLista}>
          <div
            className={handles.accesoriosButtonsHeader}
            style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
          >
            <h2 className={handles.accesoriosButtonsTitle}>ELIGE UNA CATEGORÍA</h2>
            <button
              className={handles.accesoriosButtonsCloseButton} 
              onClick={() => setIsOpen(false)}>
              ✕
            </button>
          </div>
          <div className={handles.accesoriosButtonsList}>
            {categories.map((category, index) => (
              <a key={index} href={category.url} className={handles.accesoriosButtonsLink}>
                {index < categories.length + 1 && (
                  <span className={handles.accesoriosButtonsSeparator}>•</span>
                )}
                {category.name.toUpperCase()}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

(AccesoriosButtons as any).schema = {
  title: "Accesorios - Buttons",
  type: "object",
  properties: {
    categories: {
      title: "Categorías",
      type: "array",
      items: {
        type: "object",
        properties: {
          __editorItemTitle: {
            title: 'Item-List',
            type: 'string',
          },
          name: { 
            type: "string", 
            title: "Nombre" 
          },
          url: { 
              type: "string",
              title: "URL" 
            }
        }
      }
    },
    buttonLabel: {
      title: "Etiqueta del botón",
      type: "string"
    }
  }
};

export default AccesoriosButtons;

/* CSS Styles */
/*
.accesoriosButtonsToggle {
  display: flex;
  width: 125px;
  height: 40px;   
  background-color: #003792;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.2s ease-in-out;
  font-family: GreatEscapeW00, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 130%;
  text-transform: uppercase;
  align-items: center;
  justify-content: space-around;
  gap: 8px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.accesoriosButtonsToggle::after{
  content: '';
  width: 13px;
  height: 13px;
  background: url("/arquivos/plus-svg.svg") no-repeat center;
  display: inline-block;
}

.accesoriosButtonsToggle:hover {
  background-color: #0048c1;
}

.accesoriosButtonsContainer {
  position: relative;
  width: 125px;
  height: 40px; 
}

.accesoriosButtonsToggleDivLista {
  position: absolute;
  bottom: 1px;
  right: -320px; 
  width: 301px;
  height: 186px;    
  background-color: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 15px;
  opacity: 0.95;
}

.accesoriosButtonsTitle {
  color: #FFF;
  font-family: GreatEscapeW00, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  text-transform: uppercase;
  text-align: center;
  background-color: #122139;
  padding: 5px 10px;
  margin: 0 0 0 40px;
}

.accesoriosButtonsList {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
}

.accesoriosButtonsListItem {
  list-style-type: none;
  margin: 0 8px 0 0;
  position: relative;
  text-transform: uppercase;
}

.accesoriosButtonsSeparator {
  color: #2c2c2c;
  font-weight: bold;
  margin-right: 5px;
}

.accesoriosButtonsListItem:hover {
  background-color: #f0f0f0;
}

.accesoriosButtonsButton {
  display: block;
  background-color: #ff6600;
  color: white;
  text-align: center;
  padding: 10px;
  margin-top: 10px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
}

.accesoriosButtonsButton:hover {
  background-color: #cc5200;
}

.accesoriosButtonsList {
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(3, auto);
  gap: 1rem;
  margin: 1rem 0;
}

.accesoriosButtonsLink {
  position: relative;
  text-decoration: none;
  color: #19384D;
  font-family: GreatEscapeW00, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  padding: 0;
  transition: color 0.3s ease;
}

.accesoriosButtonsLink::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0%;
  height: 2px;
  background-color: currentColor;
  transition: width 0.3s ease;
}

.accesoriosButtonsLink:hover::after {
  width: 100%;
}

.accesoriosButtonsCloseButton {
  color: #19384D;
  border: none;
  background: none;
  transition: transform 0.2s ease;
  cursor: pointer;
}

.accesoriosButtonsCloseButton:hover {
  transform: scale(1.2);
}

@media (max-width: 1024px) {
  .accesoriosButtonsToggle{
    border-radius: 30px;
  }
}
*/`
        }
      ]
    });

    console.log('✅ Seed de documentación completado exitosamente!');
    console.log('📚 Categorías creadas: 5');
    console.log('📄 Secciones creadas: 15');
    console.log('💻 Ejemplos de código creados: 1');

  } catch (error) {
    console.error('❌ Error durante el seed:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Ejecutar el seed si se llama directamente
if (require.main === module) {
  seedDocumentation()
    .then(() => {
      console.log('🎉 Seed completado!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('💥 Error en el seed:', error);
      process.exit(1);
    });
}

export default seedDocumentation;
