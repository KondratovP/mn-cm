type CurrentCurrency = Record<'title' | 'shortTitle', string>
export const CURRENT_CURRENCY: CurrentCurrency = {
  title: 'рубль',
  shortTitle: 'руб.'
}

export function getCurrentCurrencyTitle() {
  return CURRENT_CURRENCY;
}