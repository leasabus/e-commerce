export interface TrendingCategories {
  id: number;
  image: string;
  title: string;
}

/*Types used in popular products*/
export interface PopularProducts {
  id?: number;
  title?: string;
  actualPrice?: string;
  oldPrice?: string;
  image?: string;
}
