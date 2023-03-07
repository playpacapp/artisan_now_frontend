import "@/styles/globals.css";
import { NextIntlProvider } from "next-intl";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const local = 'en-Us'
  return (
    <NextIntlProvider locale={local} messages={pageProps.messages}>
      <Component {...pageProps} />
    </NextIntlProvider>
  );
}