import { IAppState } from "client/store";
import { useSelector } from "react-redux";

export const getProducts = (state: IAppState) => state.productsReducer.allProducts;
export const getProductGroups = (state: IAppState) => state.productsReducer.productGroups;

export const useProductsSelector = () => {
  return useSelector(getProducts);
};

export const useProductGroupsSelector = () => {
  return useSelector(getProductGroups);
}