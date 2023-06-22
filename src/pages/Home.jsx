import Slider from "../components/Slider";
import { motion } from "framer-motion";
import { AiFillFacebook, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";


function Home() {
  const slides = [
    {
      title: "",
      sub: "",
      src: "src/static/images/pexels-nappy-935979.jpg",

      text: "Somos especialistas en asesoramiento y asistencia técnica integral a organizaciones sociales y educativas.",
    },
    {
      title: "",
      sub: "",
      src: "src/static/images/pexels-photomix-company-242492.jpg",
   
      text: "Contamos con profesionales especializados con foco en finanzas,inteligencia de negocios y economía circular creando valor a nuestros clientes.",
    },
    {
      title:"",
      sub:"",
      src:"",
     
      text:"Este programa se enfoca en el desarrollo de las Habilidades blandas de los niños. Como así también el  aprender sobre Cooperativismo y Economía Circular, teniendo como objetivo despertar el interés hacia el emprendedurismo."
    }
  ];

  return (
    <>
      <motion.div className="w-screen h-screen"
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
      >
        <Slider slides={slides} />
      </motion.div>

      <div className="flex flex-col px-6 sm:flex-row lg:px-64 py-20" style={{backgroundColor:"rgb(228,223,39)"}}>
        <div className="mx-auto my-4 sm:my-0 sm:basis-1/2">
          <h1>Teléfono</h1>
          <ul className="text-black/50">
            <li>
              0971809900
            </li>
          </ul>
        </div>
        <div className="mx-auto my-4 sm:my-0 sm:basis-1/2 sm:px-2">
          <h1>Email</h1>
          <ul className="text-black/50">
            <li>
              info@sanjuan.com.py
            </li>
          </ul>
        </div>
        <div className="mx-auto my-4 sm:my-0 sm:basis-1/2 sm:px-2">
          <h1>Dirección</h1>
          <ul className="text-black/50">
            <li>Ecuador casi Pedro Peralta 
            Bo. Gloria 
            Villa Elisa</li>
          </ul>
        </div>
        <div className="mx-auto my-4 sm:my-0 sm:basis-1/2 sm:px-2">
          <ul className="flex flex-r text-5xl">
            <li className="basis-3" style={{ color: "#3b5998" }}>
              <a href="https://www.facebook.com/">
                <AiFillFacebook />
              </a>
            </li>
            <li className="basis-3" style={{ color: "#0077b5" }}>
              <a href="https://www.linkedin.com/company/centro-de-investigaci%C3%B3n-desarrollo-y-altos-estudios-san-juan-s-a/about/">
                <AiFillLinkedin />
              </a>
            </li>
            <li className="basis-3 text-red-700">
              <a href="mailto:info@sanjuan.com.py">
                <AiOutlineMail />
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      
    </>
  );
}

export default Home;
