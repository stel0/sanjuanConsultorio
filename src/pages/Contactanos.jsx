import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineMail,
  AiFillPhone,
} from "react-icons/ai";
import { motion } from "framer-motion";
function Contactanos() {
  return (
    <div className="h-screen py-44" style={{ backgroundColor: "rgb(228,223,39)" }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="text-center ">
          <h1 className="text-3xl sm:text-6xl font-bold">Contactanos!</h1>
          <AiFillPhone className="mx-auto text-5xl sm:text-9xl mt-12" />
        </div>
        <div className="flex flex-col px-6 sm:flex-row lg:px-64 py-20">
          <div className="mx-auto my-4 sm:my-0 sm:basis-1/2">
            <h1>Teléfonos</h1>
            <ul className="text-black/50">
              <li>0971809900</li>
            </ul>
          </div>
          <div className="mx-auto my-4 sm:my-0 sm:basis-1/2 sm:px-2">
            <h1>Email</h1>
            <ul className="text-black/50">
              <li>info@sanjuan.com.py</li>
            </ul>
          </div>
          <div className="mx-auto my-4 sm:my-0 sm:basis-1/2 sm:px-2">
            <h1>Dirección</h1>
            <ul className="text-black/50">
              <li>Ecuador casi Pedro Peralta Bo. Gloria Villa Elisa</li>
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
                <a href="#">
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
      </motion.div>
    </div>
  );
}

export default Contactanos;
