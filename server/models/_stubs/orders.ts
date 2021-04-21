type TUserId = string;
export interface IOrder {
  userId: TUserId;
  products: Array<any>;
}
const allOrders = [] as Array<IOrder>;

export const getOrderById = (userId: TUserId) => allOrders.filter(order => order[userId] === userId)[0];