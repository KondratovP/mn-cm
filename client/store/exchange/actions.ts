import { Dispatch } from "redux";

export const assignCurrExchangeValue =
  (value: number) =>
    (dispatch: Dispatch<any>) => {
      return dispatch({
        type: 'ASSIGN_CURRENT_EXCHANGE_VALUE',
        payload: value
      })
    };

export const assignPrevExchangeValue =
  (value: number) =>
    (dispatch: Dispatch<any>) => {
      return dispatch({
        type: 'ASSIGN_PREV_EXCHANGE_VALUE',
        payload: value
      })
    };