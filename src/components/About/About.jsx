import React from "react";

function About() {
  return (
    <>
   <div className="h-[90vh] lg:h-[60vh] " id="About" >
      <div className=" flex  flex-col md:gap-6  md:items-center md:w-[780px] xl:w-[850px] md:h-[354px] md:flex-row justify-center items-center relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="md:pt-3">
          <img
            className="w-80 md:w-[720px] rounded-xl "
            src="https://images.pexels.com/photos/52608/pexels-photo-52608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </div>
        <div className="flex flex-col  md:items-start justify-center items-center mt-4">
          <h2 className="text-[#137EFB] font-poppes text-[17px] font-bold">
            About me
          </h2>

          <h1 className="text-[25px] pt-6 font-poppes font-bold leading-9">
            Front-end Developer <br />
            based in Delhi, India 📍
          </h1>
          <p className="font-mulish pt-3 md:pt-2 text-[17px] md:text-left text-center font-medium text-[#555555]">
            Hey, my name is Prince Kashish, and I'm a Frontend Developer. My
            passion is to create and develop a clean UI/UX for my users. <br />{" "}
            <br />
            <span>
              My main stack currently is React/Next.js in combination with
              Tailwind CSS and TypeScript. Also working on web performance
              optimization
            </span>
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default About;
