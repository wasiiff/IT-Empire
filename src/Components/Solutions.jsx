import React from "react";
import { IoMdOpen } from "react-icons/io";
import { SiHiveBlockchain } from "react-icons/si";
import { TiWorld } from "react-icons/ti";
import { FaMobileAlt } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { TbMovie } from "react-icons/tb";
import { HiServerStack } from "react-icons/hi2";
import { FaAmazon } from "react-icons/fa";

const solutionData = [
  {
    id: 1,
    title: "Blockchain Development",
    icon: SiHiveBlockchain,
    btn: "Blockchain Development",
    btnIcon: IoMdOpen,
    gradient: "from-[#00aeff] to-[#3369e7]",
    hoverGradient: " hover:from-[#3369e7] hover:to-[#00aeff]",
    iconColor: "text-[#3369e7]",
  },
  {
    id: 2,
    title: "Web Solutions",
    icon: TiWorld,
    btn: "Web Solutions",
    btnIcon: IoMdOpen,
    gradient: "from-[#6cd86c] to-[#15b915]",
    hoverGradient: "hover:from-[#15b915] hover:to-[#6cd86c]",
    iconColor: "text-[#5cb85c]",
  },
  {
    id: 3,
    title: "Android/iOS",
    icon: FaMobileAlt,
    btn: "Android/iOS",
    btnIcon: IoMdOpen,
    gradient: "from-[#a84dd2] to-[#66128c]",
    hoverGradient: "hover:from-[#66128c] hover:to-[#a84dd2]",
    iconColor: "text-[#a84dd2]",
  },
  {
    id: 4,
    title: "Desktop Solutions",
    icon: FaDesktop,
    btn: "Desktop Solutions",
    btnIcon: IoMdOpen,
    gradient: "from-[#00aeff] to-[#3369e7]",
    hoverGradient: " hover:from-[#3369e7] hover:to-[#00aeff]",
    iconColor: "text-[#3369e7]",
  },
  {
    id: 5,
    title: "SEO Solutions",
    icon: FaSearch,
    btn: "SEO Solutions",
    btnIcon: IoMdOpen,
    gradient: "from-[#6cd86c] to-[#15b915]",
    hoverGradient: "hover:from-[#15b915] hover:to-[#6cd86c]",
    iconColor: "text-[#5cb85c]",
  },
  {
    id: 6,
    title: "Media Solutions",
    icon: TbMovie,
    btn: "Media Solutions",
    btnIcon: IoMdOpen,
    gradient: "from-[#a84dd2] to-[#66128c]",
    hoverGradient: "hover:from-[#66128c] hover:to-[#a84dd2]",
    iconColor: "text-[#a84dd2]",
  },
  {
    id: 7,
    title: "Domian/Hosting",
    icon: HiServerStack,
    btn: "Domian/Hosting",
    btnIcon: IoMdOpen,
    gradient: "from-[#00aeff] to-[#3369e7]",
    hoverGradient: " hover:from-[#3369e7] hover:to-[#00aeff]",
    iconColor: "text-[#3369e7]",
  },
  {
    id: 8,
    title: "Amazon Services",
    icon: FaAmazon,
    btn: "Amazon Services",
    btnIcon: IoMdOpen,
    gradient: "from-[#443970] to-[#20183f]",
    hoverGradient: "hover:from-[#20183f] hover:to-[#443970]",
    iconColor: "text-[#20183f]",
  },
];

function Solutions() {
  return (
    <div className="w-full h-auto flex flex-col items-center bg-slate-50/50 py-10">
      <p className="text-center text-4xl text-[#3e396b] font-semibold font-nunito mt-5">
        Our Solutions
      </p>
      <h1 className="w-20 h-0.5 bg-[#da0266] mt-2"></h1>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-24 md:px-20">
        {solutionData.map((data) => {
          const Icon = data.icon;
          const BtnIcon = data.btnIcon;

          return (
            <div
              key={data.id}
              className="flex flex-col space-y-10 p-36 md:p-14 pt-14 pb-11 justify-center rounded-lg items-center shadow-lg bg-white "
            >
              <p className="text-2xl text-nowrap text-[#3e396b] font-semibold">
                {data.title}
              </p>

              <Icon
                className={`text-[80px] drop-shadow-[0_7px_10px_rgba(0,0,0,0.5)] ${data.iconColor}`}
              />

              <button
                className={`flex items-center gap-x-2 text-white font-bold text-sm text-nowrap px-11 md:px-10 pt-4 pb-[17px] rounded-4xl uppercase 
                bg-gradient-to-r ${data.gradient} ${data.hoverGradient} 
                transition-all duration-300 drop-shadow-lg cursor-pointer `}
              >
                {BtnIcon && <BtnIcon />} {data.btn}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Solutions;
