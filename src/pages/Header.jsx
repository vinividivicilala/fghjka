/* eslint-disable react/jsx-no-duplicate-props */
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { socialMediaLinks } from "../Components/Social.jsx";
import { MediaLink } from "../Components/Social.jsx";

function Header() {
  const [Show, setShow] = useState(false);

  function handlemenu() {
    setShow(!Show);
  }

  return (
    <div className="relative z-40 ">
      <div className="h-24 cursor-pointer px-4  mx-auto sm:w-5/6 w-screen fixed  flex gap-10 items-center  z-10 backdrop-blur   justify-between inset-0 ">
        <div className="">
          <Link className="text-white " to={"/"} aria-label="my profile photo">
            {" "}
            <img
              className="h-12  w-12 sm:w-16 sm:h-16 rounded-full bg-blue-600 object-cover"
              src="./images/me.webp"
              alt=""
            />
          </Link>
        </div>

        <div className=" hidden sm:flex gap-10 ">
          <p className="relative group ">
            <NavLink
              className="text-white font-mono "
              activeclass="active"
              to="/"
            >
              Home
            </NavLink>
            <span className="absolute -bottom-2 left-1/2 w-0 h-1 bg-purple-600 group-hover:duration-300 group-hover:w-1/2 group-hover:transition-all"></span>
            <span className="absolute -bottom-2 right-1/2 w-0 h-1 bg-purple-600 group-hover:duration-750 group-hover:w-1/2 group-hover:transition-all"></span>
          </p>

          <p className="relative group group-link">
            <NavLink
              className="text-white font-mono "
              activeclass="active "
              to="/about"
            >
              About
            </NavLink>
            <span className="absolute -bottom-2 left-1/2 w-0 h-1 bg-purple-600 group-hover:duration-750 group-hover:w-1/2 group-hover:transition-all"></span>
            <span className="absolute -bottom-2 right-1/2 w-0 h-1 bg-purple-600 group-hover:duration-750 group-hover:w-1/2 group-hover:transition-all"></span>
          </p>

          <p className="relative group group-link">
            <NavLink
              className="text-white font-mono "
              activeclass="active"
              to="/works"
            >
              Works
            </NavLink>
            <span className="absolute -bottom-2 left-1/2 w-0 h-1 bg-purple-600 group-hover:duration-750 group-hover:w-1/2 group-hover:transition-all"></span>
            <span className="absolute -bottom-2 right-1/2 w-0 h-1 bg-purple-600 group-hover:duration-750 group-hover:w-1/2 group-hover:transition-all"></span>
          </p>

          <p className="relative group group-link">
            <NavLink
              className="text-white font-mono "
              activeclass="active"
              to="/footer"
            >
              Contact
            </NavLink>
            <span className="absolute -bottom-2 left-1/2 w-0 h-1 bg-purple-600 group-hover:duration-750 group-hover:w-1/2 group-hover:transition-all"></span>
            <span className="absolute -bottom-2 right-1/2 w-0 h-1 bg-purple-600 group-hover:duration-750 group-hover:w-1/2 group-hover:transition-all"></span>
          </p>
        </div>

        <div className="block sm:hidden m-4 z-30  " onClick={handlemenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            className="w-6 h-6 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        </div>
      </div>

      <div
        className={`${Show ? "flex" : "hidden"} h-screen    flex flex-col gap-20  w-screen fixed justify-center bg-black z-30  items-center p-4`}
      >
        <div
          className="absolute  top-5 right-0 m-4 z-40  "
          onClick={handlemenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>

        <p className=" relative group">
          <NavLink
            className="text-white font-bold text-3xl"
            to="/"
            onClick={handlemenu}
          >
            Home
          </NavLink>
        </p>

        <p className=" relative group">
          <NavLink
            className="text-white  font-bold text-3xl"
            to="/works"
            onClick={handlemenu}
          >
            Works
          </NavLink>
        </p>

        <p className=" relative group">
          <NavLink
            className="text-white font-bold text-3xl"
            to="/about"
            onClick={handlemenu}
          >
            About
          </NavLink>
        </p>

        <p className=" relative group">
          <NavLink
            className="text-white font-bold text-3xl"
            to="/footer"
            onClick={handlemenu}
          >
            Contact
          </NavLink>
        </p>
        <div className="w-full ">
          <ul className="flex flex-row flex-wrap justify-center items-center  text-white sm:gap-10 gap-4 ">
            {socialMediaLinks.map((socialMedia, index) => (
              <MediaLink
                key={socialMedia.label}
                index={index}
                {...socialMedia}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
