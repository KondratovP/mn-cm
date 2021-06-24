import React from "react";
import { useDispatch } from "react-redux";
import { Box, Divider, Heading, Text, Container } from "@chakra-ui/react";
import CheckoutProductItem from "./checkout-product-item";
import { getCurrentUserOrder } from "client/store/checkout/actions";
import { useUserOrderProductsSelector } from "client/store/checkout/selectors";
import { useExchangeValueSelector } from "client/store/exchange/selectors";
import { getCurrentUserId } from "client/consts/current-user";

const CheckoutTotalCost: React.FC<{ totalCost: number }> = ({ totalCost }) => {
  const exchangeValue = useExchangeValueSelector();

  return (
    <Text fontWeight="bold" fontSize="sm">
      Общая Стоимость - {(totalCost * exchangeValue).toFixed(2)} руб
    </Text>
  );
};

const Checkout: React.FC<{}> = ({}) => {
  const userId = getCurrentUserId();
  const products = useUserOrderProductsSelector();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getCurrentUserOrder(userId));
  }, []);

  return (
    <Container maxW={"7xl"} p="12">
      <Heading as="h1">Корзина</Heading>
      <Box
        marginTop={{ base: "1", sm: "5" }}
        display="flex"
        flexDirection="column"
        alignItems="start"
        width="100%"
        marginBottom="23px"
      >
        <Divider orientation="horizontal" marginBottom="19px" />

        {products?.map((product) => (
          <CheckoutProductItem
            product={product}
            title={product.productTitle || "name"}
            price={product.usdPrice || 13}
            quantity={product.quantity || 1}
            key={`${product.productId}-${Math.random()}`}
          />
        ))}

        {products.length ? (
          <CheckoutTotalCost
            totalCost={products?.reduce(
              (acc, product) => acc + product.usdPrice * product.quantity,
              0
            )}
          />
        ) : (
          <div> корзина пуста </div>
        )}
      </Box>
    </Container>
  );
};

export default Checkout;
