import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        className={`fixed z-50 top-0 left-0 w-full p-6 md:p-8 flex items-center justify-between shadow-md bg-white ${
          isOpen ? "hidden" : ""
        }`}
      >
        <div>
          <h1 className="font-bold text-lg md:text-xl font-poppes">
            <a href="/">Prince.dev</a>
          </h1>
        </div>
        <ul className="hidden md:flex md:flex-row md:gap-10 md:font-poppes md:items-center md:justify-end md:font-medium">
          <a href="#home">
            <li className="hover:text-zinc-100">Home</li>
          </a>
          <a href="#About">
            <li className="hover:text-zinc-100">About</li>
          </a>
          <a href="#project">
            <li className="hover:text-zinc-100">Project</li>
          </a>
          <a href="#contact">
            <li className="hover:text-zinc-100">Contact</li>
          </a>
        </ul>
        <div>
          <GiHamburgerMenu
            size={25}
            onClick={toggle}
            className="cursor-pointer md:hidden"
          />
        </div>
      </nav>
      {isOpen && (
        <div className="fixed  top-0 w-[100%]   text-center transition-all ease-in-out z-[300] bg-white md:static">
          <ul className="text-[23px]  h-[100vh] flex flex-col gap-10 font-poppes  justify-center items-center font-medium " onClick={toggle}>
            <a href="#home">
              <li className="hover:text-zinc-100" onClick={toggle}>Home</li>
            </a>
            <a href="#About">
              <li className="hover:text-zinc-100" onClick={toggle}>About</li>
            </a>
            <a href="#project">
              <li className="hover:text-zinc-100" onClick={toggle}>Project</li>
            </a>
            <a href="#contact">
              <li className="hover:text-zinc-100" onClick={toggle}>Contact</li>
            </a>
          </ul>
          <AiOutlineClose
            size={25}
            onClick={toggle}
            className="cursor-pointer absolute top-5 right-5 md:hidden"
          />
        </div>
      )}
    </>
  );
}

export default Navbar;
