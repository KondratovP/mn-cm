import { Dispatch } from "redux";
import { ThunkDispatch } from "redux-thunk";
import api from "client/api";
import { USER_ORDER_ACTION_TYPES } from "./types";

const { SET_USER_ORDER } = USER_ORDER_ACTION_TYPES;

export const createCurrentUserOrder = (userId: string) => {
  return async (dispatch: ThunkDispatch<any, any, any>) => {
    await api.checkout.createUserOrder(userId);
    dispatch(getCurrentUserOrder(userId))
  }
}

export const getCurrentUserOrder = (userId: string) => {
  return async (dispatch: Dispatch<any>) => {
    const userOrder = await api.checkout.getOrderByUserId(userId);
    return dispatch({
      type: SET_USER_ORDER,
      payload: userOrder
    })
  }
}