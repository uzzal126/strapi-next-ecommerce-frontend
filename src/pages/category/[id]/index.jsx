import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilterCategories } from "../../../service/categoriesSlice";
import ProductCard from "../../../components/product/ProductCard";
import LoadingSpinner from "../../../components/elements/LoadingSpinner";

const Category = () => {
    const router = useRouter();
    const { filterCategories, isLoading } = useSelector(
        (state) => state.categories
    );
    const dispatch = useDispatch();
    const { id } = router.query;

    useEffect(() => {
        dispatch(fetchFilterCategories(id));
    }, [dispatch, id]);

    const products = filterCategories.data?.attributes.products.data;
    const cat = filterCategories.data?.attributes.title;

    return (
        <>
            <Head>
                <title>{cat}</title>
            </Head>
            <div className="cart-wrapper py-section">
                <div className="container">
                    <div className="grid grid-cols-4 gap-7">
                        {products?.map((product) => (
                            <div key={product.id}>
                                {isLoading ? (
                                    <div className="text-center border py-20">
                                        <LoadingSpinner />
                                    </div>
                                ) : (
                                    <ProductCard product={product} />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Category;
