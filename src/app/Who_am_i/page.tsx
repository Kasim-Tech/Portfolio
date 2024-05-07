"use client";
import React from "react";

import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import Particles from "../Components/Particals";
import Image from "next/image";
import Myself from "/public/ME/Myself.jpg";

const Whoami = () => {
  return (
    <div className="w-full  bg-black text-white flex flex-col justify-center items-center">
      <Particles />
      <div
        className="text-center  bg-black relative rounded-lg"
        style={{ width: "50%" }}
      >
        {/* <div className="text-center">
          <div className="inline-block">
            <Image
              src={Myself}
              alt="MyIMG"
              className="h-48 w-48 p-5 object-cover rounded-full transition duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
        </div> */}
        <div className="text-4xl mt-5 font-bold">Who am I?</div>
        <p className="text-lg mt-4">
          I'm a frontend developer, mainly working with React.js. I enjoy
          creating websites that are easy to use and leave a positive impact.
          With over a year of experience in web development, I specialize in
          turning ideas into polished, functional interfaces. My goal is to make
          websites that are intuitive and enjoyable for users to navigate.
        </p>

        <div className="text-center justify-center  mt-5 flex gap-8 mb-8">
          <div>
            <Button
              variant="contained"
              endIcon={<DownloadIcon />}
              sx={{
                borderRadius: "999px",
                textTransform: "none",
                py: 1,
                px: 3,
                color: "#fff",
                // fontWeight:"bold",
                backgroundColor: "#2196F3",
                "&:hover": {
                  backgroundColor: "#92C2E8",
                  color: "#000000",
                  //   fontWeight:"bold",
                },
              }}
            >
              <a href="/Kasim_cv.pdf" download>
                Download CV
              </a>
            </Button>
          </div>
          <div>
            <Button
              variant="contained"
              endIcon={<AttachEmailIcon />}
              sx={{
                borderRadius: "999px",
                textTransform: "none", // Preventing automatic text transformation
                py: 1,
                px: 3,
                color: "#fff",

                backgroundColor: "#2196F3", // Black background color
                "&:hover": {
                  backgroundColor: "#92C2E8",
                  color: "#000000",
                },
              }}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whoami;
