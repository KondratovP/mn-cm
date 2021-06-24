import React from "react";
import ProductList from "client/components/product-list";
import api from "client/api";
import { getCurrentUserId } from "client/consts/current-user";
import { useUserOrderUserIdSelector } from "client/store/checkout/selectors";

export default function Home() {
  const { createUserOrder } = api.checkout;
  const currentUserId = getCurrentUserId();
  const userOrderUserId = useUserOrderUserIdSelector();

  React.useEffect(() => {
    !userOrderUserId && createUserOrder(currentUserId);
  }, []);

  return <ProductList />;
}
