"use client";

import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import toast from 'react-hot-toast';

interface ModuleData {
  id: string;
  title: string;
  description: string;
  duration: string;
  order: number;
  lessons: Array<{
    id: string;
    title: string;
    duration: string;
    order: number;
  }>;
}

interface LearningPathData {
  id: string;
  name: string;
  title: string;
  description: string;
  image: string;
  order: number;
  modules: ModuleData[];
}

export default function RutaAprendizajePage() {
  const params = useParams();
  const router = useRouter();
  const { user } = useUser();
  const nivel = params.nivel as string;
  
  const [learningPath, setLearningPath] = useState<LearningPathData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [progressPercent, setProgressPercent] = useState(0);
  const [userProgress, setUserProgress] = useState<any>(null);

  useEffect(() => {
    if (!user) {
      router.push(`/sign-in?redirect_url=${encodeURIComponent(`/ruta-aprendizaje/${nivel}`)}`);
      return;
    }

    fetchLearningPath();
  }, [nivel, user]);

  const fetchLearningPath = async () => {
    try {
      setLoading(true);
      
      // Verificar acceso primero
      const accessResponse = await fetch(`/api/user/check-access/${nivel}`);
      const accessData = await accessResponse.json();
      
      if (!accessData.hasAccess) {
        toast.error('Primero empieza con la ruta principiante');
        router.push('/');
        return;
      }

      // Obtener datos de la ruta de aprendizaje
      const [pathResponse, progressResponse] = await Promise.all([
        fetch(`/api/learning-paths/${nivel}`),
        fetch(`/api/user/progress/${nivel}`)
      ]);
      
      if (!pathResponse.ok) {
        throw new Error('Error al cargar la ruta de aprendizaje');
      }
      
      const pathData = await pathResponse.json();
      setLearningPath(pathData);
      
      // Obtener progreso real del usuario
      if (progressResponse.ok) {
        const progressData = await progressResponse.json();
        setUserProgress(progressData);
        setProgressPercent(progressData.levelProgress || 0);
      }
      
    } catch (error) {
      console.error('Error fetching learning path:', error);
      setError('Error al cargar la ruta de aprendizaje');
      toast.error('Error al cargar la ruta de aprendizaje');
    } finally {
      setLoading(false);
    }
  };

  const handleModuleClick = (moduleId: string, isUnlocked: boolean, moduleTitle: string) => {
    if (!isUnlocked) {
      toast.error('Completa el módulo anterior para desbloquear este módulo', {
        duration: 3000,
      });
      return;
    }

    // Navegar a la primera lección del módulo
    const moduleSlug = moduleTitle
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[()]/g, '');
    
    router.push(`/ruta-aprendizaje/${nivel}/${moduleSlug}/leccion-1`);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando ruta de aprendizaje...</p>
        </div>
      </div>
    );
  }

  if (error || !learningPath) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {error || 'Ruta de aprendizaje no encontrada'}
          </h1>
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
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{learningPath.title}</h1>
          <p className="text-xl text-gray-600 mb-6">{learningPath.description}</p>
          
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
              {userProgress?.modules?.map((moduleProgress: any, index: number) => {
                const module = learningPath.modules.find(m => m.id === moduleProgress.moduleId);
                if (!module) return null;

                return (
                  <div 
                    key={module.id}
                    className={`bg-white rounded-lg shadow-sm border p-6 transition-all duration-200 ${
                      moduleProgress.isUnlocked 
                        ? 'cursor-pointer hover:shadow-md hover:border-purple-300' 
                        : 'opacity-60 cursor-not-allowed'
                    }`}
                    onClick={() => handleModuleClick(module.id, moduleProgress.isUnlocked, module.title)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <div className="text-3xl">
                            {index === 0 ? '📚' : index === 1 ? '⚙️' : '🔗'}
                          </div>
                          {!moduleProgress.isUnlocked && (
                            <div className="absolute -top-1 -right-1 text-gray-400">
                              <i className="fas fa-lock text-sm"></i>
                            </div>
                          )}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className={`text-lg font-semibold ${
                              moduleProgress.isUnlocked ? 'text-gray-900' : 'text-gray-500'
                            }`}>
                              {module.title}
                            </h3>
                            {moduleProgress.isCompleted && (
                              <div className="text-green-500">
                                <i className="fas fa-check-circle"></i>
                              </div>
                            )}
                          </div>
                          <p className={`${
                            moduleProgress.isUnlocked ? 'text-gray-600' : 'text-gray-400'
                          }`}>
                            {module.description}
                          </p>
                          <div className="flex items-center mt-2 text-sm text-gray-500">
                            <i className="fas fa-clock mr-1"></i>
                            <span>{module.duration}</span>
                            <span className="mx-2">•</span>
                            <span>{moduleProgress.totalLessons} lecciones</span>
                            {moduleProgress.completedLessons > 0 && (
                              <>
                                <span className="mx-2">•</span>
                                <span className="text-purple-600 font-medium">
                                  {moduleProgress.progressPercent}% completado
                                </span>
                              </>
                            )}
                          </div>
                          {moduleProgress.progressPercent > 0 && (
                            <div className="mt-2 w-full bg-gray-200 rounded-full h-1">
                              <div 
                                className="bg-purple-600 h-1 rounded-full transition-all duration-300"
                                style={{ width: `${moduleProgress.progressPercent}%` }}
                              ></div>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        {moduleProgress.isUnlocked ? (
                          <button className={`px-4 py-2 rounded-lg ${
                            moduleProgress.isCompleted 
                              ? 'bg-green-600 text-white hover:bg-green-700' 
                              : 'bg-purple-600 text-white hover:bg-purple-700'
                          }`}>
                            {moduleProgress.isCompleted ? 'Revisar' : 'Comenzar'}
                          </button>
                        ) : (
                          <div className="px-4 py-2 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed">
                            Bloqueado
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              }) || learningPath.modules.map((module, index) => (
                <div 
                  key={module.id}
                  className="bg-white rounded-lg shadow-sm border p-6 transition-all duration-200 cursor-pointer hover:shadow-md hover:border-purple-300"
                  onClick={() => handleModuleClick(module.id, index === 0, module.title)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl">
                        {index === 0 ? '📚' : index === 1 ? '⚙️' : '🔗'}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{module.title}</h3>
                        <p className="text-gray-600">{module.description}</p>
                        <div className="flex items-center mt-2 text-sm text-gray-500">
                          <i className="fas fa-clock mr-1"></i>
                          <span>{module.duration}</span>
                          <span className="mx-2">•</span>
                          <span>{module.lessons.length} lecciones</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                        Comenzar
                      </button>
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
                <a 
                  href="https://developers.vtex.com/docs/guides/vtex-io-documentation-what-is-vtex-io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-purple-600 hover:text-purple-800 text-sm"
                >
                  <i className="fas fa-external-link-alt mr-2"></i>
                  Documentación oficial de VTEX IO
                </a>
                <a 
                  href="https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-installation-and-command-reference"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-purple-600 hover:text-purple-800 text-sm"
                >
                  <i className="fas fa-external-link-alt mr-2"></i>
                  Guía de VTEX CLI
                </a>
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
                <div className="border-l-4 border-purple-200 pl-4">
                  <h4 className="font-medium text-gray-900">Node.js</h4>
                  <p className="text-sm text-gray-600 mb-2">Versión 14 o superior</p>
                  <a 
                    href="https://nodejs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-800 text-sm"
                  >
                    Descargar
                  </a>
                </div>
                <div className="border-l-4 border-purple-200 pl-4">
                  <h4 className="font-medium text-gray-900">VTEX CLI</h4>
                  <p className="text-sm text-gray-600 mb-2">Herramienta de línea de comandos</p>
                  <a 
                    href="https://www.npmjs.com/package/@vtex/cli"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-800 text-sm"
                  >
                    Instalar
                  </a>
                </div>
                <div className="border-l-4 border-purple-200 pl-4">
                  <h4 className="font-medium text-gray-900">Git</h4>
                  <p className="text-sm text-gray-600 mb-2">Control de versiones</p>
                  <a 
                    href="https://git-scm.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-800 text-sm"
                  >
                    Descargar
                  </a>
                </div>
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
