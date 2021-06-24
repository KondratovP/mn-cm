import React from "react";
import { ArrowDownIcon, ArrowUpIcon, CheckIcon } from "@chakra-ui/icons";
import {
  useExchangeValueSelector,
  usePreviousExchangeValueSelector,
} from "client/store/exchange/selectors";

const ExchangeValueIndicator: React.FC<{}> = () => {
  const currentExchangeValue = useExchangeValueSelector();
  const prevExchangeValue = usePreviousExchangeValueSelector();

  const isValueRise = prevExchangeValue < currentExchangeValue;
  const isValueDecline = currentExchangeValue < prevExchangeValue;

  return (
    <>
      {currentExchangeValue}
      &nbsp;
      {isValueRise && (
        <span>
          <ArrowUpIcon color={"red"} />
        </span>
      )}
      {isValueDecline && (
        <span>
          <ArrowDownIcon color={"green"} />
        </span>
      )}
      {!isValueRise && !isValueDecline && (
        <span>
          <CheckIcon size="sm" color="gray" />
        </span>
      )}
    </>
  );
};

export default ExchangeValueIndicator;
