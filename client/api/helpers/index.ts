import { AxiosResponse } from "axios";
import axios from "./axios";
import {
  checkoutConfig,
  exchangeConfig,
  productsConfig,
  CHECKOUT_REQUEST_CONFIG_KEYS,
  EXCHANGE_REQUEST_CONFIG_KEYS,
  PRODUCTS_REQUEST_CONFIG_KEYS
} from "../config";

import { ArrayElement } from "common/utils/helper-types";

const REQUEST_CONFIG_KEYS = [...CHECKOUT_REQUEST_CONFIG_KEYS, ...EXCHANGE_REQUEST_CONFIG_KEYS, ...PRODUCTS_REQUEST_CONFIG_KEYS];

const axiosConfig = new Map([...checkoutConfig, ...exchangeConfig, ...productsConfig]);

type ConfigKeys = ArrayElement<typeof REQUEST_CONFIG_KEYS>;

export const requestHandler = (res: AxiosResponse<any>) => {
  try {
    const success = res?.status === 200 && res?.data || res?.status === 200;
    const failure = res?.status > 399;
    if (success) return res.data || res.status;
    if (failure) {
      console.warn(`${res.status} - ${res.statusText}`);
      return null;
    }
  } catch (err) {
    throw new Error(err)
  }
};

interface MakeAxiosRequestParams {
  configItemKey: ConfigKeys;
  data?: any;
  endPointParam?: any
}
export const makeAxiosRequest = async (
  { configItemKey, data, endPointParam }: MakeAxiosRequestParams
) => {
  const configItem = axiosConfig.get(configItemKey)!;
  const method = configItem.method;
  const endpoint = configItem.endpoint(endPointParam && endPointParam);

  return await axios[method](endpoint, data && { ...data }).then(requestHandler);
}