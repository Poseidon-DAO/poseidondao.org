import 'styles/globals.css'
import type { AppProps } from 'next/app'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { MoralisProvider } from "react-moralis";
import store from 'redux/store';
import IndexNavbar from 'components/Navbars/IndexNavbar';
import Footer from "components/Footer/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <MoralisProvider
        appId={process.env.NEXT_PUBLIC_MORALIS_ID!}
        serverUrl={process.env.NEXT_PUBLIC_MORALIS_URL!}
      >
        <ToastContainer/>
        <IndexNavbar />
        <Component {...pageProps} />
        <Footer />
      </MoralisProvider>
    </Provider>
  );
}

export default MyApp