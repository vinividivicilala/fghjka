import { motion } from "framer-motion";
// eslint-disable-next-line no-unused-vars, react/prop-types
function SuperTitle({ text }) {
  return (
    <motion.h1
      initial={{ opacity: 1, y: "100%" }}
      whileInView={{ opacity: 1, y: "10%" }}
      transition={{ duration: 0.5, delay: 0.3 }}
      viewport={{ once: true }}
      className="text-xl sm:text-5xl  hover:cursor-ne-resize mt-16  font-bold text-white    sm:my-32 selection:bg-purple-500 selection:text-white"
    >
      {text}
    </motion.h1>
  );
}

export default SuperTitle;
