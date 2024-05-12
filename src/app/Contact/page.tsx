"use client";

import React, { useState } from "react";
import Particles from "../Components/Particals";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Github from "/public/Skills_Logo/github.png";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import shade from "/public/ME/shade.png";
import Email from "/public/ME/email.png";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1ef92b4f-0efd-4819-90e6-6174034de7ed");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      toast.success("Submitted Successfully i will Response you Soon", {
        position: "bottom-right",
      });
      event.target.reset();
    } else {
      setResult(data.message);
      toast.error(data.message, {
        position: "bottom-right",
      });
    }
  };

  return (
    <div className=" bg-black min-h-screen flex flex-col  items-center  ">
      <div className="absolute inset-0 z-10 ">
        <Particles />
      </div>
      <ToastContainer />
      <div className="items-center text-white font-bold text-3xl   mt-24">
        Get in Touch
        <Image src={shade} alt="shade" className="h-4 w-full " />
      </div>
      <div className="flex justify-between items-center w-full px-24 mt-6">
        <div className="left w-2/3">
          <div>
            <form onSubmit={onSubmit} className="">
              <div className="w-100">
                {" "}
                <div className="rounded-lg">
                  <label htmlFor="name" className="mt-4 block text-white">
                    Your Name*:
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Jhon"
                    required
                    className="border-gray-500 border-2 rounded-lg p-2 text-white bg-black font-bold lg:w-1/2 md:w-3/3 mt-1 focus:border-gray-500 relative" // Changed width class to w-full
                  />
                </div>
                <div className="rounded-lg">
                  <label htmlFor="email" className="mt-4 block text-white">
                    Your Email*:
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="JhonDoe@gmail.com"
                    required
                    className="border-gray-500 border-2 rounded-lg p-2 text-white bg-black font-bold lg:w-1/2 md:w-3/3 mt-1 focus:border-gray-500 relative" // Changed width class to w-full
                  />
                </div>
                <div className="rounded-lg">
                  <label htmlFor="phone" className="mt-4 block text-white">
                    Your Phone:
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="+9112345678 (optional)"
                    className="border-gray-500 border-2 rounded-lg p-2 text-white bg-black font-bold lg:w-1/2 md:w-3/3 mt-1 focus:border-gray-500 relative" // Changed width class to w-full
                  />
                </div>
                <div className="rounded-lg">
                  <label htmlFor="phone" className="mt-4 block text-white">
                  Message*:
                  </label>
                  <input
                    type="text"
                    name="message"
                    id="phone"
                    placeholder="I want to talk to you"
                    required
                    className="border-gray-500 border-2 rounded-lg p-2 text-white bg-black font-bold lg:w-1/2 md:w-3/3 mt-1 focus:border-gray-500 relative" // Changed width class to w-full
                  />
                </div>
                {/* <div className="rounded-lg">
                  <label htmlFor="message" className="mt-4 block text-white">
                    Message*:
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="I want to talk to you"
                    required
                    className="border-gray-500 border-2 rounded-lg p-2 text-white bg-black font-bold  lg:w-1/2 md:w-4/4 mt-1 focus:border-gray-500 relative" // Adjusted width classes to increase the width
                  ></textarea>
                </div> */}
              </div>

              <div className="bnt mt-5 lg:w-1/2 md:w-3/3">
                <Button
                  variant="contained"
                  endIcon={<SendIcon />}
                  className="w-full"
                  type="submit"
                >
                  Send
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Right side content */}
        <div className="right md:text-white md:font-bold md:text-3xl md:MAINHEDDING">
          <div className="hidden md:block">"Feel Free to Reach Out."</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
