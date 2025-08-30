import React from "react";
import HeroSection from "../components/Hero/HeroSection";
import TechStack from "../components/Stacks/TechStack";
import Experience from "../components/Experience/Experience";
import Connect from "../components/connect/Connect";
import Work from "../components/Works/Work";
import Blog from "../components/Blog/Blog";
import Footer from "../components/Footer/Footer";
import Laptop from "../components/Laptop";

function Page() {
  return (
    <>
      <div className="hidden xl:block">
        <Laptop />
      </div>

      <div className="block md:hidden">
        <div class="  grid grid-cols-1   p-3 gap-3 font-Satoshi mb-3 ">
          <div class="bg-[#292929] shadow-white rounded-4xl  p-4  text-white">
            <HeroSection />
          </div>
          <div class="bg-[#292929]  rounded-4xl p-4 h-[240px]   text-white">
            <Experience />
          </div>
          <div class="bg-[#292929]   rounded-4xl p-4 h-[400px] text-white overflow-hidden">
            <Work />
          </div>
          <div class="bg-[#292929]  rounded-4xl p-4  text-white ">
            <TechStack />
          </div>

          <div class="bg-[#292929]  rounded-4xl  p-4  text-white">
            <Connect />
          </div>

          <div class="bg-[#292929]  rounded-4xl h-[260px]  p-4 text-white">
            <Blog />
          </div>
          <div class="bg-[#292929]  rounded-4xl h-11 p-2  text-white  ">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
