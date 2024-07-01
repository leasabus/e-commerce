import apple from "../../../../public/assets/apple.jpg";
import { ButtonLarge } from "../../buttons/ButtonLarge";
import "./Banner.css";

export const Banner = () => {
  return (
    <div className="h-[550px] bg-white p-6 flex flex-col items-center justify-center md:grid md:grid-cols-2 shadow-xl">
      <div className="flex flex-col  justify-center">
        <span className="text-1xl md:text-2xl text-orange">
          SALE UP TO 30% OFF
        </span>
        <h2 className="mt-4 md:t-8 text-4xl md:text-6xl text-text font-medium">
          Apple Watch Series
        </h2>
        <span className="mt-4 md:mt-8 text-text tracking-wide">
          Feature packed at a better value than ever Powerful sensors to
        </span>
        <span className="text-text tracking-wide">monitor your fitness</span>
        <div className="mt-4 md:mt-8 flex items-center justify-center md:justify-start ">
          <ButtonLarge text="Shop Now" />
        </div>
      </div>
      <div className="imageContainer mt-4">
        <img className="image" src={apple} alt="" />
      </div>
    </div>
  );
};
