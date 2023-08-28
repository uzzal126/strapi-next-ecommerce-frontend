import "../styles/globals.css";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import Header from "../components/Header";
import store from "../app/store";
import "react-toastify/dist/ReactToastify.css";
import MiniCart from "../components/mini-cart/MiniCart";
import MiniCartCounter from "../components/mini-cart/MiniCartCounter";

const MyApp = ({ Component, pageProps }) => {
    return (
        <Provider store={store}>
            <Header />
            <Component {...pageProps} />
            <MiniCart />
            <MiniCartCounter />
            <ToastContainer autoClose={2000} pauseOnHover={false} />
        </Provider>
    );
};

export default MyApp;
