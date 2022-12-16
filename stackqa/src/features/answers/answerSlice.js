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
    async (answerDetails, {
        rejectWithValue
    }) => {
        try {
            const response = await axios.post('http://localhost:3001/answer/', answerDetails, {
                headers: {
                    Authorization: `Bearer ${Token}`,
                }
            })

            // console.log(response.data);
            return response.data
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data.message : error.message)

        }
    }
)

export const getAnswers = createAsyncThunk(
    'answer/getAnswers',
    async (postID) => {
        try {
            const reponse = await axios.get(`http://localhost:3001/getanswers/${postID}`)
            console.log(reponse.data);
            return reponse.data
        } catch (error) {
            toast.error(error.message)
            // console.log(error.message);
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
            })
    }
})

export default answerSlice.reducer