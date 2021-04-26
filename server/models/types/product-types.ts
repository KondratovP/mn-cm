import { getNames, getProducts } from "../_stubs";
import { ArrayElement } from "../../../common/utils/helper-types";

export type TUserId = string;
export type TProductId = number;

export interface IProduct {
  usdPrice: number;
  quantity: number;
  groupId: number;
  productId: number;
  groupName: string;
  productTitle: string;
}

export interface IProductGroup {
  groupId: number;
  groupName: string;
}

export type TIncomingProduct = ArrayElement<ReturnType<typeof getProducts>['Value']['Goods']>;
export type TProductNames = ReturnType<typeof getNames>;