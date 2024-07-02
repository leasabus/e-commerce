import { Banner } from "../../components/home/banner/Banner";
import ProductsSlide from "../../components/home/productsSlide/ProductsSlide";
import { trendingCategories } from "../../data/trendingCategories";

export const Home = () => {
  return (
    <div className="">
      <Banner />

      <ProductsSlide array={trendingCategories} title="Trending Categories" />

      <div className="h-[300px] w-full flex flex-row items-center justify-center gap-10 p-6">
        <div className="bg-slate-400 w-[350px] h-[250px]">
          <span>Card1</span>
        </div>

        <div className="bg-slate-400 h-[250px] w-[350px]">
          <span>Card2</span>
        </div>
      </div>

      <div className="h-[200px] p-6">
        <span>Categories</span>
      </div>

      <div className="h-[300px] bg-slate-300 p-6">
        <span>Banner2</span>
      </div>

      <ProductsSlide array={trendingCategories} title="Trending Categories" />

      <div className="h-[200px] p-6">
        <span>Blogs y events</span>
      </div>

      <div className="h-[300px] bg-slate-300 p-6">
        <span>Banner3</span>
      </div>

      <div className="h-[300px] bg-slate-300 p-6">
        <span>Info</span>
      </div>
    </div>
  );
};
