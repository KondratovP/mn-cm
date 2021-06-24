import { Exchange } from ".";
import { getRandomInRange } from "../../../common/utils";
import { TIntervalMillisecondsValue } from "../types";

let executor: NodeJS.Timeout;

const changeExchangeValueRandom = async () => {
  const currentExchangeValue = await Exchange.getCurrentExchangeValue();
  const changeAmount = getRandomInRange(1, (currentExchangeValue - currentExchangeValue * 0.8)) * 0.985;
  const isIncrease = Math.round(Math.random());
  const newValue: number = currentExchangeValue > 350 && 99
    || !isIncrease && currentExchangeValue > 31
    ? (currentExchangeValue - changeAmount)
    : (currentExchangeValue + changeAmount);
  Exchange.assignNewExchangeValue(Number(newValue.toFixed(2)));
}

export function scheduleUsdRateChange() {
  const intervalMillisecondsValue: TIntervalMillisecondsValue = (40000 / getRandomInRange(10, 18));
  executor = setInterval(() => changeExchangeValueRandom(), intervalMillisecondsValue);
}

export function rescheduleChangeInterval() {
  setInterval(() => {
    clearInterval(executor);
    scheduleUsdRateChange();
  }, 100000);
}