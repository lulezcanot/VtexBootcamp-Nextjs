"use client";

import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import toast from 'react-hot-toast';

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
  module: {
    id?: string;
    title: string;
    description: string;
  };
}

export default function LessonPage() {
  const params = useParams();
  const router = useRouter();
  const { user } = useUser();
  const { nivel, modulo, leccion } = params;
  
  const [lesson, setLesson] = useState<LessonContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [timeSpent, setTimeSpent] = useState(0);
  const [moduleProgress, setModuleProgress] = useState<any>(null);

  useEffect(() => {
    if (!user) {
      router.push(`/sign-in?redirect_url=${encodeURIComponent(window.location.pathname)}`);
      return;
    }

    fetchLesson();
  }, [nivel, modulo, leccion, user]);

  useEffect(() => {
    // Timer para tracking de tiempo
    const interval = setInterval(() => {
      setTimeSpent(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const fetchLesson = async () => {
    try {
      setLoading(true);
      
      const response = await fetch(`/api/learning-paths/${nivel}/${modulo}/${leccion}`);
      
      if (!response.ok) {
        throw new Error('Error al cargar la lección');
      }
      
      const data = await response.json();
      setLesson(data);
      
      // Obtener progreso del módulo
      await fetchModuleProgress(data.module?.id);
      
    } catch (error) {
      console.error('Error fetching lesson:', error);
      setError('Error al cargar la lección');
      toast.error('Error al cargar la lección');
    } finally {
      setLoading(false);
    }
  };

  const fetchModuleProgress = async (moduleId?: string) => {
    if (!moduleId) return;
    
    try {
      const response = await fetch(`/api/user/progress/module/${moduleId}`);
      if (response.ok) {
        const progressData = await response.json();
        setModuleProgress(progressData);
      }
    } catch (error) {
      console.error('Error fetching module progress:', error);
    }
  };

  const handlePrevious = () => {
    if (lesson?.prevLesson) {
      router.push(`/ruta-aprendizaje/${nivel}/${modulo}/${lesson.prevLesson}`);
    }
  };

  const handleNext = async () => {
    if (lesson?.nextLesson) {
      // Marcar lección como completada antes de ir a la siguiente
      await markLessonCompleted();
      router.push(`/ruta-aprendizaje/${nivel}/${modulo}/${lesson.nextLesson}`);
    } else {
      // Si no hay siguiente lección, marcar como completada y volver al curso
      await markLessonCompleted();
      router.push(`/ruta-aprendizaje/${nivel}`);
    }
  };

  const markLessonCompleted = async () => {
    if (!lesson) return;

    try {
      const response = await fetch('/api/user/progress/lesson', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          lessonId: lesson.id,
          timeSpent: timeSpent
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        toast.success('¡Lección completada!');
        
        // Actualizar progreso del módulo
        if (lesson.module?.id) {
          await fetchModuleProgress(lesson.module.id);
        }
        
        // Si se desbloqueó un nuevo nivel, mostrar notificación
        if (data.unlockedLevel) {
          toast.success(`¡Felicidades! Has desbloqueado el nivel ${data.unlockedLevel}`, {
            duration: 5000,
          });
        }
        
        // Si se desbloqueó un nuevo módulo, mostrar notificación
        if (data.unlockedModule) {
          toast.success(`¡Nuevo módulo desbloqueado: ${data.unlockedModule}!`, {
            duration: 4000,
          });
        }
      }
    } catch (error) {
      console.error('Error marking lesson as completed:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando lección...</p>
        </div>
      </div>
    );
  }

  if (error || !lesson) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {error || 'Lección no encontrada'}
          </h1>
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
              <span>{lesson.module.title}</span>
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
              {lesson.content?.sections?.map((section) => (
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
              {lesson.resources?.documentation && lesson.resources.documentation.length > 0 && (
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
              )}

              {/* Videos */}
              {lesson.resources?.videos && lesson.resources.videos.length > 0 && (
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
              {lesson.resources?.links && lesson.resources.links.length > 0 && (
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
                {moduleProgress && (
                  <>
                    <div className="flex justify-between text-sm">
                      <span>Progreso del módulo:</span>
                      <span>{moduleProgress.progressPercent}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-purple-600 h-2 rounded-full transition-all duration-300" 
                        style={{ width: `${moduleProgress.progressPercent}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Lecciones completadas:</span>
                      <span>{moduleProgress.completedLessons} de {moduleProgress.totalLessons}</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Lección actual:</span>
                      <span>{moduleProgress.currentLessonIndex} de {moduleProgress.totalLessons}</span>
                    </div>
                    {moduleProgress.totalTimeSpent > 0 && (
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>Tiempo total en módulo:</span>
                        <span>{Math.floor(moduleProgress.totalTimeSpent / 60)}:{(moduleProgress.totalTimeSpent % 60).toString().padStart(2, '0')}</span>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
