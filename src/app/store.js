import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../service/cartSlice";
import productReducer from "../service/productSlice";
import wishlistReducer from "../service/wishlistSlice";
import categoriesReducer from "../service/categoriesSlice";
import authReducer from "../service/authSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productReducer,
        wishlist: wishlistReducer,
        categories: categoriesReducer,
        auth: authReducer,
    },
});

export default store;
