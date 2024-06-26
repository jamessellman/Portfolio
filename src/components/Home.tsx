import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

function Home() {
  return (
    <div>
      <div className="min-h-[50px]"></div>
      <div className=" grid grid-cols-1 md:grid-cols-2">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="w-80 rounded-full border-solid border-8 border-white shadow-2xl transition-transform transform hover:scale-110 m-10 mx-auto lg:w-96"
          src="https://i.imgur.com/GtQF1gI.jpg"
          alt="profile picture"
        />
        <motion.h1
          initial={{ y: -500 }}
          animate={{ y: 0 }}
          transition={{
            duration: 1,
          }}
          className="text-white text-6xl text-center m-2 md:mt-48 ">
          Hi, I'm Jamie, a junior software developer!
        </motion.h1>
      </div>
      <motion.div
        className="flex justify-evenly my-10 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}>
        <a
          href="https://github.com/jamessellman"
          target="_blank"
          rel="noopener noreferrer">
          <FaGithub className="w-24 h-24 text-white transition-transform transform hover:scale-110" />
        </a>
        <a href="mailto:james.sellman12@gmail.com">
          <MdEmail className="w-24 h-24 text-white transition-transform transform hover:scale-110" />
        </a>
        <a
          href="https://www.linkedin.com/in/jamessellman/"
          target="_blank"
          rel="noopener noreferrer">
          <FaLinkedin className="w-24 h-24  text-white transition-transform transform hover:scale-110" />
        </a>
      </motion.div>
    </div>
  );
}

export default Home;
