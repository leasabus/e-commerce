import { useState } from "react";
import { FaHeart, FaStoreAlt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);

  const handleOpenNavbar = () => {
    return setOpenNavbar(!openNavbar);
  };

  return (
    <div className="flex flex-row justify-between items-center h-[70px] p-6 w-full shadow-xl">
      {openNavbar ? (
        <div className="absolute right-0 mt-[220px] w-[150px] h-auto bg-orange shadow-md rounded-lg ">
          <div className="flex flex-col items-start p-6 gap-4">
            <Link
              onClick={handleOpenNavbar}
              to={"/"}
              className=" text-white text-xl"
            >
              Home
            </Link>
            <Link
              onClick={handleOpenNavbar}
              to={"/contact"}
              className=" text-white text-xl"
            >
              Contact
            </Link>
            <Link
              onClick={handleOpenNavbar}
              to={"/electronics"}
              className=" text-white text-xl"
            >
              Electronics
            </Link>
            <span></span>
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="flex flex-row items-center justify-center gap-2 ">
        <FaStoreAlt className="text-orange" size={42} />
        <div className="flex flex-col items-start mt-1 justify-center h-[30px]">
          <span className="font-medium text-xl tracking-tighter">DROU</span>
          <span className="mt-[-5px] text-slate-400 text-[9px] tracking-widest">
            MOBILE STORE
          </span>
        </div>
      </div>
      <div className=" hidden md:flex flex-row gap-4">
        <Link to={"/"} className="font-medium text-text">
          Home
        </Link>
        <Link to={"/contact"} className="font-medium text-text">
          Contact
        </Link>
        <Link to={"/electronics"} className="font-medium text-text">
          Electronics
        </Link>
        <span></span>
      </div>

      <div className="hidden md:flex flex-row items-center gap-6">
        <FaHeart className="text-text" size={24} />
        <FaCartShopping className="text-text" size={24} />
      </div>

      <div className="flex md:hidden  text-text">
        <IoMdMenu onClick={handleOpenNavbar} size={24} />
      </div>
    </div>
  );
};

export default Navbar;
