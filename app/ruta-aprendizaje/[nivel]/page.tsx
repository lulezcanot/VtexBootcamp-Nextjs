"use client";

import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface ModuleData {
  id: string;
  title: string;
  description: string;
  duration: string;
  icon: string;
  status: 'available' | 'locked';
  order: number;
}

interface LevelData {
  title: string;
  description: string;
  modules: ModuleData[];
  resources: {
    documentation: Array<{ title: string; url: string; }>;
    tools: Array<{ title: string; description: string; url: string; }>;
  };
}

const levelData: Record<string, LevelData> = {
  principiante: {
    title: "Fundamentos de VTEX IO",
    description: "Comienza tu viaje en el desarrollo de comercio digital con VTEX IO",
    modules: [
      {
        id: "introduccion-vtex-io",
        title: "Introducción a VTEX IO",
        description: "Conoce los conceptos básicos y la arquitectura de VTEX IO",
        duration: "30 minutos",
        icon: "📚",
        status: "available",
        order: 1
      },
      {
        id: "configuracion-ambiente",
        title: "Configuración del Ambiente",
        description: "Prepara tu entorno de desarrollo para VTEX IO",
        duration: "45 minutos",
        icon: "⚙️",
        status: "locked",
        order: 2
      },
      {
        id: "primeros-pasos",
        title: "Primeros Pasos",
        description: "Crea tu primer proyecto con VTEX IO",
        duration: "60 minutos",
        icon: "🚀",
        status: "locked",
        order: 3
      }
    ],
    resources: {
      documentation: [
        { title: "Guía de Inicio Rápido", url: "#" },
        { title: "Referencia de API", url: "#" }
      ],
      tools: [
        { title: "Node.js", description: "Versión 14 o superior", url: "https://nodejs.org" },
        { title: "VTEX CLI", description: "Herramienta de línea de comandos", url: "#" }
      ]
    }
  },
  intermedio: {
    title: "Desarrollo Intermedio",
    description: "Profundiza en conceptos avanzados y mejores prácticas",
    modules: [
      {
        id: "componentes-avanzados",
        title: "Componentes Avanzados",
        description: "Crea componentes React complejos para VTEX IO",
        duration: "60 minutos",
        icon: "🧩",
        status: "available",
        order: 1
      },
      {
        id: "manejo-estado",
        title: "Manejo de Estado",
        description: "Gestiona el estado de aplicaciones complejas",
        duration: "75 minutos",
        icon: "🔄",
        status: "locked",
        order: 2
      },
      {
        id: "apis-graphql",
        title: "APIs y GraphQL",
        description: "Integra APIs externas y usa GraphQL",
        duration: "90 minutos",
        icon: "🔗",
        status: "locked",
        order: 3
      },
      {
        id: "testing-debugging",
        title: "Testing y Debugging",
        description: "Pruebas y depuración de aplicaciones",
        duration: "60 minutos",
        icon: "🐛",
        status: "locked",
        order: 4
      }
    ],
    resources: {
      documentation: [
        { title: "Guía de Componentes", url: "#" },
        { title: "GraphQL en VTEX", url: "#" }
      ],
      tools: [
        { title: "React DevTools", description: "Herramientas de desarrollo", url: "#" },
        { title: "GraphQL Playground", description: "IDE para GraphQL", url: "#" }
      ]
    }
  },
  avanzado: {
    title: "Desarrollo Avanzado",
    description: "Domina técnicas avanzadas y arquitecturas complejas",
    modules: [
      {
        id: "arquitectura-escalable",
        title: "Arquitectura Escalable",
        description: "Diseña aplicaciones escalables y mantenibles",
        duration: "90 minutos",
        icon: "🏗️",
        status: "available",
        order: 1
      },
      {
        id: "performance-optimization",
        title: "Optimización de Performance",
        description: "Mejora el rendimiento de tus aplicaciones",
        duration: "75 minutos",
        icon: "⚡",
        status: "locked",
        order: 2
      },
      {
        id: "microservicios",
        title: "Microservicios",
        description: "Implementa arquitecturas de microservicios",
        duration: "120 minutos",
        icon: "🔧",
        status: "locked",
        order: 3
      },
      {
        id: "deployment-ci-cd",
        title: "Deployment y CI/CD",
        description: "Automatiza el despliegue de aplicaciones",
        duration: "90 minutos",
        icon: "🚀",
        status: "locked",
        order: 4
      },
      {
        id: "monitoring-analytics",
        title: "Monitoring y Analytics",
        description: "Monitorea y analiza el rendimiento",
        duration: "60 minutos",
        icon: "📊",
        status: "locked",
        order: 5
      }
    ],
    resources: {
      documentation: [
        { title: "Guía de Arquitectura", url: "#" },
        { title: "Best Practices", url: "#" }
      ],
      tools: [
        { title: "Docker", description: "Containerización", url: "#" },
        { title: "Kubernetes", description: "Orquestación", url: "#" }
      ]
    }
  }
};

export default function RutaAprendizajePage() {
  const params = useParams();
  const router = useRouter();
  const nivel = params.nivel as string;
  const [progressPercent, setProgressPercent] = useState(0);

  const data = levelData[nivel];

  useEffect(() => {
    // Aquí calcularías el progreso real desde la base de datos
    setProgressPercent(0);
  }, [nivel]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Nivel no encontrado</h1>
          <button 
            onClick={() => router.push('/')}
            className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  const handleModuleClick = (moduleId: string, status: string) => {
    if (status === 'available') {
      router.push(`/ruta-aprendizaje/${nivel}/${moduleId}/leccion-1`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
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
            <span className="text-gray-900 capitalize">{nivel}</span>
            <span>/</span>
            <span className="text-gray-900">Fundamentos</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{data.title}</h1>
          <p className="text-xl text-gray-600 mb-6">{data.description}</p>
          
          {/* Progress Bar */}
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Progreso del curso</span>
              <span className="text-sm text-gray-500">{progressPercent}% Completado</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Módulos de Aprendizaje</h2>
            
            <div className="space-y-4">
              {data.modules.map((module) => (
                <div 
                  key={module.id}
                  className={`bg-white rounded-lg shadow-sm border p-6 transition-all duration-200 ${
                    module.status === 'available' 
                      ? 'cursor-pointer hover:shadow-md hover:border-purple-300' 
                      : 'opacity-60'
                  }`}
                  onClick={() => handleModuleClick(module.id, module.status)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl">{module.icon}</div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{module.title}</h3>
                        <p className="text-gray-600">{module.description}</p>
                        <div className="flex items-center mt-2 text-sm text-gray-500">
                          <i className="fas fa-clock mr-1"></i>
                          <span>{module.duration}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      {module.status === 'available' ? (
                        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                          Comenzar
                        </button>
                      ) : (
                        <div className="flex items-center text-gray-400">
                          <i className="fas fa-lock mr-2"></i>
                          <span>Bloqueado</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Documentation Resources */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-book text-purple-600 mr-2"></i>
                Material de Apoyo
              </h3>
              <p className="text-sm text-gray-600 mb-4">Recursos adicionales para tu aprendizaje</p>
              <div className="space-y-3">
                {data.resources.documentation.map((doc, index) => (
                  <a 
                    key={index}
                    href={doc.url}
                    className="flex items-center text-purple-600 hover:text-purple-800 text-sm"
                  >
                    <i className="fas fa-external-link-alt mr-2"></i>
                    {doc.title}
                  </a>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-tools text-purple-600 mr-2"></i>
                Herramientas Necesarias
              </h3>
              <p className="text-sm text-gray-600 mb-4">Software requerido para el curso</p>
              <div className="space-y-4">
                {data.resources.tools.map((tool, index) => (
                  <div key={index} className="border-l-4 border-purple-200 pl-4">
                    <h4 className="font-medium text-gray-900">{tool.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">{tool.description}</p>
                    <a 
                      href={tool.url}
                      className="text-purple-600 hover:text-purple-800 text-sm"
                    >
                      Descargar
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Help Section */}
            <div className="bg-purple-50 rounded-lg p-6 text-center">
              <div className="text-purple-600 text-4xl mb-4">
                <i className="fas fa-question-circle"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">¿Necesitas ayuda?</h3>
              <p className="text-sm text-gray-600 mb-4">
                Estamos aquí para apoyarte en tu proceso de aprendizaje. No dudes en contactarnos si tienes alguna pregunta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
