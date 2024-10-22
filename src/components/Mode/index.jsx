import React, { useEffect, useState } from "react";
import { FiSun } from "react-icons/fi";
import { IoMoon } from "react-icons/io5";

export default function Mode() {
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
    <div className="p-3 ">
      <div
        onClick={toggleDarkMode}
        className={`h-[6vh]  text-white flex flex-col justify-center items-center rounded-2xl dark:  dark: ${darkMode?"dark:bg-[#efefef] dark:text-black":"bg-zinc-900 text-[#EFEFEF]"} `}
      >
        <div className="flex justify-center items-center gap-5">
          {darkMode ? (
            <>
              <div className=" flex justify-center items-center gap-3   ">
                <FiSun />
                <p className="">Press the tile for the Light mode.</p>
              </div>
            </>
          ) : (
            <>
              <div className="flex justify-center items-center gap-3  ">
                <IoMoon />
                <p className="">Press the tile for the Dark mode.</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
