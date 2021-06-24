import { useSelector } from "react-redux";
import { IAppState } from "..";

export const getUserOrderUserId = (state: IAppState) => state.checkoutReducer?.userId;
export const getUserOrderProducts = (state: IAppState) => state.checkoutReducer?.products || [];

export const useUserOrderProductsSelector = () => {
  return useSelector(getUserOrderProducts);
}

export const useUserOrderUserIdSelector = () => {
  return useSelector(getUserOrderUserId);
}