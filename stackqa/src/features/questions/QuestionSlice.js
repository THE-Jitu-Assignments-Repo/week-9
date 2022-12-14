import {
    createAsyncThunk,
    createSlice
} from "@reduxjs/toolkit";
import axios from "axios";
import {
    toast
} from "react-toastify";
// import { validatePost } from "../../Helpers/post/postvalidate";


const initialState = {
    questions: [],
    selectedPost: '',
    askedBy: null,
    postOpen: false,
    commentOpen: false,
    errorQst:''

}

const Token = localStorage.getItem('token')


export const postQuestion = createAsyncThunk(
    "questions/postQuestion",
    async (postdetails, {
        dispatch,rejectWithValue
    }) => {
        try {
            // await validatePost(postDetails.question)
            const response = await axios.post('http://localhost:3001/question/postquestion', postdetails, {
                headers: {
                    Authorization: `Bearer ${Token}`,
                }
            })
            dispatch(getAllQuestions())
            // console.log(response);
            toast.success("posted a question")
            return response.data
        } catch (error) {
            // toast.error(error.message)
            // toast.error(error.response.data.message ? error.response.data.message : error.message)
            return rejectWithValue(error.response.data.message ? error.response.data.message : error.message)
        }
    }
)

export const getAllQuestions = createAsyncThunk(
    "questions/getAllQuestions",
    async (dataL) => {
        try {
            const response = await axios.get('http://localhost:3001/question/allquestions', {
                params: {
                    pageNumber: dataL.pageNumber,
                    rowsPerPage: dataL.rowsPerPage
                }
            })

            const Data = response.data
            // console.log(Data.allPost);  
            return Data
        } catch (error) {
            console.log(error.message);

        }
    }
)

export const getQuestion = createAsyncThunk(
    "questions/getQuestion",
    async (postID, {
        rejectWithValue
    }) => {
        try {
            const response = await axios.get(`http://localhost:3001/question/${postID}`)
            return response.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const getQuestionMostAns = createAsyncThunk(
    "questions/getQuestionMostAns",
    async (most) => {
        try {
            const response = await axios.get('http://localhost:3001/question/mostanswers', {
                params: {
                    pageNumber: most.pageNumber,
                    rowsPerPage: most.rowsPerPage
                }
            })
            // console.log("worked");
            return response.data
        } catch (error) {
            return error.message
        }
    }
)

export const getRecentlyPosted = createAsyncThunk(
    "questions/getRecentlyPosted",
    async (recent) => {
        try {
            const response = await axios.get('http://localhost:3001/question/recentlyposted', {
                params: {
                    pageNumber: recent.pageNumber,
                    rowsPerPage: recent.rowsPerPage
                }
            })
            // console.log("worked");
            return response.data
        } catch (error) {
            return error.message
        }
    }
)
export const postDetails = createAsyncThunk(
    "questions/postDetails",
    async (postID, {
        rejectWithValue
    }) => {
        try {
            const response = await axios.get(`http://localhost:3001/question/getdetails/${postID}`)
            return response.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const deleteQuestion = createAsyncThunk(
    "questions/deleteQuestion",
    async (qstID, {
        dispatch,
        rejectWithValue
    }) => {
        try {
            const reponse = await axios.delete(`http://localhost:3001/question/delete/${qstID}`, {
                headers: {
                    Authorization: `Bearer ${Token}`,
                }
            })
            dispatch(getAllQuestions())
            return reponse.data
        } catch (error) {
            // console.log(error);
            return rejectWithValue(error.message ? error.message : response.data.message)
        }
    }
)

export const searchQuestions = createAsyncThunk(
    "questions/searchQuestions",
    async (texts) => {
        try {
            const response = await axios.get('http://localhost:3001/question/qst/search', {
                params: {
                    text: texts
                }
            })

            return response.data
        } catch (error) {
            return error.message
        }
    }
)

export const topSuggested = createAsyncThunk(
    "questions/topSuggested",
    async (category) => {
        try {
            const response = await axios.get(`http://localhost:3001/question/topsuggested/${category}`)
            return response.data
        } catch (error) {
            return error.message
        }
    }
)

export const getmyquestions = createAsyncThunk(
    "questions/getmyquestions",
    async (_,{dispatch}) => {
        try {
            const response = await axios.get('http://localhost:3001/question/myquestion/find', {
                headers: {
                    Authorization: `Bearer ${Token}`,
                }
            })
            dispatch(getmyquestions())
            return response.data
        } catch (error) {
            return error.message
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
                // console.log("ree");
                state.errorQst=action.payload
            }),
            builder.addCase(getAllQuestions.fulfilled, (state, action) => {
                state.questions = action.payload
            }),
            builder.addCase(deleteQuestion.fulfilled, (state, action) => {
                toast.success(action.payload.message)
            }),
            builder.addCase(deleteQuestion.rejected, (state, action) => {
                toast.error(action.payload)
            }),
            builder.addCase(getQuestion.fulfilled, (state, action) => {
                state.selectedPost = action.payload
                // console.log(action.payload);
            }),
            builder.addCase(postDetails.fulfilled, (state, action) => {
                state.askedBy = action.payload.details
            }),
            builder.addCase(searchQuestions.fulfilled, (state, action) => {
                state.questions = action.payload
            }),
            builder.addCase(getQuestionMostAns.fulfilled, (state, action) => {
                state.questions = action.payload
            }),
            builder.addCase(getRecentlyPosted.fulfilled, (state, action) => {
                state.questions = action.payload
            }),
            builder.addCase(topSuggested.fulfilled, (state, action) => {
                state.questions = action.payload
            }),
            builder.addCase(getmyquestions.fulfilled, (state, action) => {
                state.questions = action.payload
            })
    }

})
export const {
    G_modal,
    C_modal
} = QuestionSlice.actions

export default QuestionSlice.reducer