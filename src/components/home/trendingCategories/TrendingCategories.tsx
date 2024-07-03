import { trendingCategories } from "../../../data/trendingCategories";
import { CarruselDesktop } from "../productsSlide/carrusel/carouselDesktop/CarouselDesktop";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { CarruselMobile } from "../productsSlide/carrusel/CarruselMobile";

export const TrendingCategories = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="flex flex-col bg-white h-[300px] p-6 md:p-0">
      {isMobile ? (
        <CarruselMobile array={trendingCategories} />
      ) : (
        <CarruselDesktop array={trendingCategories} />
      )}
    </div>
  );
};
