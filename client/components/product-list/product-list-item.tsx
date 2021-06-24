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
import { IProduct } from "common/types";
import { getCurrentUserId } from "client/consts/current-user";

interface ProductListItemProps {
  price: number;
  title: string;
  quantity: number;
  product: IProduct;
}

const ProductListItem: React.FC<ProductListItemProps> = ({
  price,
  title,
  quantity,
  product,
}) => {
  const exchangeValue = useExchangeValueSelector();
  const currentUserId = getCurrentUserId();

  const { addProductToOrder } = api.checkout;

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

          <Text fontStyle="italic" fontSize="sm">
            В наличии {quantity}
          </Text>

          <Text fontWeight="bold" fontSize="sm">
            Цена {(price * exchangeValue).toFixed(2)} руб
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
                  userId: currentUserId,
                  product,
                  dec: false,
                })
              }
              size="sm"
              colorScheme="teal"
              variant="outline"
            >
              Добавить
            </Button>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default ProductListItem;
