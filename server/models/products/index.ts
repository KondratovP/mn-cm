import { getNames, getProducts } from "../_stubs";
import { IProductGroup, IProduct, TIncomingProduct, TProductNames } from "../types";
import { onAvailableProductListUpdate } from "../../socket-handler";

export class Products {
  private allProducts: Array<IProduct>;
  private availableGroups: Array<IProductGroup>;
  private static names = getNames();
  private static products = getProducts();
  constructor() { }

  private mapSourceProduct(product: TIncomingProduct, names: TProductNames): IProduct {
    return ({
      usdPrice: product.C,
      quantity: product.P,
      groupId: names[product.G],
      productId: names[product.G]['B'][product.T],
      groupName: names[product.G]['G'],
      productTitle: names[product.G]['B'][product.T]['N'],
    });
  }

  private retrieveProducts() {
    const products = { ...Products.products };
    const names = { ...Products.names }
    this.allProducts = products.Value.Goods.map(
      product => this.mapSourceProduct(product, names)
    );
  };
  private retrieveProductGroups() {
    this.availableGroups = this.allProducts.map(
      ({ groupId, groupName }) => ({
        groupId,
        groupName,
      }));
  }
  private changeProductQuantity(productId: number, dec: boolean) {
    const idx = this.allProducts.findIndex(product => product.productId === productId);
    this.allProducts[idx] = {
      ...this.allProducts[idx],
      quantity: (dec && this.allProducts[idx].quantity > 0)
        ? this.allProducts[idx].quantity - 1
        : !dec && this.allProducts[idx].quantity + 1 || this.allProducts[idx].quantity,
    };
  };
  private updateAvailableProductListSocket() {
    onAvailableProductListUpdate(this.allProducts);
  }

  public async getAvailableProducts() {
    this.retrieveProducts();
    await Promise.resolve();
    return this.allProducts;
  }

  public async getAvailableProductGroups() {
    this.retrieveProducts();
    this.retrieveProductGroups();
    await Promise.resolve();
    return this.availableGroups;
  }

  public async decreaseProductQuantity(productId: number) {
    this.changeProductQuantity(productId, true);
    await Promise.resolve();
    return this.updateAvailableProductListSocket();
  }

  public async increaseProductQuantity(productId: number) {
    this.changeProductQuantity(productId, false);
    this.retrieveProducts();
    await Promise.resolve();
    return this.updateAvailableProductListSocket();
  }
}

export const allProducts = new Products();