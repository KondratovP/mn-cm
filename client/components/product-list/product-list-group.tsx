import { Box, Heading } from "@chakra-ui/layout";
import { Divider } from "@chakra-ui/react";
import { IProduct } from "common/types";
import React from "react";
import ProductListItem from "../product-list-item";

interface ProductListGroupProps {
  groupTitle: string;
  products: Array<IProduct>;
}

const ProductListGroup: React.FC<ProductListGroupProps> = ({
  groupTitle,
  products,
}) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Heading as="h1">{groupTitle}</Heading>
      <Divider orientation="horizontal" />
      {products.map((product) => (
        <ProductListItem
          title={product.productTitle || "name"}
          price={product.usdPrice || 13}
          quantity={product.quantity || "quantity"}
        />
      ))}
    </Box>
  );
};

export default ProductListGroup;
