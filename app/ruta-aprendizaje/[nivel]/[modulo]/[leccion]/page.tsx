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
    "introduccion-vtex-io": {
      "leccion-1": {
        id: "descripcion-ecosistema",
        title: "Descripción del ecosistema",
        duration: "2 horas",
        moduleInfo: "Módulo 1 de 3",
        videoUrl: "https://www.youtube.com/embed/bXjb1ApVDWk", // Video de VTEX IO
        content: {
          sections: [
            {
              id: "que-es-vtex-io",
              type: "heading",
              title: "¿Qué es VTEX IO?",
              content: "VTEX IO es una plataforma de desarrollo serverless que permite crear y gestionar aplicaciones de comercio electrónico de manera eficiente. Proporciona un conjunto completo de herramientas y servicios para construir soluciones escalables."
            },
            {
              id: "componentes-principales",
              type: "heading",
              title: "Componentes principales",
              content: ""
            },
            {
              id: "builder",
              type: "list",
              content: "Builder: Herramienta para desarrollo y construcción de aplicaciones",
              items: [
                "Builder: Herramienta para desarrollo y construcción de aplicaciones",
                "CLI: Interfaz de línea de comandos para gestionar proyectos",
                "Store Framework: Framework para crear tiendas personalizadas"
              ]
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
          description: "Ejemplo de código"
        },
        resources: {
          documentation: [
            { title: "Guía de inicio rápido", url: "https://developers.vtex.com/docs/guides/vtex-io-documentation-what-is-vtex-io", icon: "📖" },
            { title: "Referencia de API", url: "https://developers.vtex.com/docs/api-reference", icon: "🔗" }
          ],
          videos: [
            { title: "Introducción a VTEX IO", url: "#" },
            { title: "Setup del ambiente", url: "#" }
          ],
          links: [
            { title: "Comunidad VTEX", url: "https://community.vtex.com/" },
            { title: "Blog de desarrollo", url: "https://developers.vtex.com/blog" }
          ]
        },
        nextLesson: "leccion-2"
      },
      "leccion-2": {
        id: "configuracion-inicial",
        title: "Configuración inicial del proyecto",
        duration: "1.5 horas",
        moduleInfo: "Módulo 1 de 3",
        videoUrl: "https://www.youtube.com/embed/bXjb1ApVDWk", // Video de VTEX IO
        content: {
          sections: [
            {
              id: "setup-workspace",
              type: "heading",
              title: "Configuración del Workspace",
              content: "Aprende a configurar tu workspace de desarrollo para comenzar a trabajar con VTEX IO."
            }
          ]
        },
        resources: {
          documentation: [
            { title: "Guía de Workspaces", url: "https://developers.vtex.com/docs/guides/vtex-io-documentation-workspace", icon: "📖" }
          ],
          videos: [],
          links: []
        },
        prevLesson: "leccion-1",
        nextLesson: "leccion-3"
      },
      "leccion-3": {
        id: "primer-componente",
        title: "Creando tu primer componente",
        duration: "2 horas",
        moduleInfo: "Módulo 1 de 3",
        videoUrl: "https://www.youtube.com/embed/bXjb1ApVDWk", // Video de VTEX IO
        content: {
          sections: [
            {
              id: "react-component",
              type: "heading",
              title: "Tu primer componente React",
              content: "Crea tu primer componente React para VTEX IO siguiendo las mejores prácticas."
            }
          ]
        },
        resources: {
          documentation: [
            { title: "Guía de Componentes", url: "#", icon: "📖" }
          ],
          videos: [],
          links: []
        },
        prevLesson: "leccion-2"
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
                    <ul className="space-y-2">
                      {section.items.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
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
