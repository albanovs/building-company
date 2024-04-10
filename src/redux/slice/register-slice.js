import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../Api";

export const postRegister = createAsyncThunk(
    'register/postRegister', 
    async (data) => {
    try {
        const res = await api.post('/register', data)
    } catch (error) {
        console.log(error);
    }       
})

const registerSlice = createSlice({
    name: 'register',
    initialState: {
        name: '',
        email: '',
        password: ''
    },
    reducers: {
        setName(state, action) {
            state.name = action.payload
        },
        setEmail(state, action) {
            state.email = action.payload
        },
        setPassword(state, action) {
            state.password = action.payload
        },
}})

export const { setName, setEmail, setPassword } = registerSlice.actions
export default registerSlice.reducer