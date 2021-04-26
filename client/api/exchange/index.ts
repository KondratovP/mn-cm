import { EXCHANGE_ENDPOINTS } from "client/consts/end-points";
import axios from "../axios";

export const getCurrentExchangeValue = async () => {
  return await axios.get(EXCHANGE_ENDPOINTS.EXCHANGE_VALUE_GET).then(res => {
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