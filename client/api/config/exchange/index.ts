import { EXCHANGE_ENDPOINTS } from "client/consts/endpoints";
import { AllowedHttpMethods, ArrayElement } from "common/utils/helper-types";

export const GET_CURRENT_EXCHANGE_VALUE = 'GET_CURRENT_EXCHANGE_VALUE' as const;

export const EXCHANGE_REQUEST_CONFIG_KEYS = [GET_CURRENT_EXCHANGE_VALUE] as const;

type ConfigKeys = ArrayElement<typeof EXCHANGE_REQUEST_CONFIG_KEYS>;

export const exchangeConfig = new Map<ConfigKeys, {
  method: AllowedHttpMethods;
  endpoint: (...args: any) => string;
  data?: any;
}>([
  [GET_CURRENT_EXCHANGE_VALUE, {
    method: 'get',
    endpoint: () => EXCHANGE_ENDPOINTS.EXCHANGE_VALUE_GET
  }],
]);