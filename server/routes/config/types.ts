import { AllowedHttpMethods } from "common/utils/helper-types";

export interface RouteConfig {
  method: AllowedHttpMethods;
  route: string;
  data?: () => Promise<unknown>;
  dataQueryParams?: (...params: any) => Promise<unknown>;
  action?: (...data: any) => boolean | Promise<boolean>;
}