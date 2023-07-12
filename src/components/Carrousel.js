import React, { useState } from "react";
import Slider from "react-slick";
import {
  imgSlid,
  imgSlider2,
  imgSlider3,
  imgSlider4,
  imgSlider5,
} from "../assets";

function SampleNextArrow(props) {
  const { onClick } = props;
  return <div onClick={onClick}></div>;
}

function SamplePrevArrow(props) {
  const { onClick } = props;

  return <div onClick={onClick}></div>;
}

const Carrousel = () => {
  const [dotActive, setDocActive] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,

          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    beforeChange: (prev, next) => {
      setDocActive(next);
    },

    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "12px",
                height: "12px",
                color: "blue",
                background: "#ff014f",
                borderRadius: "50%",
                cursor: "pointer",
              }
            : {
                width: "12px",
                height: "12px",
                color: "blue",
                background: "gray",
                borderRadius: "50%",
                cursor: "pointer",
              }
        }
      ></div>
    ),
  };

  return (
    <div className="w-full h-full  bg-[#030712] pb-20">
       <div className="justify-center items-center  h-[200px] md:h-[300px] w-full bg-[#030712] flex">
         <h1 className="text-2xl md:text-4xl xl:text-6xl  text-white py-5  text-center rounded-sm  md:p-7 ">
          It´s time to buy. Let´s go to the store!
      </h1>
       </div>
      <Slider {...settings}>
        <div className=" button-10">
          <img
            className="rounded-lg object-cover"
            src={imgSlid}
            alt="imgSlid"
          />
        </div>
        <div>
          <img
            className=" rounded-lg object-cover"
            src={imgSlider2}
            alt="imgSlider2"
          />
        </div>
        <div>
          <img
            className="rounded-lg object-cover"
            src={imgSlider3}
            alt="imgSlider3"
          />
        </div>
        <div>
          <img
            className="rounded-lg object-cover"
            src={imgSlider4}
            alt="imgSlider4"
          />
        </div>
        <div>
          <img
            className="rounded-lg object-cover"
            src={imgSlider5}
            alt="imgSlider5"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carrousel;
