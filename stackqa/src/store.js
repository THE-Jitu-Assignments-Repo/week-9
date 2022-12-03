import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userReducer from './features/Auth/UserSlice'
import questionReducer from './features/questions/QuestionSlice'

const rootReducer = combineReducers({
        user: userReducer,
        questions: questionReducer
})

export const store = configureStore({
  reducer: rootReducer
})