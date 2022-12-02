import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userReducer from './features/Auth/UserSlice'

const rootReducer = combineReducers({
        user: userReducer,
        questions: 
})

export const store = configureStore({
  reducer: rootReducer
})