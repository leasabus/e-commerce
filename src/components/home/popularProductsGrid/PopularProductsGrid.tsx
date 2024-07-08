import React from "react";
import { PopularProducts } from "../../../interfaces/types";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { CarruselMobile } from "../productsSlide/carrusel/CarruselMobile";

interface Props {
  array: PopularProducts[];
}

export const PopularProductsGrid: React.FC<Props> = ({ array }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="bg-white flex flex-col items-start justify-center w-full p-6">
      <span className="text-2xl md:text-3xl text-text font-medium">
        Popular Products
      </span>

      {isMobile ? (
        <div className="w-[350px] h-[450px]">
          <CarruselMobile array={array} productHasPrice={true} />
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-2 w-full mt-4 ">
          {array.map((item) => (
            <div
              className="h-[280px] flex flex-col items-center mt-6 cursor-pointer rounded-xl hover:shadow-xl hover:translate-y-[-0.5rem] transition transform duration-300"
              key={item.id}
            >
              <img
                className="w-[200px] h-[200px] rounded-xl"
                src={item.image}
                alt=""
              />
              <div className="flex flex-col items-center">
                <span className="text-text mt-4">{item.title}</span>
                <div className="flex flex-row items-center gap-2 mt-2">
                  <span className="font-bold text-orange">
                    {item.actualPrice}
                  </span>
                  <span className="line-through font-bold text-[12px] text-text">
                    {item?.oldPrice}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
