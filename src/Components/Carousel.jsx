import { useState, useEffect } from "react";
import Office from "../assets/Office.jpg";
import Real from "../assets/Real.jpg";
import School from "../assets/School.jpg";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      src: Office,
      title: "Welcome to IT Empire",
      description: "We Design Your Dreams",
      btntext: "About Us",
      btn: true,
    },
    {
      src: Real,
      title: "Real Estate Manager (REM)",
      description:
        "Mobile Application developed for Property Dealers & Real Estate Advisors",
      btntext: "Visit Website",
      btn: true,
    },
    {
      src: School,
      title: "School Management System",
      description: "A perfect Solution for any school",
      btn: false,
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div
      className="relative w-full h-screen overflow-hidden hidden md:block"
      aria-roledescription="carousel"
      aria-label="Image carousel"
    >
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            aria-hidden={index !== currentIndex}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.src})`,
              }}
            />

            <div className="absolute inset-0 bg-opacity-40 flex items-center justify-start ml-20 z-20">
              <div className="text-left text-white max-w-2xl px-4">
                <h2 className="text-4xl md:text-6xl font-bold mb-4">
                  {slide.title}
                </h2>
                <p className="text-xl md:text-2xl mb-8">{slide.description}</p>
                {slide.btn && (
                  <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-4xl text-lg font-bold transition-colors">
                    {slide.btntext}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 hover:bg-white/20 bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full z-30"
        aria-label="Previous slide"
      >
        <IoIosArrowBack />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 hover:bg-white/20 bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full z-30"
        aria-label="Next slide"
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default Carousel;
