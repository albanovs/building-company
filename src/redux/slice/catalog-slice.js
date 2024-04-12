import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../Api";

export const getCatalog = createAsyncThunk(
    'catalog/getCatalog',
    async (id) => {
        try {
            const response = await api.get('/projects')
            return response.data
        } catch (error) {
            console.log(error);
        }
    }
)

const catalogSlice = createSlice({
    name: 'catalog',
    initialState: {
       catalog: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCatalog.fulfilled, (state, action) => {
            state.catalog = action.payload
        })
    }
})

export default catalogSlice.reducer
