import React from "react";
import Slider from "react-slick";
import "./Carrusel.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TrendingCategories } from "../../../../interfaces/types";

interface Props {
  array: TrendingCategories[];
}

export const CarruselMobile: React.FC<Props> = ({ array }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {array.map((element) => (
        <div
          key={element.id}
          className="flex items-center justify-center text-center bg-white h-[450px] w-[300px] "
        >
          <img className="w-full" src={element.image} alt="" />
          <span className="text-2xl font-medium">{element.title}</span>
        </div>
      ))}
    </Slider>
  );
};
