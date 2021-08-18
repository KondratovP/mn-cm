import React from "react";
import socketIOClient from "socket.io-client";
import {
  ThemeProvider,
  theme,
  CSSReset,
  ChakraProvider,
} from "@chakra-ui/react";
import { SOCKET_ENDPOINT } from "../client/consts/endpoints";
import { onSocketExchangeValueChange } from "../client/api/socket";
import Navigation from "../client/components/layout";
import { useExchange } from "client/hooks/useExchangeValue";

const initSocket = () => socketIOClient(SOCKET_ENDPOINT);
export const socket = initSocket();

export default function App({
  Component,
  pageProps,
}: {
  Component: React.ComponentType;
  pageProps: Record<string, any>;
}) {
  const { getData } = useExchange();
  onSocketExchangeValueChange(getData);

  return (
    <ChakraProvider>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <>
          <Navigation />
          <Component {...pageProps} />
        </>
      </ThemeProvider>
    </ChakraProvider>
  );
}
