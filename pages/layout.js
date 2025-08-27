import Intro from "../components/Common/Intro";
import Nav from "../components/Common/Nav/Nav";
import { FaBars, FaMousePointer } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
import { useState } from "react";
import Header from "../components/header";
import Footer from "../components/Footer";



export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [intro, setIntro] = useState(false);

  return (
    <div className={`h-screen flex flex-col select-none font-circular mb-64`}>
      {/* Header for mobile - sticky */}
      <div className="lg:hidden sticky top-0 z-50 outline outline-white">
        <div className="bg-MidNightBlack text-LightGray w-full h-10 flex items-center justify-between px-2">
          <div
            className="icon flex items-center gap-x-2"
            onClick={(e) => setIntro(!intro)}
          >
            <span className="icon border-2 text-Green border-Green p-1 text-sm rounded-lg">
              <SlOptionsVertical />
            </span>
            <div className="text-Snow absolute -right-1 -bottom-1">
              <FaMousePointer />
            </div>
          </div>
          <div
            className="icon flex items-center gap-x-2"
            onClick={(e) => setIsOpen(!isOpen)}
          >
            <span className="icon border-2 text-Green border-Green p-1 text-sm rounded-lg">
              <FaBars />
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row relative h-full gap-x-3 px-4 pt-4">
        {/* Left sidebar */}
        <div
          className={`w-full lg:w-64 h-auto  mt-10 lg:h-[calc(100%-50px)] left-0 lg:rounded-xl -top-10 lg:top-0 lg:left-0 overflow-hidden bg-DeepNightBlack shadow-2xl z-40 lg:flex flex-col lg:relative ${
            intro ? "flex absolute" : "hidden lg:flex"
          }`}
        >
          <Intro isOpen={intro} setIsOpen={setIntro} />
        </div>

        {/* Main content area with header */}
        <div className="flex flex-col w-full lg:w-[calc(100%-256px)] h-screen">
          {/* Header for desktop */}
          <Header />

          {/* Children content below header */}
          <div className="w-full mx-auto max-h-screen pb-40 flex justify-center">
            <div className="w-full max-h-screen shadow-xl bg-DeepNightBlack rounded-lg overflow-auto overflow-x-hidden no-scrollbar">
              {children}
            </div>
          </div>
        </div>
      </div>

      {/* Footer positioned correctly */}
      <div className="fixed bottom-0  right-0 w-[85%] mx-auto">
        <Footer />
      </div>

      {/* Overlay for mobile sidebar */}
      {intro && (
        <div
          onClick={(e) => setIntro(false)}
          className="fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-[2px] z-30 lg:hidden"
        ></div>
      )}

      {/* Navigation component */}
      {<Nav isOpen={isOpen} setIsOpen={setIsOpen} />}


    </div>
  );
}