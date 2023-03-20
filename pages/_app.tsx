import React, { useEffect } from "react";
import { NextIntlProvider } from "next-intl";
import type { AppProps } from "next/app";
import { Provider, useSelector } from "react-redux";
import { store } from "@/src/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { configureFakeBackend } from "@/src/store/helpers";

import "@/styles/globals.scss";
import "@/styles/component.ui.scss";

function MyApp({ Component, pageProps }: AppProps) {

  const { locale, messages } = useSelector((state:any) => state.localeSlice);
  
  useEffect(() => {
    configureFakeBackend();
  }, []);

  return (
    <NextIntlProvider locale={locale} messages={messages}>
      <Component {...pageProps} />
      <ToastContainer />
    </NextIntlProvider>
  );
}

export default function App(props: AppProps) {
  return (
    <Provider store={store}>
      <MyApp {...props} />
    </Provider>
  )
}
