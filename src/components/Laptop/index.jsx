import React, { useEffect, useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiArrowUpRight, FiSun } from "react-icons/fi";
import { IoMoon } from "react-icons/io5";
import Project from "../Portfolio/Project";

function Laptop() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", JSON.stringify(newMode));
      if (newMode) {
        document.documentElement.classList.add("dark");
      } else {
        localStorage.removeItem("darkMode");
        document.documentElement.classList.remove("dark");
      }
      return newMode;
    });
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="h-[90vh] bg-black text-[#EFEFEF] p-10 dark:bg-white">
        {/* Main Content */}
        <div className="h-screen">
          <div className="grid grid-cols-4 grid-rows-2 gap-5 h-[80vh] bg-black dark:bg-white">
            {/* Introduction Section */}
            <div className="col-span-3 flex flex-col justify-between    row-span-3 p-10 bg-[#292929] dark:bg-[#efefef] dark:text-black rounded-2xl">
              <div className="flex flex-col gap-10">
                <div className=" flex justify-between ">
                  <img
                    src="dfgp (1).jpeg"
                    alt="Profile"
                    className="w-24 h-24 rounded-xl mr-4"
                  />
                  <div className="flex justify-start items-center gap-2">
                    <div className="h-[8px] w-[8px] bg-green-600 rounded-full" />
                    <p className="font-poppins text-sm">Avilable to work</p>
                  </div>
                </div>
                <div className="flex flex-col gap-10">
                  <h1 className="text-[3em] font-medium">
                    Hello, my name is Prince Kashish, and I am a{" "}
                    <span className="text-orange-600">
                      Full Stack Developer
                    </span>
                  </h1>
                  <p className="capitalize">📍 Based in Delhi </p>
                </div>
              </div>
              <div className="p-1 flex justify-between items-center gap-5 ">
                <div className="flex gap-5">
                  <a
                    href="mailto:princekashish136@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="font-DM_sans dark:bg-[#292929] dark:text-white  uppercase bg-[#efefef] text-black px-10 py-2 rounded-full text-base font-semibold">
                      Contact
                    </button>
                  </a>
                  <a
                    href="/sepResume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="font-DM_sans uppercase dark:border dark:border-black   border border-[#efefef] px-10 py-2 rounded-full text-base font-semibold">
                      GET CV
                    </button>
                  </a>
                </div>
                <div className="flex mt-4 space-x-4 gap-2">
                  <a
                    href="https://linkedin.com/in/Princekashish"
                    className="text-gray-100 dark:text-black"
                    target="_black"
                  >
                    <FaLinkedin size={30} />
                  </a>
                  <a
                    href="https://github.com/Princekashish/"
                    className="text-gray-100 dark:text-black"
                    target="_black"
                  >
                    <FaGithub size={30} />
                  </a>
                </div>
              </div>
            </div>

            {/* Light/Dark Mode Toggle */}
            <div className="row-span-1 col-start-4 bg-[#efefef] w-full text-black dark:bg-[#292929] dark:text-white rounded-2xl p-6 flex justify-start font-DM_sans">
              <button
                onClick={toggleDarkMode}
                className="flex justify-center items-center  outline-none  "
              >
                {darkMode ? (
                  <>
                    <div className=" flex flex-col gap-5 ">
                      <IoMoon size={35} />
                      <p className="text-start">
                        Press the tile for the Dark mode.
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className=" flex flex-col gap-5 ">
                      <FiSun size={35} />
                      <p className="text-start">
                        Press the tile for the Light mode.
                      </p>
                    </div>
                  </>
                )}
              </button>
            </div>

            {/* work Section */}
            <div className=" row-span-2 col-start-4 row-start-2 bg-[#292929] rounded-2xl flex flex-col justify-between p-6 dark:bg-[#efefef] dark:text-black">
              <div className="flex flex-col gap-5">
                <h2 className="text-3xl font-bold">Works</h2>
                <p>
                  Have a glimpse on selected{" "}
                  <span className="underline">works</span> of mine.
                </p>
              </div>
              <a href="#project">
                <div className=" border border-zinc-400 w-[30px] h-[30px] flex justify-center items-center rounded-full cursor-pointer ">
                  <FiArrowUpRight size={25} />
                </div>
              </a>
            </div>

            {/* about Section */}
            <div className="dark:bg-[#efefef] dark:text-black row-span-3 col-start-5 row-start-1 bg-[#292929] rounded-2xl p-6 flex flex-col justify-between w-full max-w-[20vw] mx-auto">
              <div className="flex flex-col gap-5  flex-wrap ">
                <h2 className="text-3xl font-bold">About me</h2>
                <div className="font-poppins">
                  <p>
                    Hi, I'm Prince Kashish, a final-year BCA student at VIPS and
                    a MERN developer. I'm passionate about coding and love
                    bringing ideas to life through innovative web applications.
                    My journey in the world of technology has been exciting,
                    filled with hands-on experience in developing full-stack
                    applications using{" "}
                    <span className="underline">
                      MongoDB, Express.js, React.js, and Node.js
                    </span>
                    . I'm constantly exploring new frameworks and tools to
                    enhance my skill set and stay updated with industry trends..
                  </p>
                </div>
              </div>
              <div className="border border-zinc-400 w-[30px] h-[30px] flex justify-center items-center rounded-full cursor-pointer">
                <FiArrowUpRight size={25} />
              </div>
            </div>
          </div>
        </div>
        {/* project */}
      </div>
      <div className="bg-[#292929] dark:bg-[#efefef] ">
        <Project />
      </div>
    </div>
  );
}

export default Laptop;
