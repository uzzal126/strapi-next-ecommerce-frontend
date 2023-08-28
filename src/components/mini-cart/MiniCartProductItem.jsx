import { useDispatch } from "react-redux";
import { BsXLg } from "react-icons/bs";
import { removeProduct } from "../../service/cartSlice";

const MiniCartProductItem = ({ product }) => {
    const { title, price, img } = product.attributes;
    const dispatch = useDispatch();

    const productRemoveHandler = (id) => {
        dispatch(removeProduct(id));
    };
    return (
        <div className="mini-cart-item relative mb-5 pb-5 border-b">
            <div className="flex ">
                <div className="w-20 h-20 overflow-hidden">
                    <img
                        src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${img.data.attributes.url}`}
                        alt={title}
                    />
                </div>
                <div className="pl-3 pr-10">
                    <h5 className="mb-2">{title}</h5>
                    <h6>
                        ${price} x {product.qty}
                    </h6>
                </div>
                <div className="absolute right-0 top-0">
                    <button
                        type="button"
                        onClick={() => productRemoveHandler(product.id)}
                        className="w-7 h-7 rounded-full text-center text-primary hover:bg-primary hover:text-white leading-none transition"
                    >
                        <BsXLg className="inline-block" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MiniCartProductItem;
