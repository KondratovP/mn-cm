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

let executer: NodeJS.Timeout;

const changeExchangeValueRandom = () => {
  const currentExchangeValue = Exchange.getCurrentExchangeValue();
  const changeAmount = getRandomInRange(1, (currentExchangeValue - 1)) * 0.985;
  const isIncrease = Math.round(Math.random());
  const newValue: number = isIncrease ? (currentExchangeValue + changeAmount) : (currentExchangeValue - changeAmount);
  Exchange.assignNewExchangeValue(newValue);
}

function scheduleUsdRateChange() {
  const intervalMillisecondsValue: TIntervalMillisecondsValue = (20000 / getRandomInRange(50, 80));
  executer = setInterval(() => changeExchangeValueRandom(), intervalMillisecondsValue);
}

function clearChangeInterval() {
  clearInterval(executer);
}

function rescheduleChangeInterval() {
  setInterval(() => {
    clearChangeInterval();
    scheduleUsdRateChange();
  }, 100000);
}

scheduleUsdRateChange();
rescheduleChangeInterval();