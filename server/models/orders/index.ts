import { GetCheckoutDTO_Req } from "common/types/api-interaction-interfaces";
import { OrderedProduct } from "../types";
import { findIndexOfProductById, updateProductQuantity } from "./helpers";

export interface UserOrder {
  userId: string;
  products: OrderedProduct[];
}

export const allOrders = [] as Array<UserOrder>;
export const getOrdersByUserId = async ({ userId }: GetCheckoutDTO_Req) => allOrders.find(order => order.userId === userId);
export const pushNewOrderWithUserId = async ({ order }: Record<'order', UserOrder>) => allOrders.push(order);

interface IAddProductToOrderParams {
  order: UserOrder;
  newProduct: OrderedProduct
}
export async function addProductToOrder({ order, newProduct }: IAddProductToOrderParams) {
  const idx = findIndexOfProductById(order, newProduct.productId);
  const foundIdxPredicate = idx > (-1);
  return foundIdxPredicate ? updateProductQuantity(order, { idx, inc: true }) : order.products.push({ ...newProduct, quantity: 1 })
};

interface IDecreaseProductInOrderParams {
  order: UserOrder;
  product: OrderedProduct
}
export async function decreaseProductInOrder({ order, product }: IDecreaseProductInOrderParams) {
  const idx = findIndexOfProductById(order, product.productId);
  updateProductQuantity(order, { idx, inc: false });
  return;
};
