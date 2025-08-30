import React, { useEffect, useRef } from "react";
import { LuHeartHandshake } from "react-icons/lu";
import Button from "../../ui/Buttom";
import { HiOutlineCalendar } from "react-icons/hi";
import gsap from "gsap";

export default function Connect() {
  const containerRef = useRef(null); // Button area
  const contentRef = useRef(null); // Text + icon
  const wrapperRef = useRef(null); // Outer button wrapper

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    const wrapper = wrapperRef.current;

    const moveContentX = gsap.quickTo(content, "x", {
      duration: 0.4,
      ease: "power3.out",
    });
    const moveContentY = gsap.quickTo(content, "y", {
      duration: 0.4,
      ease: "power3.out",
    });

    let lastMouse = { x: 0, y: 0 };

    function handleMouseMove(e) {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      lastMouse = { x, y };

      moveContentX(x * 0.3);
      moveContentY(y * 0.3);
    }

    function handleMouseLeave() {
      // Smoothly return text/icon to center
      gsap.to(content, {
        x: 0,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      });

      // Button wrapper follows the direction then springs back — but *slower + smoother*
      gsap.fromTo(
        wrapper,
        {
          x: lastMouse.x * 0.15,
          y: lastMouse.y * 0.15,
        },
        {
          x: 0,
          y: 0,
          duration: 2,
          ease: "elastic.out(1, 0.4)",
        }
      );
    }

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="md:pl-5 pl-3 pr-3 md:pr-5 h-full flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <div className="bg-[#373737] h-12 w-14 rounded-xl flex justify-center items-center">
          <LuHeartHandshake size={35} className="text-[#ECB476]" />
        </div>
        <div className="text-center mt-2">
          <h1 className="font-bold text-[22px]">Let’s Work Together</h1>
          <h1 className="text-base">Let's Make Magic Happen Together!</h1>
        </div>
        <a href="https://cal.com/prince-kashish-jhp8vl/15min" target="_blank" rel="noopener noreferrer">
          <div className="mt-5" ref={containerRef}>
            <div ref={wrapperRef}>
              <Button
                className="outline-none font-normal relative overflow-hidden"
                variant="primary"
              >
                <span
                  ref={contentRef}
                  className="flex gap-2 items-center justify-center w-full h-full pointer-events-none"
                >
                  <HiOutlineCalendar className="text-lg" />
                  <span>Schedule a Call</span>
                </span>
              </Button>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
