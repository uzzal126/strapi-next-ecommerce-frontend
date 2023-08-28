import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    user: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
};

export const fetchUser = createAsyncThunk("auth/fetchUser", async (token) => {
    const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/users/me`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
    return data;
});

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuthenticated: (state) => {
            state.isAuthenticated = true;
        },
        setUnauthenticated: (state) => {
            state.isAuthenticated = false;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
        });
        builder.addCase(fetchUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        });
    },
});

export const { logIn, setAuthenticated, setUnauthenticated } =
    authSlice.actions;
export default authSlice.reducer;
