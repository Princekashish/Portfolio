import { div, h1, line, text } from "framer-motion/client";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

function Project() {
  const work = [
    {
      text: "Finder AI-powered project generates",
      logo: "/maskable_icon_x192.png",
      details:
        "This AI-powered project generates daily learning schedules and roadmaps for your learning path.",
      link: "https://experience-finder.vercel.app/",
      techstack: [
        { text: "React.js" },
        { text: "Typescript" },
        { text: "Gemini API" },
        { text: "Firebase" },
        { text: "Tailwindcss" },
      ],
    },
    {
      text: "ZeroHunger Food donation",
      logo: "/logo.png",
      details:
        "ZeroHunger is an initiative focused on ending hunger, ensuring food security, sustainable development.",
      link: "https://ibm-zerohunger-project.vercel.app/",
      techstack: [
        { text: "React.js" },
        { text: "Express.js" },
        { text: "Node.js" },
        { text: "Tailwindcss" },
        { text: "MongoDB" },
      ],
    },
    {
      text: "Crust-Bakery shop",
      logo: "/crust.png",
      details:
        "This Bakey-shop based project ",
      link: "https://crust-bakery.vercel.app/",
      techstack: [
        { text: "React.js" },
        { text: "Firebase" },
        { text: "Tailwindcss" },
        { text: "Redux tool kit" },
      ],
    },
    {
      text: "HappyHarbor E-commerce shop",
      logo: "/happyhover.png",
      details:
        "This E-commerce  based project ",
      link: "https://e-comm-theta.vercel.app/",
      techstack: [
        { text: "React.js" },
        { text: "Firebase" },
        { text: "Tailwindcss" },
      ],
    },
  ];

  return (
    <div
      className="p-5 bg-[#EFEFEF] dark:bg-black  flex flex-col gap-5  xl:pt-5 xl:bg-[#292929] xl:dark:bg-[#efefef]  xl:rounded-3xl "
      id="project"
    >
      <div>
        <h1 className="font-poppins text-[1.6em] text-center font-semibold xl:text-[#EFEFEF] xl:dark:text-black">
          Have a glimpse on Selected{" "}
          <span className="relative inline-block text-[#F15316]">
            works
            <svg
              className="absolute -bottom-1 left-0 w-full"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <path
                d="M0,5 Q50,0 100,5"
                fill="none"
                stroke="#F15316"
                strokeWidth="4"
              />
            </svg>
          </span>{" "}
          of mine
        </h1>
      </div>
      <div className="xl:grid xl:grid-cols-3 xl:gap-5 ">
        {work.map((items, i) => {
          return (
            <div
              key={i}
              id="project"
              className="bg-white xl:justify-start   dark:bg-[#292929] xl:dark:bg-white xl:dark:text-black  relative mt-5 flex flex-col justify-center items-start  p-5 gap-5  rounded-2xl  xl:bg-zinc-900  xl:text-[#EFEFEF]"
            >
              <div className=" rounded-xl xl:dark:bg-transparent dark:bg-[#ffffff] xl:bg-[#ffffff]">
                <img
                  src={items.logo}
                  alt=""
                  className="h-[80px] w-[80px] rounded-xl object-contain"
                />
              </div>
              <div className="">
                <h1 className="text-lg font-semibold tracking-wide ">
                  {items.text}
                </h1>
              </div>
              <div>
                <h1 className="">{items.details} </h1>
              </div>
              <div className="flex flex-wrap gap-3 font-DM_sans ">
                {items.techstack.map((items, i) => {
                  return <h1 className="border px-2  rounded-full border-zinc-400 text-sm dark:text-zinc-300 xl:dark:text-black" >{items.text}</h1>;
                })}
              </div>
              <div className="absolute top-5 right-5 border h-[30px] w-[30px] flex justify-center items-center border-black dark:border-gray-300 rounded-full xl:border-gray-300">
                <a href={items.link} target="_black">
                  <FiArrowUpRight size={20} />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Project;
