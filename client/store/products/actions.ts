import api from "client/api";
import { Dispatch } from "redux";
import { PRODUCT_REDUCER_ACTION_TYPES } from "./types";

const { SET_PRODUCTS, SET_PRODUCT_GROUPS } = PRODUCT_REDUCER_ACTION_TYPES;

export const getCurrentAvailableProducts = () => {
  return async (dispatch: Dispatch<any>) => {
    const products = await api.products.getProducts();
    return dispatch({
      type: SET_PRODUCTS,
      payload: products
    })
  }
}

export const getCurrentAvailableProductGroups = () => {
  return async (dispatch: Dispatch<any>) => {
    const productGroups = await api.products.getProductGroups();
    return dispatch({
      type: SET_PRODUCT_GROUPS,
      payload: productGroups
    })
  }
}
