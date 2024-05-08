"use client";
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
      style={{ marginTop: "64px", minHeight: "calc(100vh - 64px)" }}
    >
      <Particles />
      <div className="text-center font-bold" style={{ width: "80%" }}>
        <div className="text-4xl md:text-5xl lg:text-6xl">Abu Kasim</div>
        <div className="flex items-center justify-center mb-5">
          <span className="font-bold text-xl md:text-2xl lg:text-3xl">a</span>
          <span className="font-bold ml-2 text-xl md:text-2xl lg:text-3xl">{typeEffect}</span>
          <div className="ml-2">
            <Cursor />
          </div>
        </div>
        {/* <Button
          variant="contained"
          endIcon={<DownloadIcon />}
          className="mr-3"
        >
          Download CV
        </Button>
        <Button
          variant="contained"
          endIcon={<AttachEmailIcon />}
          className="ml-3"
        >
          Get in Touch
        </Button> */}
      </div>
    </div>
  );
};

export default HeroSection;
