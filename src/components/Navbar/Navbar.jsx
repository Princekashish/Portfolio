import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineWorkOutline } from "react-icons/md";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";

function Navbar() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setCursor({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: cursor.x - 16,
      y: cursor.y - 16,
    },
    text: {
      x: cursor.x - 75,
      y: cursor.y - 75,
      height: 150,
      width: 150,
      backgroundColor: "#fff",
      mixBlendMode: "difference",
    },
  };

  const textEnter = () => {
    setCursorVariant("text");
  };

  const textLeave = () => {
    setCursorVariant("default");
  };

  useGSAP(() => {
    gsap.to("#navbar", {
      opacity: 1,

      y: 0,
      delay: 1,
      ease: "power2.inOut",
    });
  });
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const navbar = [
    {
      text: "About",
    },
    {
      text: "Resume",
    },
    {
      text: "Work",
    },
  ];

  return (
    <>
      <div className="fixed bottom-0 w-full p-5 z-10">
        <div className="flex justify-center items-center gap-5 bg-[#EFEFEF]/55 brightness-90 backdrop-blur-xl rounded-xl p-3 shadow-xl flex-wrap">
          {navbar.map((items, i) => {
            return (
              <button key={i} className="px-4 py-2 rounded-xl   font-DM_sans font-medium ">
                {items.text}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Navbar;
