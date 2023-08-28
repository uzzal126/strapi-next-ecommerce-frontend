import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BsTrash, BsCartDash } from "react-icons/bs";
import Link from "next/link";
import {
    removeProduct,
    getTotalPrice,
    increaseProductQuantity,
    decreaseProductQuantity,
    clearCart,
} from "../../service/cartSlice";
import Button from "../../components/elements/Button";

const CartView = () => {
    const dispatch = useDispatch();
    const { cart, totalPrice } = useSelector((state) => state.cart);

    const productRemoveHandler = (id) => {
        dispatch(removeProduct(id));
    };

    const increaseHandler = (id) => {
        dispatch(increaseProductQuantity(id));
    };

    const decreaseHandler = (id) => {
        dispatch(decreaseProductQuantity(id));
    };

    const clearCartHandler = () => {
        dispatch(clearCart());
    };

    useEffect(() => {
        dispatch(getTotalPrice());
    }, [cart]);

    return (
        <div className="cart-wrapper py-section">
            <div className="container">
                {cart.length === 0 ? (
                    <div className="empty-cart text-center py-section">
                        <BsCartDash className="text-[50px] mb-5 inline-block" />
                        <h3>No items found in cart</h3>
                    </div>
                ) : (
                    <div className="cart-main">
                        <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs border text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-5">
                                            Image
                                        </th>
                                        <th scope="col" className="px-6 py-5">
                                            Name
                                        </th>
                                        <th scope="col" className="px-6 py-5">
                                            Price
                                        </th>
                                        <th scope="col" className="px-6 py-5">
                                            Quantity
                                        </th>
                                        <th scope="col" className="px-6 py-5">
                                            Subtotal
                                        </th>
                                        <th scope="col" className="px-6 py-5">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map((product) => (
                                        <tr
                                            className="bg-white border dark:bg-gray-800 dark:border-gray-700"
                                            key={product.attributes.id}
                                        >
                                            <td className="px-6 py-4">
                                                <div className="w-24 h-20 overflow-hidden">
                                                    <img
                                                        src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${product.attributes.img.data.attributes.url}`}
                                                        alt={
                                                            product.attributes
                                                                .title
                                                        }
                                                    />
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                {product.attributes.title}
                                            </td>
                                            <td className="px-6 py-4">
                                                ${product.attributes.price}
                                            </td>
                                            <td className="px-6 py-4">
                                                <button
                                                    type="button"
                                                    className="text-2xl pr-2 cursor-pointer hover:text-primary"
                                                    onClick={() =>
                                                        decreaseHandler(
                                                            product.id
                                                        )
                                                    }
                                                >
                                                    -
                                                </button>
                                                {product.qty}
                                                <button
                                                    type="button"
                                                    className="text-2xl pl-2 cursor-pointer hover:text-primary"
                                                    onClick={() =>
                                                        increaseHandler(
                                                            product.id
                                                        )
                                                    }
                                                >
                                                    +
                                                </button>
                                            </td>
                                            <td className="px-6 py-4">
                                                $
                                                {(
                                                    product.attributes.price *
                                                    product.qty
                                                ).toFixed(2)}
                                            </td>
                                            <td className="px-6 py-4">
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        productRemoveHandler(
                                                            product.id
                                                        )
                                                    }
                                                >
                                                    <BsTrash className="text-red-600 text-xl hover:text-primary transition-all" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="flex justify-between mt-10">
                            <Link
                                href="/shop"
                                className="font-medium text-white bg-primary rounded-md px-5 py-3 hover:bg-secondary transition-all"
                            >
                                Continue shopping
                            </Link>
                            <Button clickHandler={clearCartHandler}>
                                Clear shopping cart
                            </Button>
                        </div>
                        <div className="cart-total mt-10">
                            <div className="grid grid-cols-12 gap-7">
                                <div className="col-span-4">
                                    <div className="border p-5">
                                        <h4 className="border-b mb-5 pb-5">
                                            Cart Total
                                        </h4>
                                        <div className="flex justify-between">
                                            <h6>Total price</h6>
                                            <h6>${totalPrice.toFixed(2)}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartView;
