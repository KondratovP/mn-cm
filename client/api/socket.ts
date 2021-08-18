import { socket } from "../../pages/_app";

export function onSocketExchangeValueChange(setExchange: (cb: <T>(prevState: T) => T) => void) {
  socket.on("exchangeValueChange", ({ newValue, oldValue }) => {
    setExchange(prevState => ({
      ...prevState,
      prevExchangeValue: oldValue,
      currentExchangeValue: newValue
    }));
  })
};