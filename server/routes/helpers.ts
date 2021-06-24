import { Request, Response } from 'express';

interface HandlerParams {
  route: string;
  res: Response;
  req?: Request;
  data?: () => Promise<unknown>;
  dataQueryParams?: (...params: any) => Promise<unknown>;
  reqCb?: (data: any) => boolean | Promise<boolean>;
}

export const handler = async ({ res, req, route, data, dataQueryParams, reqCb }: HandlerParams) => {
  try {
    data && res.status(200).json(await data())
      || req && dataQueryParams && res.json(await dataQueryParams(req.params))
      || req && reqCb && await reqCb(req.body); res.status(200);
  } catch (err) {
    console.warn(`${route} failed`);
    return res?.status(500).send(`error ${route} failed`);
  }
}