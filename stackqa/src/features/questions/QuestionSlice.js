import { createSlice } from "@reduxjs/toolkit";

const initialState={
    questions: [],
    answer:[],
    comment:[],
    postOpen: false
}


export const QuestionSlice = createSlice({
    name: 'questions',
    initialState,
        reducers: {
            
        }

})

export default QuestionSlice.reducer