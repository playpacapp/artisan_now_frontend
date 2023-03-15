import React, { useEffect, useState } from "react";
import { NextIntlProvider } from "next-intl";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/src/store";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { configureFakeBackend } from "@/src/store/helpers";

import "@/styles/globals.scss";
import "@/styles/component.ui.scss";
 
export default function App({ Component, pageProps }: AppProps) {
  const local = "en-Us";

  useEffect(()=>{
    configureFakeBackend()
  },[])
  
  return (
    <NextIntlProvider locale={local} messages={pageProps.messages}>
      <Provider store={store}>
        <Component {...pageProps} />
        <ToastContainer />
      </Provider>
    </NextIntlProvider>
  );
}