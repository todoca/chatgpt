import {
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
const HomePage = () => {
  const year = new Date().getFullYear();
  return (
    <div className="text-white flex flex-col items-center justify-center h-screen px-2 ">
      <h1 className="text-5xl font-bold mb-4">TodocaGPT</h1>
      <h2 className="text-3xl font-bold mb-4">
        Crea un nuevo chat y hablemos...
      </h2>

      <div className="flex space-x-2 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* sun Icon */}
            <SunIcon className="h-8 w-8" />
            <h2>Ejemplos</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">"Explicame algo..."</p>
            <p className="infoText">
              "¿Cual es la diferencia entre un perro y un gato?"
            </p>
            <p className="infoText">"¿De que color es el sol?"</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* sun Icon */}
            <BoltIcon className="h-8 w-8" />
            <h2>Bondades</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">
              Cambia el modelo a usar, dependiendo del modelo puedo ser más
              creativo o lógico
            </p>
            <p className="infoText">
              tus consultas y chat que abras siempre estaran almacenados para
              cuando los necesites
            </p>
            <p className="infoText">
              Puedes desde pedirme crear contenido para una publicidad o
              programarte cosas sencillas.
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* sun Icon */}
            <ExclamationTriangleIcon className="h-8 w-8" />
            <h2>Limitaciones</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">
              A veces puede generar información incorrecta
            </p>
            <p className="infoText">
              Puede que en ocacionalmente produzca instrucciones complejas o
              contenido recortado.
            </p>
            <p className="infoText">
              "Conocimiento limitado sobre los eventos del mundo hasta el año
              2021"
            </p>
          </div>
        </div>
      </div>
      <p className="mt-20">Hecho con amor... {year}</p>
    </div>
  );
};

export default HomePage;
