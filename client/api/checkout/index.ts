import { CHECKOUT_ENDPOINTS } from "client/consts/end-points";
import { IProduct } from "common/types";
import axios from "../axios";
import { decreaseProductById, increaseProductById } from "../products";

export const getOrderByUserId = async (currUserId: string) => {
  const orderByIdEndpoint = CHECKOUT_ENDPOINTS.CHECKOUT_GET(currUserId);
  return await axios.get(orderByIdEndpoint).then(res => {
    try {
      const success = res && res.status === 200 && res.data;
      const failure = res && res.status > 399 && res.status;
      if (success) return res.data;
      if (failure) throw new Error(`${res.status}`);
    } catch (error) {
      throw new Error(error);
    }
  });
}

export const createUserOrder = async (userId: string) => {
  const params = { userId };
  return await axios.post(CHECKOUT_ENDPOINTS.CHECKOUT_CREATE_USER_ORDER, params).then(res => {
    try {
      const success = res && res.status === 200 && res.data;
      const failure = res && res.status > 399 && res.status;
      if (success) return res.status;
      if (failure) throw new Error(`${res.status}`);
    } catch (error) {
      throw new Error(error);
    }
  });
}

export const addProductToOrder = async (userId: string, productId: number, product: IProduct) => {
  const params = {
    userId,
    productId,
    product,
    dec: false
  };
  return await axios.put(CHECKOUT_ENDPOINTS.CHECKOUT_ADD_PRODUCT, params).then(async (res) => {
    try {
      const success = res && res.status === 200;
      const failure = res && res.status > 399 && res.status;
      if (success) {
        await decreaseProductById(productId);
        return res.status;
      }
      if (failure) throw new Error(`${res.status}`);
    } catch (error) {
      throw new Error(error);
    }
  });
}

export const deleteProductFromOrder = async (userId: string, productId: number, product: IProduct) => {
  const params = {
    userId,
    productId,
    product,
    dec: true
  };
  return await axios.put(CHECKOUT_ENDPOINTS.CHECKOUT_DELETE_PRODUCT, params).then(async (res) => {
    try {
      const success = res && res.status === 200;
      const failure = res && res.status > 399 && res.status;
      if (success) {
        await increaseProductById(productId);
        return res.status;
      }
      if (failure) throw new Error(`${res.status}`);
    } catch (error) {
      throw new Error(error);
    }
  });
}