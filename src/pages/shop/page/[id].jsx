import Head from "next/head";
import ProductsWrapper from "../../../components/ProductsWrapper";

const ShopView = () => {
    return (
        <>
            <Head>
                <title>Shop page</title>
            </Head>
            <ProductsWrapper />
        </>
    );
};

export default ShopView;
