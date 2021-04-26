import React from "react";
import { Provider } from "react-redux";
import { useStore } from "../client/store";
import { ThemeProvider, theme, CSSReset } from "@chakra-ui/react";
import socketIOClient from "socket.io-client";
import { SOCKET_ENDPOINT } from "../client/consts/end-points";
import { onSocketExchangeValueChange } from "../client/api/socket";
import Navigation from "../client/components/layout/navigation";

export const socket = socketIOClient(SOCKET_ENDPOINT);

export default function App({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: Record<string, any>;
}) {
  const store = useStore(pageProps.initialReduxState);
  onSocketExchangeValueChange(store);
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Provider store={store as any}>
        <Navigation />
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}
