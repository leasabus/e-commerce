export interface TrendingCategories {
  id: string | undefined;
  image: string;
  title: string;
  products?: [];
}

/*Types used in popular products*/
export interface PopularProducts {
  id?: number;
  title?: string;
  actualPrice?: string;
  oldPrice?: string;
  image?: string;
  categoryId: string;
}
