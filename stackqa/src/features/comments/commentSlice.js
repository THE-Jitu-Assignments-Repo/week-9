import {
    createAsyncThunk,
    createSlice
} from "@reduxjs/toolkit"
import axios from "axios"
import { toast } from "react-toastify"


const initialState = {
    AllComment: [],
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
            toast.success("posted")
            return response.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)
export const getComment = createAsyncThunk(
    "comment/getComment",
    async (answer_id, {
        rejectWithValue
    }) => {
        try {
            const response = await axios.get(`http://localhost:3001/getcomment/${answer_id}`)
            // console.log(response.data.comments);
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
                // state.Comment=action.payload
            }),
            builder.addCase(addComment.rejected,(state, action)=>{
                toast.error(action.payload)
            }),
            builder.addCase(getComment.fulfilled,(state,action)=>{
                state.AllComment=action.payload.comments
            })
        }
    }

)

export default commentSlice.reducer