import { io } from "../../server";
import { IProduct, OrderedProduct } from "../models/types";

export function onExchangeValueChange({ oldValue, newValue }: Record<'oldValue' | 'newValue', number>) {
  io.emit('exchangeValueChange', ({ oldValue, newValue }));
};

export function onUserCheckoutOrderUpdate(newUserOrder: Array<OrderedProduct>) {
  io.emit('userOrderUpdate', ({ ...newUserOrder }));
};

export function onAvailableProductListUpdate(productList: Array<IProduct>) {
  io.emit('availableProductListUpdate', ({ productList }));
};