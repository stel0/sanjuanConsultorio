import { NavLink } from "react-router-dom";
import { useState } from "react";
import { motion, useCycle, AnimatePresence } from "framer-motion";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

function NavBar() {
  const links = [
    { to: "/", name: "INICIO" },
    { to: "/institucional", name: "INSTITUCIONAL" },
    { to: "/servicios", name: "SERVICIOS" },
    { to: "/alianza", name: "ALIANZAS" },
    { to: "/inscripcion", name: "INSCRIPCION" },
    { to: "/contactanos", name: "CONTACTANOS" },
    { to: "/acceso", name: "ACCESO" },
  ];

  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
  };

  const [open, cycleOpen] = useCycle(false, true);
  const [isAcc, setIsAcc] = useState(false);
  return (
    <div className="h-20 " style={{ backgroundColor: "#3a913f" }}>
      <div className="flex relative z-50 ">
        <div className="absolute left-5 top-5  w-28 h-28 md:w-44 md:h-44  lg:w-52 lg:h-52  md:left-10  rounded-full">
          {isAcc == false ? (
            <img
              src="src/static/Logo/logo san juan .png"
              alt="consultorio-san-juan"
              className="p-3"
            />
          ) : (
            " "
          )}
        </div>
      </div>

      <ul className="hidden lg:grid lg:grid-flow-col lg:w-fit lg:absolute lg:right-10 ">
        {links.map((link, id) => (
          <motion.li
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.1 }}
            whileTap={{ scale: 0.8 }}
            className="rounded-lg py-2 px-3 hover:text-black/25 my-5 tracking-tight text-white"
            onClick={() => null}
          >
            <NavLink
              to={link.to}
              key={id}
              onClick={() => {
                link.name != "ACCESO" ? setIsAcc(false) : setIsAcc(true);
              }}
            >
              {link.name}
            </NavLink>
          </motion.li>
        ))}
      </ul>

      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="hover:bg-slate-500/10 rounded-lg  text-white  lg:hidden cursor-pointer text-4xl absolute right-10 my-5 p-2 w-fit z-50"
        onClick={cycleOpen}
      >
        <RxHamburgerMenu />
      </motion.div>

      <div className="absolute right-0  top-25 z-50 h-screen bg-white">
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ width: 0 }}
              animate={{
                width: 200,
              }}
              exit={{
                width: 0,
                transition: { delay: 0.3, duration: 0.3 },
              }}
            >
              <RxCross2
                className="text-4xl m-2 cursor-pointer"
                onClick={cycleOpen}
              />
              <motion.ul
                initial="closed"
                animate="open"
                exit="closed"
                variants={sideVariants}
                className="relative text-right"
              >
                {links.map((link) => (
                  <li
                    className="py-3 px-3 text-lg font-medium  bg-white "
                    onClick={() => null}
                  >
                    <NavLink
                      to={link.to}
                      className="hover:text-gray-300"
                      onClick={cycleOpen}
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default NavBar;
