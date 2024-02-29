import React from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <div className=" h-[70vh]" id="contact">
      <div className="flex flex-col justify-center items-center relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-7 ">
        <h2 className="text-[#137EFB] font-poppes text-xl font-bold">
          Contact me
        </h2>
        <p className="font-poppes text-lg font-medium">Don't be shy! Hit me up! 👇</p>
        <div className="space-y-12 pt-5">
          <div className="flex flex-col justify-center items-center" >
            <FaMapLocationDot size={32} color="#137EFB" />
            <h1 className="text-xl font-semibold font-poppes">Location</h1>
            <p className="font-mulish ">Delhi, India</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <MdEmail size={32} color="#137EFB" />
            <h1 className="text-xl font-semibold font-poppes">Mail</h1>
            <a href="princekashish136@gmail.com" className="font-mulish">princekashish136@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
