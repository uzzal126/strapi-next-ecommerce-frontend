import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BsCartDash, BsXLg } from "react-icons/bs";
import { toggleMiniCart, getTotalPrice } from "../../service/cartSlice";
import MiniCartProductItem from "./MiniCartProductItem";

const MiniCart = () => {
    const { isMiniCartOpen, cart, totalPrice } = useSelector(
        (state) => state.cart
    );

    const dispatch = useDispatch();

    const hideMiniCartHandler = () => {
        dispatch(toggleMiniCart(false));
    };

    useEffect(() => {
        dispatch(getTotalPrice());
    }, [cart]);

    return (
        <div
            className={`w-80 bg-gray-100 fixed right-0 top-0 h-screen px-5 py-5 transition-all z-10 ${
                isMiniCartOpen
                    ? "opacity-100 visible translate-x-0"
                    : "opacity-0 invisible translate-x-full"
            }`}
        >
            <div className="header border-b mb-5 pb-5">
                <div className="flex justify-between items-center">
                    <h4 className="text-center text-primary">Cart</h4>
                    <button
                        type="button"
                        className="w-10 h-10 text-center text-primary bg-white leading-none text-lg rounded-full hover:bg-primary hover:text-white transition"
                        onClick={hideMiniCartHandler}
                    >
                        <BsXLg className="inline-block" />
                    </button>
                </div>
            </div>
            <div>
                {cart.length === 0 ? (
                    <div className="empty-cart text-center py-section">
                        <BsCartDash className="text-4xl mb-5 inline-block" />
                        <h4>No items found in cart</h4>
                    </div>
                ) : (
                    <>
                        <div className="product-list">
                            {cart.map((product) => (
                                <MiniCartProductItem
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                        </div>
                        <div className="flex justify-between items-center text-white bg-primary rounded-md px-2.5 py-2">
                            <h6 className="text-white">Total:</h6>
                            <h6 className="bg-white text-primary px-2 py-1 rounded-md">
                                ${totalPrice.toFixed(2)}
                            </h6>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default MiniCart;
