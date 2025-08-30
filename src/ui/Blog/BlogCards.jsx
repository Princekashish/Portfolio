import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Calendar } from "lucide-react";

export default function BlogCards({ Blogtitle, Blogsubheading, date,link }) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind 'md' breakpoint
    };

    handleResize(); // check on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const displaysubheading =
    isMobile && Blogsubheading.length > 20
      ? Blogsubheading.slice(0, 100) + "..."
      : Blogsubheading;
  return (
    <div className="flex flex-col items-start">
      <div className="flex    justify-start items-start md:w-full">
        <a href={link} target="_black">
        <h1 className="md:text-[22px] text-[18px]  md:tracking-wide  md:w-[85%] w-full">
          {Blogtitle}
        </h1>
        </a>
        <div className="hidden md:block ">
          <div className="flex justify-center items-center gap-2 ">
            <Calendar size={16} />
            <p className="md:text-[13px] text-[12px]">{date}</p>
          </div>
        </div>
      </div>
      <div className="flex items-start ">
        <h1 className="font-light md:text-[16px] tracking-tight md:tracking-wider">
          {displaysubheading}
        </h1>
      </div>
    </div>
  );
}
BlogCards.PropTypes = {
  Blogtitle: PropTypes.string,
  Blogsubheading: PropTypes.string,
  date: PropTypes.string,
  link: PropTypes.string,
};
