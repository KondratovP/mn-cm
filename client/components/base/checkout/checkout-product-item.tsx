import React from "react";
import {
  Box,
  Button,
  Link,
  Stack,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import api from "client/api";
import { OrderedProduct } from "common/types";
import { useUserOrder } from "client/hooks/useUserOrder";
import { useExchange } from "client/hooks/useExchangeValue";

interface CheckoutProductItemProps {
  price: number;
  title: string;
  product: OrderedProduct;
  quantity: number;
}

const CheckoutProductItem: React.FC<CheckoutProductItemProps> = ({
  price,
  title,
  product,
  quantity,
}) => {
  const toast = useToast();
  const { addProductToOrder, deleteProductFromOrder } = api.checkout;
  const {
    state: { currentExchangeValue: exchangeValue },
  } = useExchange();
  const {
    state: { id },
    requestOrder,
  } = useUserOrder();

  const add = () => {
    addProductToOrder({
      dec: false,
      product,
      userId: id,
    });
    requestOrder();
    toast({
      title: `позиция добавлена в корзину`,
      description: `${product.productTitle}`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const remove = () => {
    deleteProductFromOrder({
      product,
      userId: id,
      dec: true,
    });
    requestOrder();
    toast({
      title:
        (quantity < 2 && `позиция удалена из корзины`) ||
        "количество уменьшено",
      description: `${product.productTitle}`,
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <>
      <Box
        background="primary"
        width="100%"
        display="flex"
        flex="1"
        position="relative"
        alignItems="center"
        justifyContent="space-between"
        marginBottom="9px"
        borderBottom="1px"
        borderColor="#edeaea"
        paddingBottom="9px"
      >
        <Box width={{ base: "100%", sm: "85%" }} zIndex="2">
          <Link
            maxWidth=""
            textDecoration="none"
            _hover={{ textDecoration: "none" }}
            textOverflow="ellipsis"
          >
            {title}
          </Link>

          <Text fontWeight="bold" fontSize="sm">
            Цена {(price * exchangeValue * quantity).toFixed(2)} руб
          </Text>
          <Text fontWeight="normal" fontSize="sm">
            ({quantity} шт.)
          </Text>
        </Box>

        <Box
          display="flex"
          flex="1"
          alignItems="center"
          justifyContent="center"
          marginTop={{ base: "3", sm: "0" }}
        >
          <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
            <Text as="b"> </Text>
          </Link>

          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize="lg"
          ></Text>

          <Stack direction="row" spacing={4} align="center">
            <Button
              onClick={add}
              size="sm"
              colorScheme="teal"
              variant="outline"
            >
              +
            </Button>

            <Button
              onClick={remove}
              size="sm"
              colorScheme="teal"
              variant="outline"
            >
              -
            </Button>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default CheckoutProductItem;
