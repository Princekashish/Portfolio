import { useEffect, useRef } from "react";
import { Layers } from "lucide-react";
import React from "react";
import HeaderContent from "../../ui/header";
import gsap from "gsap";

export default function TechStack() {
  const marqueeRef1 = useRef(null);
  const marqueeRef2 = useRef(null);

  const Techstack = [
    {
      name: "Next.js",
      icon: "https://skillicons.dev/icons?i=nextjs&theme=light",
    },
    {
      name: "TypeScript",
      icon: "https://skillicons.dev/icons?i=ts&theme=light",
    },
    {
      name: "Node.js",
      icon: "https://skillicons.dev/icons?i=nodejs&theme=light",
    },
    { name: "Redux", icon: "https://skillicons.dev/icons?i=redux&theme=light" },
    { name: "Java", icon: "https://skillicons.dev/icons?i=java&theme=light" },
    {
      name: "React.js",
      icon: "https://skillicons.dev/icons?i=react&theme=light",
    },
    { name: "Husky", icon: "https://skillicons.dev/icons?i=pug&theme=light" },
    {
      name: "GitLab",
      icon: "https://skillicons.dev/icons?i=gitlab&theme=light",
    },
    { name: "Figma", icon: "https://skillicons.dev/icons?i=figma&theme=light" },
    {
      name: "MongoDB",
      icon: "https://skillicons.dev/icons?i=mongodb&theme=light",
    },
    {
      name: "JavaScript",
      icon: "https://skillicons.dev/icons?i=javascript&theme=light",
    },
  ];

  const fullStack = [...Techstack, ...Techstack];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Row 1 → scrolls left
      gsap.to(marqueeRef1.current, {
        xPercent: -50,
        repeat: -1,
        ease: "linear",
        duration: 25,
      });

      // Row 2 → scrolls right
      gsap.fromTo(
        marqueeRef2.current,
        { xPercent: -50 },
        {
          xPercent: 0,
          repeat: -1,
          ease: "linear",
          duration: 25,
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="overflow-hidden">
      <HeaderContent icon={Layers} title="My Stacks" subtitle="Tech Arsenal" />

      <div className="md:mt-4">
        {/* Marquee Row 1 - scrolls left */}
        <div className="relative overflow-hidden w-full py-2">
          <div ref={marqueeRef1} className="flex gap-6 whitespace-nowrap w-max">
            {fullStack.map((tech, i) => (
              <div
                key={`row1-${i}`}
                className="bg-[#373737] flex items-center gap-2 px-4 py-2 rounded-xl"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="h-[30px] w-[30px]"
                />
                <span className="text-white text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Marquee Row 2 - scrolls right */}
        <div className="relative overflow-hidden w-full py-2">
          <div ref={marqueeRef2} className="flex gap-6 whitespace-nowrap w-max">
            {fullStack.map((tech, i) => (
              <div
                key={`row2-${i}`}
                className="bg-[#454545] flex items-center gap-2 px-4 py-2 rounded-xl"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="h-[30px] w-[30px]"
                />
                <span className="text-white text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
