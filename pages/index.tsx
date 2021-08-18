import React from "react";
import ProductList from "client/components/base/product-list";
import api from "client/api";
import { getCurrentUserId } from "client/consts/current-user";

export default function Home() {
  const { createUserOrder } = api.checkout;
  const currentUserId = getCurrentUserId();

  React.useEffect(() => {
    createUserOrder(currentUserId);
  }, []);

  return <ProductList />;
}
