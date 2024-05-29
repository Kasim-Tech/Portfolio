"use client"
  


import React from "react";
import Particles from "../Components/Particals";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const HeroSection = () => {
  const [typeEffect] = useTypewriter({
    words: [
      "ReactJs Developer",
      "Programmer ",
      "FrontEnd Developer",
      "Web Developer",
    ],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  return (
    <div
      className="w-full relative bg-black text-white flex flex-col justify-center items-center"
      style={{ minHeight: "calc(100vh - 54px)" }}
    >
      <Particles />
      <div className="text-center font-bold">
        <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Abu Kasim</div>
        <div className="flex items-center justify-center mb-5">
          <span className="font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl">a</span>
          <span className="font-bold ml-2 text-lg md:text-xl lg:text-2xl xl:text-3xl">{typeEffect}</span>
          <div className="ml-2">
            <Cursor />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
