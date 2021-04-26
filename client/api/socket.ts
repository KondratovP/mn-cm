import { assignCurrExchangeValue, assignPrevExchangeValue } from "client/store/exchange/actions";
import { socket } from "../../pages/_app";

export function onSocketExchangeValueChange(store: any) {
  socket.on("exchangeValueChange", ({ newValue, oldValue }) => {
    store.dispatch(assignCurrExchangeValue(newValue));
    store.dispatch(assignPrevExchangeValue(oldValue));
  })
};