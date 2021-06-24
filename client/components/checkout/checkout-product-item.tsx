import React from "react";
import {
  Box,
  Button,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useExchangeValueSelector } from "client/store/exchange/selectors";
import api from "client/api";
import { OrderedProduct } from "common/types";
import { getCurrentUserId } from "client/consts/current-user";

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
  const exchangeValue = useExchangeValueSelector();
  const currentUserId = getCurrentUserId();

  const { addProductToOrder, deleteProductFromOrder } = api.checkout;

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
              onClick={() =>
                addProductToOrder({
                  dec: false,
                  product,
                  userId: currentUserId,
                })
              }
              size="sm"
              colorScheme="teal"
              variant="outline"
            >
              +
            </Button>

            <Button
              onClick={() =>
                deleteProductFromOrder({
                  product,
                  userId: currentUserId,
                  dec: true,
                })
              }
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
