import blog1 from "../../../../public/assets/blogs/blog1.webp";
import blog2 from "../../../../public/assets/blogs/blog2.webp";
import blog3 from "../../../../public/assets/blogs/blog3.webp";
import { CiCalendar } from "react-icons/ci";

export const Blogs = () => {
  return (
    <div className="bg-white flex flex-col p-6">
      <span className="text-2xl md:text-3xl text-text font-medium">
        Blogs & Events
      </span>
      <div className="flex flex-col items-center gap-8 md:grid md:grid-cols-3 md:gap-4 mt-6">
        <div>
          <img className="rounded-xl" src={blog1} alt="" />
          <div className="flex flex-row items-center mt-2 gap-1">
            <CiCalendar className="text-text" />
            <span className="text-[12px] text-text mt-2">
              January 21 , 2024
            </span>
          </div>
          <span className="text-sm text-text">Music magnate headphones</span>
        </div>

        <div>
          <img className="rounded-xl" src={blog2} alt="" />
          <div className="flex flex-row items-center mt-2 gap-1">
            <CiCalendar className="text-text" />
            <span className="text-[12px] text-text mt-2">
              January 21 , 2024
            </span>
          </div>
          <span className="text-sm text-text">Music magnate headphones</span>
        </div>

        <div>
          <img className="rounded-xl" src={blog3} alt="" />
          <div className="flex flex-row items-center mt-2 gap-1">
            <CiCalendar className="text-text" />
            <span className="text-[12px] text-text mt-2">
              January 21 , 2024
            </span>
          </div>
          <span className="text-sm text-text">Music magnate headphones</span>
        </div>
      </div>
    </div>
  );
};
