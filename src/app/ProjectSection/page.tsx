"use client";

import React, { useState } from "react";
import Particles from "../Components/Particals";
import Royalfashion from "/public/Projects_IMG/RoyalFashion1.png";
import MegaMall from "/public/Projects_IMG/MegaMall.png";
import SmartTech from "/public/Projects_IMG/SmartTech.png";
import Image from "next/image";
import {
  Button,
  Stack,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import Reactjs from "/public/Skills_Logo/react.png";
import Nextjs from "/public/Skills_Logo/nextjs.png";
import TypeScript from "/public/Skills_Logo/typescript.png";
import Mysql from "/public/Skills_Logo/mysql.png";
import MUI from "/public/Skills_Logo/MUI.png";
import JS from "/public/Skills_Logo/javascript.png";
import PHP from "/public/Skills_Logo/php.png";
import HtmlLogo from "/public/Skills_Logo/html.png";
import CssLogo from "/public/Skills_Logo/css.png";
import shade from "/public/ME/shade.png";

const Project = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    window.open("https://brilliant-lolly-ea97a3.netlify.app/", "_blank");
    setOpen(false);
  };

  return (
    <div className="bg-black min-h-screen flex flex-col justify-center items-center lg:pl-10">
      <div className="absolute inset-0 z-10">
        <Particles />
      </div>
      <div className="text-white font-bold text-3xl mb-10">
        Selected Projects
        <Image src={shade} alt="shade" className="h-4 w-full" />
      </div>
      {/* First project */}
      <div className="flex flex-col md:flex-row justify-center items-center w-full px-4 md:px-24 mt-6 gap-8">
        <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/3">
          <Image
            src={Royalfashion}
            alt="RoyalFashion"
            className="border border-white border-4 rounded-lg h-auto md:h-64 w-full transition duration-300 ease-in-out transform hover:scale-105"
          />
        </div>

        <div className="w-full md:w-1/2 flex justify-center items-center md:items-start">
          <div className="flex flex-col justify-center items-start w-full md:w-3/4 ">
            <h1 className="text-white text-2xl md:text-3xl">Royal Fashion</h1>
            <p className="text-white text-sm md:text-base mt-2">
              A E-Commerce Website with Filter Functionality and Completely
              Responsive for all Devices
            </p>
            <div className="flex gap-2 md:gap-4 mt-2">
              <Image
                src={Reactjs}
                alt="ReactJS"
                className="h-6 md:h-8 w-auto transition duration-300 ease-in-out transform hover:scale-105"
              />
              <Image
                src={Mysql}
                alt="Mysql"
                className="h-6 md:h-8 w-auto transition duration-300 ease-in-out transform hover:scale-105 bg-white p-0.5 rounded-lg"
              />
              <Image
                src={JS}
                alt="JS"
                className="h-6 md:h-8 w-auto transition duration-300 ease-in-out transform hover:scale-105"
              />
              <Image
                src={MUI}
                alt="MUI"
                className="h-6 md:h-8 w-auto transition duration-300 ease-in-out transform hover:scale-105"
              />
              <Image
                src={PHP}
                alt="PHP"
                className="h-6 md:h-8 w-auto transition duration-300 ease-in-out transform hover:scale-105"
              />
            </div>
            <Stack direction="row" spacing={2} mt={2}>
              <Button variant="contained" size="small" endIcon={<LaunchIcon />}>
                <a
                  href="https://beamish-kitsune-b80342.netlify.app/"
                  target="_blank"
                >
                  Launch Project
                </a>
              </Button>
              <Button variant="contained" size="small" endIcon={<GitHubIcon />}>
                <a
                  href="https://github.com/Kasim-Tech/Royal_Fashion"
                  target="_blank"
                >
                  View GitHub
                </a>
              </Button>
            </Stack>
          </div>
        </div>
      </div>
      <div className="mt-8"></div> {/* Add space after the first project */}
      {/* Second project */}
      <div className="flex flex-col md:flex-row justify-center items-center w-full px-4 md:px-24 mt-6 gap-8">
        <div className="w-100 md:w-3/4 lg:w-2/3 xl:w-1/3">
          <video
            src="/Projects_IMG/Dashbord.mp4"
            className="border border-white border-4 rounded-lg h-auto md:h-64 w-full transition duration-300 ease-in-out transform hover:scale-105"
            autoPlay
            loop
            muted
          />
        </div>

        <div className="w-full md:w-1/2 flex justify-center items-center md:items-start">
          <div className="flex flex-col justify-center items-start w-full md:w-3/4 ">
            <h1 className="text-white text-2xl md:text-3xl">Admin Dashbord</h1>
            <p className="text-white text-sm md:text-base mt-2">
              A Admin Dashbord with APIs and CURD operations its Not Completed
              yet still iam working on it some parts are incomplete of this
              project it will completed soon.. and its Only For Desktop in
              future i will make it responsive too..!
            </p>
            <div className="flex gap-2 md:gap-4 mt-2">
              <Image
                src={Reactjs}
                alt="ReactJS"
                className="h-6 md:h-8 w-auto transition duration-300 ease-in-out transform hover:scale-105"
              />
              <Image
                src={Nextjs}
                alt="Nextjs"
                className="h-6 md:h-8 w-auto bg-white rounded p-1 transition duration-300 ease-in-out transform hover:scale-105"
              />
              <Image
                src={Mysql}
                alt="Mysql"
                className="h-6 md:h-8 w-auto transition duration-300 ease-in-out transform hover:scale-105 bg-white p-0.5 rounded-lg"
              />
              <Image
                src={TypeScript}
                alt="TS"
                className="h-6 md:h-8 w-auto transition duration-300 ease-in-out transform hover:scale-105 "
              />
              <Image
                src={JS}
                alt="JS"
                className="h-6 md:h-8 w-auto transition duration-300 ease-in-out transform hover:scale-105"
              />
              <Image
                src={MUI}
                alt="MUI"
                className="h-6 md:h-8 w-auto transition duration-300 ease-in-out transform hover:scale-105"
              />
            </div>
            <Stack direction="row" spacing={2} mt={2}>
              <Button
                variant="contained"
                size="small"
                endIcon={<LaunchIcon />}
                onClick={handleClickOpen}
              >
                Launch Project
              </Button>
              <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{"Please Read it Properly..!"}</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    This Project is Not Completed Yet Just click on Sign in
                    Button without filling Details and some parts is not working
                    (Users) here Because in this project have its own Database
                    and its working only in local-Syatem DONT click on users tab
                    ((Only DESKTOP WEB-APPLICATION))
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Cancel
                  </Button>
                  <Button onClick={handleConfirm} color="primary" autoFocus>
                    Launch
                  </Button>
                </DialogActions>
              </Dialog>
              <Button variant="contained" size="small" endIcon={<GitHubIcon />}>
                <a
                  href="https://github.com/Kasim-Tech/Dashbord-NextJS"
                  target="_blank"
                >
                  View GitHub
                </a>
              </Button>
            </Stack>
          </div>
        </div>
      </div>
      <div className="mt-8"></div> {/* Add space after the second project */}
      {/* Third project */}
      <div className="flex flex-col md:flex-row justify-center items-center w-full px-4 md:px-24 mt-6 gap-8">
      <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/3">
  <Image
    src={SmartTech}
    alt="SmartTech"
    className="border border-white border-4 rounded-lg h-auto md:h-64 w-full transition duration-300 ease-in-out transform hover:scale-105"
  />
</div>

        <div className="w-full md:w-1/2 flex justify-center items-center md:items-start">
          <div className="flex flex-col justify-center items-start w-full md:w-3/4 ">
            <h1 className="text-white text-2xl md:text-3xl">Smart-Tech</h1>
            <p className="text-white text-sm md:text-base mt-2">
              An online shop with animation
            </p>
            <div className="flex gap-2 md:gap-4 mt-2">
              <Image
                src={HtmlLogo}
                alt="HtmlLogo"
                className="h-6 md:h-8 w-auto transition duration-300 ease-in-out transform hover:scale-105"
              />
              <Image
                src={CssLogo}
                alt="CssLogo"
                className="h-6 md:h-7 w-auto transition duration-300 ease-in-out transform hover:scale-105 mt-1"
              />
            </div>
            <Stack direction="row" spacing={2} mt={2}>
              <Button variant="contained" size="small" endIcon={<LaunchIcon />}>
                <a href="https://smart-tech00.netlify.app" target="_blank">
                  Launch Project
                </a>
              </Button>
              <Button variant="contained" size="small" endIcon={<GitHubIcon />}>
                <a
                  href="https://github.com/Kasim-Tech/SmartTech"
                  target="_blank"
                >
                  View GitHub
                </a>
              </Button>
            </Stack>
          </div>
        </div>
      </div>
      <div className="mt-8"></div> {/* Add space after the first project */}

      {/* Fourth project */}
      <div className="flex flex-col md:flex-row justify-center items-center w-full px-4 md:px-24 mt-6 gap-8">
      <div className="w-full md:w-1/3">
  <Image
    src={MegaMall}
    alt="MegaMall"
    className="border border-white border-4 rounded-lg h-auto md:h-64 w-full transition duration-300 ease-in-out transform hover:scale-105"
  />
</div>

        <div className="w-full md:w-1/2 flex justify-center items-center md:items-start">
          <div className="flex flex-col justify-center items-start w-full md:w-3/4 ">
            <h1 className="text-white text-2xl md:text-3xl">Mega Mall</h1>
            <p className="text-white text-sm md:text-base mt-2">
              A basic e-commerce homepage
            </p>
            <div className="flex gap-2 md:gap-4 mt-2">
              <Image
                src={HtmlLogo}
                alt="HtmlLogo"
                className="h-6 md:h-8 w-auto transition duration-300 ease-in-out transform hover:scale-105"
              />
              <Image
                src={CssLogo}
                alt="CssLogo"
                className="h-6 md:h-7 w-auto transition duration-300 ease-in-out transform hover:scale-105 mt-1"
              />
            </div>
            <Stack direction="row" spacing={2} mt={2}>
              <Button variant="contained" size="small" endIcon={<LaunchIcon />}>
                <a href="https://megamallboom.netlify.app" target="_blank">
                  Launch Project
                </a>
              </Button>
              <Button variant="contained" size="small" endIcon={<GitHubIcon />}>
                <a
                  href="https://github.com/Kasim-Tech/Mega-Mall"
                  target="_blank"
                >
                  View GitHub
                </a>
              </Button>
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
