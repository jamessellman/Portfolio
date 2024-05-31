import { forwardRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div className="grid grid-cols-1 mt-14">
        <div
          className="min-h-[100px] text-white m-5 h-auto rounded-lg "
          id="background-image">
          <h2 className="text-center text-3xl m-5">Contact me</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-evenly m-10">
            <a
              href="https://github.com/jamessellman"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-transform transform hover:scale-110">
              <FaGithub className="w-12 h-12 sm:w-24 sm:h-24 mb-5" />
            </a>
            <a href="mailto:james.sellman12@gmail.com">
              <MdEmail className="w-12 h-12  mb-5 sm:w-24 sm:h-24 text-white transition-transform transform hover:scale-110" />
            </a>
            <a
              href="https://www.linkedin.com/in/jamessellman/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-transform transform hover:scale-110">
              <FaLinkedin className="w-12 h-12 sm:w-24 sm:h-24" />
            </a>
          </div>
          <div className="text-center">
            <p>James Sellman: 2024</p>
          </div>
        </div>
      </div>
  );
}

export default forwardRef(Contact);
