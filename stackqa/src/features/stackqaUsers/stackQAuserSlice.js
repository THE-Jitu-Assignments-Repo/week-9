import {
    createAsyncThunk,
    createSlice
} from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
    StackQAusers: ''
}

const Token = localStorage.getItem('token')

export const getStackQAusers = createAsyncThunk(
    'stackqaUsers/getStackQAusers',
    async (_, { 
        rejectWithValue
    }) => {
        try {
            const response = await axios.get("http://localhost:3001/stackqaUsers", {
                headers: {
                    Authorization: `Bearer ${Token}`,
                }
            })
            return response.data
        } catch (error) {
            rejectWithValue(error)
        }
    }
)

export const stackQAuserSlice = createSlice({
    name: 'stackqaUsers',
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(getStackQAusers.fulfilled,(state,action)=>{
            state.StackQAusers=action.payload
        })
        builder.addCase(getStackQAusers.rejected, (state,action)=>{
            toast.error(action.payload)
        })
    }
})



export default stackQAuserSlice.reducer