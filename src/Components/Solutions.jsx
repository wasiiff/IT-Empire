import React from "react";
import { IoMdOpen } from "react-icons/io";
import { SiHiveBlockchain } from "react-icons/si";

const solutionData = [
  {
    id: 1,
    title: "Blockchain Development",
    icon: SiHiveBlockchain,
    btn: "Blockchain Development",
    btnIcon: IoMdOpen,
    gradient: "bg-gradient-to-r from-[#3369e7] to-[#00aeff]",
    iconColor: "#5cb85c",
  },
  {
    id: 2,
    title: "Web Solutions",
    icon: SiHiveBlockchain,
    btn: "Web Solutions",
    btnIcon: IoMdOpen,
    gradient: "bg-gradient-to-r from-[#3369e7] to-[#00aeff]",
    iconColor: "#5cb85c",
  },
  {
    id: 3,
    title: "Android/iOS",
    icon: SiHiveBlockchain,
    btn: "Android/iOS",
    btnIcon: IoMdOpen,
    gradient: "bg-gradient-to-r from-[#3369e7] to-[#00aeff]",
    iconColor: "#5cb85c",
  },
  {
    id: 4,
    title: "Desktop Solutions",
    icon: SiHiveBlockchain,
    btn: "Desktop Solutions",
    btnIcon: IoMdOpen,
    gradient: "bg-gradient-to-r from-[#3369e7] to-[#00aeff]",
    iconColor: "#5cb85c",
  },
  {
    id: 5,
    title: "SEO Solutions",
    icon: SiHiveBlockchain,
    btn: "SEO Solutions",
    btnIcon: IoMdOpen,
    gradient: "bg-gradient-to-r from-[#3369e7] to-[#00aeff]",
    iconColor: "#5cb85c",
  },

  {
    id: 6,
    title: "Media Solutions",
    icon: SiHiveBlockchain,
    btn: "Media Solutions",
    btnIcon: IoMdOpen,
    gradient: "bg-gradient-to-r from-[#3369e7] to-[#00aeff]",
    iconColor: "#5cb85c",
  },
  {
    id: 7,
    title: "Domian/Hosting",
    icon: SiHiveBlockchain,
    btn: "Domian/Hosting",
    btnIcon: IoMdOpen,
    gradient: "bg-gradient-to-r from-[#3369e7] to-[#00aeff]",
    iconColor: "#5cb85c",
  },
  {
    id: 8,
    title: "Amazon Services",
    icon: SiHiveBlockchain,
    btn: "Amazon Services",
    btnIcon: IoMdOpen,
    gradient: "bg-gradient-to-r from-[#3369e7] to-[#00aeff]",
    iconColor: "#5cb85c",
  },
];

function Solutions() {
  return (
    <div className="w-full h-auto flex flex-col items-center">
      <p className="text-center text-4xl text-[#3e396b] font-semibold font-nunito mt-5">
        Our Solutions
      </p>
      <h1 className="w-20 h-0.5 bg-[#da0266] mt-2"></h1>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 m-10 space-x-10 space-y-10">
        {solutionData.map((data) => (
          <div
            key={data.id}
            className="flex flex-col space-y-10 p-14 justify-center rounded-lg items-center shadow-lg"
          >
            <p className="text-2xl text-[#3e396b] font-medium">{data.title}</p>
            <div className={`text-[80px] drop-shadow-2xl`}>
              {data.icon && (
                <data.icon className={`text-[${data.iconColor}]`} />
              )}
            </div>
            <button
              className={`flex justify-center space-x-4 items-center text-white px-6 py-3 rounded-4xl text-md font-bold ${data.gradient}`}
            >
              {data.btnIcon && <data.btnIcon />} {data.btn}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Solutions;
