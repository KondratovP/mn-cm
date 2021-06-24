import { Express, Request, Response } from 'express';
import { handler } from './helpers';
import { routeConfig } from './config'

export function buildRoutes<T extends Express = Express>(app: T) {
  routeConfig.map(({
    method,
    route,
    data,
    dataQueryParams,
    action: reqCb
  }) => app[method](route, async (req: Request, res: Response) => {
    method === 'get' && data && handler({ res, route, data });
    method === 'get' && dataQueryParams && handler({ res, route, req, dataQueryParams });
    (method === 'post' || method === 'put' || method === 'delete') && handler({ route, req, reqCb, res });
  }));
}