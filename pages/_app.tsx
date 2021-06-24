import React from "react";
import socketIOClient from "socket.io-client";
import { Provider } from "react-redux";
import { IAppState, useStore } from "../client/store";
import { ThemeProvider, theme, CSSReset } from "@chakra-ui/react";
import { SOCKET_ENDPOINT } from "../client/consts/end-points";
import { onSocketExchangeValueChange } from "../client/api/socket";
import Navigation from "../client/components/layout";

export const socket = socketIOClient(SOCKET_ENDPOINT);

export default function App({
  Component,
  pageProps,
}: {
  Component: React.ComponentType;
  pageProps: Record<string, any>;
}) {
  const store = useStore(pageProps.initialReduxState as IAppState);
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
