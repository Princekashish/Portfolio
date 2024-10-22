import { useContext } from "react";
import "./App.css";
// import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import Laptop from "./components/Laptop";

function App() {
  return (
    <>
      <div className="min-h-screen bg-[#ffffff] dark:bg-black dark:text-[#EFEFEF]">
      <div className="hidden xl:block">
        <Laptop />
      </div>
        <div className="block xl:hidden">
          {/* <Navbar /> */}
          <main>
            <Outlet />
          </main>
        </div>
      </div>

    
    </>
  );
}

export default App;
