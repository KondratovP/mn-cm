import { useSelector } from "react-redux";
import { IAppState } from "..";

export const getExchangeValue = (state: IAppState) => (state.exchangeReducer.currentExchangeValue);

export const getPreviousValue = (state: IAppState) => (state.exchangeReducer.prevExchangeValue);

export const useExchangeValueSelector = () => {
  return useSelector(getExchangeValue);
}

export const usePreviousExchangeValueSelector = () => {
  return useSelector(getPreviousValue);
}