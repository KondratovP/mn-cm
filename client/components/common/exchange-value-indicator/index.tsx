import React from "react";
import { ArrowDownIcon, ArrowUpIcon, CheckIcon } from "@chakra-ui/icons";
import { useExchange } from "client/hooks/useExchangeValue";

const ValueIndicatorIcon: React.FC<{ val: "rise" | "decline" | "eq" }> = ({
  val,
}) =>
  ({
    rise: (
      <span>
        <ArrowUpIcon color={"red"} />
      </span>
    ),
    decline: (
      <span>
        <ArrowDownIcon color={"green"} />
      </span>
    ),
    eq: (
      <span>
        <CheckIcon size="sm" color="gray" />
      </span>
    ),
  }[val]);

const ExchangeValueIndicator: React.FC<{}> = () => {
  const {
    state: { currentExchangeValue, prevExchangeValue },
  } = useExchange();

  const isValueRise = prevExchangeValue < currentExchangeValue;
  const isValueDecline = currentExchangeValue < prevExchangeValue;

  const variant =
    (isValueRise && "rise") || (isValueDecline && "decline") || "eq";

  return (
    <>
      {currentExchangeValue}
      &nbsp;
      <ValueIndicatorIcon val={variant} />
    </>
  );
};

export default ExchangeValueIndicator;
