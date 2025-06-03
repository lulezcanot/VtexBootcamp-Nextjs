import Image from 'next/image';
import { useRouter } from 'next/navigation';

const RutaAprendizaje = () => {
  const router = useRouter();

  const learningPaths = [
    {
      id: 'principiante',
      title: 'Principiante',
      description: 'Comienza tu viaje en el desarrollo de comercio digital con VTEX IO',
      image: '/imagenes/image--básico.png',
      duration: '2-3 horas',
      modules: 3
    },
    {
      id: 'intermedio',
      title: 'Intermedio',
      description: 'Profundiza en conceptos avanzados y mejores prácticas',
      image: '/imagenes/image--intermedio.png',
      duration: '4-5 horas',
      modules: 4
    },
    {
      id: 'avanzado',
      title: 'Avanzado',
      description: 'Domina técnicas avanzadas y arquitecturas complejas',
      image: '/imagenes/image--avanzado.png',
      duration: '6-8 horas',
      modules: 5
    }
  ];

  const handlePathClick = (pathId: string) => {
    router.push(`/ruta-aprendizaje/${pathId}`);
  };

  return (
    <div className='flex flex-col justify-center items-center pt-16 pb-16 bg-gray-50'>
      <h2 className='text-3xl md:text-4xl font-extrabold text-gray-800 mb-4'>
        Ruta de Aprendizaje
      </h2>
      <p className='text-lg text-gray-600 mb-12 text-center max-w-2xl'>
        Elige tu nivel y comienza a dominar VTEX IO paso a paso
      </p>
      
      <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch max-w-7xl w-full px-4">
        {learningPaths.map((path, index) => (
          <div 
            key={path.id}
            className="flex flex-col bg-gradient-to-br from-purple-300 to-purple-500 rounded-xl shadow-lg p-6 w-full max-w-sm cursor-pointer hover:-translate-y-2 transition-all duration-300 ease-in-out hover:shadow-xl"
            onClick={() => handlePathClick(path.id)}
          >
            {/* Contenido superior */}
            <div className="flex flex-col items-center flex-grow">
              <div className="rounded-lg h-32 w-32 flex items-center justify-center mb-4 bg-white/20 backdrop-blur-sm">
                <Image
                  src={path.image}
                  width={80}
                  height={80}
                  alt={path.title}
                  className="object-contain"
                />
              </div>
              
              <h3 className='text-2xl font-bold text-white mb-2 text-center'>
                {path.title}
              </h3>
              
              <p className='text-white/90 text-center text-sm mb-6 leading-relaxed'>
                {path.description}
              </p>
            </div>
            
            {/* Contenido inferior fijo */}
            <div className="flex flex-col space-y-3 mt-auto">
              <div className="flex justify-between items-center text-white/80 text-sm">
                <span className="flex items-center">
                  <i className="fas fa-clock mr-2"></i>
                  {path.duration}
                </span>
                <span className="flex items-center">
                  <i className="fas fa-book mr-2"></i>
                  {path.modules} módulos
                </span>
              </div>
              
              <button className="w-full py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-colors duration-200">
                Comenzar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RutaAprendizaje;
