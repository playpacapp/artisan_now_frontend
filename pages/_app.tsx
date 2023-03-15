import React, { useEffect, useState } from "react";
import { NextIntlProvider,  } from "next-intl";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/src/store";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { configureFakeBackend } from "@/src/store/helpers";

import "@/styles/globals.scss";
import "@/styles/component.ui.scss";

// language files, containing translations for each message key
import enUSMessages from '@/message/en-US.json';
import esMessages from '@/message/es.json';
import { useRouter } from "next/router";

// The fallback language to use when a translation is not available for the current locale
const DEFAULT_LOCALE = 'en-US';

// A map of supported locales to their corresponding language files
const LOCALES_MAP = {
  'en-US': enUSMessages,
  'es': esMessages
};
 
export default function App({ Component, pageProps }: AppProps) {

  const locale = DEFAULT_LOCALE
  const messages = LOCALES_MAP[locale]

  useEffect(()=>{
    configureFakeBackend()
  },[])

  return (
    <NextIntlProvider locale={locale} messages={messages}>
      <Provider store={store}>
        <Component {...pageProps} />
        <ToastContainer />
      </Provider>
    </NextIntlProvider>
  );
}