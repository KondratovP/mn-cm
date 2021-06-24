import { getAllProducts, getAllProductGroups } from '../../models/products';
import { Exchange } from '../../models/exchange';
import { getOrdersByUserId } from '../../models/orders';
import { checkoutDeleteAction, checkoutPostAction, checkoutPutAction, productsDeleteAction, productsPostAction } from './actions';
import { RouteConfig } from './types';

export const PRODUCTS_ROUTES: RouteConfig[] = [
  { method: 'get', route: '/products', data: getAllProducts },
  { method: 'get', route: '/product-groups', data: getAllProductGroups },
  { method: 'post', route: '/products/:productId', action: productsPostAction },
  { method: 'delete', route: '/products/:productId', action: productsDeleteAction }
];

export const EXCHANGE_ROUTES: RouteConfig[] = [
  { method: 'get', route: '/exchange-value', data: Exchange.getCurrentExchangeValue },
];

export const CHECKOUT_ROUTES: RouteConfig[] = [
  { method: 'get', route: '/checkout/:userId', dataQueryParams: getOrdersByUserId },
  { method: 'post', route: '/checkout', action: checkoutPostAction },
  { method: 'put', route: '/checkout', action: checkoutPutAction },
  { method: 'put', route: '/checkout-delete', action: checkoutDeleteAction },
];

export const routeConfig = [...PRODUCTS_ROUTES, ...EXCHANGE_ROUTES, ...CHECKOUT_ROUTES];