import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiClient } from "../../axios/apiClient";

export const getCategory = createAsyncThunk(
    "getcategory/fetch",
    async (_, thunkAPI) => {
        try {
            const res = await apiClient.get("/products/category-list")

            return res.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message || "not found")
        }
    }
)

const categorySlice = createSlice({
    name: "category",
    initialState: {
        category: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCategory.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getCategory.fulfilled, (state, action) => {
                state.loading = false;
                state.category = action.payload;
            })
            .addCase(getCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })
    }

})

export default categorySlice.reducer