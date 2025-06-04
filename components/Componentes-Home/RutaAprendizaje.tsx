import { useRouter } from 'next/navigation';

const RutaAprendizaje = () => {
  const router = useRouter();

  const learningPaths = [
    {
      id: 'principiante',
      title: 'Principiante',
      icon: '📖',
      items: [
        'Fundamentos de VTEX IO',
        'Configuración inicial',
        'Primeros pasos'
      ]
    },
    {
      id: 'intermedio',
      title: 'Intermedio',
      icon: '</>',
      items: [
        'Desarrollo de componentes',
        'Integración de APIs',
        'Personalización de temas'
      ]
    },
    {
      id: 'avanzado',
      title: 'Avanzado',
      icon: '🚀',
      items: [
        'Arquitectura avanzada',
        'Optimización',
        'Casos de estudio'
      ]
    }
  ];

  const handlePathClick = (pathId: string) => {
    router.push(`/ruta-aprendizaje/${pathId}`);
  };

  return (
    <div className='flex flex-col justify-center items-center pt-16 pb-16 bg-white'>
      <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center'>
        Ruta de Aprendizaje
      </h2>
      
      <div className="flex flex-col lg:flex-row gap-6 justify-center items-stretch max-w-7xl w-full px-4">
        {learningPaths.map((path, index) => (
          <div 
            key={path.id}
            className="flex flex-col bg-purple-200 rounded-2xl p-8 w-full max-w-sm cursor-pointer hover:shadow-lg transition-all duration-300 ease-in-out"
            onClick={() => handlePathClick(path.id)}
          >
            {/* Icono */}
            <div className="flex justify-start mb-6">
              <div className="text-4xl text-purple-700">
                {path.icon}
              </div>
            </div>
            
            {/* Título */}
            <h3 className='text-xl font-bold text-gray-900 mb-6'>
              {path.title}
            </h3>
            
            {/* Lista de elementos */}
            <div className="flex flex-col space-y-3">
              {path.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex items-center space-x-3">
                  <div className="w-5 h-5 border-2 border-purple-400 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  </div>
                  <span className="text-gray-700 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RutaAprendizaje;
