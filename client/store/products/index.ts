import { AnyAction } from "redux";
import { IProductsState, SET_PRODUCTS, SET_PRODUCT_GROUPS } from "./types";

const initialState: IProductsState = {
  allProducts: [],
  productGroups: [],
};

const productsReducer = (state = initialState, action: AnyAction): IProductsState => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload
      }
    case SET_PRODUCT_GROUPS:
      return {
        ...state,
        productGroups: action.payload
      }
    default:
      return state
  }
}

export {
  productsReducer
};

