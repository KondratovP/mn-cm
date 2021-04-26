import { Express, Request, Response } from 'express';
import { Exchange } from '../models/exchange';

export function exchangeRoutes<T extends Express = Express>(app: T) {
  app.get('/exchange-value', async (_: Request, res: Response) => {
    try {
      const currentExchangeValue = Exchange.getCurrentExchangeValue();
      return res.status(200).json(JSON.stringify({ currentExchangeValue }));
    } catch (error) {
      console.log('api/exchange-value - server error');
      res.status(500).send('api/exchange-value - server error');
    }
  });
}