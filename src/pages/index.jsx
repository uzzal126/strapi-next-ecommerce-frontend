import Head from "next/head";
import { useSelector } from "react-redux";
import Hero from "../components/hero/Hero";
import NewProducts from "../components/NewProducts";
import CategoryWrapper from "../components/category/CategoryWrapper";
import useAuth from "../hooks/useAuth";

const Home = () => {
    useAuth();
    const { isAuthenticated } = useSelector((state) => state.auth);
    return (
        <>
            <Head>
                <title>Home</title>
                <meta
                    name="description"
                    content="This meta description is for home page"
                />
            </Head>
            <div className="test">
                {isAuthenticated ? (
                    <h2>This is authenticated user</h2>
                ) : (
                    <h2>This is unAuthenticated user</h2>
                )}
            </div>
            <Hero />
            <CategoryWrapper />
            <NewProducts />
        </>
    );
};

export default Home;
