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
           G_modal: (state,action)=>{
                state.postOpen= action.payload
           }
        }

})
export const {G_modal}= QuestionSlice.actions

export default QuestionSlice.reducer