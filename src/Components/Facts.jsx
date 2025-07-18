import React from "react";
import bgImage from "../assets/Facts Bg.webp";
import { BiHappy, BiTargetLock } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import { FaChess } from "react-icons/fa";

const factsData = [
  {
    icon: BiHappy,
    num: "1100",
    description: "Happy Clients",
    gradient: "from-[#271d60] to-[#da0266]",
    iconColor: "text-[#271d60]",
  },
  {
    icon: BiTargetLock,
    num: "1100+",
    description: "Projects Developed",
    gradient: "from-[#00d2ff] to-[#3a7bd5]",
    iconColor: "text-[#3a7bd5]",
  },
  {
    icon: CiSettings,
    num: "20",
    description: "Ready to use",
    gradient: "from-[#16a085] to-[#f4d03f]",
    iconColor: "text-[#16a085]",
  },
  {
    icon: FaChess,
    num: "40",
    description: "Employees",
    gradient: "from-[#ff512f] to-[#dd2476]",
    iconColor: "text-[#ff512f]",
  },
];

function Facts() {
  return (
    <div
      className="w-full h-screen md:h-96 bg-center bg-fixed bg-cover bg-no-repeat -mt-2"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${bgImage})`,
      }}
    >
      <div className="font-nunito flex flex-col items-center justify-center pt-20 ">
        <h1 className="text-3xl font-bold text-[#3e396b]">Facts About Us</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-x-64 gap-y-16 md:gap-x-10 mt-14 px-24 md:px-40">
          {factsData.map((fact, index) => {
            return (
              <div
                key={index}
                className=" flex flex-col justify-center items-center text-2xl  md:text-4xl md:gap-y-3 font-bold text-nowrap"
              >
                {fact.icon && (
                  <fact.icon
                    className={`text-5xl md:text-[64px] font-normal ${fact.iconColor} `}
                  />
                )}
                <p
                  className={`text-transparent bg-clip-text bg-gradient-to-b ${fact.gradient}`}
                >
                  {fact.num}
                </p>
                <span className="text-[#3e396b] text-[16px] md:text-xl ">
                  {fact.description}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Facts;
