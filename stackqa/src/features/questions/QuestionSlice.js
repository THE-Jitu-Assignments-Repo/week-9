import {
    createAsyncThunk,
    createSlice
} from "@reduxjs/toolkit";
import axios from "axios";
import {
    toast
} from "react-toastify";

const initialState = {
    questions: [],
    postOpen: false
}

const Token = localStorage.getItem('token')


export const postQuestion = createAsyncThunk(
    "questions/postQuestion",
    async (postdetails, {
        dispatch
    }) => {
        try {

             const response = await axios.post('http://localhost:3001/question/postquestion',postdetails,{
                headers: {
                    Authorization : `Bearer ${Token}`,
                }
            })

            console.log(response);
            toast.success("posted a question")

        } catch (error) {
            toast.error(error.message)
        }
    }
)




export const QuestionSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {
        G_modal: (state, action) => {
            state.postOpen = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(postQuestion.fulfilled, (state, action) => {

            }),
            builder.addCase(postQuestion.rejected, (state, action) => {
                console.log(action.payload);
            })
    }

})
export const {
    G_modal
} = QuestionSlice.actions

export default QuestionSlice.reducer