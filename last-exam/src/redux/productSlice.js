import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProduct = createAsyncThunk("product/getProduct", async () => {
    try {
        const res = await axios.get("https://fakestoreapi.com/products")
        return res.data;
    } catch (error) {
        throw new Error("Failed to fetch product data.");
    }
});

const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        isLoading: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProduct.pending, (state, action) => {
                state.isLoading = true;

            })
            .addCase(getProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                state.products = action.payload;
            })
    }
})


const store = configureStore({
    reducer: {
        product: productSlice.reducer
    }
});

export default store;