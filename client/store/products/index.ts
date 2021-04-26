import { AnyAction } from "redux";
import { IProductsState, PRODUCT_REDUCER_ACTION_TYPES } from "./types";

const initialState: IProductsState = {
  allProducts: [],
  productGroups: [],
};

const { SET_PRODUCTS, SET_PRODUCT_GROUPS } = PRODUCT_REDUCER_ACTION_TYPES;

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

