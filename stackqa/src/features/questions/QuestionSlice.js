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
    postOpen: false,
    commentOpen: false
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
                dispatch(getAllQuestions())
            // console.log(response);
            toast.success("posted a question")

        } catch (error) {
            toast.error(error.message)
            // toast.error(error.response.data.message ? error.response.data.message : error.message)
        }
    }
)

export const getAllQuestions = createAsyncThunk(
    "questions/getAllQuestions",
    async()=>{
        try {
            const response= await axios.get('http://localhost:3001/question/allquestions')

            const Data = response.data 
            // console.log(allPost);  
            return Data        
        } catch (error) {
            console.log(error.message);
            
        }
    }
)

export const deleteQuestion = createAsyncThunk(
    "questions/deleteQuestion",
    async(qstID,{dispatch, rejectWithValue})=>{
        try {
            const reponse = await axios.delete('http://localhost:3001/question/delete/', qstID,{
                headers: {
                    Authorization : `Bearer ${Token}`,
                }
            })
            dispatch(getAllQuestions())
            return reponse.data
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message? error.message : response.data.message)
        }
    }
)



export const QuestionSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {
        G_modal: (state, action) => {
            state.postOpen = action.payload
        },
        C_modal: (state, action) => {
            state.commentOpen = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(postQuestion.fulfilled, (state, action) => {

            }),
            builder.addCase(postQuestion.rejected, (state, action) => {
                // console.log(action.payload);
            }),
            builder.addCase(getAllQuestions.fulfilled,(state,action)=>{
                state.questions=action.payload
            }),
            builder.addCase(deleteQuestion.fulfilled, (state,action)=>{
                toast.success(action.payload.message)
            }),
            builder.addCase(deleteQuestion.rejected, (state,action)=>{
                toast.error(action.payload)
            })
    }

})
export const {
    G_modal, C_modal
} = QuestionSlice.actions

export default QuestionSlice.reducer