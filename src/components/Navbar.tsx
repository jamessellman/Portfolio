import React, { useState } from "react";
import {
  BeakerIcon,
  Bars3BottomLeftIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0 bg-white">
      <div className="md:px-10 py-4 px-7 md:flex justify-between items-center">
        {/* logo if i add one */}
        <div className="flex text-2xl cursor-pointer gap-1">
          <BeakerIcon className="w-7 h-7 text-blue-500" />
          <span className="font-bold">Jamie</span>
        </div>

        {/* Menu Icon */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="h-7 w-7 absolute right-8 top-6 cursor-pointer md:hidden">
          {isOpen ? <XMarkIcon /> : <Bars3BottomLeftIcon />}
        </div>
        {/* nav links */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static  bg-white md:z-auto z-[-1] left-0 w-full md:w-auto  md:pl-0 pl-9 transition-all duration-500 ease-in ${
            isOpen ? "top-12" : "top-[-490px]"
          }`}>
          <li className="font-semibold my-7 md:my-0 md:ml-8">About me</li>
          <li className="font-semibold my-7 md:my-0 md:ml-8">Skills</li>
          <li className="font-semibold my-7 md:my-0 md:ml-8">Projects</li>
          <li className="font-semibold my-7 md:my-0 md:ml-8">Contact</li>
        </ul>
      </div>
    </div>
  );
}
