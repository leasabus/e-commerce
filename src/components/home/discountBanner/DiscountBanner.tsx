import React from "react";
import { DiscountBannerTimer } from "./DiscountBannerTimer";
import apple from "../../../../public/assets/apple.jpg";
import { ButtonLarge } from "../../buttons/ButtonLarge";
import useMediaQuery from "../../../hooks/useMediaQuery";

export const DiscountBanner = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <div className="flex flex-col  md:grid md:grid-cols-2 mt-[250px] md:mt-0 w-full h-[350px] md:h-[550px] bg-white gap-10">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl mt-12 md:text-4xl font-medium text-text">
          Up To 25% Discount
        </h2>
        <h2 className="text-2xl md:text-4xl font-medium text-text">
          Check it Out
        </h2>
        <div className="grid grid-cols-4 gap-4 mt-4">
          <DiscountBannerTimer number={0} text="DAYS" />
          <DiscountBannerTimer number={0} text="HRS" />
          <DiscountBannerTimer number={0} text="MINS" />
          <DiscountBannerTimer number={0} text="SECS" />
        </div>
        <div className="mt-6">
          {isMobile ? (
            <button className="bg-orange p-2 rounded-xl text-white mt-2">
              Shop Now
            </button>
          ) : (
            <ButtonLarge text="Shop Now" />
          )}
        </div>
      </div>
      <div className="flex items-center w-full h-[350px] md:h-[500px]">
        <img
          className="hidden md:flex w-full h-full object-contain md:object-cover"
          src={apple}
          alt=""
        />
      </div>
    </div>
  );
};
