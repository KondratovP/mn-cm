import { CURRENT_USER_ID_TYPE } from "./current-user";

export const SERVER_BASE = 'localhost:3000';

export const EXCHANGE_ENDPOINTS = {
  EXCHANGE_VALUE_GET: 'exchange-value',
};

export const CHECKOUT_ENDPOINTS = {
  CHECKOUT_GET: (currUserId: CURRENT_USER_ID_TYPE) => `/checkout/${currUserId}`,
  CHECKOUT_CREATE_USER_ORDER: '/checkout',
  CHECKOUT_ADD_PRODUCT: '/checkout',
  CHECKOUT_DELETE_PRODUCT: '/checkout',
};

export const PRODUCT_ENDPOINTS = {
  PRODUCTS_GET: '/products',
  PRODUCT_GROUPS_GET: '/products-groups',
  PRODUCT_BY_ID_GET: (productId: number) => `/products/${productId}`,
};

export const SOCKET_ENDPOINT = 'localhost:3000';