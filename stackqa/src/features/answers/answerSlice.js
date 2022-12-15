import {
    createAsyncThunk,
    createSlice
} from "@reduxjs/toolkit"
import axios from "axios";
import { toast } from "react-toastify";


const initialState = {
    answers: []
}

const Token = localStorage.getItem('token')

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
        })
    }
})

export default answerSlice.reducer