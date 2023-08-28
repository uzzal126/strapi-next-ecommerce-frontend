import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { setAuthenticated, setUnauthenticated } from "../service/authSlice";

const useAuth = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const isAuthenticated = Cookies.get("TOKEN");
        if (isAuthenticated) {
            dispatch(setAuthenticated());
        } else {
            dispatch(setUnauthenticated());
        }
    }, []);
};

export default useAuth;
