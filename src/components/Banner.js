import React, { useState } from "react";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import { bannerEco, bannerEco2, bannerEco3 } from "../assets";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  console.log(currentSlide);
  return (
    <div className="w-full h-auto overflow-x-hidden ">
      <div className="h-full w-screen relative">
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className="w-[400vw]  h-full flex transition-transform duration-1000"
        >
          <img
            className="w-screen h-full object-cover"
            src={bannerEco}
            alt="bannerEco"
            loading="priority"
          />
          <img
            className="w-screen h-full object-cover"
            src={bannerEco2}
            alt="bannerEco2"
          />
          <img
            className="w-screen h-full object-cover"
            src={bannerEco3}
            alt="bannerEco3"
          />
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-3 md:gap-8  bottom-1 md:bottom-50">
          <div
            onClick={prevSlide}
            className="w-5 md:w-14 h-5 md:h-12 rounded-sm sml:rounded-lgl border-[0.5px] md:border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowLeft />
          </div>
          <div
            onClick={nextSlide}
            className="w-5 md:w-14 h-5 md:h-12 rounded-sm  sml:rounded-lgl  border-[0.5px] md:border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
