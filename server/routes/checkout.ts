import { Express, Request, Response } from 'express';
import { getOrdersByUserId, pushNewOrderWithUserId, UserOrder } from '../models/orders';
import { OrderedProduct } from '../models/types';

export function checkoutRoutes<T extends Express = Express>(app: T) {
  app.get('/checkout/:userId', async (req: Request, res: Response) => {
    const userId = req.params.userId;
    try {
      const existingOrder = getOrdersByUserId(userId);
      if (existingOrder) { return res.status(200).json(JSON.stringify(existingOrder)); }
      res.status(400).send('GET api/checkout order not found');
    } catch (error) {
      res.status(500).send('GET api/checkout server error');
    }
  });

  app.post('/checkout', (req, res) => {
    console.log(req.params);
    try {
      const userId = req.params.userId;
      const userOrder = new UserOrder(userId);
      pushNewOrderWithUserId(userOrder);
      return res.status(200).send('POST api/checkout OK Received a POST HTTP method');
    } catch (error) {
      return res.status(500).send('POST api/checkout server error. Received a POST HTTP method');
    }
  });

  app.put('/checkout', (req, res) => {
    console.log(req.params);
    try {
      const params = JSON.stringify(req.params);
      const {
        userId,
        productId,
        dec,
        product
      } : {
        userId: string,
        productId: number,
        dec: boolean,
        product: OrderedProduct,
      } = JSON.parse(params);
      const existingOrder = getOrdersByUserId(userId);
      if (dec) { existingOrder!.decreaseProductInOrder(productId) }
      existingOrder!.addProductToOrder(product);
      return res.status(200).send('PUT api/checkout - OK - Received a PUT HTTP method');
    } catch (error) {
      return res.status(500).send('PUT api/checkout server error. Received a PUT HTTP method');
    }
  });

  app.delete('/checkout', (req, res) => {
    console.log(req.params.data);
    try {
      const params = JSON.stringify(req.params);
      const { userId, productId }: { userId: string, productId: number } = JSON.parse(params);
      const existingOrder = getOrdersByUserId(userId);
      existingOrder!.decreaseProductInOrder(productId);
      return res.status(200).send('DELETE api/checkout - OK - Received a DELETE HTTP method');
    } catch (error) {
      return res.status(500).send('DELETE api/checkout server error. Received a DELETE HTTP method');
    }
  });
}