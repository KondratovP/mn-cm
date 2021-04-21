export function convertUsdToRub(currentCurrencyAmount: number, exchangeValue: number) {
  const usdValue = exchangeValue;
  return currentCurrencyAmount * usdValue;
}