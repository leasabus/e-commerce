import React from "react";
import { TrendingCategories } from "../../../interfaces/types";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { CarruselMobile } from "./carrusel/CarruselMobile";
import { trendingCategories } from "../../../data/trendingCategories";
import { Link } from "react-router-dom";

interface Props {
  array: TrendingCategories[];
  title: string;
}

const ProductsSlide: React.FC<Props> = ({ array, title }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <div className="flex flex-col bg-white h-[300px] p-6">
      <span className="text-2xl md:text-3xl text-text font-medium">
        {title}
      </span>
      {isMobile ? (
        <CarruselMobile productHasPrice={false} array={trendingCategories} />
      ) : (
        <div className="flex flex-row w-full mt-6 justify-around">
          {array.length === 0 ? (
            <p>No elements</p>
          ) : (
            array.map((element) => (
              <Link key={element.id} to={`/category/${element.id}`}>
                <div className="flex flex-col items-center">
                  <img className="w-[120px]" src={element.image} alt="" />
                  <span>{element.title}</span>
                </div>
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default ProductsSlide;
