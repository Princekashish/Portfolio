import React from "react";
import Home from "../components/Home/Home";
import Project from "../components/Portfolio/Project";
import Contact from "../components/Contact/Contact";
import Mode from "../components/Mode";

function Page() {
  return (
    <>
      <Home />
      <Mode />
      <Project />
      <Contact />
    </>
  );
}

export default Page;
