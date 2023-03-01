import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import store from "@/store";
// import Search from '@/components/meetups/searchmovie';
import { Provider } from "react-redux";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
