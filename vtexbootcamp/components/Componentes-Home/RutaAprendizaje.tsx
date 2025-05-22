import Image from 'next/image'
import ImgFacil from '../../public/imagenes/Facil.png'
import ImgIntermedio from '../../public/imagenes/Intermedio.png'
import ImgDificil from '../../public/imagenes/Dificil.png'

interface CardProps {
  imagen: any;
  Titulo: string;
  Descripcion: string;
}

function Card(props: CardProps) {
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-br from-purple-300 to-purple-400 rounded-lg shadow-lg p-4 m-2 w-[462px] h-72">
      <Image
        src={props.imagen}
        alt={props.Titulo}
        width={200}
        height={200}
        className='rounded-lg h-52 w-auto'
      />
      <h2 className='text-xl font-bold'>{props.Titulo}</h2>
      <p>{props.Descripcion}</p>
    </div>
  );
}

function Niveles() {
  return (
    <div className='flex flex-col justify-center items-center pt-10 pb-10'>
      <h1 className='text-xl md:text-4xl font-extrabold text-black mb-10 mt-6'>Ruta de Aprendizaje</h1>
      <div className="flex flex-row gap-32">
          <Card
            imagen={ImgFacil}
            Titulo="Básico"
            Descripcion="Vtex CLI, Vtex Loggin, Vtex Workspace..."
          />
          <Card
            imagen={ImgIntermedio}
            Titulo="Intermedio"
            Descripcion="Pdp, Plp, Minicartv2, My Acount..."
          />
          <Card
            imagen={ImgDificil}
            Titulo="Avanzado"
            Descripcion="Checkout, Componentes Custom, Modales..."
          />
      </div>
    </div>
  );
}

export default Niveles;
