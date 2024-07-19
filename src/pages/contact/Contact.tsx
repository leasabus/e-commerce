import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall, IoTime } from "react-icons/io5";
import { FormContact } from "./FormContact";

export const Contact: React.FC = () => {
  return (
    <div className="flex flex-col items-start justify-start h-auto p-8 bg-white">
      <h1 className="text-2xl text-text font-medium">
        We're always eager to hear from you!
      </h1>
      <span className="text-[12px] text-text mt-2">
        You can call us in working time or visit our office. All mails will get
        the response within 24 hours. Love to hear from you!
      </span>

      <div className="flex flex-col items-center justify-center gap-10 md:grid md:grid-cols-3 md:gap-20 mt-10">
        <div className="flex  flex-row gap-4  items-start w-[350px] md:w-auto justify-start md:h-[100px]">
          <div className="flex flex-row items-center  gap-4">
            <FaLocationDot size={24} className="text-orange" />
          </div>
          <div className="flex flex-col items-start justify-center">
            <span className="text-text font-bold text-xl">Adress</span>
            <span className="text-[12px] mt-4">
              1800 Abbot Kinney Blvd. Unit D & E Venice
            </span>
          </div>
        </div>

        <div className="flex flex-row gap-4 items-start justify-start w-[350px] md:w-auto h-[100px]">
          <div className="flex flex-row items-center gap-4">
            <IoCall size={24} className="text-orange" />
          </div>
          <div className="flex flex-col items-start justify-center">
            <span className="text-text text-xl font-bold">Contact</span>
            <span className="text-[12px] mt-1 flex flex-row gap-1 text-text">
              Mobile: <p className="font-bold text-text">(+88) - 1990 - 6886</p>
            </span>
            <span className="text-[12px] mt-1 flex flex-row gap-1 text-text">
              Hotline: <p className="font-bold text-text">1800 - 1102</p>
            </span>
            <span className="text-[12px] mt-1 flex flex-row gap-1 text-text">
              Mail: <p className="font-bold text-text">contact@drou.com</p>
            </span>
          </div>
        </div>

        <div className="flex mr-4 flex-row gap-4 items-start justify-start ml-5 w-[350px] md:w-auto h-[100px]">
          <div className="flex flex-row items-center gap-4">
            <IoTime size={24} className="text-orange" />
          </div>
          <div className="flex flex-col items-start justify-center">
            <span className="text-text text-xl font-bold">
              Hour of operation
            </span>
            <span className="text-[12px] mt-4 text-text">
              Monday - Friday : 9:00 - 20:00
            </span>
            <span className="text-[12px]  mt-1 text-text">
              Sunday - Saturday : 10:30 - 22:00
            </span>
          </div>
        </div>
      </div>

      <FormContact />
    </div>
  );
};
