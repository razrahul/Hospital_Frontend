import React, { useState } from "react";
import { useWindowSize } from "react-use"; // A hook to track window size (optional but useful for responsiveness)

const SpecialitiesSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { width } = useWindowSize(); // Get the window width

  const specialties = [
    { title: "Orthopaedics", href: "/orthopaedics", logo: "/path/to/logo1.svg" },
    { title: "Surgery", href: "/surgery", logo: "/path/to/logo2.svg" },
    { title: "Cardiology", href: "/cardiology", logo: "/path/to/logo3.svg" },
    { title: "Neurology", href: "/neurology", logo: "/path/to/logo4.svg" },
    { title: "Pediatrics", href: "/pediatrics", logo: "/path/to/logo5.svg" },
  ];

  const itemsToShow = width < 600 ? 1 : width < 1024 ? 3 : 5;

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % specialties.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + specialties.length) % specialties.length);
  };

  return (
    <div className="relative">
      {/* Carousel container */}
      <div className="flex justify-center items-center space-x-4 overflow-hidden">
        {specialties.slice(activeIndex, activeIndex + itemsToShow).map((specialty, index) => (
          <div
            key={index}
            className={`w-[calc(20%)] relative flex items-center justify-center bg-blue-500 rounded-lg p-4 transition-all duration-300 ${
              activeIndex === index
                ? "bg-blue-700 text-white"
                : "bg-transparent text-black"
            }`}
          >
            <a href={specialty.href} className="relative w-full h-full flex flex-col items-center justify-center text-center">
              <img src={specialty.logo} alt={specialty.title} className="w-12 h-12 mb-2" />
              <div className="text-sm">{specialty.title}</div>
            </a>
          </div>
        ))}
      </div>

      {/* Carousel controls */}
      <button
        onClick={prevSlide}
        className="absolute top-0 left-0 z-30 px-4 py-2 text-white bg-black/30 hover:bg-black/50 rounded-full focus:outline-none"
      >
        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-0 right-0 z-30 px-4 py-2 text-white bg-black/30 hover:bg-black/50 rounded-full focus:outline-none"
      >
        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default SpecialitiesSlider;
