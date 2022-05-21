import type { AppProps } from 'next/app'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { MoralisProvider } from "react-moralis";
import "assets/css/nucleo-icons.css";
import store from 'redux/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <MoralisProvider
        appId={process.env.NEXT_PUBLIC_MORALIS_ID!}
        serverUrl={process.env.NEXT_PUBLIC_MORALIS_URL!}
      >
        <ToastContainer />
        <Component {...pageProps} />
      </MoralisProvider>
    </Provider>
  );
}

export default MyApp