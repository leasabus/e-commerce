import image1 from "../../public/assets/popularProducts/popularProducts/apple tv.webp";
import image2 from "../../public/assets/popularProducts/popularProducts/apple watch.webp";
import image3 from "../../public/assets/popularProducts/popularProducts/charger.webp";
import image4 from "../../public/assets/popularProducts/popularProducts/macbook.webp";
import image5 from "../../public/assets/popularProducts/popularProducts/speaker.webp";
import image6 from "../../public/assets/popularProducts/popularProducts/tablet.webp";
import { PopularProducts } from "../interfaces/types";

export const popularProducts: PopularProducts[] = [
  {
    id: 1,
    title: "IPhone 15 pro",
    actualPrice: "110.00",
    oldPrice: "130.00",
    image: image1,
  },
  {
    id: 2,
    title: "Iphone 14",
    actualPrice: "110.00",
    oldPrice: "130.00",
    image: image2,
  },
  {
    id: 3,
    title: "Ipad",
    actualPrice: "110.00",
    oldPrice: "130.00",
    image: image3,
  },
  {
    id: 4,
    title: "Apple watch series",
    actualPrice: "110.00",
    oldPrice: "130.00",
    image: image4,
  },
  {
    id: 5,
    title: "Apple watch",
    actualPrice: "110.00",
    oldPrice: "130.00",
    image: image5,
  },
  {
    id: 6,
    title: "Apple TV",
    actualPrice: "110.00",
    oldPrice: "130.00",
    image: image6,
  },
];
