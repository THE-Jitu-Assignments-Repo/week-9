import {
    createAsyncThunk,
    createSlice
} from "@reduxjs/toolkit"
import axios from "axios";
import {
    toast
} from "react-toastify";


const initialState = {
    answers: []
   
}

const Token = localStorage.getItem('token')

export const postAnswer = createAsyncThunk(
    "answer/postAnswer",
    async (answerDetails, { dispatch,
        rejectWithValue
    }) => {
        try {
            const response = await axios.post('http://localhost:3001/answer/', answerDetails, {
                headers: {
                    Authorization: `Bearer ${Token}`,
                }
            })
            dispatch(getAnswers())
            return response.data
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data.message : error.message)

        }
    }
)

export const markPreferred = createAsyncThunk(
    "answer/markPreferred",
    async(ansID, {rejectWithValue})=>{
        try {
            const Tokenm = localStorage.getItem('token')

            const response = await axios.patch(`http://localhost:3001/mark/${ansID}`, {
                headers: {
                    Authorization: `Bearer ${Tokenm}`,
                }
            })
            dispatch(getAnswers())
            return response.data
        } catch (error) {
            // console.log("as",error);
            return rejectWithValue(error.message)
        }
    }
)

export const getAnswers = createAsyncThunk(
    'answer/getAnswers',
    async (postID) => {
        try {
            const reponse = await axios.get(`http://localhost:3001/getanswers/${postID}`)
            // console.log(reponse.data);
            return reponse.data
        } catch (error) {
            toast.error(error.message)
            // console.log(error.message);
        }
    }
)
export const vote =createAsyncThunk(
    "answer/vote",
    async(IDanswer, {rejectWithValue})=>{
        try {
            const response = await axios.patch(`http://localhost:3001/vote/${IDanswer}`,{
                headers: {
                    Authorization: `Bearer ${Token}`,
                }
            })
            // console.log(IDanswer);
            // dispatch(getAnswers(postID))
            return response.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)


export const answerSlice = createSlice({
    name: 'answer',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getAnswers.fulfilled, (state, action) => {
                state.answers = action.payload
            }),
            builder.addCase(postAnswer.fulfilled, (state, action) => {
                toast.success(action.payload.message)
            }),
            builder.addCase(postAnswer.rejected, (state,action)=>{
                toast.error(action.payload)
            }),
            builder.addCase(markPreferred.fulfilled, (state,action)=>{
                toast.success(action.payload.message)
            }),
            builder.addCase(markPreferred.rejected, (state,action)=>{
                toast.error(action.payload)
            }),builder.addCase(vote.fulfilled, (state,action)=>{
                toast.success(action.payload.message)
            })
    }
})

export default answerSlice.reducer