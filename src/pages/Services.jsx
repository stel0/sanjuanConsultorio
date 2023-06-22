import { motion } from "framer-motion";
import { AiOutlineCheck } from "react-icons/ai";

function Services() {
  const cards = "flex flex-col lg:flex-row bg-white drop-shadow-xl";
  const img_container = "h-full flex-1 lg:order-2";
  const img = "w-full h-full object-cover";
  const card_text = "p-4 flex-1 order-last lg:order-1";
  const title = "text-xl font-semibold md:text-3xl p-2";
  const description = "pl-6 py-4 md:text-lg ";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className=" mt-0 "
    >
      <div className="container mx-auto">
        <div className="grid  md:grid-rows-2  mx-14 py-36 gap-10">
          <div className={cards}>
            <div className={card_text}>
              <div>
                <h1 className={title}>
                  Análisis Financiero de Cooperativas de Ahorro y Crédito.
                </h1>
                <hr />

                <ul className={description}>
                  <li className="flex items-center space-x-3">
                    <AiOutlineCheck className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" />
                    <span>Revisión de estados financieros</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <AiOutlineCheck className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" />
                    <span>Recomendaciones y planes de acción de mejora</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className={img_container}>
              <img
                src="src/static/services/pexels-edmond-dantès-4344860.jpg"
                className={img}
              />
            </div>
          </div>

          <div className={cards}>
            <div className={card_text}>
              <h1 className={title}>
                Asistencia Técnica en Riesgo, Inteligencia de Negocios, Economía
                Circular, Servicios crediticios
              </h1>
              <hr />
              <ul className={description}>
                <li className="flex items-center space-x-3">
                  <AiOutlineCheck className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" />
                  <span>
                    Diagnostico con foco en la necesidad de la cooperativa
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <AiOutlineCheck className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" />
                  <span>Recomendaciones y planes de acción</span>
                </li>
                <li className="flex items-center space-x-3">
                  <AiOutlineCheck className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" />
                  <span>
                    Reorganización, adecuación y actualización de áreas y
                    productos financieros
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <AiOutlineCheck className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" />
                  <span>Capacitación, taller, actualización</span>
                </li>
                <li className="flex items-center space-x-3">
                  <AiOutlineCheck className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" />
                  <span>
                    Implementación de herramientas que crean valor a la gestión
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <AiOutlineCheck className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" />
                  <span>Seguimiento y acompañamiento</span>
                </li>
              </ul>
            </div>
            <div className={img_container}>
              <img
                src="src/static/services/pexels-kindel-media-7688336.jpg"
                className={img}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Services;
