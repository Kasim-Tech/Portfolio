import React from "react";
import Particles from "../Components/Particals";
import Image from "next/image";
import Tooltip from "@mui/material/Tooltip";

import Reactjs from "/public/Skills_Logo/react.png";
import HtmlLogo from "/public/Skills_Logo/html.png";
import CodeIgniter from "/public/Skills_Logo/codeIgniter4.png";
import CssLogo from "/public/Skills_Logo/css.png";
import NextjsLogo from "/public/Skills_Logo/Next.png";
import PostmanLogo from "/public/Skills_Logo/postman.png";
import Mysql from "/public/Skills_Logo/mysql.png";
import Typescript from "/public/Skills_Logo/typescript.png";
import Github from "/public/Skills_Logo/github.png";
import Bootstrap from "/public/Skills_Logo/bootstrap.png";
import MUI from "/public/Skills_Logo/MUI.png";
import JS from "/public/Skills_Logo/javascript.png";
import PHP from "/public/Skills_Logo/php.png";

const Skills = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col justify-center items-center">
      <div className="absolute inset-0 z-10">
        <Particles />
      </div>
      <div className="relative z-20 flex flex-col justify-center items-center mt-[-50px]">
        <p className="text-white text-center text-3xl md:text-4xl mb-5">
          My Skills & Knowledge
        </p>
        <p className="text-white text-center mb-8 text-base md:text-lg lg:text-xl">
          My Daily Craft: Utilizing Technologies & Languages
        </p>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
          {[
            { image: HtmlLogo, name: "HTML", tooltip: "HTML" },
            { image: CssLogo, name: "CSS", tooltip: "CSS" },
            { image: JS, name: "JS", tooltip: "JavaScript" },
            { image: Reactjs, name: "React", tooltip: "React" },
            { image: NextjsLogo, name: "NextJs", tooltip: "NextJs" },
            { image: Mysql, name: "MySql", tooltip: "MySql", whiteBg: true },
            { image: PHP, name: "PHP", tooltip: "PHP" },
            { image: Typescript, name: "TypeScript", tooltip: "TypeScript" },
            { image: PostmanLogo, name: "Postman", tooltip: "Postman" },
            { image: Github, name: "GitHub", tooltip: "GitHub" },
            { image: Bootstrap, name: "Bootstrap", tooltip: "Bootstrap" },
            { image: MUI, name: "MUI", tooltip: "Material UI" },
            // { image: CodeIgniter, name: "CodeIgniter-4", tooltip: "CodeIgniter 4" },
          ].map((logo, index) => (
            <Tooltip key={index} title={logo.tooltip} placement="top" arrow>
              <div className="flex flex-col items-center cursor-pointer">
                <Image
                  src={logo.image}
                  alt={logo.name}
                  width={50}
                  height={50}
                  className={logo.whiteBg ? "bg-white rounded-lg p-0.5" : ""}
                />
                <span className="text-white mt-2">{logo.name}</span>
              </div>
            </Tooltip>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
