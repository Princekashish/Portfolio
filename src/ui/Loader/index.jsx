// components/Loader.tsx
import { useEffect, useState } from "react";
import gsap from "gsap";

export default function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate number from 0 → 100
    gsap.to({ val: 0 }, {
      val: 100,
      duration: 2,
      ease: "power2.out",
      onUpdate: function () {
        setProgress(Math.floor(this.targets()[0].val));
      },
      onComplete: () => {
        // fade out loader smoothly
        gsap.to(".loader-container", {
          opacity: 0,
          duration: 1,
          delay: 0.3,
          onComplete: () => {
            const el = document.querySelector(".loader-container");
            if (el) el.style.display = "none";
          }
        });
      }
    });
  }, []);

  return (
    <div className="loader-container fixed top-0 left-0 w-full h-full flex items-center justify-center bg-zinc-900 z-50">
      <div className="flex flex-col items-center">
        <span className="text-5xl md:text-7xl font-bold text-white">{progress}%</span>
        <p className="text-gray-400 mt-2 text-sm tracking-wide">Loading portfolio...</p>
      </div>
    </div>
  );
}
