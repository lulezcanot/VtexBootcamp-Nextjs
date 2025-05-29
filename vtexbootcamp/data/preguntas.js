const preguntas = [
  {
    text: "¿Cuál es la técnica más efectiva para reducir el tiempo de carga inicial en una tienda VTEX?",
    options: [
      { text: "Lazy loading de imágenes y componentes", isCorret: true },
      { text: "Agregar más scripts de terceros", isCorret: false },
      { text: "Aumentar el tamaño de las imágenes para mejor calidad", isCorret: false },
      { text: "Deshabilitar el cache del navegador", isCorret: false },
    ],
  },
  {
    text: "¿Qué práctica es recomendada para optimizar el rendimiento del frontend en VTEX IO?",
    options: [
      { text: "Minificar y comprimir archivos CSS y JS", isCorret: true },
      { text: "Usar imágenes en formato BMP", isCorret: false },
      { text: "Incluir todos los scripts al final del body sin análisis", isCorret: false },
      { text: "Deshabilitar Service Workers", isCorret: false },
    ],
  },
  {
    text: "¿Cómo afecta el uso excesivo de scripts de terceros al rendimiento en VTEX?",
    options: [
      { text: "Puede ralentizar la carga y afectar la experiencia de usuario", isCorret: true },
      { text: "Mejora la velocidad al añadir funcionalidades", isCorret: false },
      { text: "No tiene ningún impacto", isCorret: false },
      { text: "Permite mejor caché del navegador", isCorret: false },
    ],
  },
  {
    text: "¿Qué es el 'Critical CSS' y cómo ayuda en la optimización?",
    options: [
      { text: "Es el CSS necesario para renderizar el contenido visible inicialmente, reduciendo el tiempo de carga", isCorret: true },
      { text: "Es un tipo de CSS que solo funciona en dispositivos móviles", isCorret: false },
      { text: "Es CSS con errores que causa lentitud", isCorret: false },
      { text: "No tiene relación con la performance", isCorret: false },
    ],
  },
  {
    text: "¿Cuál es una forma efectiva de manejar imágenes para mejorar la performance en VTEX?",
    options: [
      { text: "Usar imágenes WebP optimizadas y escaladas según dispositivo", isCorret: true },
      { text: "Subir imágenes en su tamaño original sin compresión", isCorret: false },
      { text: "Evitar el uso de imágenes para mejorar performance", isCorret: false },
      { text: "Usar solo PNG sin importar el tamaño", isCorret: false },
    ],
  },
  {
    text: "¿Qué papel juegan los Service Workers en la optimización de VTEX IO?",
    options: [
      { text: "Permiten cachear recursos para carga más rápida y funcionamiento offline", isCorret: true },
      { text: "Son usados para enviar emails a clientes", isCorret: false },
      { text: "No tienen ningún impacto en la performance", isCorret: false },
      { text: "Son scripts para analizar ventas", isCorret: false },
    ],
  },
  {
    text: "¿Cómo ayuda la paginación o carga incremental en la optimización del catálogo en VTEX?",
    options: [
      { text: "Reduce la cantidad de datos cargados inicialmente, mejorando tiempos de respuesta", isCorret: true },
      { text: "Carga todos los productos a la vez para mejor experiencia", isCorret: false },
      { text: "No afecta la performance", isCorret: false },
      { text: "Solo se usa para SEO", isCorret: false },
    ],
  },
  {
    text: "¿Qué es el Time to Interactive (TTI) y por qué es importante en VTEX?",
    options: [
      { text: "Es el tiempo que tarda una página en estar totalmente interactiva para el usuario, impactando la experiencia", isCorret: true },
      { text: "Es el tiempo que tarda un servidor en responder", isCorret: false },
      { text: "Es el tiempo que tarda el usuario en hacer clic en un botón", isCorret: false },
      { text: "No es relevante en VTEX", isCorret: false },
    ],
  },
  {
    text: "¿Cuál es una buena práctica para optimizar el SEO y la performance en VTEX IO?",
    options: [
      { text: "Utilizar SSR (Server Side Rendering) para generar páginas rápidas y optimizadas para buscadores", isCorret: true },
      { text: "Solo usar renderizado en el cliente sin pre-render", isCorret: false },
      { text: "No preocuparse por SEO en tiendas online", isCorret: false },
      { text: "Evitar etiquetas meta en el HTML", isCorret: false },
    ],
  },
];



module.exports = preguntas;