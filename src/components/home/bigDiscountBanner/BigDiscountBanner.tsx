import "./BigDiscountBanner.css";

export const BigDiscountBanner = () => {
  return (
    <div
      id="bigDiscount"
      className="flex  flex-col items-center bg-white h-[300px]"
    >
      <span className="mt-6 text-slate-500 text-[12px]">BIG DISCOUNT</span>
      <span className="text-text text-xl mt-2">Google Pixel Smart Phone</span>
      <span className="text-orangeLight text-md font-bold">$350.000</span>
      <button className="bg-orange mt-2 p-2 w-[80px] h-[30px] flex items-center rounded-xl text-white text-sm">
        Shop Now
      </button>
    </div>
  );
};
