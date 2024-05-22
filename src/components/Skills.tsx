import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaPython, FaFlask, FaCogs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill, RiTeamLine } from "react-icons/ri";
import { SiBulma, SiMongodb, SiMongoose, SiSqlalchemy } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { MdOutlineTimer } from "react-icons/md";
import { TbMessages } from "react-icons/tb";
import { FaPuzzlePiece } from "react-icons/fa6";

export default function Skills() {
  return (
    <div className="m-5" >
      <div className="h-full sm:h-screen bg-orange-500 p-5 rounded-lg" id="background-image">
        <h2 className="text-3xl text-center mt-10 mb-5">Technical Skills</h2>

        {/* Front end */}
        <h2 className="ml-5 text-xl mb-3">Front-end:</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
          <div className="flex flex-col items-center">
            <FaHtml5 className="w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 transition-transform transform hover:scale-110" />
            <p className="text-center mt-2">HTML</p>
          </div>
          <div className="flex flex-col items-center">
            <FaCss3Alt className="w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 transition-transform transform hover:scale-110" />
            <p className="text-center mt-2">CSS</p>
          </div>
          <div className="flex flex-col items-center">
            <IoLogoJavascript className="w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 transition-transform transform hover:scale-110" />
            <p className="text-center mt-2">JavaScript</p>
          </div>
          <div className="flex flex-col items-center">
            <FaReact className="w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 transition-transform transform hover:scale-110" />
            <p className="text-center mt-2">React</p>
          </div>
          <div className="flex flex-col items-center">
            <RiTailwindCssFill className="w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 transition-transform transform hover:scale-110" />
            <p className="text-center mt-2">Tailwind</p>
          </div>
          <div className="flex flex-col items-center">
            <SiBulma className="w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 transition-transform transform hover:scale-110" />
            <p className="text-center mt-2">Bulma</p>
          </div>
        </div>

        {/* Back end */}
        <h2 className="ml-5 text-xl mb-3">Back-end:</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
          <div className="flex flex-col items-center">
            <FaPython className="w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 transition-transform transform hover:scale-110" />
            <p className="text-center mt-2">Python</p>
          </div>
          <div className="flex flex-col items-center">
            <FaFlask className="w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 transition-transform transform hover:scale-110" />
            <p className="text-center mt-2">Flask</p>
          </div>
          <div className="flex flex-col items-center">
            <BiLogoPostgresql className="w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 transition-transform transform hover:scale-110" />
            <p className="text-center mt-2">PostgreSQL</p>
          </div>
          <div className="flex flex-col items-center">
            <SiMongodb className="w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 transition-transform transform hover:scale-110" />
            <p className="text-center mt-2">MongoDB</p>
          </div>
          <div className="flex flex-col items-center">
            <SiMongoose className="w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 transition-transform transform hover:scale-110" />
            <p className="text-center mt-2">Mongoose</p>
          </div>
          <div className="flex flex-col items-center">
            <SiSqlalchemy className="w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 transition-transform transform hover:scale-110" />
            <p className="text-center mt-2">SQLAlchemy</p>
          </div>
        </div>

        {/* Transferable skills */}
        <h2 className="ml-5 text-xl mb-3">Transferable skills:</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="flex flex-col items-center">
            <FaPuzzlePiece className="w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 transition-transform transform hover:scale-110" />
            <p className="text-center mt-2">Problem solving</p>
          </div>
          <div className="flex flex-col items-center">
            <MdOutlineTimer className="w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 transition-transform transform hover:scale-110" />
            <p className="text-center mt-2">Time management</p>
          </div>
          <div className="flex flex-col items-center">
            <FaCogs className="w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 transition-transform transform hover:scale-110" />
            <p className="text-center mt-2">Adaptability</p>
          </div>
          <div className="flex flex-col items-center">
            <TbMessages className="w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 transition-transform transform hover:scale-110" />
            <p className="text-center mt-2">Communication</p>
          </div>
          <div className="flex flex-col items-center">
            <RiTeamLine className="w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 transition-transform transform hover:scale-110" />
            <p className="text-center mt-2">Team work</p>
          </div>
        </div>
      </div>
    </div>
  );
}