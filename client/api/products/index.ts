import { PRODUCT_ENDPOINTS } from "client/consts/end-points";
import axios from "../axios";

export const getProducts = async () => {
  return await axios.get(PRODUCT_ENDPOINTS.PRODUCTS_GET).then(res => {
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

export const getProductGroups = async () => {
  return await axios.get(PRODUCT_ENDPOINTS.PRODUCT_GROUPS_GET).then(res => {
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

export const getProductById = async (id: number) => {
  const productByIdEndpoint = PRODUCT_ENDPOINTS.PRODUCT_BY_ID_GET(id);
  return await axios.get(productByIdEndpoint).then(res => {
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

export const decreaseProductById = async (productId: number) => {
  const productByIdEndpoint = PRODUCT_ENDPOINTS.PRODUCT_BY_ID_GET(productId);
  const params = { productId, inc: false };
  return await axios.post(productByIdEndpoint, params).then(res => {
    try {
      const success = res && res.status === 200;
      const failure = res && res.status > 399 && res.status;
      if (success) return res.status;
      if (failure) throw new Error(`error ${res.status}`);
    } catch (error) {
      throw new Error(error);
    }
  });
}

export const increaseProductById = async (productId: number) => {
  const productByIdEndpoint = PRODUCT_ENDPOINTS.PRODUCT_BY_ID_GET(productId);
  const params = { productId, inc: true };
  return await axios.post(productByIdEndpoint, params).then(res => {
    try {
      const success = res && res.status === 200;
      const failure = res && res.status > 399 && res.status;
      if (success) return res.status;
      if (failure) throw new Error(`error ${res.status}`);
    } catch (error) {
      throw new Error(error);
    }
  });
}