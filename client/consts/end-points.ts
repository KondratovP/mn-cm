import { CURRENT_USER_ID_TYPE } from "./current-user";

export const EXCHANGE_ENDPOINTS = {
  EXCHANGE_VALUE_GET: 'exchange-value',
};

export const CHECKOUT_ENDPOINTS = {
  CHECKOUT_GET: (currUserId: CURRENT_USER_ID_TYPE) => `/checkout/${currUserId}`,
  CHECKOUT_ADD_PRODUCT: '/checkout',
  CHECKOUT_UPDATE_PRODUCT_QUANTITY: '/checkout',
  CHECKOUT_DELETE_PRODUCT: '/checkout',
}

export const PRODUCT_ENDPOINTS = {
  PRODUCTS_GET: '/products',
  PRODUCT_GROUPS_GET: '/products-groups',
  PRODUCT_BY_ID_GET: (productId: number) => `/products/${productId}`,
}