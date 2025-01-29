/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

function Blure({ position }) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0, y: 100 }}
      whileInView={{ scale: 1, opacity: 1, y: 0, delay: 1 }}
      className={`h-24 w-16 sm:w-48 rounded-full blur-3xl z-30     animate-spin-reverse-slow  bg-gradient-to-l from-slate-50 via-amber-500 to-purple-600 absolute ${position} `}
    >
      <div className="w-24 h-48 animate-pulse   absolute "></div>
    </motion.div>
  );
}

export default Blure;
