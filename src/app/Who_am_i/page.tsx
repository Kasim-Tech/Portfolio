"use client"

import React from "react";
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import Particles from "../Components/Particals";

const Whoami = () => {
  return (
    <div className="w-full bg-black text-white flex flex-col justify-center items-center">
      <Particles />
      <div
        className="text-center bg-black relative rounded-lg"
        style={{ width: "80%", maxWidth: "600px" }}
      >
        <div className="text-3xl md:text-4xl lg:text-5xl font-bold mt-5">
          Who am I?
        </div>
        <p className="text-base md:text-lg lg:text-xl mt-4 px-4">
          I'm a frontend developer, mainly working with React.js. I enjoy
          creating websites that are easy to use and leave a positive impact.
          With over a year of experience in web development, I specialize in
          turning ideas into polished, functional interfaces. My goal is to make
          websites that are intuitive and enjoyable for users to navigate.
        </p>

        <div className="text-center justify-center mt-12 ">
          <Button
            variant="contained"
            endIcon={<DownloadIcon />}
            sx={{
              borderRadius: "999px",
              textTransform: "none",
              py: 2,
              px: 4,
              color: "#fff",
              backgroundColor: "#2196F3",
              "&:hover": {
                backgroundColor: "#92C2E8",
                color: "#000000",
              },
              minWidth: "auto", 
              marginLeft: "4", 
              mt: { base: 2, md: 0 },
            }}
          >
            <a href="/Kasim_cv.pdf" download>
              Download CV
            </a>
          </Button>
          <Button
          
            variant="contained"
            endIcon={<AttachEmailIcon />}
            sx={{
              borderRadius: "999px",
              textTransform: "none",
              py: 2,
              px: 4,
              color: "#fff",
              backgroundColor: "#2196F3",
              "&:hover": {
                backgroundColor: "#92C2E8",
                color: "#000000",
              },
              minWidth: "auto", // Increase button width for desktop
              marginLeft: { base: 0, md: 4 }, // Add margin left on desktop
              mt: { base: 4, md: 0 }, // Add margin top on mobile
            }}
          >
            Get in Touch
          </Button>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 768px) {
          .text-base {
            font-size: 1.10rem; /* Adjust font size for desktop */
            line-height: 1.5; /* Adjust line height for desktop */
            max-height: 7.5rem; /* Limit paragraph height to 4-5 lines */
          }
        }
      `}</style>
    </div>
  );
};

export default Whoami;
