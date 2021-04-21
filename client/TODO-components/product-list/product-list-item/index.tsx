import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";

interface ProductListItemProps {
  [key: string]: any
};

export const ProductListItem: React.FC<ProductListItemProps> = ({ price, title, quantity }) => {
  const renderHeader = () => (
    <Thead >
      <Tr >
        <Th>Наименование товара</Th>
        <Th>Количество</Th>
        <Th>Цена</Th>
        <Th></Th>
      </Tr>
    </Thead>
  );

  const renderBody = () => (
    <Tbody>
      <Tr>
        <Td className="product-item-name">
          {title}
        </Td>
        <Td className="product-item-quantity">
          {price}
        </Td>
        <Td className="product-item-price">
          {quantity}
        </Td>
        <Td className="product-item-action">
          <button>Удалить</button>
        </Td>
      </Tr>
    </Tbody>
  );

  return (
    <div>
      <Table>
        {renderHeader()}
        {renderBody()}
      </Table>
    </div>
  )
}

export default ProductListItem;