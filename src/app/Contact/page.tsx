import React from "react";
import Particles from "../Components/Particals";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Github from "/public/Skills_Logo/github.png";
import Image from "next/image";

const Contact = () => {
  return (
    <div className=" bg-black min-h-screen flex flex-col  items-center  ">
      <div className="absolute inset-0 z-10 ">
        <Particles />
      </div>
      <div className="items-center text-white font-bold text-3xl   mt-12">
        Get in Touch
      </div>
      <div className="flex justify-between items-center w-full px-24 mt-6">
        <div className="left w-2/3">
          <div>
            <form action="https://api.web3forms.com/submit" method="POST">
              <input
                type="hidden"
                name="access_key"
                value="1ef92b4f-0efd-4819-90e6-6174034de7ed"
              />

              <div className="rounded-lg">
                <label htmlFor="name" className="mt-4 block text-white">
                  Your Name:
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Jhon"
                  required
                  className="border-gray-500 border-2 rounded-lg p-2 text-white bg-black font-bold w-2/3 mt-1 focus:border-gray-500 relative"
                />
              </div>
              <div className="rounded-lg">
                <label htmlFor="email" className="mt-4 block text-white">
                  Your Email:
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="JhonDoe@gmail.com"
                  required
                  className="border-gray-500 border-2 rounded-lg p-2 text-white bg-black font-bold w-2/3 mt-1 focus:border-gray-500 relative"
                />
              </div>
              <div className="rounded-lg">
                <label htmlFor="phone" className="mt-4 block text-white">
                  Your Phone:
                </label>
                <input
                  type="text"
                  name="phone"
                  id="email"
                  placeholder="+9112345678 (optional)"
                  required
                  className="border-gray-500 border-2 rounded-lg p-2 text-white bg-black font-bold w-2/3 mt-1 focus:border-gray-500 relative"
                />
              </div>
              <div className="rounded-lg">
                <label htmlFor="subject" className="mt-4 block text-white">
                  Subject
                </label>
                <textarea
                  name="message"
                  id="subject"
                  placeholder="I want to talk to you"
                  required
                  className="border-gray-500 border-2 rounded-lg p-2 text-white bg-black font-bold w-2/3 mt-1 focus:border-gray-500 relative " // Adjust the height here
                ></textarea>
              </div>
              <div className="bnt mt-5 ">
                <Button
                  variant="contained"
                  endIcon={<SendIcon />}
                  className="w-2/3"
                  type="submit"
                >
                  Send
                </Button>
              </div>
            </form>
          </div>
        </div>

        <div className="right">
          <div>
            <h1 className="text-white font-bold text-3xl ">
              "Feel Free to Reach Out."
            </h1>
            <h1 className="text-white font-bold text-2xl mt-5">
              I will try to connect as soon as possible...
            </h1>
            <h1 className="text-white mt-5 font-semibold">Other Place</h1>
            <div className="flex items-center mt-1">
              <a
                href="https://github.com/Kasim-Tech"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-white"
              >
                <Image
                  src={Github}
                  alt="Github"
                  className="h-12 w-auto transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
                />
                <h1 className="ml-2 inline-block cursor-pointer">Github</h1>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
