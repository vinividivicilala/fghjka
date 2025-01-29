import { motion } from "framer-motion";
import Blure from "../Components/blure";
import { socialMediaLinks } from "../Components/Social.jsx";
import { MediaLink } from "../Components/Social.jsx";

function Footer() {
  const ThisYear = new Date().getFullYear();
  return (
    <div
      id="footer"
      className="h-[90vh] relative   overflow-hidden mt-16 flex flex-col items-center justify-evenly sm:justify-around  mx-auto sm:w-5/6 w-screen"
    >
      <div className="overflow-hidden h-36 ">
        <motion.h1
          initial={{ opacity: 1, y: "100%" }}
          whileInView={{ opacity: 1, y: "0%" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          // viewport={{ once: true }}
          className="px-4 text-3xl hover:shadow shadow-purple-500  w-full selection:bg-purple-500
              font-extrabold overflow-hidden selection:text-white text-center py-8 sm:text-5xl md:text-7xl
            bg-gradient-to-l from-purple-500 via-amber-500 to-slate-50
            
            text-transparent bg-clip-text"
        >
          Reach Out
        </motion.h1>
      </div>
      <motion.p
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-white font-semibold selection:bg-purple-500 selection:text-white p-4 w-full text-center  text-3xl sm:text-4xl md:text-5xl px-4 lg:text-6xl"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-l from-purple-500 via-amber-500 to-slate-50">
          {" "}
          Thanks
        </span>{" "}
        for your visit
        <span className="text-amber-500">!</span> You can check out my networks
        to <span className="text-purple-500  font-extrabold"> Follow </span>my
        new
        <span className="text-amber-500 underline"> adventures </span> !
      </motion.p>

      <div className="w-full p-4">
        <ul className="flex flex-row justify-center items-center  text-white sm:gap-10 gap-4  ">
          {socialMediaLinks.map((socialMedia, index) => (
            <MediaLink
              key={socialMedia.label}
              // eslint-disable-next-line react/no-unknown-property
              index={index}
              {...socialMedia}
            />
          ))}
        </ul>
      </div>
      <Blure position={"left-44"} />
      <p className="text-center selection:bg-purple-500 selection:text-white   px-6 py-3 rounded-3xl  bg-purple-400text-white   ">
        <a href="">Kesraoui.dev@gmail.com</a>
      </p>
      <p className="text-center w-full text-xs  text-white ">
        ©{ThisYear} All Rights Reserved
      </p>
    </div>
  );
}

export default Footer;
