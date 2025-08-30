import React, { useEffect, useRef, useState } from "react";
import HeaderContent from "../../ui/header";
import { FaGithub, FaShoppingBag } from "react-icons/fa";
import { BiRightTopArrowCircle } from "react-icons/bi";
import gsap from "gsap";
import { PopupModal } from "../../ui/Popup";
import { Link } from "react-router-dom";
export default function Work() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  useEffect(() => {
    gsap.set(imageRef.current, {
      rotateZ: 15,
      x: -20, // move left
      scale: 0.9,
    });
    const container = containerRef.current;
    const image = imageRef.current;

    const handleEnter = () => {
      gsap.to(image, {
        x: 0,
        rotateZ: 0,
        scale: 1,
        duration: 0.5,
        ease: "power3.out",
      });
    };

    const handleLeave = () => {
      gsap.to(image, {
        x: -20,
        rotateZ: 15,
        scale: 0.9,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    container.addEventListener("mouseenter", handleEnter);
    container.addEventListener("mouseleave", handleLeave);

    return () => {
      container.removeEventListener("mouseenter", handleEnter);
      container.removeEventListener("mouseleave", handleLeave);
    };
  }, []);
  return (
    <>
      <div className="md:pl-5 md:pr-5 pr-3 pl-3   h-full relative">
        <div className="flex flex-col gap-5">
          <HeaderContent
            icon={FaShoppingBag}
            title={"Projects"}
            subtitle={"Featured Projects"}
          />
          <div ref={containerRef} className="feature-hx flex flex-col gap-3">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 ">
                <img
                  src="/mealtracker.png"
                  alt=""
                  className="md:w-[30px] md:h-[30px] w-[20px] h-[20px]"
                />
                <h1 className="font-semibold text-lg">Meal Tracker</h1>
              </div>
              <div className="flex gap-3 items-center">
                <a
                  href="https://mealtracker-three.vercel.app"
                  target="_black"
                  className="flex gap-1 items-center bg-white/10 backdrop-blur-lg border border-dashed border-white/10 shadow-md px-3 py-1 rounded-3xl"
                >
                  <div className="h-[6px] w-[6px] bg-green-600 rounded-full" />
                  <h1 className="text-sm">Live</h1>
                </a>

                <a
                  href="https://github.com/Princekashish/Mealtracker"
                  className="dark:text-gray-100 text-black"
                  target="_black"
                >
                  <FaGithub size={25} />
                </a>
              </div>
            </div>
            <div>
              <h1 className="font-light text-[18px]">
                MealTracker helps you log and track your daily meals, manage
                vendors, and monitor spending so you never overpay.
              </h1>
            </div>
            <div ref={imageRef} className="relative">
              <div className="bg-gray-600 absolute top-0" />
              <img src="/mealtrackerwebsite.png" alt="" className="" />
            </div>
          </div>
        </div>
        <Link to={"/project"}>
          {" "}
          <BiRightTopArrowCircle
            onClick={() => setOpen(true)}
            size={30}
            className="absolute bottom-0 right-4"
          />
        </Link>
      </div>
    </>
  );
}
