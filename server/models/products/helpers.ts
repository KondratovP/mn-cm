import { IProduct, IProductGroup, TIncomingProduct, TProductNames } from "common/types";

export const mapSourceProduct = (product: TIncomingProduct, names: TProductNames): IProduct => {
  return ({
    usdPrice: product.C,
    quantity: product.P,
    groupId: product.G,
    productId: product.T,
    groupName: names[(product.G) as unknown as keyof typeof names]['G'],
    // @ts-ignore
    productTitle: names[product.G as unknown as keyof typeof names]['B'][product.T]['N'],
  });
};

export const retrieveProductGroups = (products: IProduct[]): IProductGroup[] => {
  const groups = products.map(
    ({ groupId, groupName }) => ({
      groupId,
      groupName,
    }));
  const distinct = [] as {
    groupId: number,
    groupName: string
  }[];
  groups.forEach((group) => {
    (!distinct.find(gr => gr.groupId === group.groupId)) && distinct.push(group)
  });
  return distinct;
};