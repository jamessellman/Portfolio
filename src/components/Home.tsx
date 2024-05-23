import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Home() {
  return (
    <div>
      {/* this div is hidden by navbar to push rest of content down */}
      <div className="min-h-[50px]"></div>
      <div
        className="grid grid-cols-1 sm:grid-cols-12 bg-no-repeat bg-cove m-5 rounded-lg s"
        id="background-image">
        {/* Top div image & name */}
        <div className="m-5 flex items-center justify-center text-center text-3xl h-screen sm:col-span-4">
          <img
            className=" object-contain w-48 sm:w-64 md:w-80 lg:w-96 rounded-full border-solid border-8 border-white shadow-2xl transition-transform transform hover:scale-110"
            src="https://i.imgur.com/GtQF1gI.jpg"
            alt="profile picture"
          />
        </div>
        {/* About me */}
        <div className="m-5 items-center justify-center text-center text-2xl sm:text-3xl h-screen sm:col-span-8 grid grid-cols-1">
          <div className="mt-20 sm:mt-36">
            <h1 className="text-white text-8xl">
              Hi, I'm Jamie, a junior software developer!
            </h1>
          </div>
          <div className="flex justify-around mt-10 sm:mt-20">
            <a href="https://github.com/jamessellman" target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-white transition-transform transform hover:scale-110" />
            </a>
            <a href="mailto:james.sellman12@gmail.com"><MdEmail className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-white transition-transform transform hover:scale-110" /></a>
            <a href="https://www.linkedin.com/in/jamessellman/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-white transition-transform transform hover:scale-110" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
