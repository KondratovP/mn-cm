import { Dispatch } from "redux";
import { ThunkDispatch } from "redux-thunk";
import api from "client/api";
import { SET_USER_ORDER, UPDATE_USER_ORDER } from "./types";
import { OrderedProduct } from "common/types";

export const setUserOrder = (userOrder: any) => {
  return ({
    type: SET_USER_ORDER,
    payload: userOrder
  })
}

export const updateUserOrder = (products: OrderedProduct[]) => {
  return ({
    type: UPDATE_USER_ORDER,
    payload: products
  })
}

export const createCurrentUserOrder = (userId: string) => {
  return async (dispatch: ThunkDispatch<any, any, any>) => {
    await api.checkout.createUserOrder(userId);
    dispatch(getCurrentUserOrder(userId))
  }
}

export const getCurrentUserOrder = (userId: string) => {
  return async (dispatch: Dispatch<any>) => {
    const userOrder = await api.checkout.getOrderByUserId(userId);
    console.table({ userOrder });
    return dispatch(setUserOrder(userOrder));
  }
}