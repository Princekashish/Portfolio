import React from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <div
      className=" h-[60vh] flex justify-center items-center dark:bg-black "
      id="contact"
    >
      <div className="flex flex-col justify-center items-center gap-3 ">
        <div className="h-[20px] w-[20px] bg-black rounded-lg " />
        <div className="flex flex-col gap-2 font-poppins w-3/4 ">
          <h1 className="text-[2em] font-semibold text-center ">
            Feel Free to{" "}
            <span className="text-orange-600"> Drop me a line</span>
          </h1>
          <div className="flex justify-center items-center gap-2">
            <div className="h-[8px] w-[8px] bg-green-600 rounded-full" />
            <p className="font-poppins text-sm">Avilable to work</p>
          </div>
        </div>
        <div className="pt-4 ">
          <a
            href="mailto:princekashish136@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-14 py-2 bg-zinc-900 text-white rounded-xl uppercase dark:border">
              Contact
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
