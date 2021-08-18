import { changeProductQuantity } from '../../models/products';
import { addProductToOrder, decreaseProductInOrder, getOrdersByUserId, pushNewOrderWithUserId, UserOrder } from '../../models/orders';
import { GetCheckoutDTO_Req, PostProductsDTO, PutCheckoutDTO, DeleteCheckoutDTO } from 'common/types';

export const productsPostAction = async ({ productId }: PostProductsDTO) => {
  changeProductQuantity({ productId, dec: false });
  return true;
};

export const productsDeleteAction = async ({ productId }: PostProductsDTO) => {
  changeProductQuantity({ productId, dec: true });
  return true;
};

export const checkoutPostAction = async ({ userId }: GetCheckoutDTO_Req) => {
  pushNewOrderWithUserId({ order: { userId, products: [] } })
  return true;
};

export const checkoutPutAction = async ({ userId, dec, product }: PutCheckoutDTO) => {
  dec && decreaseProductInOrder({ order: await getOrdersByUserId({ userId }) as UserOrder, product });
  !dec && addProductToOrder({ order: await getOrdersByUserId({ userId }) as UserOrder, newProduct: product });
  return true;
};

export const checkoutDeleteAction = async ({ userId, product }: DeleteCheckoutDTO) => {
  decreaseProductInOrder({ order: await getOrdersByUserId({ userId }) as UserOrder, product });
  return true;
};