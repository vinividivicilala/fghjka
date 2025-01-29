import { motion, AnimatePresence } from "framer-motion";
import SuperTitle from "../Components/SuperTitle";
import { Link } from "react-router-dom";
import { useRef } from "react";

// eslint-disable-next-line react/prop-types
function WorkItem({ id, name, Img, index }) {
  const ref = useRef(null);

  return (
    <Link to={`/works/${id}`}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, width: 0 }}
        whileInView={{ opacity: 1, width: "100%" }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className={`after:absolute relative overflow-hidden h-48 after:w-0  border-b opacity-100 duration-750 transition-opacity after:bg-purple-500 after:h-1  after:bottom-0 flex flex-col sm:flex-row items-center justify-center sm:justify-between  border-purple-500`}
      >
        <SuperTitle text={name} />
        <motion.img
          loading="lazy"
          initial={{ opacity: 0, y: 100, scale: 0 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 * index }}
          exit={{ opacity: 0, x: 100 }}
          viewport={{ once: true }}
          className="p-2 mb-8  sm:mb-4 h-full object-cover w-72"
          src={Img}
          alt={`${name} image`}
        />
      </motion.div>
    </Link>
  );
}

function Works() {
  const data = [
    {
      id: "1aoaid",
      name: "MistralTips",
      Img: "/images/mistral.webp",
      Link: "/",
    },
    {
      id: "2dcjndj",
      name: "Dictionary web site",
      Img: "/images/dictionary1.webp",
      Link: "/",
    },
    {
      id: "3sdjjdn",
      name: "Photography Portfolio",
      Img: "/images/photography00003.webp",
      Link: "https://photography-portfolio-nu-inky.vercel.app/",
    },
    {
      id: "3sskkjdn",
      name: "Portfolio v-1",
      Img: "/images/old00004.webp",
      Link: "https://mypotfolio-iota.vercel.app/",
    },
  ];

  return (
    <AnimatePresence mode="wait">
      <div
        id="works"
        className="min-h-screen sm:py-32 pb-16 mx-auto sm:w-5/6 w-screen flex flex-col items-center justify-center relative "
      >
        <div className="overflow-hidden sm:h-[80px] my-4  flex items-center sm:my-8">
          <motion.h1
            initial={{ opacity: 1, y: "100%" }}
            whileInView={{ opacity: 1, y: "10%" }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-3xl sm:text-5xl md:text-7xl  mt-24  font-extrabold 
              bg-gradient-to-l from-purple-500 via-amber-500 to-slate-50
              text-transparent bg-clip-text sm:my-32 selection:bg-purple-500 selection:text-white"
          >
            Selected Works
          </motion.h1>
        </div>

        <div className="px-4  w-full  h-full gap-4 overflow-hidden grid grid-cols-1">
          {data.map(({ id, name, Img }, index) => (
            <WorkItem key={id} id={id} name={name} Img={Img} index={index} />
          ))}
        </div>
      </div>
    </AnimatePresence>
  );
}

export default Works;
