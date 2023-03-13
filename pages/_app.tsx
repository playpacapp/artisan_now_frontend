import "@/styles/globals.scss";
import "@/styles/component.ui.scss";
import { NextIntlProvider } from "next-intl";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/src/store";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  const local = "en-Us";

  return (
    <NextIntlProvider locale={local} messages={pageProps.messages}>
      <Provider store={store}>
        <Component {...pageProps} />
        <ToastContainer />
      </Provider>
    </NextIntlProvider>
  );
}
