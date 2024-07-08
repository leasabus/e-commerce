import { CarruselDesktop } from "../productsSlide/carrusel/carouselDesktop/CarouselDesktop";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { CarruselMobile } from "../productsSlide/carrusel/CarruselMobile";
import { popularProducts } from "../../../data/popularProducts";

export const TrendingCategories = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="flex flex-col bg-white h-[300px] p-6">
      {isMobile ? (
        <CarruselMobile productHasPrice={true} array={popularProducts} />
      ) : (
        <>
          <span className="text-2xl pt-6 md:text-3xl text-text font-medium">
            Latest Products
          </span>
          <CarruselDesktop array={popularProducts} />
        </>
      )}
    </div>
  );
};
