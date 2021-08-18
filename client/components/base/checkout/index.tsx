import React from "react";
import { Box, Divider, Heading, Text, Container } from "@chakra-ui/react";
import { useUserOrder } from "client/hooks/useUserOrder";
import CheckoutProductItem from "./checkout-product-item";
import { useExchange } from "client/hooks/useExchangeValue";

const CheckoutTotalCost: React.FC<{ totalCost: number }> = ({ totalCost }) => {
  const {
    state: { currentExchangeValue: exchangeValue },
  } = useExchange();
  const displayCost = (totalCost * exchangeValue).toFixed(2);

  return (
    <Text fontWeight="bold" fontSize="sm">
      Общая Стоимость - {displayCost} руб
    </Text>
  );
};

const Checkout: React.FC<{}> = ({}) => {
  const {
    state: { error, order },
    requestOrder,
  } = useUserOrder();
  const { products } = order! || { products: [] };

  React.useEffect(() => {
    requestOrder();
  }, []);

  return (
    (!error && (
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

          {products?.length ? (
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
    )) || <>Error</>
  );
};

export default Checkout;
