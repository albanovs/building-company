import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../Api";

export const getOrders = createAsyncThunk(
    'order/getOrders',
    async () => {
        try {
            const response = await api.get('/orders')
            return response.data
        } catch (error) {
            console.log(error);
        }
    }
)

const orderSlice = createSlice({
    name: 'order',
    initialState: {
        orders: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getOrders.fulfilled, (state, action) => {
            state.orders = action.payload
        })
    }
})

export default orderSlice.reducer