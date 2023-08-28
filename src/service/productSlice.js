import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    products: [],
    isLoading: false,
    error: null,
};

const configHeader = {
    headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
    },
};

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async (pageID) => {
        const response = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/products?pagination[page]=${pageID}&pagination[pageSize]=3&populate=*`,
            configHeader
        );
        return response.data;
    }
);

export const productSlice = createSlice({
    name: "products",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.products = action.payload;
        });

        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        });
    },
});

export default productSlice.reducer;
