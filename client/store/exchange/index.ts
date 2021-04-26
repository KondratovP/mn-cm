import { AnyAction } from "redux";
import { EXCHANGE_REDUCER_ACTION_TYPES, IExchangeState } from "./types";

const initialState: IExchangeState = {
  currentExchangeValue: 0,
  prevExchangeValue: 0,
};

const { ASSIGN_CURRENT_EXCHANGE_VALUE, ASSIGN_PREV_EXCHANGE_VALUE } = EXCHANGE_REDUCER_ACTION_TYPES;

const exchangeReducer = (state = initialState, action: AnyAction): IExchangeState => {
  switch (action.type) {
    case ASSIGN_CURRENT_EXCHANGE_VALUE:
      return {
        ...state,
        currentExchangeValue: action.payload
      }
    case ASSIGN_PREV_EXCHANGE_VALUE:
      return {
        ...state,
        prevExchangeValue: action.payload
      }
    default:
      return state
  }
}

export {
  exchangeReducer,
};

