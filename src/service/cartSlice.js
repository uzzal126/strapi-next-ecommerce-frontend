import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    cart: [],
    isMiniCartOpen: false,
    totalPrice: 0,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        toggleMiniCart: (state, action) => {
            state.isMiniCartOpen = action.payload;
        },
        addToCart: (state, action) => {
            const proIndex = state.cart.findIndex(
                (item) => item.id === action.payload.id
            );

            if (proIndex === -1) {
                state.cart = [...state.cart, { ...action.payload, qty: 1 }];
                toast.success("Add to cart successfully!");
            } else {
                state.cart[proIndex].qty += 1;
                toast.success("Already added & update wih 1");
            }
        },
        removeProduct: (state, action) => {
            state.cart = state.cart.filter(
                (item) => item.id !== action.payload
            );
            toast.success("Remove product from cart!");
        },

        getTotalPrice: (state) => {
            state.totalPrice = state.cart.reduce(
                (acc, cur) => acc + cur.attributes.price * cur.qty,
                0
            );
        },

        increaseProductQuantity: (state, action) => {
            const productIndex = state.cart.findIndex(
                (item) => item.id === action.payload
            );

            if (productIndex !== -1) {
                state.cart[productIndex].qty += 1;
            }
        },
        decreaseProductQuantity: (state, action) => {
            const productIndex = state.cart.findIndex(
                (item) => item.id === action.payload
            );

            if (productIndex !== -1) {
                if (state.cart[productIndex].qty === 1) {
                    return;
                }
                state.cart[productIndex].qty -= 1;
            }
        },

        clearCart: (state) => {
            state.cart = [];
            toast.success("Remove all products from cart!");
        },
    },
});

export const {
    toggleMiniCart,
    addToCart,
    removeProduct,
    getTotalPrice,
    increaseProductQuantity,
    decreaseProductQuantity,
    clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
