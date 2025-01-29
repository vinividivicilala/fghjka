import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
function AnimatedTitle({ text }) {
  return (
    <motion.h1
      initial={{ opacity: 1, y: "100%" }}
      whileInView={{ opacity: 1, y: "10%" }}
      transition={{ duration: 0.5, delay: 0.3 }}
      viewport={{ once: true }}
      className="text-3xl sm:text-5xl md:text-7xl font-bold   bg-gradient-to-l from-purple-500 via-amber-500 to-slate-50
            
            text-transparent bg-clip-text sm:my-16 selection:bg-purple-500 selection:text-white"
    >
      {text}
    </motion.h1>
  );
}

export default AnimatedTitle;
