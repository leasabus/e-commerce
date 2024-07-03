import { Banner } from "../../components/home/banner/Banner";
import { ProductShopCart } from "../../components/home/productsShopCarts/ProductShopCart";
import ProductsSlide from "../../components/home/productsSlide/ProductsSlide";
import { TrendingCategories } from "../../components/home/trendingCategories/TrendingCategories";
import { trendingCategories } from "../../data/trendingCategories";

export const Home = () => {
  return (
    <div className="">
      <Banner />

      <ProductsSlide array={trendingCategories} title="Trending Categories" />

      <ProductShopCart />

      <TrendingCategories />

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
