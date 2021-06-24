import { TProductId, TUserId } from "./product-types";

export interface OrderedProduct {
  productId: number;
  quantity: number;
  productTitle: string;
  usdPrice: number;
  groupId: number;
}

export interface IUserOrder {
  userId: TUserId;
  products: Array<OrderedProduct>;
  getOrderedProducts: (product: OrderedProduct) => Promise<Array<OrderedProduct>>;
  addProductToOrder: (newProduct: OrderedProduct) => Promise<void>;
  decreaseProductInOrder: (productId: TProductId) => Promise<void>;
}