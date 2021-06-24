import { UserOrder } from "server/models/orders";
import { Products } from "server/models/products";
import { IProductGroup, OrderedProduct } from "server/models/types";

export type GetProductsDTO = Products;
export type GetProductGroupsDTO = IProductGroup[];

export type GetExchangeValueDTO = number;

export type GetCheckoutDTO_Req = Record<'userId', string>;
export type GetCheckoutDTO_Res = UserOrder;

export interface PutCheckoutDTO {
  userId: string,
  dec: boolean,
  product: OrderedProduct,
}

export interface DeleteCheckoutDTO {
  dec: boolean,
  userId: string,
  product: OrderedProduct
}

export interface PostProductsDTO {
  productId: number;
  inc: boolean;
}

export interface SocketExchangeValueChangeDTO {
  newValue: number;
  oldValue: number;
}

export interface SocketUserOrderUpdatedDTO {
  newUserOrder: UserOrder;
}