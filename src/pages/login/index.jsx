import Head from "next/head";
import LoginForm from "../../components/login";

const LoginRegisterView = () => {
    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <div className="cart-wrapper py-section">
                <div className="container">
                    <div className="grid grid-cols-12">
                        <div className="col-span-8 col-start-3">
                            <div className="register">
                                <h3 className="mb-5 text-center">Login</h3>
                                <LoginForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginRegisterView;
