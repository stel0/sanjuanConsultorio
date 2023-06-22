import { motion } from "framer-motion";

function Alianza() {
  return (
    <motion.div
      className="mt-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      >
      <div className="w-52 md:w-96 items-center mx-auto m-6">
        <img src="src/static/Logo/logo club mita.png" alt=""/>
      </div>
      {/*<div className="container mx-auto p-4">
        <h1 className="text-3xl md:text-4xl font-bold text-green-900">
          PROGRAMA: 1.0
        </h1>
        <h3 className="text-xl md:text-2xl text-green-900 font-semibold">
          OBJETIVOS: El programa permite a los niños a:
        </h3>
        <ul className="list-disc ml-10 mt-5 text-lg md:text-xl font-semibold">
          <li>
            Conocer sus propias habilidades y todo su potencial de forma
            integral para que se de cuenta de que desempeñan un papel de
            creadores de sus propias vidas volviendose cada vez mas fuertes y
            seguros.
          </li>
          <li>
            Desarrollar habilidades sociales, que permitan a los niños aprender
            y comprender la importancia de la educación los valores y los buenos
            hábitos.
          </li>
          <li>Identificar sus habilidades de liderazgo.</li>
          <li>
            Conocer e identificar las cualidades que tiene el niño como lider
          </li>
          <li>
            Conocer y aprender sobre básicas de cooperativismo, servicios
            financieros de ahorros y economía circular.
          </li>
        </ul>
  </div>*/}
    </motion.div>
  );
}

export default Alianza;
