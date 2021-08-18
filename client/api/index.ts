import { makeAxiosRequest } from "./helpers";
import { GET_CURRENT_EXCHANGE_VALUE } from "./config/exchange";
import { DECREASE_PRODUCT_BY_ID, GET_PRODUCTS, GET_PRODUCT_BY_ID, GET_PRODUCT_GROUPS, INCREASE_PRODUCT_BY_ID } from "./config/products";
import { ADD_PRODUCT_TO_ORDER, CREATE_USER_ORDER, DELETE_PRODUCT_FROM_ORDER, GET_ORDER_BY_USER_ID } from "./config/checkout";

import { DeleteCheckoutDTO, IProduct, IProductGroup, PutCheckoutDTO } from "common/types";
import { UserOrder } from "server/models/orders";

export default ({
  exchange: {
    getCurrentExchangeValue: async () => makeAxiosRequest({ configItemKey: GET_CURRENT_EXCHANGE_VALUE })
  },
  products: {
    getProducts: async () => makeAxiosRequest({ configItemKey: GET_PRODUCTS }) as Promise<IProduct[]>,
    getProductGroups: async () => makeAxiosRequest({ configItemKey: GET_PRODUCT_GROUPS }) as Promise<IProductGroup[]>,
    getProductById: async (id: number) => makeAxiosRequest({ configItemKey: GET_PRODUCT_BY_ID, endPointParam: id }),
    increaseProductById: async (productId: number) => makeAxiosRequest({ configItemKey: INCREASE_PRODUCT_BY_ID, data: { productId, inc: true }, endPointParam: productId }),
    decreaseProductById: async (productId: number) => makeAxiosRequest({ configItemKey: DECREASE_PRODUCT_BY_ID, endPointParam: productId }),
  },
  checkout: {
    createUserOrder: async (userId: string) => makeAxiosRequest({ configItemKey: CREATE_USER_ORDER, data: { userId } }),
    getOrderByUserId: async (userId: string) => makeAxiosRequest({ configItemKey: GET_ORDER_BY_USER_ID, endPointParam: userId }) as Promise<UserOrder>,
    addProductToOrder: async (data: PutCheckoutDTO) => makeAxiosRequest({ configItemKey: ADD_PRODUCT_TO_ORDER, data }),
    deleteProductFromOrder: async (data: DeleteCheckoutDTO) => makeAxiosRequest({ configItemKey: DELETE_PRODUCT_FROM_ORDER, data }),
  }
});