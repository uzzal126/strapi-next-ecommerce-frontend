import { useDispatch, useSelector } from "react-redux";
import { BsCartPlus } from "react-icons/bs";
import { toggleMiniCart } from "../../service/cartSlice";

const MiniCartCounter = () => {
    const dispatch = useDispatch();
    const { cart, totalPrice } = useSelector((state) => state.cart);

    const miniCartHandler = () => {
        dispatch(toggleMiniCart(true));
    };

    return (
        <button
            type="button"
            className="w-24 fixed right-0 top-1/2 -translate-y-1/2 bg-primary px-3 py-3 text-center rounded-tl-lg rounded-bl-lg"
            onClick={miniCartHandler}
        >
            <BsCartPlus className=" text-2xl inline-block text-white mb-1.5" />
            <h6 className="mb-2 text-white">{cart.length} Items</h6>
            <h6 className="bg-white px-1.5 py-1 rounded-md">
                ${totalPrice.toFixed(2)}
            </h6>
        </button>
    );
};

export default MiniCartCounter;
