import { useRef } from "react";
import Paragraph from "../Components/Paragraph";
import { motion } from "framer-motion";
import Blure from "../Components/blure";
import cssIcon from "/Icons/css.svg";
import jsIcon from "/Icons/js.svg";
import htmlIcon from "/Icons/html.svg";
import gitIcon from "/Icons/git.svg";
import reactIcon from "/Icons/react.svg";
import mongoDbIcon from "/Icons/mongoDb.svg";
import nodeIcon from "/Icons/node.svg";
import tailwindcssIcon from "/Icons/tailwindcss.svg";
import figmaIcon from "/Icons/figma.svg";
import vercelIcon from "/Icons/vercel.svg";
import expressIcon from "/Icons/express.svg";

function About() {
  const projectDetails = {
    frontEnd: {
      name: "Frontend  ",
      technologies: [
        { name: "Html", icon: htmlIcon },
        { name: "Css", icon: cssIcon },
        { name: "React", icon: reactIcon },
        { name: "JavaScript", icon: jsIcon },
        { name: "Tailwind", icon: tailwindcssIcon },
      ],
    },
    backEnd: {
      name: "Backend",
      technologies: [
        { name: "NodeJs", icon: nodeIcon },
        { name: "Express", icon: expressIcon },
        { name: "MongoDB", icon: mongoDbIcon },
      ],
    },
    other: {
      name: "Other",
      technologies: [
        { name: "Vercel", icon: vercelIcon },
        { name: "github", icon: gitIcon },
      ],
    },
    design: {
      name: "Design",
      technologies: [{ name: "Figma", icon: figmaIcon }],
    },
  };

  const containerRef = useRef(null);

  const part1 =
    "Welcome! I am Kesraoui Mohamed, an enthusiastic web developer with a passion for turning ideas into tangible, accessible realities.";
  const part2 =
    "Being a self-taught learner, I embarked on my coding journey  starting with HTML and CSS, gradually advancing to JavaScript and React.";
  const part3 =
    "Seeking more knowledge, I enrolled in La Capsule to delve into ExpressJS, NodeJS, and MongoDB, mastering the creation of my own REST API. The entire design of my portfolio was meticulously crafted by myself on Figma. Beyond my technical skills, my soft skills shine through. I am known for my creativity, autonomy, and knack for self-directed learning. I thrive on bringing innovative concepts to life and continuously seek opportunities to expand my horizons. Lets build something amazing together! ✨";

  return (
    <div
      id="About"
      ref={containerRef}
      className="min-h-screen relative pt-32 pb-16 mx-auto sm:w-5/6 w-screen flex flex-col items-center justify-center"
    >
      <div className="overflow-hidden sm:h-[80px] flex items-center  sm:my-8  ">
        <motion.h1
          initial={{ opacity: 1, y: "100%" }}
          whileInView={{ opacity: 1, y: "0%" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          // viewport={{ once: true }}
          className="text-3xl sm:text-5xl    md:text-7xl    font-extrabold 
                       bg-gradient-to-l from-purple-500 via-amber-500 to-slate-50

              text-transparent bg-clip-text sm:my-32 selection:bg-purple-500  selection:text-white"
        >
          About <span className="">Me</span>
        </motion.h1>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pb-16"
      >
        <Paragraph paragraph={part1} />
        <Paragraph paragraph={part2} />
        <Paragraph paragraph={part3} />
      </motion.div>

      <div className="overflow-hidden sm:h-[80px] flex items-center  sm:my-8  ">
        <motion.h3
          initial={{ opacity: 1, y: "100%" }}
          whileInView={{ opacity: 1, y: "0%" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          // viewport={{ once: true }}
          className="
                      text-3xl  sm:text-4xl py-4   md:text-5xl  font-extrabold 
                             bg-gradient-to-l from-purple-500 via-amber-500 to-slate-50
                      text-transparent bg-clip-text sm:my-32 selection:bg-purple-500  selection:text-white"
        >
          Skills
        </motion.h3>
      </div>

      <div className="sm:w-3/5 w-full  p-4 gap-2 mt-8 grid grid-cols-1 sm:gap-4 sm:grid-cols-2   lg:grid-cols-4  ">
        <Blure position={"bottom-24 right-48"} />

        {Object.entries(projectDetails).map(([category, data], i) => (
          <motion.div
            initial={{ opacity: 0, y: -30, rotate: -20 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.5, delay: 0.2 * i }}
            viewport={{ once: true }}
            className="px-4 mx-8 sm:mx-0 border-indigo-500 border-[0.3px] hover:border-indigo-200 bg-indigo-950 overflow-hidden py-4 flex flex-col items-center rounded-lg text-black"
            key={category}
          >
            <h4 className="border-t text-slate-200 border-violet-400 py-4 text-lg">
              {data.name}
            </h4>
            <div className="flex z-20 flex-col items-start justify-center gap-2">
              {data.technologies.map(({ name, icon }, index) => (
                <div
                  key={`${category}-${index}`}
                  className="overflow-hidden text-slate-200 flex items-center gap-2"
                >
                  <img src={icon} alt={name} className="w-8 h-6" />
                  <span className="text-xs font-thin">{name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default About;
