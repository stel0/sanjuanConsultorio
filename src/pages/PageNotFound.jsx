import React from "react";
import { motion } from "framer-motion";

function PageNotFound() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      404 PageNotFound
    </motion.div>
  );
}

export default PageNotFound;
