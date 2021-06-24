import { makeAxiosRequest } from "./helpers";
import { GET_CURRENT_EXCHANGE_VALUE } from "./exchange";
import { DECREASE_PRODUCT_BY_ID, GET_PRODUCTS, GET_PRODUCT_BY_ID, GET_PRODUCT_GROUPS, INCREASE_PRODUCT_BY_ID } from "./products";
import { ADD_PRODUCT_TO_ORDER, CREATE_USER_ORDER, DELETE_PRODUCT_FROM_ORDER, GET_ORDER_BY_USER_ID } from "./checkout";

import { DeleteCheckoutDTO, PutCheckoutDTO } from "common/types";

export default ({
  exchange: {
    getCurrentExchangeValue: async () => makeAxiosRequest({ configItemKey: GET_CURRENT_EXCHANGE_VALUE })
  },
  products: {
    getProducts: async () => makeAxiosRequest({ configItemKey: GET_PRODUCTS }),
    getProductGroups: async () => makeAxiosRequest({ configItemKey: GET_PRODUCT_GROUPS }),
    getProductById: async (id: number) => makeAxiosRequest({ configItemKey: GET_PRODUCT_BY_ID, endPointParam: id }),
    increaseProductById: async (productId: number) => makeAxiosRequest({ configItemKey: INCREASE_PRODUCT_BY_ID, data: { productId, inc: true }, endPointParam: productId }),
    decreaseProductById: async (productId: number) => makeAxiosRequest({ configItemKey: DECREASE_PRODUCT_BY_ID, endPointParam: productId }),
  },
  checkout: {
    createUserOrder: async (userId: string) => makeAxiosRequest({ configItemKey: CREATE_USER_ORDER, data: { userId } }),
    getOrderByUserId: async (userId: string) => makeAxiosRequest({ configItemKey: GET_ORDER_BY_USER_ID, endPointParam: userId }),
    addProductToOrder: async (data: PutCheckoutDTO) => makeAxiosRequest({ configItemKey: ADD_PRODUCT_TO_ORDER, data }),
    deleteProductFromOrder: async (data: DeleteCheckoutDTO) => makeAxiosRequest({ configItemKey: DELETE_PRODUCT_FROM_ORDER, data }),
  }
});