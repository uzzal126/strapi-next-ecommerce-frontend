import { BsCart2, BsHeart, BsEye, BsShuffle } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { format } from "date-fns";
import { addToCart } from "../../service/cartSlice";
import { addToWishlist } from "../../service/wishlistSlice";

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();

    const addToCartHandler = () => {
        dispatch(addToCart(product));
    };

    const addToWishlistHandler = () => {
        dispatch(addToWishlist(product));
    };

    const { title, price, img, publishedAt } = product.attributes;

    const formattedDate = format(new Date(publishedAt), "dd MMMM, yyyy");

    return (
        <div className="border group">
            <div className="relative">
                <img
                    src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${img?.data.attributes.url}`}
                    alt={title}
                />
                <div className="absolute right-4 top-4 flex flex-col space-y-2 transition-all opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                    <button
                        type="button"
                        onClick={() => addToWishlistHandler(product)}
                        className="bg-white border text-primary text-lg w-10 h-10 leading-none rounded-full text-center hover:bg-primary hover:text-white hover:border-primary transition-all"
                    >
                        <BsHeart className="inline-block" />
                    </button>
                    <button
                        type="button"
                        className="bg-white border text-primary text-lg w-10 h-10 leading-none rounded-full text-center hover:bg-primary hover:text-white hover:border-primary transition-all"
                    >
                        <BsShuffle className="inline-block" />
                    </button>
                    <button
                        type="button"
                        className="bg-white border text-primary text-lg w-10 h-10 leading-none rounded-full text-center hover:bg-primary hover:text-white hover:border-primary transition-all"
                    >
                        <BsEye className="inline-block" />
                    </button>
                </div>
            </div>
            <div className="border-t px-5 py-5">
                <h4 className="text-normal font-medium capitalize">{title}</h4>
                <span className="text-lg font-semibold text-primary mt-2 block">
                    ${price.toFixed(2)}
                </span>
                <button
                    type="button"
                    className="flex items-center border px-5 py-1.5 transition-all hover:bg-primary hover:border-primary hover:text-white mt-4 text-heading font-medium"
                    onClick={() => addToCartHandler(product)}
                >
                    Add to cart <BsCart2 className="ml-2" />
                </button>
                <p className="block">{formattedDate}</p>
            </div>
        </div>
    );
};

export default ProductCard;
