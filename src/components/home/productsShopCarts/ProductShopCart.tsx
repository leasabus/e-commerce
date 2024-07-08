import "./ProductShopCart.css";

export const ProductShopCart = () => {
  return (
    <div className="flex flex-col mt-60 md:mt-0 md:flex-row items-center justify-center gap-10 w-full bg-white">
      <div
        id="card1"
        className="bg-slate-200 shadow-xl w-[500px] h-[400px] flex flex-col items-center pt-12 rounded-xl"
      >
        <span className="text-[12px] text-text">SECURITY SMART CAMERA</span>
        <span className="mt-2 text-text text-xl">Just Starting At $850</span>
        <button className="mt-2 bg-orange  text-white  rounded-full w-[100px] h-[30px] text-md hover:bg-slate-200 hover:text-orange">
          Shop Now
        </button>
      </div>

      <div
        id="card2"
        className="bg-slate-200 shadow-xl  w-[500px] h-[400px] flex flex-col items-center pt-12  rounded-xl"
      >
        <span className="text-[12px] text-text">ENTERTAINMENT & GAMES</span>
        <span className="mt-2 text-text text-xl">
          Just Starting At $650 Hurry Up!
        </span>
        <button className="bg-orange mt-2 text-white  rounded-full w-[100px] h-[30px] text-md hover:bg-slate-200 hover:text-orange">
          Shop Now
        </button>
      </div>
    </div>
  );
};
