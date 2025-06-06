import React from 'react';
import { User, Code, Zap, Target, Award, Calendar } from 'lucide-react';

const AcercaDePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Acerca de VTEX BootCamp</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Conoce más sobre este proyecto y quién está detrás de él
          </p>
        </div>

        {/* Developer Info */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mr-6">
              <User className="w-8 h-8 text-purple-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Desarrollador</h2>
              <p className="text-gray-600">Creador de VTEX BootCamp</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Lezcano Tirado Luis Ramon
            </h3>
            <p className="text-purple-700 font-medium mb-4">
              Practicante Front-End TD (Transformación Digital)
            </p>
            <p className="text-gray-700 leading-relaxed">
              Este software fue desarrollado como parte del programa de prácticas en Transformación Digital, 
              con el objetivo de crear una plataforma educativa completa para el aprendizaje de VTEX IO y 
              desarrollo de e-commerce.
            </p>
          </div>
        </div>

        {/* Project Info */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Sobre el Proyecto</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Objetivo</h3>
                <p className="text-gray-600 text-sm">
                  Crear una plataforma educativa integral para el aprendizaje de VTEX IO y desarrollo de e-commerce.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Tecnología</h3>
                <p className="text-gray-600 text-sm">
                  Desarrollado con Next.js, TypeScript, Tailwind CSS, Prisma y MongoDB.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Funcionalidades</h3>
                <p className="text-gray-600 text-sm">
                  Sistema de rutas de aprendizaje, quizzes interactivos, documentación completa y ejemplos de código.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Propósito</h3>
                <p className="text-gray-600 text-sm">
                  Formar la próxima generación de desarrolladores de comercio digital especializados en VTEX.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Características Principales</h2>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              <span className="text-gray-700">Sistema de autenticación con Clerk</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              <span className="text-gray-700">Rutas de aprendizaje estructuradas por niveles</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              <span className="text-gray-700">Sistema de quizzes con seguimiento de progreso</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              <span className="text-gray-700">Documentación completa de VTEX IO</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              <span className="text-gray-700">Ejemplos de código real de producción</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              <span className="text-gray-700">Dashboard de estadísticas y progreso</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              <span className="text-gray-700">Diseño responsive y moderno</span>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Desarrollo del Proyecto</h2>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Calendar className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">2025</h3>
                <p className="text-gray-600">
                  Desarrollo e implementación de VTEX BootCamp como proyecto de prácticas profesionales 
                  en Transformación Digital, enfocado en crear una solución educativa innovadora para 
                  el ecosistema VTEX.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">¿Tienes preguntas o sugerencias?</h3>
            <p className="text-purple-100 mb-6">
              Estamos siempre abiertos a feedback y mejoras para hacer de VTEX BootCamp una mejor experiencia de aprendizaje.
            </p>
            <a 
              href="https://wa.link/jnje1w"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <i className="fab fa-whatsapp mr-2"></i>
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcercaDePage;
