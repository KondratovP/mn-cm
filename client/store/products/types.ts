import { IProduct, IProductGroup } from "common/types";

export interface IProductsState {
  allProducts: Array<IProduct>;
  productGroups: Array<IProductGroup>;
};

export enum PRODUCT_REDUCER_ACTION_TYPES {
  SET_PRODUCTS = 'SET_PRODUCTS',
  SET_PRODUCT_GROUPS = 'SET_PRODUCT_GROUPS'
};

const { SET_PRODUCTS, SET_PRODUCT_GROUPS } = PRODUCT_REDUCER_ACTION_TYPES;

export {
  SET_PRODUCTS,
  SET_PRODUCT_GROUPS
}