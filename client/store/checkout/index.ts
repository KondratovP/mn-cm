
import { AnyAction } from "redux";
import { IUserOrderState, SET_USER_ORDER, UPDATE_USER_ORDER } from "./types";

const initialState: IUserOrderState = {
  userId: '',
  products: [],
};

const checkoutReducer = (state = initialState, action: AnyAction): IUserOrderState => {
  switch (action.type) {
    case SET_USER_ORDER:
      return {
        ...state,
        ...action.payload
      }
    case UPDATE_USER_ORDER:
      return {
        ...state,
        products: action.payload
      }
    default:
      return state
  }
}

export {
  checkoutReducer
};

