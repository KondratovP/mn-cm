import { getNames, getProducts } from "../_stubs";
import { IProduct, TIncomingProduct } from "../types";
import { mapSourceProduct, retrieveProductGroups } from "./helpers";

export type Products = IProduct[];

let allProducts = [] as Products;

async function retrieveProducts() {
  const products = { ...getProducts() };
  const names = { ...getNames() };
  allProducts = products.Value.Goods.map(
    (product: TIncomingProduct) => mapSourceProduct(product, names)
  );
};

retrieveProducts();

export const getAllProducts = async () => allProducts;

export const getAllProductGroups = async () => retrieveProductGroups(await getAllProducts());

interface IChangeProductQuantityParams { productId: number, dec: boolean }
export const changeProductQuantity = async ({ productId, dec }: IChangeProductQuantityParams) => {
  const products = await getAllProducts();
  const idx = products.findIndex(product => product.productId === productId);
  products[idx] = {
    ...products[idx],
    quantity: (dec && products[idx].quantity > 0)
      ? --products[idx].quantity
      : !dec && ++products[idx].quantity || products[idx].quantity,
  };
  return;
};