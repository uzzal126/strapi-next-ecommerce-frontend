import Head from "next/head";
import NewProducts from "../../components/NewProducts";

const ShopView = () => {
    return (
        <>
            <Head>
                <title>Shop</title>
            </Head>
            <NewProducts />
        </>
    );
};

export default ShopView;
