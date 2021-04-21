import React from 'react';
import { Provider } from 'react-redux';
import { useStore } from '../client/store';
import { ThemeProvider, theme, CSSReset } from '@chakra-ui/react';
// import Navigation from '../client/components/layout/navigation';

export default function App({ Component, pageProps } : { Component: any, pageProps: Record<string, any> }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Provider store={store}>

        {/* <Navigation> */}
          <Component {...pageProps} />
        {/* </Navigation> */}

      </Provider>
    </ThemeProvider>
  );
};
