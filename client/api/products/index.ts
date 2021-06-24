import { PRODUCT_ENDPOINTS } from "client/consts/end-points";
import { AllowedHttpMethods, ArrayElement } from "common/utils/helper-types";

export const GET_PRODUCTS = 'GET_PRODUCTS' as const;
export const GET_PRODUCT_GROUPS = 'GET_PRODUCT_GROUPS' as const;
export const GET_PRODUCT_BY_ID = 'GET_PRODUCT_BY_ID' as const;
export const DECREASE_PRODUCT_BY_ID = 'DECREASE_PRODUCT_BY_ID' as const;
export const INCREASE_PRODUCT_BY_ID = 'INCREASE_PRODUCT_BY_ID' as const;

export const PRODUCTS_REQUEST_CONFIG_KEYS = [GET_PRODUCTS, GET_PRODUCT_GROUPS, GET_PRODUCT_BY_ID, DECREASE_PRODUCT_BY_ID, INCREASE_PRODUCT_BY_ID] as const;

type ConfigKeys = ArrayElement<typeof PRODUCTS_REQUEST_CONFIG_KEYS>;

export const productsConfig = new Map<ConfigKeys, {
  method: AllowedHttpMethods;
  endpoint: (...args: any) => string;
  data?: any;
}>([
  [GET_PRODUCTS, {
    method: 'get',
    endpoint: () => PRODUCT_ENDPOINTS.PRODUCTS_GET
  }],
  [GET_PRODUCT_GROUPS, {
    method: 'get',
    endpoint: () => PRODUCT_ENDPOINTS.PRODUCT_GROUPS_GET
  }],
  [GET_PRODUCT_BY_ID, {
    method: 'get',
    endpoint: (id: number) => PRODUCT_ENDPOINTS.PRODUCT_BY_ID_GET(id)
  }],
  [INCREASE_PRODUCT_BY_ID, {
    method: "post",
    endpoint: (id: number) => PRODUCT_ENDPOINTS.PRODUCT_BY_ID_GET(id),
  }],
  [DECREASE_PRODUCT_BY_ID, {
    method: "delete",
    endpoint: (id: number) => PRODUCT_ENDPOINTS.PRODUCT_BY_ID_GET(id),
  }],
]);