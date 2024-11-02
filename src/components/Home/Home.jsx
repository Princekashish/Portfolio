import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { IoIosArrowRoundForward } from "react-icons/io";
import { SlGlobe } from "react-icons/sl";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMoon } from "react-icons/io5";

function Home() {
  useEffect(() => {
    gsap.to("#mtext", {
      opacity: 1,
      y: 0,
      stagger: 0.25,
      delay: 1,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <>
      <div className="grid grid-cols-1  p-4 gap-5  ">
        {/* grid--->1 */}
        <div className="bg-[#EFEFEF]  rounded-2xl flex flex-col gap-5 dark:bg-[#292929]">
          <div className="flex justify-between items-start p-5">
            <img
              src="dfgp (1).jpeg"
              alt=""
              className="h-[100px] w-[100px] rounded-xl"
            />
            <div className="flex justify-start items-center gap-2">
              <div className="h-[8px] w-[8px] bg-green-600 rounded-full" />
              <p className="font-poppins text-sm">Avilable to work</p>
            </div>
          </div>
          <div className="p-2 flex flex-col gap-3">
            <h1 className="text-[2em] font-medium">
              Hello, my name is Prince Kashish, and I am a{" "}
              <span className="text-orange-600">Full Stack Developer</span>
            </h1>
            <p className="capitalize">📍 Delhi </p>
          </div>
          <div className="p-1 flex justify-center items-center gap-5 flex-wrap md:justify-start md:items-start">
            <a
              href="mailto:princekashish136@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="font-DM_sans uppercase bg-zinc-900 text-white px-10 py-2 rounded-full text-base font-medium">
                Contact
              </button>
            </a>
            <a href="/sepResume.pdf" target="_blank" rel="noopener noreferrer">
              <button className="font-DM_sans dark:border-gray-300 uppercase border border-black px-10 py-2 rounded-full text-base font-medium">
                GET CV
              </button>
            </a>
          </div>
          <div className="flex  p-5 gap-5">
            <a
              href="https://linkedin.com/in/Princekashish"
              className="dark:text-gray-100 text-black"
              target="_black"
            >
              <FaLinkedin size={35} />
            </a>
            <a
              href="https://github.com/Princekashish/"
              className="dark:text-gray-100 text-black"
              target="_black"
            >
              <FaGithub size={35} />
            </a>
          </div>
        </div>
        {/* grid--->2 */}
      </div>
    </>
  );
}

export default Home;
//https://dribbble.com/shots/22551818-Bento-portfolio-page-design
//https://dribbble.com/shots/22594261-Mobile-portfolio
//https://www.behance.net/gallery/188411829/Minimal-Portfolio-Design-Bento-Style
//https://www.figma.com/community/file/1334784852030646760
