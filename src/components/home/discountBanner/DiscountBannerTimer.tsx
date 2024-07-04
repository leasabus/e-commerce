import React from "react";

interface Props {
  number: number;
  text: string;
}

export const DiscountBannerTimer: React.FC<Props> = ({ number, text }) => {
  return (
    <div className="w-[40px] md:w-[60px] h-[50px] md:h-[70px] shadow-xl flex flex-col items-center justify-center rounded-xl bg-slate-200">
      <span className="font-bold">{number}</span>
      <span className="text-[12px] text-text">{text}</span>
    </div>
  );
};
