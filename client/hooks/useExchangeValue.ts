import api from "client/api";
import { makeUseContext } from "./useContext";

interface ExchangeState {
  currentExchangeValue: number;
  prevExchangeValue: number;
  error: boolean
};

const defaultExchangeState = {
  currentExchangeValue: 0,
  prevExchangeValue: 0,
  error: false,
} as ExchangeState;

export const useExchangeContext = makeUseContext(defaultExchangeState);

export const useExchange = () => {
  const { getCurrentExchangeValue } = api.exchange;

  const [{ currentExchangeValue, prevExchangeValue, error }, setExchange] = useExchangeContext();

  const getData = async () => {
    try {
      const val = await getCurrentExchangeValue();
      setExchange(prevState => ({
        ...prevState,
        prevExchangeValue: currentExchangeValue,
        currentExchangeValue: val
      }));
    } catch (error) {
      setExchange(prevState => ({ ...prevState, error: true }))
    }
  };

  return {
    state: { currentExchangeValue, prevExchangeValue, error }, getData
  }
}