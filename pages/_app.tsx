import "styles/globals.scss";

import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import theme from "styles/theme";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
