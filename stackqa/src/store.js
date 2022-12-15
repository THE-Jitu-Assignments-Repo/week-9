import { configureStore, combineReducers } from '@reduxjs/toolkit'
import answerSlice from './features/answers/answerSlice'
import userReducer from './features/Auth/UserSlice'
import questionReducer from './features/questions/QuestionSlice'

const rootReducer = combineReducers({
        user: userReducer,
        questions: questionReducer,
        answers: answerSlice
})

export const store = configureStore({
  reducer: rootReducer
})