import { useParams } from "react-router";
import { trendingCategories } from "../../data/trendingCategories";
import { useEffect, useState } from "react";
import { PopularProducts, TrendingCategories } from "../../interfaces/types";
import { popularProducts } from "../../data/popularProducts";

const getCategoryByID = async (id: string | undefined) => {
  return trendingCategories.find((category) => category.id === id);
};
export const ShowCategory = () => {
  const { id } = useParams();
  const [category, setCategory] = useState<TrendingCategories | undefined>();
  const [products, setProducts] = useState<PopularProducts[]>();

  useEffect(() => {
    const getCategory = async () => {
      const data = await getCategoryByID(id);
      setCategory(data);
      const relatedProducts = popularProducts.filter(
        (prod) => prod.categoryId === id
      );
      setProducts(relatedProducts);
    };

    getCategory();
  }, [id]);

  return (
    <div className="flex flex-col items-center bg-white">
      <div className="bg-slate-200 w-full h-[100px] flex items-center gap-2 justify-start p-5">
        <span className="text-xl">Home </span>
        <span className="text-xl font-bold text-orange">
          / {category?.title}
        </span>
      </div>

      <div className="grid grid-cols-4 gap-20 p-6">
        {products?.length === 0 ? (
          <p>No products found for this category.</p>
        ) : (
          products?.map((product) => (
            <div
              key={product.id}
              className="flex flex-col items-center shadow-lg rounded p-4"
            >
              <img
                className="w-[150px]"
                src={product.image}
                alt={product.title}
              />
              <h3 className="text-text">{product.title}</h3>
              <div className="flex flex-row gap-2">
                <p className="text-orange font-bold">${product.actualPrice}</p>
                <p className="line-through text-text">${product.oldPrice}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
