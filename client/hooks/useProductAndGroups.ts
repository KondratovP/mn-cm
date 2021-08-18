import api from "client/api";
import { IProduct, IProductGroup } from "common/types";
import { makeUseContext } from "./useContext";

type ProductState = {
  products: IProduct[] | null;
  groups: IProductGroup[] | null;
  error: boolean;
};

const defaultProductState = {
  products: null,
  groups: null,
  error: false,
} as ProductState;

export const useProductContext = makeUseContext(defaultProductState);

export const useProductAndGroups = () => {
  const { getProducts, getProductGroups } = api.products;

  const [{ products, groups, error }, setProduct] = useProductContext();

  const getData = async () => {
    try {
      const prods = await getProducts();
      const groups = await getProductGroups();
      setProduct(prevState => ({
        ...prevState,
        products: prods,
        groups,
      }));
    } catch (error) {
      setProduct(prevState => ({ ...prevState, error: true }))
    }
  };

  return {
    state: { products, groups, error }, getData
  }
}