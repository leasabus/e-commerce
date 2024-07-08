import productDelivery from "../../../../public/assets/productsInformation/product_devliery.png";
import productPaydment from "../../../../public/assets/productsInformation/product_paydment.webp";
import productPersonalize from "../../../../public/assets/productsInformation/product_personalize.png";

export const ProductsInformation = () => {
  return (
    <div className=" flex flex-col h-auto md:grid md:grid-cols-3 p-6 md:h-[230px] w-full bg-white ">
      <div className="flex flex-col items-center">
        <img src={productDelivery} alt="" />
        <span className="font-bold text-text mt-4">Free delivery</span>
        <span className="text-text text-[14px] mt-2">
          And free returns. See checkout for
        </span>
        <span className="text-text text-[14px]">delivery dates.</span>
      </div>

      <div className="flex flex-col items-center">
        <img src={productPaydment} alt="" />
        <span className="font-bold text-text mt-4">Pay monthly at 0% APR</span>
        <span className="text-text text-[14px] mt-2">
          Choose to check out with Apple Card
        </span>
        <span className="text-text text-[14px]">Monthly Installments.</span>
      </div>

      <div className="flex flex-col items-center">
        <img src={productPersonalize} alt="" />
        <span className="font-bold text-text mt-4">Personalize it</span>
        <span className="text-text text-[14px] mt-2">
          Engrave your device with your name or a
        </span>
        <span className="text-text text-[14px]">personal note</span>
      </div>
    </div>
  );
};
