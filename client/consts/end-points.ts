export const SERVER_BASE = 'http://localhost:3000';

export const EXCHANGE_ENDPOINTS = {
  EXCHANGE_VALUE_GET: 'exchange-value',
};

export const CHECKOUT_ENDPOINTS = {
  CHECKOUT_GET: (currUserId: string) => `/checkout/${currUserId}`,
  CHECKOUT_CREATE_USER_ORDER: '/checkout',
  CHECKOUT_ADD_PRODUCT: '/checkout',
  CHECKOUT_DELETE_PRODUCT: '/checkout-delete',
};

export const PRODUCT_ENDPOINTS = {
  PRODUCTS_GET: '/products',
  PRODUCT_GROUPS_GET: '/product-groups',
  PRODUCT_BY_ID_GET: (productId: number) => `/products/${productId}`,
};

export const SOCKET_ENDPOINT = 'localhost:3000';