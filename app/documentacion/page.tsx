import React from 'react';
import { BookOpen, Zap, Users, Target } from 'lucide-react';

const DocumentationHome = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Documentación VTEX BootCamp
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Bienvenido a la documentación completa de VTEX IO. Aquí encontrarás todo lo que necesitas 
          para desarrollar aplicaciones de comercio electrónico de clase mundial.
        </p>
      </div>

      {/* Quick Start Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <a href="/documentacion/guias-paso-a-paso/instalacion-vtex-cli" className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200 block hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <BookOpen className="w-8 h-8 text-purple-600 mr-3" />
            <h3 className="text-xl font-semibold text-gray-900">Guías Paso a Paso</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Aprende con tutoriales detallados y ejemplos prácticos desde lo básico hasta lo avanzado.
          </p>
          <div className="text-sm text-purple-600 font-medium">
            Comenzar con las guías →
          </div>
        </a>

        <a href="/documentacion/vtex-io/rich-text" className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 block hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <Zap className="w-8 h-8 text-blue-600 mr-3" />
            <h3 className="text-xl font-semibold text-gray-900">VTEX IO</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Explora todos los componentes, layouts y funcionalidades avanzadas de VTEX IO.
          </p>
          <div className="text-sm text-blue-600 font-medium">
            Ver componentes →
          </div>
        </a>

        <a href="/documentacion/referencias-api/master-data-get" className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200 block hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <Target className="w-8 h-8 text-green-600 mr-3" />
            <h3 className="text-xl font-semibold text-gray-900">Referencias de API</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Documentación completa de todas las APIs de VTEX, incluyendo Master Data y más.
          </p>
          <div className="text-sm text-green-600 font-medium">
            Explorar APIs →
          </div>
        </a>

        <a href="/documentacion/ejemplos-codigo" className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200 block hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <Users className="w-8 h-8 text-orange-600 mr-3" />
            <h3 className="text-xl font-semibold text-gray-900">Ejemplos de Código</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Código real de producción para que te puedas guiar en tus implementaciones.
          </p>
          <div className="text-sm text-orange-600 font-medium">
            Ver ejemplos →
          </div>
        </a>
      </div>

      {/* Getting Started Section */}
      <div className="bg-white border border-gray-200 rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Comenzando</h2>
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
              <span className="text-purple-600 font-semibold text-sm">1</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Configura tu entorno</h3>
              <p className="text-gray-600">Instala VTEX CLI y configura tu workspace de desarrollo.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
              <span className="text-purple-600 font-semibold text-sm">2</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Explora los componentes</h3>
              <p className="text-gray-600">Familiarízate con los componentes básicos de VTEX IO.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
              <span className="text-purple-600 font-semibold text-sm">3</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Crea tu primer componente</h3>
              <p className="text-gray-600">Sigue nuestras guías para crear tu primer componente personalizado.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">¿Necesitas ayuda?</h3>
        <p className="text-gray-600 mb-4">
          Si no encuentras lo que buscas, utiliza el buscador en el sidebar o navega por las diferentes categorías.
        </p>
        <div className="text-sm text-gray-500">
          💡 Tip: Usa Ctrl+F para buscar contenido específico en cada página.
        </div>
      </div>
    </div>
  );
};

export default DocumentationHome;
