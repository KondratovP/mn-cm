import React from 'react';
import { getCurrentCurrencyTitle } from '../../consts';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
} from "@chakra-ui/react";

type TCheckoutOrder = any;

interface ICheckoutProps {
  order: TCheckoutOrder;
  totalPrice: number;
}

const Checkout: React.FC<ICheckoutProps> = ({ order, totalPrice }) => {
  const currentCurrencyShortTitle = getCurrentCurrencyTitle().short;

  const renderHeader = () => (
    <Thead >
      <Tr >
        <Th>Наименование товара и описание</Th>
        <Th>Количество</Th>
        <Th>Цена</Th>
        <Th></Th>
      </Tr>
    </Thead>
  );

  const renderBody = () => (
    <Tbody>
      {
        order.map(({ name, price, quantity }) => (
          <Tr>
            <Td className="product-item-name">
              {name}
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
        ))
      }

    </Tbody>
  );

  return (
    <div>
      <Table>
        {renderHeader()}
        {renderBody()}
      </Table>

      <div className="total-price">
        <Text fontSize="md">
          Общая стоимость:
        </Text>
        {totalPrice} {currentCurrencyShortTitle}
      </div>
    </div>
  )
}

export default Checkout;
