export interface IExchangeState {
  currentExchangeValue: number;
  prevExchangeValue: number;
};

export enum EXCHANGE_REDUCER_ACTION_TYPES {
  ASSIGN_CURRENT_EXCHANGE_VALUE = 'ASSIGN_CURRENT_EXCHANGE_VALUE',
  ASSIGN_PREV_EXCHANGE_VALUE = 'ASSIGN_PREV_EXCHANGE_VALUE'
}