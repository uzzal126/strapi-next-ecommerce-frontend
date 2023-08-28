import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    categories: [],
    isLoading: false,
    error: null,
    filterCategories: [],
};

const configHeader = {
    headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
    },
};

export const fetchCategories = createAsyncThunk(
    "categories/fetchCategories",
    async () => {
        const res = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/categories?populate=*`,
            configHeader
        );
        return res.data;
    }
);

export const fetchFilterCategories = createAsyncThunk(
    "categories/fetchFilterCategories",
    async (id) => {
        const res = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/categories/${id}?populate[products][populate]=*`,
            configHeader
        );
        return res.data;
    }
);

export const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.isLoading = false;
            state.categories = action.payload;
        });
        builder.addCase(fetchCategories.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        });

        builder.addCase(fetchFilterCategories.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchFilterCategories.fulfilled, (state, action) => {
            state.isLoading = false;
            state.filterCategories = action.payload;
        });
        builder.addCase(fetchFilterCategories.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        });
    },
});

export default categoriesSlice.reducer;
