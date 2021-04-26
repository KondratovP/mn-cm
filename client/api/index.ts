import { getCurrentExchangeValue } from './exchange';
import { getProducts, getProductGroups, getProductById } from './products';
import { getOrderByUserId, addProductToOrder, deleteProductFromOrder, createUserOrder } from './checkout';

export default ({
  exchange: {
    getCurrentExchangeValue
  },
  products: {
    getProducts,
    getProductGroups,
    getProductById
  },
  checkout: {
    getOrderByUserId,
    addProductToOrder,
    deleteProductFromOrder,
    createUserOrder
  }
});