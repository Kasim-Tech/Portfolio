"use client";
import React from "react";
import Particles from "../Components/Particals";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
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
      style={{ marginTop: "64px", height: "calc(100vh - 64px)" }}
    >
      <Particles />
      <div
        className="text-center font-bold"
        style={{ width: "50%" }}
      >
        <div className="text-4xl">Abu Kasim</div>
        <div className="flex items-center justify-center mb-5">
          <span className="font-bold text-2xl">a</span>
          <span className="font-bold ml-2 text-2xl"> {typeEffect}</span>
          <div className="ml-2">
            <Cursor />
          </div>
        </div>

     
      </div>
    </div>
  );
};

export default HeroSection;
