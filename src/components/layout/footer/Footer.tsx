import React from "react";
import apple from "../../../../public/assets/app-store.webp";
import google from "../../../../public/assets/google-play.webp";

export const Footer: React.FC = () => {
  return (
    <div className="grid grid-cols-4 pt-8 px-8 w-full h-[250px] bg-[#f8f8f8] ">
      <div className="flex flex-col gap-2">
        <span className="font-bold  text-text text-md">Contact Us</span>
        <span className="mt-4 text-text text-sm">Drou Demo Store</span>
        <span className="text-text text-sm">Buenos Aires, Argentina</span>
        <span className="text-text text-sm">+011-215654</span>
        <span className="text-text text-sm">demo@contact.com</span>
      </div>

      <div className="flex flex-col gap-2">
        <span className="font-bold text-text text-md">Information</span>
        <span className="mt-4 text-text text-sm">Product Support</span>
        <span className="text-text text-sm">Checkout</span>
        <span className="text-text text-sm">License Policy</span>
        <span className="text-text text-sm">Affiliate</span>
      </div>

      <div className="flex flex-col gap-2">
        <span className="font-bold text-text text-md">Information</span>
        <span className="mt-4 text-text text-sm">Product Support</span>
        <span className="text-text text-sm">Checkout</span>
        <span className="text-text text-sm">License Policy</span>
        <span className="text-text text-sm">Affiliate</span>
      </div>

      <div className="flex flex-col gap-4">
        <span className="font-bold text-text text-md">Download Our App</span>
        <span className="mt-4 text-text text-sm">
          Download our App and get extra 15% Discount
        </span>

        <div className="flex flex-row items-center gap-2 justify-start">
          <img className="w-[120px] shadow-md " src={apple} alt="" />
          <img className="w-[120px] shadow-md" src={google} alt="" />
        </div>
      </div>
    </div>
  );
};
