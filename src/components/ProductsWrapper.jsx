import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { fetchProducts } from "../service/productSlice";
import ProductCard from "./product/ProductCard";
import LoadingSpinner from "./elements/LoadingSpinner";

const ProductsWrapper = () => {
    const dispatch = useDispatch();
    const { products, isLoading } = useSelector((state) => state.products);
    const router = useRouter();

    const { id } = router.query;
    const pageId = +id;
    const [pageIndex, setPageIndex] = useState(pageId);

    useEffect(() => {
        dispatch(fetchProducts(pageIndex));
    }, [pageIndex, pageId]);

    const prevHandler = () => {
        setPageIndex((prev) => prev - 1);
    };
    const nextHandler = () => {
        setPageIndex((prev) => prev + 1);
    };
    const pageHandler = (number) => {
        router.push(`/shop/page/${number}`);
        setPageIndex(number);
    };

    const numbers = Array.from(
        { length: products.meta?.pagination.pageCount },
        (_, index) => index + 1
    );

    useEffect(() => {
        if (pageIndex === 1) {
            router.push("/shop");
        }
    }, [pageIndex]);

    useEffect(() => {
        router.push(`/shop/page/${pageIndex}`);
    }, [pageIndex]);

    return (
        <div className="py-section">
            <div className="container">
                <h3>Page index: {pageIndex}</h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
                    {products.data?.map((product) => (
                        <div key={product.id}>
                            {isLoading ? (
                                <div className="text-center border min-h-[420px] flex items-center justify-center">
                                    <LoadingSpinner />
                                </div>
                            ) : (
                                <ProductCard product={product} />
                            )}
                        </div>
                    ))}
                </div>
                <div className="flex space-x-2 justify-center mt-10">
                    <button
                        type="button"
                        onClick={prevHandler}
                        className={`px-5 py-2 bg-black text-white disabled:opacity-20 rounded-md hover:bg-primary ${
                            pageIndex === 1 ? "hidden" : ""
                        }`}
                    >
                        Prev
                    </button>
                    {numbers.map((number) => (
                        <button
                            type="button"
                            onClick={() => pageHandler(number)}
                            disabled={number === pageIndex}
                            className="px-5 py-2 bg-black text-white disabled:opacity-20 rounded-md hover:bg-primary"
                            key={number}
                        >
                            {number}
                        </button>
                    ))}
                    <button
                        type="button"
                        onClick={nextHandler}
                        className={`px-5 py-2 bg-black text-white disabled:opacity-20 rounded-md hover:bg-primary ${
                            products.meta?.pagination.pageCount === pageIndex
                                ? "hidden"
                                : ""
                        }`}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductsWrapper;
