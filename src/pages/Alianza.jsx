import { motion } from "framer-motion";

function Alianza() {
  return (
      <motion.div
          className="mt-48"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
      >
          <div className="w-96 md:container md:px-12 mx-auto my-auto  md:flex md:items-center">
              <img className="md:w-1/2" src="src/static/images/idecoop.png" alt="" />
              <img className="md:w-1/2" src="src/static/images/medallamilagrosa.png" alt="" />
          </div>
      </motion.div>
  );
}

export default Alianza;
