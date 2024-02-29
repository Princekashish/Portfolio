import { useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Project from "./components/Portfolio/Project";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
