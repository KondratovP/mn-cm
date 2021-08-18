import React from "react";
import { Box, Heading, Container } from "@chakra-ui/react";
import ProductListGroup from "./product-list-group";
import { useProductAndGroups } from "client/hooks/useProductAndGroups";

const ProductList = () => {
  const {
    state: { products, groups, error },
    getData,
  } = useProductAndGroups();

  React.useEffect(() => {
    getData();
  }, []);

  return (
    (!error && (
      <Container maxW={"7xl"} p="12">
        <Heading as="h1">{"Каталог"}</Heading>
        <Box
          marginTop={{ base: "1", sm: "5" }}
          display="flex"
          flexDirection={{ base: "column", sm: "column" }}
          justifyContent="space-between"
          alignItems="center"
        >
          {groups?.map((group) => (
            <ProductListGroup
              key={`${group.groupId + Math.random()}`}
              groupTitle={group.groupName}
              products={
                (products &&
                  products.filter(
                    (product) => product.groupId === group.groupId
                  )) ||
                []
              }
            />
          ))}
        </Box>
      </Container>
    )) || <>Error</>
  );
};

export default ProductList;
