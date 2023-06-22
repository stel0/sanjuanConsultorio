import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Home from "../pages/Home";
import Institucional from "../pages/Institucional";
import Services from "../pages/Services";
import Alianza from '../pages/Alianza';
import Contactanos from '../pages/Contactanos';
import PageNotFound from "../pages/PageNotFound";
import Inscripcion from '../pages/Inscripcion';
import Acceso from '../pages/Acceso';


import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/institucional" element={<Institucional />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/alianza" element={<Alianza />} />
          <Route path="/inscripcion" element={<Inscripcion />} />
          <Route path="/contactanos" element={<Contactanos />} />
          <Route path="/acceso" element={<Acceso />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default AnimatedRoutes;
