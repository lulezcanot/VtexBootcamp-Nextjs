'use client';
import React, { useEffect, useState } from 'react';
import { Clock, Tag, Copy, Check } from 'lucide-react';

interface CodeExample {
  id: string;
  name: string;
  slug: string;
  description: string;
  language: string;
  tags: string[];
  code: string;
}

const CodeExamplesPage = () => {
  const [examples, setExamples] = useState<CodeExample[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedExample, setSelectedExample] = useState<CodeExample | null>(null);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  useEffect(() => {
    const fetchExamples = async () => {
      try {
        const response = await fetch('/api/code-examples');
        if (response.ok) {
          const data = await response.json();
          setExamples(data);
        } else {
          setError('Error al cargar los ejemplos');
        }
      } catch (err) {
        setError('Error al cargar los ejemplos');
      } finally {
        setLoading(false);
      }
    };

    fetchExamples();
  }, []);

  const copyToClipboard = async (code: string, exampleId: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(exampleId);
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      console.error('Error copying to clipboard:', err);
    }
  };

  if (loading) {
    return (
      <div className="p-8 max-w-6xl mx-auto">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-48 bg-gray-200 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 max-w-6xl mx-auto">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Error</h1>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Ejemplos de Código</h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Código real de producción para guiarte en tus implementaciones de VTEX IO.
        </p>
      </div>

      {/* Examples Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {examples.map((example) => (
          <div
            key={example.id}
            className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => setSelectedExample(example)}
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">{example.name}</h3>
              <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                {example.language}
              </span>
            </div>
            
            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
              {example.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {example.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Code Display */}
      {selectedExample && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{selectedExample.name}</h2>
                <p className="text-gray-600 mt-1">{selectedExample.description}</p>
              </div>
              <button
                onClick={() => setSelectedExample(null)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedExample.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Code Block */}
              <div className="relative">
                <div className="flex items-center justify-between bg-gray-800 text-white px-4 py-2 rounded-t-lg">
                  <span className="text-sm font-medium">{selectedExample.language}</span>
                  <button
                    onClick={() => copyToClipboard(selectedExample.code, selectedExample.id)}
                    className="flex items-center space-x-2 text-sm hover:text-gray-300 transition-colors"
                  >
                    {copiedCode === selectedExample.id ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Copiado</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copiar</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="bg-gray-900 text-green-400 p-4 rounded-b-lg overflow-x-auto text-sm">
                  <code>{selectedExample.code}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CodeExamplesPage;
