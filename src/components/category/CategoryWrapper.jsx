import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../service/categoriesSlice";
import LoadingSpinner from "../elements/LoadingSpinner";
import CategoryCard from "./CategoryCard";

const CategoryWrapper = () => {
    const { categories, isLoading } = useSelector((state) => state.categories);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategories());
    }, []);
    return (
        <div className="py-section">
            <div className="container">
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold">Popular Categories</h2>
                </div>
                <div className="grid grid-cols-4 gap-7">
                    {categories.data?.map((cat) => (
                        <div key={cat.id}>
                            {isLoading ? (
                                <div className="text-center border">
                                    <LoadingSpinner />
                                </div>
                            ) : (
                                <CategoryCard cat={cat} />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoryWrapper;
