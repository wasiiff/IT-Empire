import React, { useEffect, useState, useCallback } from "react";
import softwareBg from "../assets/Office.jpg";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

function UseSoftware() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      content: `As the owner of Pharmaceutical manufacturing company I was in need to Digitalize my entire business, my manufacturing, distribution, Accounting even my marketing; and I got all of it at IT Empire , so I can say it as "Technology mart" as I got my website portfolio, my entire online ERP solutions, E-commerce system, and SEO under single roof. So, go for it if you are searching for Real Technology.`,
      author: "NASEEM SHEYRYAR KHAN (DIRECTOR)",
      identity: "(ALEEM PHARMA PVT. LTD.) ",
    },
    {
      content: `I was amazed and relaxed working with IT Empire. At first I asked them "can you really design my dreams" and at the launching of my web site and Android App I got the answer "yes" they can.`,
      author: "DAN MARTHER ",
      identity: "((EASTERN BLING).)",
    },
    {
      content: `I was searching for an IT company who can create something different for my business portfolio and yes i was lucky to discover the creativity of IT Empire.`,
      author: "USMAN WARIS (DIRECTOR)",
      identity: " (ARCHITEC-CHAINS.)",
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  }, [slides.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="w-full h-max flex flex-col items-center bg-slate-50/50 py-2">
      <p className="text-center text-4xl text-blue-950 font-bold font-nunito mt-24">
        Ready To Install / Use Softwares
      </p>
      <h1 className="w-20 h-0.5 bg-[#da0266] mt-4"></h1>
      <p className="text-sm text-blue-950 font-bold font-nunito mt-4">
        Available on Per Month/Per Year Basis.
      </p>
      <div
        className="bg-center bg-cover h-screen w-full bg-fixed flex flex-col items-center mt-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${softwareBg})`,
        }}
      >
        <p className="text-4xl font-nunito text-white font-semibold py-7">
          What Clients Are Saying
        </p>
        <div className="w-11/12 mx-auto bg-black/80 h-4/5 md:h-3/4 relative rounded-lg">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out flex items-center justify-center ${
                index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
              aria-hidden={index !== currentIndex}
            >
              <div className="text-white max-w-4xl px-12 py-12 text-left">
                <p className="text-lg md:text-2xl mb-8 font-serif italic">
                  "{slide.content}"
                </p>
                <p className="text-md font-semibold text-left">
                  {slide.author}
                </p>
                <span className="text-sm text-gray-600 text-left">
                  {slide.identity}
                </span>
              </div>
            </div>
          ))}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full z-30"
            aria-label="Previous slide"
          >
            <IoIosArrowBack className="text-gray-700 text-2xl hover:text-white" />
          </button>
          <button
            onClick={nextSlide}
            className=" absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full z-30"
            aria-label="Next slide"
          >
            <IoIosArrowForward className="text-gray-700 text-2xl hover:text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default UseSoftware;
