import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card) => {
      gsap.to(card, {
        scale: 0.8,
        opacity: 0,
        scrollTrigger: {
          trigger: card,
          start: "top 18%",
          end: "bottom 18%",
          scrub: true,
        },
      });
    });
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const projects = [
    {
      name: "MealTracker",
      image: "/mealtrackerwebsite.png",
      link: "https://mealtracker-three.vercel.app/",
      github: "https://github.com/Princekashish/Mealtracker",
      description:
        "A full-stack meal tracking app to help users reduce daily meal expense miscalculations.",
      techStack: [
        "Next.js",
        "TypeScript",
        "MongoDB",
        "Firebase Auth",
        "Vercel",
      ],
      responsibilities: [
        "Built a full-stack meal tracking app with interactive features and secure user authentication.",
        "Boosted user retention with an engaging onboarding flow, increasing first-time task completion by 45%.",
        "Optimized app performance via code-splitting, image optimization, and Firebase integration.",
      ],
    },
    {
      name: "Finder AI-powered Project",
      link: "https://experience-finder.vercel.app/",
      image: "/finder.png",
      github: "https://github.com/Princekashish/Experience-finder",
      description:
        "An AI-powered tool that generates creative learning paths and schedules based on user input.",
      techStack: [
        "React.js",
        "TypeScript",
        "Gemini API",
        "Firebase",
        "TailwindCSS",
      ],
      responsibilities: [
        "Built a daily learning schedule and roadmap generator powered by Gemini AI.",
        "Handled real-time progress tracking using Firebase.",
        "Implemented PWA features including offline access, splash screens, and home screen installation.",
      ],
    },
    {
      name: "ZeroHunger Food Donation",
      link: "https://ibm-zerohunger-project.vercel.app/",
      image: "/zeroHunger.png",
      github: "https://github.com/Princekashish/IBM-Client",
      description:
        "An initiative focused on ending hunger, ensuring food security, and supporting sustainable development.",
      techStack: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "TailwindCSS",
      ],
      responsibilities: [
        "Built a high-performance food donation platform with React and TailwindCSS.",
        "Created secure backend APIs for user authentication and donation tracking using Node.js and Express.",
        "Implemented secure credential hashing and responsive UI for cross-device compatibility.",
      ],
    },
    {
      name: "Crust - Bakery Shop",
      link: "https://crust-bakery.vercel.app/",
      image: "/crust.png",
      github: "https://github.com/Princekashish/Crust",
      description:
        "An online bakery shop with product display, cart system, and order tracking.",
      techStack: ["React.js", "Firebase", "TailwindCSS", "Redux Toolkit"],
      responsibilities: [
        "Built a dynamic storefront with product catalog and state management using Redux Toolkit.",
        "Implemented Firebase for product and order data handling.",
        "Styled using TailwindCSS for a clean and responsive design.",
      ],
    },
  ];
  return (
    <div className="bg-zinc-900 backdrop-blur-3xl flex flex-col gap-5 items-center   text-white git py-[18vh] ">
      {projects.map((project, i) => (
        <div
          ref={(el) => (cardsRef.current[i] = el)}
          key={i}
          className="bg-[#292929]  sticky top-[18vh] md:min-h-[65vh]  w-[85vw]  md:w-[30vw] p-2 rounded-3xl  "
        >
          <div className="p-2 border border-dashed rounded-3xl border-white/10 ">
            {/* <div
              className={`bg-[url("${project.image}")] bg-cover bg-no-repeat h-[30vh] rounded-3xl`}
            /> */}
            <img
              src={project.image}
              alt=""
              className="object-contain md:object-cover h-[30vh] rounded-2xl"
            />
          </div>
          <div className="p-3 flex flex-col gap-2">
            <div className="flex justify-between items-center ">
              <h1 className=" text-[18px] font-medium ">{project.name}</h1>
              <div className="flex gap-3 items-center">
                <a
                  href={project.link}
                  target="_black"
                  className="flex gap-1 items-center bg-white/10 backdrop-blur-lg border border-dashed border-white/10 shadow-md px-3 py-1 rounded-3xl"
                >
                  <div className="h-[6px] w-[6px] bg-green-600 rounded-full" />
                  <h1 className="text-sm">Live</h1>
                </a>

                <a
                  href={project.github}
                  className="dark:text-gray-100 text-black"
                  target="_black"
                >
                  <FaGithub size={25} />
                </a>
              </div>
            </div>
            <h1 className="font-light text-[14px]">
              {project.responsibilities}
            </h1>
            <div className="flex flex-col gap-2">
              <h1 className="border-b border-dashed border-white/10 py-1">
                Techstack
              </h1>
              <div className="flex justify-start items-center flex-wrap gap-1">
                {project.techStack.map((techstack, i) => (
                  <div
                    key={i}
                    className="flex gap-1 items-center bg-white/10 backdrop-blur-lg  border-white/10 shadow-md px-3  rounded-md"
                  >
                    <h1 className="font-thin text-sm">{techstack}</h1>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
