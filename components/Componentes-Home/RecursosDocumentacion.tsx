import React from 'react'
import Link from 'next/link';
import { PlayCircle, FileText, Package, Code } from 'lucide-react';

interface ResourceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    href: string;
  }
  
  const ResourceCard: React.FC<ResourceCardProps> = ({ icon, title, description, href }) => {
    return (
      <Link href={href} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 block">
        <div className="text-purple-600 w-12 h-12 mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </Link>
    );
  };
  
  const RecursosDocumentacion: React.FC = () => {
    return (
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Recursos y Documentación
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ResourceCard
              icon={<PlayCircle className="w-full h-full" />}
              title="Guías Paso a Paso"
              description="Aprende con tutoriales detallados y ejemplos prácticos"
              href="/documentacion/guias-paso-a-paso/instalacion-vtex-cli"
            />
            <ResourceCard
              icon={<FileText className="w-full h-full" />}
              title="Referencias de API"
              description="Documentación completa de la API de VTEX IO"
              href="/documentacion/referencias-api/master-data-get"
            />
            <ResourceCard
              icon={<Package className="w-full h-full" />}
              title="Mejores Prácticas"
              description="Optimiza tu desarrollo siguiendo las mejores prácticas"
              href="/documentacion"
            />
            <ResourceCard
              icon={<Code className="w-full h-full" />}
              title="Ejemplos de Código"
              description="Explora ejemplos reales de implementaciones"
              href="/documentacion/ejemplos-codigo"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default RecursosDocumentacion;
