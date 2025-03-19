import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiClient } from "../../axios/apiClient";

// getProduct API чакыруу
export const getProduct = createAsyncThunk(
    "product/fetch",
    async (category, thunkAPI) => {
        try {
            // APIден маалыматты алуу
            const res = await apiClient.get(`/products/category/${category}`);
            return res.data.products; 
        } catch (error) {
         
            return thunkAPI.rejectWithValue(error.message || "not found");
        }
    }
);

// Redux slice
const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        loading: false,
        error: null,
        category: "laptops"
    },
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProduct.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload; // жүктөлгөн продукциялар
            })
            .addCase(getProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload; // катаны көрсөтүү
            });
    },
});

export const {setCategory} = productSlice.actions;
export default productSlice.reducer;