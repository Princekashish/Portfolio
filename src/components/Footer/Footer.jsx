import React from "react";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";

function Footer() {
  return (
    <div className="h-[10vh]  bg-[#2D2E32] text-white ">
      <div className="flex flex-col justify-center items-center relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div>
          <h1 className="font-mulish text-sm font-semibold">Copyright © 2024. All rights are reserved</h1>
        </div>
        <div className="flex pt-4 gap-4">
          <CiLinkedin size={33} /> 
          <FiGithub size={30} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
