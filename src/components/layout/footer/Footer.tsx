import React from "react";
import apple from "../../../../public/assets/apple-store.png";
import google from "../../../../public/assets/google-play.png";

export const Footer: React.FC = () => {
  return (
    <div className="grid grid-cols-4 pt-8 px-4 w-full h-[300px] bg-white">
      <div className="flex flex-col gap-2">
        <span className="font-bold text-text text-xl">Contact Us</span>
        <span className="mt-4 text-text">Drou Demo Store</span>
        <span className="text-text">Buenos Aires, Argentina</span>
        <span className="text-text">+011-215654</span>
        <span className="text-text">demo@contact.com</span>
      </div>

      <div className="flex flex-col gap-4">
        <span className="font-bold text-text text-xl">Information</span>
        <span className="mt-4 text-text">Product Support</span>
        <span className="text-text">Checkout</span>
        <span className="text-text">License Policy</span>
        <span className="text-text">Affiliate</span>
      </div>

      <div className="flex flex-col gap-4">
        <span className="font-bold text-text text-xl">Customer Service</span>
        <span className=" mt-4 text-text">Help Center</span>
        <span className="text-text">Contact Us</span>
        <span className="text-text">Policies & Rules</span>
      </div>

      <div className="flex flex-col gap-4">
        <span className="font-bold text-text text-xl">Download Our App</span>
        <span className="mt-4 text-text">
          Download our App and get extra 15% Discount
        </span>

        <div className="flex flex-col">
          <img className="w-[150px] " src={apple} alt="" />
          <img className="w-[150px]" src={google} alt="" />
        </div>
      </div>
    </div>
  );
};
