import { Express } from 'express';
// import { checkoutRoutes } from "./checkout";
// import { productsRoutes } from './products';
// import { exchangeRoutes } from './exchange';

export function buildRoutes<T extends Express = Express>(app: T) {
  console.log(app);
  // checkoutRoutes(app);
  // productsRoutes(app);
  // exchangeRoutes(app);
}