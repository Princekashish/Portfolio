import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import HeroSection from "../Hero/HeroSection";
import TechStack from "../Stacks/TechStack";

import Connect from "../connect/Connect";
import Blog from "../Blog/Blog";
import Experience from "../Experience/Experience";
import Work from "../Works/Work";

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
    <div class="grid grid-cols-8 grid-rows-3 h-screen p-3 gap-3 font-Satoshi">
      <div class="bg-[#292929] shadow-white rounded-4xl n p-4 col-span-3 row-span-2 text-white">
        <HeroSection />
      </div>
      <div class="bg-[#292929] col-span-2 rounded-4xl p-4  text-white ">
        <TechStack />
      </div>
      <div class="bg-[#292929] col-span-3 rounded-4xl p-4   text-white">
        <Experience />
      </div>
      <div class="bg-[#292929] col-span-2 rounded-4xl  p-4  text-white">
        <Connect />
      </div>
      <div class="bg-[#292929] col-span-3  rounded-4xl p-4 row-span-2 text-white overflow-hidden">
        <Work />
      </div>
      <div class="bg-[#292929] col-span-5 rounded-4xl  p-4 text-white">
        <Blog />
      </div>
      <div class="bg-[#292929]  rounded-4xl h-10 p-2  text-white  col-span-9">
        <Footer />
      </div>
    </div>
  );
}

export default Laptop;
