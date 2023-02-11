import {
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
const HomePage = () => {
  return (
    <div className="text-white flex flex-col items-center justify-center h-screen px-2 ">
      <h1 className="text-5xl font-bold mb-4">ChatGPT</h1>
      <h2 className="text-3xl font-bold mb-4">Hecho con amor por...</h2>
      <h3 className="text-4xl underline font-bold mb-20">TODOCA</h3>

      <div className="flex space-x-2 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* sun Icon */}
            <SunIcon className="h-8 w-8" />
            <h2>Examples</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">"Explicame algo"</p>
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
            <p className="infoText">Cambia el modelo de ChatGPT a usar</p>
            <p className="infoText">Los mensajes son registrados en Firebase</p>
            <p className="infoText">
              Notificación de ChatGPT que esta pensando para responder!
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
    </div>
  );
};

export default HomePage;
