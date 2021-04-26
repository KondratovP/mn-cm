import { Express, Request, Response } from 'express';
import { allProducts } from '../models/products';

export function productsRoutes<T extends Express = Express>(app: T) {
  app.get('/products', async (_: Request, res: Response) => {
    try {
      const products = await allProducts.getAvailableProducts();
      return res.status(200).json(JSON.stringify(products));
    } catch (error) {
      console.log('api/products - server error');
      res.status(500).send('api/products - server error');
    }
  });

  app.get('/product-groups', async (_: Request, res: Response) => {
    try {
      const productGroups = await allProducts.getAvailableProductGroups();
      return res.status(200).json(JSON.stringify(productGroups));
    } catch (error) {
      console.log('api/product-groups - server error');
      res.status(500).send('api/product-groups - server error');
    }
  });

  app.post('/products/:productId', (req, res) => {
    console.log(req.params);
    try {
      const { productId, inc }: { productId: number, inc: boolean } = JSON.parse(JSON.stringify(req.params));
      inc && allProducts.increaseProductQuantity(productId) || allProducts.decreaseProductQuantity(productId);
      return res.status(200).send('api/products/:productId - OK - Received a POST HTTP method');
    } catch (error) {
      return res.status(500).send('api/products/:productId - server error. Received a POST HTTP method');
    }
  });
}