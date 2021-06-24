import { onExchangeValueChange } from "../../socket-handler";
import { rescheduleChangeInterval, scheduleUsdRateChange } from "./helpers";

export namespace Exchange {
  let USD_EXCHANGE_VALUE: number = 50;

  export async function getCurrentExchangeValue() {
    return USD_EXCHANGE_VALUE;
  };

  export function assignNewExchangeValue(value: number) {
    onExchangeValueChange({ oldValue: USD_EXCHANGE_VALUE, newValue: value });
    USD_EXCHANGE_VALUE = value;
  };
}

(function init() {
  scheduleUsdRateChange();
  rescheduleChangeInterval();
})();