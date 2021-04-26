import { onUserCheckoutOrderUpdate } from "../../socket-handler";
import { TUserId, IUserOrder, OrderedProduct, TProductId } from "../types";

export class UserOrder implements IUserOrder {
  public userId: TUserId;
  products: Array<OrderedProduct> = [];

  constructor(userId: TUserId) {
    this.userId = userId;
  }

  private findIndexOfProductById(productId: TProductId) {
    return this.products.findIndex(product => product.productId === productId);
  }
  private pushNewProductToOrder(newProduct: OrderedProduct) {
    this.products.push(newProduct)
  }
  private removeProductFromOrder(idx: number) {
    this.products = [...this.products.filter((_, index) => index !== idx)];
  }
  private clearAllProducts() {
    this.products = [];
    this.updateUserOrderSocket();
  }
  private updateProductQuantity({ idx, inc }: { idx: number, inc: boolean }) {
    this.products[idx] = ({
      ...this.products[idx],
      quantity: inc ? this.products[idx].quantity++ : this.products[idx].quantity--,
    });
    if (this.products[idx].quantity === 0) this.removeProductFromOrder(idx);
    this.updateUserOrderSocket();
  }
  private updateUserOrderSocket() {
    onUserCheckoutOrderUpdate(this.products);
  }

  public async getOrderedProducts() {
    await Promise.resolve();
    return this.products;
  }

  public async addProductToOrder(newProduct: OrderedProduct) {
    const idx = this.findIndexOfProductById(newProduct.productId);
    const foundIdxPredicate = idx > (-1);
    await Promise.resolve();
    return foundIdxPredicate ? this.updateProductQuantity({ idx, inc: true }) : this.pushNewProductToOrder(newProduct);
  };

  public async decreaseProductInOrder(productId: TProductId) {
    const idx = this.findIndexOfProductById(productId);
    this.updateProductQuantity({ idx, inc: false });
    await Promise.resolve();
    return;
  };

  public async clearAllProductsFromOrder() {
    this.clearAllProducts();
    await Promise.resolve();
    return;
  }
}

const allOrders = [] as Array<UserOrder>;
const getOrdersByUserId = (userId: TUserId) => allOrders.find(order => order.userId === userId);
const pushNewOrderWithUserId = (order: UserOrder) => allOrders.push(order);

export {
  getOrdersByUserId,
  pushNewOrderWithUserId,
}
