import { Exchange } from ".";
import { getRandomInRange } from "../../../common/utils";

let executor: NodeJS.Timeout;

const changeExchangeValueRandom = async () => {
  const currentExchangeValue = await Exchange.getCurrentExchangeValue();
  const changeAmount = getRandomInRange(1, (currentExchangeValue - currentExchangeValue * 0.8)) * 0.985;
  const isIncrease = Math.round(Math.random());

  const [maxExchangeValue, defaultExchangeValue, minExchangeValue] = [350, 99, 31];
  const isValOverMax = currentExchangeValue > maxExchangeValue;
  const isDecreaseAllowed = !isIncrease && currentExchangeValue > minExchangeValue;

  const newValue: number = isValOverMax && defaultExchangeValue
    || isDecreaseAllowed ? (currentExchangeValue - changeAmount) : (currentExchangeValue + changeAmount);
  Exchange.assignNewExchangeValue(Number(newValue.toFixed(2)));
}

export function scheduleUsdRateChange() {
  const intervalMillisecondsValue = (40000 / getRandomInRange(10, 18));
  executor = setInterval(() => changeExchangeValueRandom(), intervalMillisecondsValue);
}

export function rescheduleChangeInterval() {
  setInterval(() => {
    clearInterval(executor);
    scheduleUsdRateChange();
  }, 100000);
}