import { configureStore, combineReducers } from '@reduxjs/toolkit'
import answerSlice from './features/answers/answerSlice'
import userReducer from './features/Auth/UserSlice'
import commentSlice from './features/comments/commentSlice'
import questionReducer from './features/questions/QuestionSlice'

const rootReducer = combineReducers({
        user: userReducer,
        questions: questionReducer,
        answers: answerSlice,
        comments: commentSlice
})

export const store = configureStore({
  reducer: rootReducer
})