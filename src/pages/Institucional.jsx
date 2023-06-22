import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      className="mx-auto px-14 my-24 md:my-40 lg:my-56 container "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex flex-col lg:flex-row">
        <div className="order-last flex-1 lg:order-1 md:pr-5">
          <div className="space-y-5 md:space-y-10 py-4 lg:pt-0 ">
            <div>
              <h1 className="text-xl md:text-2xl  lg:text-4xl font-semibold sm:mb-3">Misión</h1>
              <p className="text-justify md:text-xl">
                Somos una empresa que ofrece asesoramiento y asistencia técnica
                integral a organizaciones sociales y educativas de manera
                eficiente, flexible y ágil. Para ello contamos con profesionales
                especializados con foco en finanzas, inteligencia de negocios y
                economía circular creando valor a nuestros clientes, de esta
                manera buscamos contribuir a la investigación, y al desarrollo
                de la comunidad y a lo académico.
              </p>
            </div>

            <div>
              <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold sm:mb-3">Visión</h1>
              <p className="text-justify md:text-xl">
                Para el 2025, ser referente en el sector cooperativo como la
                mejor opción en desarrollar alternativas de solución a
                necesidades relacionadas a finanzas, inteligencia de negocios y
                economía circular de nuestros clientes.
              </p>
            </div>
          </div>
        </div>
        <div className=" lg:w-full lg:order-2 flex-1 ">
          <img
            className="w-full max-w-7xl h-full object-cover"
            src="src/static/pexels-pixabay-416405.jpg"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default About;
