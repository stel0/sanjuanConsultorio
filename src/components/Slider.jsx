import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

function Slider({ slides }) {
  const [direction, setDirection] = useState(0);

  const variants = {
    initial: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
        scale: 0.5,
      };
    },
    animate: {
      x: 0,
      opacity: 1,
      duration: 5,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 40 },
        opacity: { duration: 1 },
      },
    },
    exit: (direction) => {
      return {
        x: direction > 0 ? 1000 : 1000,
        opacity: 0,
        scale: 0.5,
      };
    },
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        currentIndex === slides.length - 1 ? 0 : currentIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [slides, currentIndex]);
  21;
  return (
    <>
      <div className="relative">
        <button className="absolute top-1/2 -translate-y-1/2 pr-0.5 left-1.5 text-2xl lg:pr-1 lg:left-4 lg:text-5xl text-white z-30 opacity-50 rounded-xl transition duration-150 ease-out hover:border-slate-700 hover:opacity-100 hover:text-slate-800/50 bg-white">
          <FiChevronLeft onClick={goToPrevious} />
        </button>
        <button className="absolute  top-1/2 -translate-y-1/2 pl-0.5 right-1.5 text-2xl lg:right-4 lg:text-5xl lg:pl-1  text-white z-30 opacity-50 rounded-full transition duration-150 ease-out hover:border-slate-700 hover:opacity-100 hover:text-slate-800/50 bg-white  ">
          <FiChevronRight onClick={goToNext} />
        </button>
        <div className="relative m-auto w-screen h-screen ratio aspect-video overflow-hidden">
          <AnimatePresence custom={direction}>
            {currentIndex != 2 ? (
              <motion.img
                className="absolute top-0 left-0 w-full h-full object-cover object-center "
                variants={variants}
                animate="animate"
                initial="initial"
                exit="exit"
                src={slides[currentIndex].src}
                key={slides[currentIndex].src}
                custom={direction}
              />
            ) : (
              " "
            )}
          </AnimatePresence>
        </div>

        <div className="bg-black/40 w-screen h-screen absolute top-0 py-28">
          <div className="w-5/6 h-fit absolute top-0 left-0 right-0 bottom-0 my-auto mx-auto grid gap-5 lg:gap-10 lg:tracking-tight">
            {currentIndex == 2 ? (
              <motion.img
                className="w-64 sm:w-96 md:w-1/2 lg:w-1/3 items-center mx-auto "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                src="src/static/Logo/logo mita emprendedores.png"
                key={slides[currentIndex].src}
              />
            ) : (
              " "
            )}

            <motion.h1
              className="text-2xl sm:text-5xl lg:text-6xl text-white font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {slides.map((object, index) =>
                index == currentIndex ? object.title : " "
              )}
            </motion.h1>
            <motion.h2
              className="text-xl sm:text-3xl lg:text-4xl text-white font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {slides.map((object, index) =>
                index == currentIndex ? object.sub : " "
              )}
            </motion.h2>
            <motion.p
              className="text-lg sm:text-2xl lg:text-3xl sm:font-semibold text-white mx-auto w-full px-8 text-center pb-14"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {slides.map((object, index) =>
                index == currentIndex ? object.text : " "
              )}
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
