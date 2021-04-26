import { getRandomInRange } from "../../../common/utils";
import { onExchangeValueChange } from "../../socket-handler";
import { TIntervalMillisecondsValue } from "../types";

export namespace Exchange {
  let USD_EXCHANGE_VALUE: number = 50;

  export function getCurrentExchangeValue() {
    return USD_EXCHANGE_VALUE;
  };

  export function assignNewExchangeValue(value: number) {
    onExchangeValueChange({ oldValue: USD_EXCHANGE_VALUE, newValue: value });
    USD_EXCHANGE_VALUE = value;
  };
}

let executor: NodeJS.Timeout;

const changeExchangeValueRandom = () => {
  const currentExchangeValue = Exchange.getCurrentExchangeValue();
  const changeAmount = getRandomInRange(1, (currentExchangeValue - currentExchangeValue * 0.8)) * 0.985;
  const isIncrease = Math.round(Math.random());
  const newValue: number = currentExchangeValue > 350 && 99
    || !isIncrease && currentExchangeValue > 31
    ? (currentExchangeValue - changeAmount)
    : (currentExchangeValue + changeAmount);
  Exchange.assignNewExchangeValue(Number(newValue.toFixed(2)));
}

function scheduleUsdRateChange() {
  const intervalMillisecondsValue: TIntervalMillisecondsValue = (20000 / getRandomInRange(10, 18));
  executor = setInterval(() => changeExchangeValueRandom(), intervalMillisecondsValue);
}

function clearChangeInterval() {
  clearInterval(executor);
}

function rescheduleChangeInterval() {
  setInterval(() => {
    clearChangeInterval();
    scheduleUsdRateChange();
  }, 100000);
}

function init() {
  scheduleUsdRateChange();
  rescheduleChangeInterval();
}

init();
