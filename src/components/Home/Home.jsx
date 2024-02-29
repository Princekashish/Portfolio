import React from "react";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";

function Home() {
 
  return (
    <>
      <div className="  pt-[8rem] min-h-[100vh] lg:min-h-[70vh]  bg-[#F9F9F9]  " id="home">
        <div className=" flex  flex-col-reverse md:flex-row md:gap-9   justify-center items-center ">
          <div className="text-center mt-5 md:text-left   ">
            <h1 className="font-bold text-5xl md:text-[55px]   font-poppes">
              Front-End React <br  />
              Developer 👋🏽{" "}
            </h1>
            <p className="pt-8 md:text-lg font-mulish text-[#2D2E32]">
              Hi, I'm Prince Kashish. A passionate Front-end React <br />{" "}
              Developer based in Delhi, India. 📍
            </p>
            <div className="flex justify-center gap-3 md:justify-start pt-6">
            <a href="https://www.linkedin.com/in/prince-kashish-6b6302214/" target="_blank"><CiLinkedin size={33} /></a>
             <a href="https://github.com/Princekashish" target="_blank"> <FiGithub size={30} /></a>
            </div>
          </div>
          <div >
            <img className="h-80  md:h-96" src="./Img/avataaars.png" alt="image" />
          </div>
        </div>
        <div className="skills  md:justify-center   md:mt-9   flex flex-col md:flex-row md:gap-9 md:items-center   justify-center mt-5 items-center pt-7 ">
          <p className="font-mulish text-[17px] md:text-center font-semibold  px-4 md:border-r-2 md:py-[1px] border-b-2 md:border-b-0  border-gray-500">
            Tech Stack{" "}
          </p>
          <div className=" mt-7 ">
            <ul className="flex justify-center mt-4 flex-wrap gap-7 mb-8 ">
              <li  className="md:hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer">
                <img src="https://skillicons.dev/icons?i=html,css" alt="" />
              </li>
              <li className="md:hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer">
                <img src="https://skillicons.dev/icons?i=js" alt="" />
              </li>
              <li className="md:hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer">
                <img src="https://skillicons.dev/icons?i=react,next" alt="" />
              </li>
              <li className="md:hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer">
                <img
                  src="https://skillicons.dev/icons?i=tailwind,figma"
                  alt=""
                />
              </li>
              <li className="md:hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer">
                <img
                  src="https://skillicons.dev/icons?i=nodejs,express"
                  alt=""
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
