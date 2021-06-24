import { OrderedProduct } from "common/types";

export interface IUserOrderState {
  products: Array<OrderedProduct>,
  userId: string;
};

export enum USER_ORDER_ACTION_TYPES {
  SET_USER_ORDER = 'SET_USER_ORDER',
  UPDATE_USER_ORDER = 'UPDATE_USER_ORDER'
};

export const { SET_USER_ORDER, UPDATE_USER_ORDER } = USER_ORDER_ACTION_TYPES;