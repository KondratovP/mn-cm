import React from "react";
import { Box, Heading, Container } from "@chakra-ui/react";

const products = [{}, {}, {}] as any[];

const ProductList = () => {
  return (
    <Container maxW={"7xl"} p="12">
      <Heading as="h1">{"Каталог"}</Heading>
      <Box
        marginTop={{ base: "1", sm: "5" }}
        display="flex"
        flexDirection={{ base: "column", sm: "column" }}
        justifyContent="space-between"
        alignItems="center"
      ></Box>
    </Container>
  );
};

export default ProductList;
