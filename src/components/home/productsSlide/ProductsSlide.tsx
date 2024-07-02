import React from "react";
import { TrendingCategories } from "../../../interfaces/types";

interface Props {
  array: TrendingCategories[];
  title: string;
}

const ProductsSlide: React.FC<Props> = ({ array, title }) => {
  return (
    <div className="flex flex-col bg-white h-[300px] p-6">
      <span className="text-2xl text-text font-medium">{title}</span>
      <div className="flex flex-row w-full mt-6 justify-around">
        {array.length === 0 ? (
          <p>No elements</p>
        ) : (
          array.map((element) => (
            <div key={element.id} className="flex flex-col items-center">
              <img className="w-[120px]" src={element.image} alt="" />
              <span>{element.title}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductsSlide;
