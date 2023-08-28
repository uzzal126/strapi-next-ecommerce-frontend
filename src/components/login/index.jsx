import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { setAuthenticated } from "../../service/authSlice";

const LoginForm = () => {
    const router = useRouter();
    const [data, setData] = useState({
        identifier: "",
        password: "",
    });

    const dispatch = useDispatch();

    useEffect(() => {
        if (Cookies.get("TOKEN")) {
            router.push("/profile");
        }
    }, []);

    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const configHeader = {
        headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
        },
    };

    const fetchLogin = async () => {
        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_API_URL}/auth/local`,
                {
                    identifier: data.identifier,
                    password: data.password,
                },
                configHeader
            );
            await Cookies.set("TOKEN", response.data.jwt, {
                expires: 7,
                path: "",
            });
            return response.data.user;
        } catch (error) {
            console.log("Error Occurred", error.message);
        }
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        setData({ identifier: "", password: "" });
        await fetchLogin();

        if (Cookies.get("TOKEN")) {
            router.push("/profile");
        }
        dispatch(setAuthenticated());
    };

    return (
        <form
            className="border p-12 mb-5 space-y-5 rounded-lg bg-white-500"
            onSubmit={submitHandler}
        >
            <div className="">
                <input
                    type="text"
                    name="identifier"
                    placeholder="Name"
                    required
                    className="w-full h-12 px-5 py-3 rounded-md border focus:outline outline-primary"
                    value={data.identifier}
                    onChange={changeHandler}
                />
            </div>
            <div className="">
                <input
                    type="text"
                    name="password"
                    placeholder="Password"
                    required
                    className="w-full h-12 px-5 py-3 rounded-md border focus:outline outline-primary"
                    value={data.password}
                    onChange={changeHandler}
                />
            </div>
            <button
                type="submit"
                className="bg-primary rounded-md text-white px-10 py-3 hover:bg-black"
            >
                Submit
            </button>
        </form>
    );
};

export default LoginForm;
