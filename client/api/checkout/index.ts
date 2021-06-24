import { CHECKOUT_ENDPOINTS } from "client/consts/end-points";
import { AllowedHttpMethods, ArrayElement } from "common/utils/helper-types";

export const GET_ORDER_BY_USER_ID = 'GET_ORDER_BY_USER_ID' as const;
export const CREATE_USER_ORDER = 'CREATE_USER_ORDER' as const;
export const ADD_PRODUCT_TO_ORDER = 'ADD_PRODUCT_TO_ORDER' as const;
export const DELETE_PRODUCT_FROM_ORDER = 'DELETE_PRODUCT_FROM_ORDER' as const;

export const CHECKOUT_REQUEST_CONFIG_KEYS = [GET_ORDER_BY_USER_ID, CREATE_USER_ORDER, ADD_PRODUCT_TO_ORDER, DELETE_PRODUCT_FROM_ORDER] as const;

type ConfigKeys = ArrayElement<typeof CHECKOUT_REQUEST_CONFIG_KEYS>;

export const checkoutConfig = new Map<ConfigKeys, {
  method: AllowedHttpMethods;
  endpoint: (...args: any) => string;
  data?: any;
}>([
  [CREATE_USER_ORDER, {
    method: 'post',
    endpoint: () => CHECKOUT_ENDPOINTS.CHECKOUT_CREATE_USER_ORDER
  }],
  [GET_ORDER_BY_USER_ID, {
    method: 'get',
    endpoint: (currUserId: string) => CHECKOUT_ENDPOINTS.CHECKOUT_GET(currUserId)
  }],
  [ADD_PRODUCT_TO_ORDER, {
    method: "put",
    endpoint: () => CHECKOUT_ENDPOINTS.CHECKOUT_ADD_PRODUCT,
  }],
  [DELETE_PRODUCT_FROM_ORDER, {
    method: "put",
    endpoint: () => CHECKOUT_ENDPOINTS.CHECKOUT_DELETE_PRODUCT,
  }]
]);