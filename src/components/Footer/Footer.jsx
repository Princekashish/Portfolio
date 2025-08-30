import React, { useEffect, useState } from "react";
import { Counter } from "counterapi";

export default function Footer() {
  const [visitorCount, setVisitorCount] = useState(null);

  const data = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  useEffect(() => {
    const counter = new Counter({
      workspace: "princekashis", // Replace with your actual workspace name
      debug: true,
    });

    counter
      .up("visitor-client") // Replace with your actual counter key
      .then((res) => setVisitorCount(res.data.up_count))
      .catch((err) => {
        console.error("CounterAPI error:", err);
      });
  }, []);

  return (
    <div className="md:pl-5 md:pr-5 pl-3 pr-3  h-full   flex justify-center md:justify-between items-center">
      <div className=" md:w-[70%] flex justify-center items-center md:items-start md:justify-start ">
        <h1 className="text-xs md:text-base">
          Designed & Developed by{" "}
          <span className="text-[#ECB476]">Prince Kashish.</span>
        </h1>
      </div>

      <div className="hidden md:block">
        <div className="flex items-center justify-end  gap-2 md:gap-4 font-light md:text-[13px] text-xs  md:w-full">
          {/* <h1 className="">
            Visitor #{visitorCount !== null ? visitorCount : "___"}
          </h1> */}
          <h1 className="">India {data}</h1>
        </div>
      </div>
    </div>
  );
}
