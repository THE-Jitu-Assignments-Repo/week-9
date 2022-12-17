import {
    createAsyncThunk,
    createSlice
} from "@reduxjs/toolkit"
import axios from "axios"
import { toast } from "react-toastify"


const initialState = {
    Comment: [],
    total: 0
}

const Token = localStorage.getItem('token')

export const addComment = createAsyncThunk(
    "comment/addComment",
    async (commentDetails, {
        dispatch,
        rejectWithValue
    }) => {
        try {
            const response = await axios.post('http://localhost:3001/comment', commentDetails, {
                headers: {
                    Authorization: `Bearer ${Token}`,
                }
            })
            dispatch(getComment())
            return response.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)
export const getComment = createAsyncThunk(
    "comment/getComment",
    async (ansID, {
        rejectWithValue
    }) => {
        try {
            const response = await axios.get('http://localhost:3001/getcomment/', ansID, {
                headers: {
                    Authorization: `Bearer ${Token}`,
                }
            })
            return response.data

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const deleteComment=createAsyncThunk(
    "comment/deleteComment",
    async(commentID,{dispatch, rejectWithValue})=>{
        try {
            const response = await axios.delete()
            dispatch(getComment())
            return response.data            
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)


export const commentSlice = createSlice({
        name: 'comment',
        initialState,
        extraReducers: (builder) => {
            builder.addCase(addComment.fulfilled,(state,action)=>{
                toast.success(action.payload)
            }),
            builder.addCase(getComment.fulfilled,(state,action)=>{
                state.Comment=action.payload
            })
        }
    }

)

export default commentSlice.reducer