'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { ChevronRight, Clock, Tag } from 'lucide-react';

interface DocumentationContent {
  id: string;
  title: string;
  content: string;
  category: {
    name: string;
    slug: string;
  };
}

const DocumentationSectionPage = () => {
  const params = useParams();
  const [content, setContent] = useState<DocumentationContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(`/api/documentation/${params.category}/${params.section}`);
        if (response.ok) {
          const data = await response.json();
          setContent(data);
        } else {
          setError('Contenido no encontrado');
        }
      } catch (err) {
        setError('Error al cargar el contenido');
      } finally {
        setLoading(false);
      }
    };

    if (params.category && params.section) {
      fetchContent();
    }
  }, [params.category, params.section]);

  if (loading) {
    return (
      <div className="p-8 max-w-4xl mx-auto">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-6"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-4/6"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !content) {
    return (
      <div className="p-8 max-w-4xl mx-auto">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Contenido no encontrado</h1>
          <p className="text-gray-600 mb-6">{error || 'La página que buscas no existe.'}</p>
          <button 
            onClick={() => window.history.back()}
            className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Volver atrás
          </button>
        </div>
      </div>
    );
  }

  const parsedContent = JSON.parse(content.content);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
        <span>Documentación</span>
        <ChevronRight className="w-4 h-4" />
        <span>{content.category.name}</span>
        <ChevronRight className="w-4 h-4" />
        <span className="text-gray-900 font-medium">{content.title}</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{content.title}</h1>
        {parsedContent.description && (
          <p className="text-xl text-gray-600 leading-relaxed">{parsedContent.description}</p>
        )}
      </div>

      {/* Meta Information */}
      {(parsedContent.readTime || parsedContent.tags) && (
        <div className="flex items-center space-x-6 mb-8 p-4 bg-gray-50 rounded-lg">
          {parsedContent.readTime && (
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Clock className="w-4 h-4" />
              <span>{parsedContent.readTime}</span>
            </div>
          )}
          {parsedContent.tags && (
            <div className="flex items-center space-x-2">
              <Tag className="w-4 h-4 text-gray-600" />
              <div className="flex space-x-2">
                {parsedContent.tags.map((tag: string, index: number) => (
                  <span 
                    key={index}
                    className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <div className="prose prose-lg max-w-none">
        {parsedContent.sections?.map((section: any, index: number) => (
          <div key={index} className="mb-8">
            {section.title && (
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
            )}
            {section.content && (
              <div className="text-gray-700 leading-relaxed mb-4">
                {section.content.includes('|') && section.content.includes('---') ? (
                  <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300 rounded-lg">
                      <thead className="bg-gray-50">
                        {section.content.split('\n').slice(0, 1).map((headerRow: string, idx: number) => (
                          <tr key={idx}>
                            {headerRow.split('|').slice(1, -1).map((header: string, cellIdx: number) => (
                              <th key={cellIdx} className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b border-gray-300">
                                {header.trim()}
                              </th>
                            ))}
                          </tr>
                        ))}
                      </thead>
                      <tbody className="bg-white">
                        {section.content.split('\n').slice(2).filter((row: string) => row.includes('|')).map((row: string, rowIdx: number) => (
                          <tr key={rowIdx} className={rowIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                            {row.split('|').slice(1, -1).map((cell: string, cellIdx: number) => (
                              <td key={cellIdx} className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200">
                                {cell.trim() === '-' ? (
                                  <span className="text-gray-400 italic">-</span>
                                ) : (
                                  <span className={cellIdx === 0 ? 'font-mono text-purple-600' : ''}>{cell.trim()}</span>
                                )}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="whitespace-pre-line">{section.content}</div>
                )}
              </div>
            )}
            {section.code && (
              <div className="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto">
                <pre className="text-green-400 text-sm">
                  <code>{section.code}</code>
                </pre>
              </div>
            )}
            {section.note && (
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                <div className="flex">
                  <div className="ml-3">
                    <p className="text-sm text-blue-700">{section.note}</p>
                  </div>
                </div>
              </div>
            )}
            {section.warning && (
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <div className="flex">
                  <div className="ml-3">
                    <p className="text-sm text-yellow-700">{section.warning}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Video Section */}
      {parsedContent.videoUrl && (
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Video Tutorial</h3>
          <div className="aspect-video">
            <iframe
              src={parsedContent.videoUrl}
              title={content.title}
              className="w-full h-full rounded-lg"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* Resources */}
      {parsedContent.resources && (
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recursos adicionales</h3>
          <ul className="space-y-2">
            {parsedContent.resources.map((resource: any, index: number) => (
              <li key={index}>
                <a 
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-800 underline"
                >
                  {resource.title}
                </a>
                {resource.description && (
                  <span className="text-gray-600 ml-2">- {resource.description}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DocumentationSectionPage;
