import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API ="https://67d824499d5e3a10152d94d1.mockapi.io/Nurzada/dsert"

export const getCake = createAsyncThunk(
    "getcake/fetch",
    async ({category, text}, thunkAPI) => {
        let url = API;

        if(category) {
            url = `${API}?category=${category}`
        }else if(text) {
            url = `${API}?title=${text}`
        }
        try {
            const res = await axios.get(url)

            return res.data;

        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

const cakeSlice = createSlice({
    name: "cake",
    initialState: {
        cake: [],
        loading : false,
        error: null,
        category: "",
        search: ""
    },
    reducers: {
        changeState:(state, action) => {
            state.category = action.payload;
            state.cake = [];
        },
        setSearch:(state, action) => {
            state.search = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder 
            .addCase(getCake.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getCake.fulfilled, (state, action) => {
                state.loading = false;
                state.cake= action.payload;
            })
            .addCase(getCake.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })
    }
})

export const {changeState, setSearch} = cakeSlice.actions

export default cakeSlice.reducer