import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { fetchUser } from "../../service/authSlice";
import LoadingSpinner from "../../components/elements/LoadingSpinner";
import useAuth from "../../hooks/useAuth";

const ProfileView = () => {
    useAuth()
    const dispatch = useDispatch();
    const { user, isLoading } = useSelector((state) => state.auth);
    const router = useRouter();
    const token = Cookies.get("TOKEN");

    const handleLogout = () => {
        Cookies.remove("TOKEN");
        router.push("/login");
    };

    useEffect(() => {
        if (!token) {
            router.push("/login");
        }
    }, []);

    useEffect(() => {
        dispatch(fetchUser(token));
    }, []);

    return (
        <>
            <Head>
                <title>Profile Page</title>
            </Head>
            <div className="cart-wrapper py-section">
                <div className="container">
                    <div className="grid grid-cols-12">
                        <div className="col-span-8 col-start-3">
                            <div className="bg-white-300 p-10 rounded-lg">
                                {isLoading ? (
                                    <div className="text-center">
                                        <LoadingSpinner />
                                    </div>
                                ) : (
                                    <div className="content">
                                        <h2 className="capitalize">
                                            Hello, {user?.username}
                                        </h2>
                                        <h3>This is your profile page</h3>
                                        <button
                                            type="button"
                                            onClick={handleLogout}
                                        >
                                            Log out
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfileView;
