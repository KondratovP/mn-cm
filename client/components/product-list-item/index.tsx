import React from "react";
import {
  Box,
  Button,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

interface ProductListItemProps {
  [key: string]: any;
}

//    <Th>Наименование товара</Th>
//    <Th>Количество</Th>
//    <Th>Цена</Th>

const ProductListItem: React.FC<ProductListItemProps> = ({
  price,
  title,
  quantity,
}) => {
  return (
    <>
      <Box
        display="flex"
        flex="1"
        marginRight="3"
        position="relative"
        alignItems="center"
      >
        <Box
          width={{ base: "100%", sm: "85%" }}
          zIndex="2"
          marginLeft={{ base: "0", sm: "5%" }}
          marginTop="5%"
        >
          <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
            {price}
            {title}
            {quantity}
          </Link>
        </Box>
        {/* <Box zIndex="1" width="100%" position="absolute" height="100%">
          <Box
            bgGradient={useColorModeValue(
              "radial(orange.600 1px, transparent 1px)",
              "radial(orange.300 1px, transparent 1px)"
            )}
            backgroundSize="20px 20px"
            opacity="0.4"
            height="100%"
          />
        </Box> */}
      </Box>
      <Box
        display="flex"
        flex="1"
        alignItems="center"
        justifyContent="center"
        marginTop={{ base: "3", sm: "0" }}
      >
        <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
          <Text as="b"> Blog article title </Text>
        </Link>

        <Text
          as="p"
          marginTop="2"
          color={useColorModeValue("gray.700", "gray.200")}
          fontSize="lg"
        >
          Lorem ipsum, dolor sit.
        </Text>

        <Stack direction="row" spacing={4} align="center">
          <Button size="md" colorScheme="teal" variant="outline">
            Добавить
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default ProductListItem;
