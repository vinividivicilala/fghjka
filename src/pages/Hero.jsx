import Blure from "../Components/blure";
import circle from "/Icons/circle.svg";

import { motion } from "framer-motion";

function Hero() {
  return (
    <div
      id="home"
      className="h-screen  mx-auto sm:w-5/6 flex items-start justify-center flex-col w-screen "
    >
      <div className="h-2/4 mt-32 w-full ">
        <div className="overflow-hidden   ">
          <motion.p
            initial={{ opacity: 1, y: "-100%" }}
            whileInView={{ opacity: 1, y: "0%" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className=" text-white text-xl font-thin selection:bg-purple-600 selection:text-white font-mono py-4  px-8 "
          >
            Hey there! <br />
            I&apos;m Kesraoui Mohamed
          </motion.p>
          <Blure position={"right-44 top-44"} />

          <motion.h1
            initial={{ opacity: 1, y: "100%" }}
            whileInView={{ opacity: 1, y: "0%" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="selection:bg-purple-500  overflow-hidden selection:text-white px-4 bg-gradient-to-l from-slate-50 via-amber-500 to-purple-600 text-transparent bg-clip-text font-serif text-5xl md:text-8xl lg:text-9xl  text-start font-extrabold "
          >
            FRONTEND <br /> DEVELOPER
          </motion.h1>
        </div>
      </div>

      <div className="w-full h-1/4 flex flex-col ">
        <div className="relative right-0   flex justify-around items-center ">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
            className="h-24 px-2 overflow-hidden "
          >
            <h1 className="text-white text-xl selection:bg-purple-500 selection:text-white ">
              OPEN TO WORK
            </h1>
            <p className="text-white flex  items-center selection:bg-purple-500 selection:text-white">
              Based in France{" "}
              <span className="animate-spin-reverse">
                <svg
                  className="h-4 mx-2 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="200"
                  height="200"
                  viewBox="0 0 200 200"
                  fill="none"
                >
                  <g clipPath="url(#clip0_623_5)">
                    <path
                      d="M99.5495 18.9087C99.5495 -35.1254 133.314 41.4697 119.832 64.8658C133.338 41.4697 216.566 32.4143 169.762 59.4373C216.566 32.4143 167.114 100.002 140.102 100.002C167.114 100.002 216.566 167.553 169.762 140.566C216.566 167.589 133.338 158.534 119.832 135.138C133.338 158.534 99.5495 235.129 99.5495 181.095C99.5495 235.129 65.7737 158.534 79.2673 135.138C65.7617 158.534 -17.4668 167.589 29.3373 140.566C-17.4668 167.589 31.9859 100.002 59.0089 100.002C31.9859 100.002 -17.4668 32.4501 29.3373 59.4373C-17.4668 32.4143 65.7617 41.4697 79.2673 64.8658C65.7737 41.4458 99.5495 -35.1254 99.5495 18.9087Z"
                      fill="#b374e3"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_623_5">
                      <rect width="200" height="200" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </p>
          </motion.div>

          <img
            src={circle}
            alt="circle text"
            className="animate-spin-slow h-16 sm:h-36 z-0"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
