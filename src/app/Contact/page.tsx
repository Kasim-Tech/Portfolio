"use client";

import React, { useState } from "react";
import Particles from "../Components/Particals";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Github from "/public/Skills_Logo/github.png";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify"; // Import toast and ToastContainer
import "react-toastify/dist/ReactToastify.css"; //
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
            <form onSubmit={onSubmit}>
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
                  className="border-gray-500 border-2 rounded-lg p-2 text-white bg-black font-bold w-2/3 mt-1 focus:border-gray-500 relative"
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
                  className="border-gray-500 border-2 rounded-lg p-2 text-white bg-black font-bold w-2/3 mt-1 focus:border-gray-500 relative"
                />
              </div>
              <div className="rounded-lg">
                <label htmlFor="subject" className="mt-4 block text-white">
                  Subject:*
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
            {/* <div className="text-white text-2xl text-center mt-3">
              <div
                style={{
                  display: "inline-block",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  color: "black",
                  padding: "10px",
                  borderRadius: "10px",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)", 
                }}
              >
                <span>{result}</span>
              </div>
            </div> */}
          </div>
        </div>

        <div className="right">
          <div>
            <h1 className="text-white font-bold text-3xl MAINHEDDING">
              "Feel Free to Reach Out."
            </h1>
            <h2 className="text-white font-bold text-2xl mt-5">
              I will Try To Connect With You As Soon As Possible...
            </h2>
            <h1 className="text-white mt-5 font-semibold">Other Places</h1>
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
            <div className="flex items-center mt-1">
              <a
                href="mailto:kasim309309@gmail.com"
                className="flex items-center text-white"
              >
                <Image
                  src={Email}
                  alt="Email"
                  className="h-12 w-auto transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
                />
                <h1 className="ml-2 inline-block cursor-pointer text-white">
                  E-mail
                </h1>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
