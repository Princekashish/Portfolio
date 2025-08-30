import { Mail } from "lucide-react";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoDownload, IoLogoLinkedin, IoMail } from "react-icons/io5";
// bg-[#454545]
export default function HeroSection() {
  return (
    <div className="md:pl-5  md:pr-5 pl-3 pr-3 h-full">
      <div className="flex flex-col gap-7">
        <div className=" flex justify-between items-center">
          <img
            src="/image-pro.png"
            alt=""
            className="md:w-[127px] md:h-[127px] w-[100px] h-[100px]"
          />
          <div className="flex bg-white/10 backdrop-blur-lg border border-white/10  justify-center items-center gap-2 md:gap-4 p-3 py-2 rounded-full shadow-lg before:content-[''] before:absolute before:inset-0 before:rounded-full before:border before:border-white/10">
            <div className="h-[10px] w-[10px] bg-green-600 rounded-full" />
            <h1 className="font-base text-sm">Avilable to work</h1>
          </div>
        </div>
        <div className="flex flex-col gap-7">
          <div>
            <h1 className="md:text-[27px] text-[22px]">
              Hey, I'm <span className="font-bold ">Prince Kashish</span>
            </h1>
            <h1 className="md:text-[20px] text-[15px] ">
              I build elegant interfaces, back them with solid logic, and
              deliver with agility.{" "}
              <span className="relative inline-block ">
                Full Stack Developer
                <svg
                  className="absolute -bottom-3 left-0  w-full"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,5 Q50,0 100,5"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="1"
                  />
                </svg>
              </span>{" "}
              Based in <span className="font-semibold">Delhi, India 📍</span>
            </h1>
          </div>
          <div>
            <h1 className="text-[20px]">
              <span className="relative inline-block ">
                Open to Work & Freelance
                <svg
                  className="absolute -bottom-5 left-0  w-full"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,5 Q50,0 100,5"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="1"
                  />
                </svg>
              </span>{" "}
            </h1>
          </div>
          <div>
            <h1 className="flex items-center gap-2 md:text-[20px] text-[16px]">
              Reach me via{" "}
              <a
                href="mailto:princekashish136@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border-b border-dashed border-white/50"
              >
                <IoMail /> email
              </a>
              or{" "}
              <a
                href="https://www.linkedin.com/in/princekashish"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border-b border-dashed border-white/50"
              >
                <IoLogoLinkedin /> LinkedIn
              </a>
            </h1>
          </div>
        </div>

        <div className="flex justify-between text-[17px]">
          <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
            <div className="flex items-center gap-2">
              <h1>Resume</h1>
              <div className="bg-[#454545] rounded-lg w-8 h-7 flex justify-center items-center">
                <IoDownload size={20} />
              </div>
            </div>
          </a>
          <div className="flex items-center gap-4">
            <a
              href="https://x.com/Prince_kashish"
              className="dark:text-gray-100 text-black"
              target="_black"
            >
              <FaXTwitter size={25} />
            </a>

            <a
              href="https://github.com/Princekashish/"
              className="dark:text-gray-100 text-black"
              target="_black"
            >
              <FaGithub size={25} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
