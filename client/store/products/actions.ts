import api from "client/api";
import { Dispatch } from "redux";
import { SET_PRODUCTS, SET_PRODUCT_GROUPS } from "./types";

const { getProducts, getProductGroups } = api.products;

export const getCurrentAvailableProducts = () => {
  return async (dispatch: Dispatch<any>) => {
    const products = await getProducts();
    return dispatch({
      type: SET_PRODUCTS,
      payload: products
    })
  }
}

export const getCurrentAvailableProductGroups = () => {
  return async (dispatch: Dispatch<any>) => {
    const productGroups = await getProductGroups();
    return dispatch({
      type: SET_PRODUCT_GROUPS,
      payload: productGroups
    })
  }
}
