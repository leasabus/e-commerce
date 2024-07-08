import { Banner } from "../../components/home/banner/Banner";
import { BigDiscountBanner } from "../../components/home/bigDiscountBanner/BigDiscountBanner";
import { Blogs } from "../../components/home/blogs/Blogs";
import { DiscountBanner } from "../../components/home/discountBanner/DiscountBanner";
import { PopularProductsGrid } from "../../components/home/popularProductsGrid/PopularProductsGrid";
import { ProductsInformation } from "../../components/home/productsInformation/ProductsInformation";
import { ProductShopCart } from "../../components/home/productsShopCarts/ProductShopCart";
import ProductsSlide from "../../components/home/productsSlide/ProductsSlide";
import { TrendingCategories } from "../../components/home/trendingCategories/TrendingCategories";
import { popularProducts } from "../../data/popularProducts";
import { trendingCategories } from "../../data/trendingCategories";

export const Home = () => {
  return (
    <section>
      <Banner />

      <ProductsSlide array={trendingCategories} title="Trending Categories" />

      <ProductShopCart />

      <TrendingCategories />

      <DiscountBanner />

      <PopularProductsGrid array={popularProducts} />

      <Blogs />

      <BigDiscountBanner />

      <ProductsInformation />
    </section>
  );
};
