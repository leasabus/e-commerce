import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TrendingCategories } from "../../../../../interfaces/types";

interface Props {
  array: TrendingCategories[];
}

export const CarruselDesktop: React.FC<Props> = ({ array }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Slider {...settings}>
      {array.map((element) => (
        <div
          key={element.id}
          className="flex items-center p-8  justify-center text-center bg-white h-[400px] w-[300px] "
        >
          <img className="mt-10" src={element.image} alt="" />
          <div className="flex flex-col items-center">
            <span className="text-lg text-text font-medium">
              {element.title}
            </span>
            <div className="flex flex-row gap-3 items-center">
              <span className="font-bold text-orange ">$55.00</span>
              <span className="line-through text-text">$70.00</span>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};
