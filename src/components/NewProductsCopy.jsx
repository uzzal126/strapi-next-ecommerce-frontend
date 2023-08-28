import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, getPageIndex } from "../service/productSlice";
import ProductCard from "./product/ProductCard";
import LoadingSpinner from "./elements/LoadingSpinner";

const NewProducts = () => {
    const dispatch = useDispatch();
    const { products, isLoading, pageNumber } = useSelector(
        (state) => state.products
    );
    const [pageIndex, setPageIndex] = useState(pageNumber);

    useEffect(() => {
        dispatch(fetchProducts(pageIndex));
    }, [pageIndex]);

    const prevHandler = () => {
        setPageIndex((prev) => prev - 1);
    };
    const nextHandler = () => {
        setPageIndex((prev) => prev + 1);
    };

    const pageHandler = (number) => {
        setPageIndex(number);
    };

    useEffect(() => {
        dispatch(getPageIndex(pageIndex));
        dispatch(getPageIndex(pageIndex));
    }, [dispatch, pageIndex]);

    const numbers = Array.from(
        { length: products.meta?.pagination.pageCount },
        (_, index) => index + 1
    );

    return (
        <div className="py-section">
            <div className="container">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
                    {products.data?.map((product) => (
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
                <div className="flex space-x-2 justify-center mt-10">
                    <button
                        type="button"
                        onClick={prevHandler}
                        disabled={pageIndex === 1}
                        className={`border px-5 py-2 bg-black text-white disabled:opacity-20 rounded-md ${
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
                            className="border px-5 py-2 bg-black text-white disabled:opacity-20 rounded-md"
                            key={number}
                        >
                            {number}
                        </button>
                    ))}
                    <button
                        type="button"
                        onClick={nextHandler}
                        disabled={
                            products.meta?.pagination.pageCount === pageIndex
                        }
                        className={`border px-5 py-2 bg-black text-white disabled:opacity-20 rounded-md ${
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

export default NewProducts;
