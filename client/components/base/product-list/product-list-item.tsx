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
import { IProduct } from "common/types";
import { getCurrentUserId } from "client/consts/current-user";
import { useExchange } from "client/hooks/useExchangeValue";
import { useProductAndGroups } from "client/hooks/useProductAndGroups";

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
  const toast = useToast();
  const { addProductToOrder } = api.checkout;
  const {
    state: { currentExchangeValue: exchangeValue },
  } = useExchange();
  const { getData } = useProductAndGroups();
  const currentUserId = getCurrentUserId();

  const handleAdd = async () => {
    addProductToOrder({
      userId: currentUserId,
      product,
      dec: false,
    });
    await getData();
    toast({
      title: `позиция добавлена в корзину`,
      description: `${product.productTitle}`,
      status: "success",
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
              onClick={handleAdd}
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
