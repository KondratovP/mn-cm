import api from "client/api";
import { UserOrder } from "server/models/orders";
import { makeUseContext } from "./useContext";
import { getCurrentUserId } from "client/consts/current-user";

type OrderState = {
  id: string;
  order: UserOrder | null;
  error: boolean;
}

const defaultOrderState: OrderState = {
  id: getCurrentUserId(),
  order: null,
  error: false
};

export const useUserOrderContext = makeUseContext(defaultOrderState);

export const useUserOrder = () => {
  const { getOrderByUserId } = api.checkout;

  const [{ order, id, error }, setOrder] = useUserOrderContext();

  const requestOrder = async () => {
    const userOrder = await getOrderByUserId(id)
      .catch((_) => setOrder(prevState => ({ ...prevState, error: true }))) as UserOrder;
    setOrder(prevState => ({ ...prevState, order: userOrder }));
  };

  return { state: { order, id, error }, requestOrder }
};