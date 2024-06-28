import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center h-[70px] p-6 w-full shadow-xl">
      <div>
        <span>Logo</span>
      </div>
      <div className="flex flex-row gap-4">
        <span>Home</span>
        <span>Contact</span>
        <span></span>
      </div>

      <div className="flex flex-row items-center gap-4">
        <FaHeart />
        <FaCartShopping />
      </div>
    </div>
  );
};

export default Navbar;
