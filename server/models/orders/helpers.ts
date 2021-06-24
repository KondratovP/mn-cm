import { TProductId } from "common/types"
import { UserOrder } from ".";

export const findIndexOfProductById = (order: UserOrder, productId: TProductId) => order.products.findIndex(product => product.productId === productId);

export const updateProductQuantity = (order: UserOrder, { idx, inc }: { idx: number, inc: boolean }) => {
  order.products[idx] = ({
    ...order.products[idx],
    quantity: inc ? ++order.products[idx].quantity : --order.products[idx].quantity,
  });
  if (order.products[idx].quantity === 0) {
    order.products = [...order.products.filter((_, index) => index !== idx)]
  }
}