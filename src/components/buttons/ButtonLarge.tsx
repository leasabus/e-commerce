import React from "react";
interface Props {
  text: string;
}

export const ButtonLarge: React.FC<Props> = ({ text }) => {
  return (
    <button className="bg-orange text-white p-2 rounded-full w-[150px] h-[50px] text-lg hover:bg-slate-200 hover:text-orange">
      {text}
    </button>
  );
};
