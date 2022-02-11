import { Product } from "../models/Product";

 export const search = (products: Product[], searchParam: string[], searchString: string) => {
    return products.filter((product: any) => {
      return searchParam.some((newProduct: any) => {
        return (
          product[newProduct]
            .toString()
            .toLowerCase()
            .indexOf(searchString.toLowerCase()) > -1
        );
      });
    });
  };