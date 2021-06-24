import { Box, Heading } from "@chakra-ui/layout";
import { Divider } from "@chakra-ui/react";
import { IProduct } from "common/types";
import React from "react";
import ProductListItem from "./product-list-item";

interface ProductListGroupProps {
  groupTitle: string;
  products: Array<IProduct>;
}

const ProductListGroup: React.FC<ProductListGroupProps> = ({
  groupTitle,
  products,
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="start"
      width="100%"
      marginBottom="23px"
    >
      <Heading marginBottom="9px" as="h5" fontWeight="normal" size="lg">
        {groupTitle}
      </Heading>
      <Divider orientation="horizontal" marginBottom="19px" />
      {products.map((product) => (
        <ProductListItem
          key={`${product.productId}${Math.random()}`}
          title={product.productTitle || "name"}
          price={product.usdPrice || 13}
          quantity={product.quantity || 1}
          product={product}
        />
      ))}
    </Box>
  );
};

export default ProductListGroup;
