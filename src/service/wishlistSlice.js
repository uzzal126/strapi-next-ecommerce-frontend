import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    wishlist: [],
};

export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addToWishlist: (state, action) => {
            const product = state.wishlist.find(
                (item) => item.id === action.payload.id
            );
            if (product) {
                toast.success("Product already added to wishlist");
                return;
            }
            state.wishlist = [...state.wishlist, action.payload];
            toast.success("Product successfully added to wishlist");
        },
        removeToWishlist: (state, action) => {
            state.wishlist = state.wishlist.filter(
                (item) => item.id !== action.payload
            );
        },
    },
});

export const { addToWishlist, removeToWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
