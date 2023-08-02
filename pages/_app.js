"use client";

import { ChakraBaseProvider } from "@chakra-ui/react";

import theme from "../theme";
import Fonts from "../theme/Fonts";

const App = ({ Component, pageProps }) => (
  <>
    <ChakraBaseProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraBaseProvider>
  </>
);

export default App;
