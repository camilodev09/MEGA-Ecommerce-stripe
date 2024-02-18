import React, { useState } from "react";
import Slider from "react-slick";

import { bannerEco, bannerEco2, bannerEco3 } from "../assets";


function SampleNextArrow(props) {
  const { onClick } = props;
  return <div className="absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer bg-gray-500 " onClick={onClick}></div>;
}

function SamplePrevArrow(props) {
  const { onClick } = props;

  return <div className="absolute top-1/2 transform -translate-y-1/2 left-4 cursor-pointer bg-gray-500 " onClick={onClick}></div>;
}

const BannerC = () => {
  const [dotActive, setDocActive] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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
          slidesToShow: 1,
          slidesToScroll: 1,

          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
    <div className="w-full h-full ">
    
      <Slider {...settings}   >
        <div >
          <img
            className="w-full object-cover"
            src={bannerEco}
            alt="imgSlid"
          />
        </div>
        <div>
          <img
            className="w-full  object-cover"
            src={bannerEco2}
            alt="imgSlider2"
          />
        </div>
        <div>
          <img
            className="w-full object-cover"
            src={bannerEco3}
            alt="imgSlider3"
          />
        </div>
       
     
      </Slider>
    </div>
  );
};

export default BannerC;
