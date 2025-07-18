import React from "react";
import { SiHiveBlockchain } from "react-icons/si";
import { FaSearch } from "react-icons/fa";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { BsAndroid2 } from "react-icons/bs";
import { TbMessages } from "react-icons/tb";
import { PiShoppingCartFill } from "react-icons/pi";
import { TiSocialYoutube } from "react-icons/ti";
import { RiUserCommunityFill } from "react-icons/ri";
import { FaPaintBrush } from "react-icons/fa";
import BgImage from "../assets/Specialization.jpg";

function Specialization() {
  const specializedData = [
    {
      id: 1,
      title: "Online Systems",
      description: "A special blend of accounts, inventory, stock and sale.",
      icon: TbMessages,
      iconColor: "text-[#3e396b]",
    },
    {
      id: 2,
      title: "Mobile Apps",
      description:
        "5 years of experience in Mobile Apps development (Android/IOS)",
      icon: BsAndroid2,
      iconColor: "text-[#3e396b]",
    },
    {
      id: 3,
      title: "Online E-Commerce",
      description:
        "A special blend of More than 25 projects working successfuly.",
      icon: PiShoppingCartFill,
      iconColor: "text-[#3e396b]",
    },
    {
      id: 4,
      title: "Video Portal",
      description:
        "A special More than 10 web channels & video streaming sites with millions of users.",
      icon: TiSocialYoutube,
      iconColor: "text-[#3e396b]",
    },
    {
      id: 5,
      title: "Online Classified Sites",
      description:
        "Some of the most renowned classified sites are our creative products.",
      icon: RiUserCommunityFill,
      iconColor: "text-[#3e396b]",
    },
    {
      id: 6,
      title: "Social Network",
      description:
        "5 years of skillful experience in developing & troubleshooting of social network system.",
      icon: BsFillCameraVideoFill,
      iconColor: "text-[#3e396b]",
    },
    {
      id: 7,
      title: "SEO Solution",
      description:
        "Specialization in increasing the quantity and quality of traffic to your website through organic search engine results.",
      icon: FaSearch,
      iconColor: "text-[#3e396b]",
    },
    {
      id: 8,
      title: "3D Graphics/Modelling",
      description:
        "Specialization in 3D Graphics and 3D Modelling with latest tools.",
      icon: FaPaintBrush,
      iconColor: "text-[#3e396b]",
    },
    {
      id: 9,
      title: "lock Chain Development",
      description:
        "Our approach to blockchain technology consulting begins with what, why and the way blockchain can benefit your enterprise solution.",
      icon: SiHiveBlockchain,
      iconColor: "text-[#3e396b]",
    },
  ];
  const BgImg = {
    backgroundImage: `url(${BgImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  };

  return (
    <div>
      <div
        style={BgImg}
        className="w-full h-max flex flex-col items-center bg-slate-50/50 py-20"
      >
        <p className="text-center text-4xl text-white font-semibold font-nunito md:mt-24">
          We are Specialized in
        </p>
        <h1 className="w-20 h-0.5 bg-[#da0266] mt-2"></h1>

        <div className="w-full grid lg:grid-cols-3 grid-cols-1 gap-10 mt-24 px-3 md:px-16">
          {specializedData.map((data) => {
            const Icon = data.icon;

            return (
              <div
                key={data.id}
                className="flex flex-col space-y-2 p-6 pt-7 pb-12 justify-center rounded-md items-center shadow-lg shadow-white bg-white/90  "
              >
                <Icon
                  className={`text-[60px] drop-shadow-[0_7px_10px_rgba(0,0,0,0.5)] ${data.iconColor}`}
                />
                <p className="lg:text-2xl text-lg text-nowrap text-[#3e396b] font-semibold font-comic">
                  {data.title}
                </p>

                <p className=" text-[16px] text-[#3e396b] font-semibold  text-center">
                  {data.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Specialization;
