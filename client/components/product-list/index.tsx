import React from "react";
import { Box, Heading, Container } from "@chakra-ui/react";
import {
  getCurrentAvailableProducts,
  getCurrentAvailableProductGroups,
} from "client/store/products/actions";
import { useDispatch } from "react-redux";
import {
  useProductGroupsSelector,
  useProductsSelector,
} from "client/store/products/selectors";
import ProductListGroup from "./product-list-group";

const ProductList = () => {
  const dispatch = useDispatch();

  const products = useProductsSelector();
  const productGroups = useProductGroupsSelector();

  React.useEffect(() => {
    dispatch(getCurrentAvailableProducts());
    dispatch(getCurrentAvailableProductGroups());
  }, []);

  return (
    <Container maxW={"7xl"} p="12">
      <Heading as="h1">{"Каталог"}</Heading>
      <Box
        marginTop={{ base: "1", sm: "5" }}
        display="flex"
        flexDirection={{ base: "column", sm: "column" }}
        justifyContent="space-between"
        alignItems="center"
      >
        {productGroups?.map((group) => (
          <ProductListGroup
            key={`${group.groupId + Math.random()}`}
            groupTitle={group.groupName}
            products={products.filter(
              (product) => product.groupId === group.groupId
            )}
          />
        ))}
      </Box>
    </Container>
  );
};

export default ProductList;
