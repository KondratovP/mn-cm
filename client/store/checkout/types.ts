import { OrderedProduct } from "common/types";

export interface IUserOrderState {
  userOrder: Array<OrderedProduct>
};

export enum USER_ORDER_ACTION_TYPES {
  SET_USER_ORDER = 'SET_USER_ORDER',
};