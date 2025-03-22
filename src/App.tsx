import React, { useState, useRef } from "react";
import {
  BeakerIcon,
  Bars3BottomLeftIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Carousel from "./components/Projects";
function App() {
  // State for reactive navbar
  const [isOpen, setIsOpen] = useState(false);

  // Create refs for each section
  const homeRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  // Handle click to scroll to the respective section
  const handleClick = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close the menu if it's open
  };

  return (
    <main>
      {/* Navbar */}
      <div className="shadow-md w-full fixed top-0 left-0 bg-white z-10">
        <div className="md:px-10 py-4 px-7 md:flex justify-between items-center">
          {/* Logo if I add one */}
          <div className="flex text-2xl cursor-pointer gap-1">
            {/* <BeakerIcon className="w-7 h-7 text-blue-500" /> */}
            <svg
              onClick={() => handleClick(homeRef)}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 transition-transform transform hover:scale-110">
              <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
              <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
            </svg>
          </div>

          {/* Menu Icon */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="h-7 w-7 absolute right-8 top-4 cursor-pointer md:hidden">
            {isOpen ? <XMarkIcon /> : <Bars3BottomLeftIcon />}
          </div>

          {/* Nav links */}
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              isOpen ? "top-12" : "top-[-490px]"
            }`}>
            <li
              onClick={() => handleClick(aboutRef)}
              className="font-semibold my-7 md:my-0 md:ml-8 cursor-pointer transition-transform transform hover:scale-110">
              About me
            </li>
            <li
              onClick={() => handleClick(skillsRef)}
              className="font-semibold my-7 md:my-0 md:ml-8 cursor-pointer transition-transform transform hover:scale-110">
              Skills
            </li>
            <li
              onClick={() => handleClick(projectsRef)}
              className="font-semibold my-7 md:my-0 md:ml-8 cursor-pointer transition-transform transform hover:scale-110">
              Projects
            </li>
            <li
              onClick={() => handleClick(contactRef)}
              className="font-semibold my-7 md:my-0 md:ml-8 cursor-pointer transition-transform transform hover:scale-110">
              Contact
            </li>
          </ul>
        </div>
      </div>

      {/* Sections */}
      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={projectsRef}>
        <Carousel />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </main>
  );
}

export default App;
