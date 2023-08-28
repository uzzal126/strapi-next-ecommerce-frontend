import Link from "next/link";
import { BsCart2, BsHeart, BsShuffle } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { setUnauthenticated } from "../service/authSlice";

const Header = () => {
    const { wishlist } = useSelector((state) => state.wishlist);
    const { cart } = useSelector((state) => state.cart);
    const { isAuthenticated } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const router = useRouter();

    const handleLogout = () => {
        Cookies.remove("TOKEN");
        router.push("/login");
        dispatch(setUnauthenticated());
    };

    return (
        <div className="py-5 border-b">
            <div className="container">
                <div className="grid grid-cols-12 items-center">
                    <div className="col-span-3">
                        <div className="logo w-32">
                            <Link href="/">
                                <img src="/images/logo/logo.png" alt="logo" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-span-6">
                        <ul className="flex justify-center">
                            <li className="mr-10 font-semibold hover:text-primary">
                                <Link href="/">Home</Link>
                            </li>
                            <li className="mr-10 font-semibold hover:text-primary">
                                <Link href="/shop">Shop</Link>
                            </li>
                            <li className="mr-10 font-semibold hover:text-primary">
                                <Link href="/wishlist">Wishlist</Link>
                            </li>
                            {isAuthenticated ? (
                                <li className="mr-10 font-semibold hover:text-primary">
                                    <button
                                        type="button"
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </button>
                                </li>
                            ) : (
                                <li className="mr-10 font-semibold hover:text-primary">
                                    <Link href="/login">Login</Link>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className="col-span-3">
                        <ul className="flex justify-end space-x-7">
                            <li>
                                <Link
                                    href="/compare"
                                    className="relative text-xl"
                                >
                                    <BsShuffle />
                                    <span className="w-4 h-4 absolute -top-2 -right-1.5 bg-primary text-[12px] rounded-full text-white text-center leading-4">
                                        0
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/wishlist"
                                    className="relative text-xl"
                                >
                                    <BsHeart />
                                    <span className="w-4 h-4 absolute -top-2 -right-1.5 bg-primary text-[12px] rounded-full text-white text-center leading-4">
                                        {wishlist.length}
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/cart" className="relative text-xl">
                                    <BsCart2 />
                                    <span className="w-4 h-4 absolute -top-2 -right-1.5 bg-primary text-[12px] rounded-full text-white text-center leading-4">
                                        {cart.length}
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
