import { motion } from "framer-motion";
import twitterIcon from "../assets/twitter.svg";
import linkedinIcon from "../assets/LinkedIn.svg";
import githubIcon from "../assets/Github.svg";
import instagramIcon from "../assets/Instagram.svg";
import { Link } from "react-router-dom";
// eslint-disable-next-line react-refresh/only-export-components
export const socialMediaLinks = [
  {
    icon: linkedinIcon,
    link: "https://www.linkedin.com/in/kesraoui-mohamed-298a6a147/",
    label: "LinkedIn",
  },
  {
    icon: githubIcon,
    link: "https://github.com/KesraouiMohamed1991",
    label: "Github",
  },
  {
    icon: twitterIcon,
    link: "https://twitter.com/KesraouiMohame1",
    label: "Twitter",
  },
  {
    icon: instagramIcon,
    link: "https://www.instagram.com/massiliapixx",
    label: "Instagram",
  },
];

// eslint-disable-next-line react/prop-types
export function MediaLink({ icon, link, label, index }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, easing: "ease", delay: 0.25 * index }}
      className="text-xs flex items-center justify-center flex-col w-16   p-4 l hover:text-bold cursor-pointer"
    >
      <Link
        className="hover:text-purple-500 flex flex-col items-center justify-center "
        to={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="py-4 hover:scale-125 h-12 w-12"
          src={icon}
          alt={`${label} Icon`}
        />

        {label}
      </Link>
    </motion.li>
  );
}
