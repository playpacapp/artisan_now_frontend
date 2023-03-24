import React, { useEffect } from "react";
import { NextIntlProvider } from "next-intl";
import type { AppProps } from "next/app";
import { Provider, useSelector } from "react-redux";
import { store } from "@/src/store";
import { ToastContainer } from "react-toastify";

import "@/styles/globals.scss";
import "@/styles/component.ui.scss";
import "react-toastify/dist/ReactToastify.css";

// language files, containing translations for each message key
import enUSMessages from '@/message/en.json';
import esMessages from '@/message/es.json';

// A map of supported locales to their corresponding language files
const LOCALES_MAP = {
  'en': enUSMessages,
  'es': esMessages
};

function MyApp({ Component, pageProps }: AppProps) {

  // const { locale } = useSelector((state: any) => state.localeSlice);
  const locale = "en"
  const messages = LOCALES_MAP[locale as "en" | "es"]

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
