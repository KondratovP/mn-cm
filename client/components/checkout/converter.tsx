import React from "react";
import { useSelector } from "react-redux";
import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";

export function convertUsdToRub(
  currentCurrencyAmount: number,
  exchangeValue: number
) {
  const usdValue = exchangeValue;
  return currentCurrencyAmount * usdValue;
}

const PriceConverted: React.FC<{}> = () => {
  const currentExchangeValue = useSelector(
    (state: any) => state.exchangeReducer.currentExchangeValue
  );
  const prevExchangeValue = useSelector(
    (state: any) => state.exchangeReducer.prevExchangeValue
  );
  const isValueRise = prevExchangeValue < currentExchangeValue;
  const isValueDecline = currentExchangeValue < prevExchangeValue;

  return (
    <div>
      value: {currentExchangeValue}
      {isValueRise && (
        <span>
          &nbsp;
          <ArrowUpIcon color={"red"} />
        </span>
      )}
      {isValueDecline && (
        <span>
          &nbsp;
          <ArrowDownIcon color={"green"} />
        </span>
      )}
    </div>
  );
};

export default PriceConverted;
