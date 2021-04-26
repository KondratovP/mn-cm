
import { AnyAction } from "redux";
import { IUserOrderState, USER_ORDER_ACTION_TYPES } from "./types";

const initialState: IUserOrderState = {
  userOrder: [],
};

const { SET_USER_ORDER } = USER_ORDER_ACTION_TYPES;

const checkoutReducer = (state = initialState, action: AnyAction): IUserOrderState => {
  switch (action.type) {
    case SET_USER_ORDER:
      return {
        ...state,
        userOrder: action.payload
      }
    default:
      return state
  }
}

export {
  checkoutReducer
};

