import image1 from "../../public/assets/popularProducts/popularProducts/charger.webp";
import image2 from "../../public/assets/popularProducts/popularProducts/charguer.webp";
import image3 from "../../public/assets/popularProducts/popularProducts/ihpone14.webp";
import image4 from "../../public/assets/popularProducts/popularProducts/ipad.webp";
import image5 from "../../public/assets/popularProducts/popularProducts/iphone13.webp";
import image6 from "../../public/assets/popularProducts/popularProducts/speaker.webp";
import { PopularProducts } from "../interfaces/types";

export const popularProducts: PopularProducts[] = [
  {
    id: 1,
    title: "IPods",
    actualPrice: "50.00",
    oldPrice: "70.00",
    image: image1,
  },
  {
    id: 2,
    title: "Iphone Charguer",
    actualPrice: "50.00",
    oldPrice: "130.00",
    image: image2,
  },
  {
    id: 3,
    title: "Iphone 13 Pro",
    actualPrice: "900.00",
    oldPrice: "130.00",
    image: image3,
  },
  {
    id: 4,
    title: "Macbook 16",
    actualPrice: "1100.00",
    oldPrice: "130.00",
    image: image4,
  },
  {
    id: 5,
    title: "Iphone 13 white",
    actualPrice: "990.00",
    oldPrice: "130.00",
    image: image5,
  },
  {
    id: 6,
    title: "Ipad",
    actualPrice: "110.00",
    oldPrice: "130.00",
    image: image6,
  },
];
