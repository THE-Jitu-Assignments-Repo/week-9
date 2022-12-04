import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: false,
}




export const UserSlice= createSlice({
    name: "user",
    initialState,
    reducers: {
        userLogin: (state,action)=>{
            state.user = action.payload
        },
        logout: (state,action)=>{
            state.user = false
        }

    }
})


export const { userLogin, logout} = UserSlice.actions

// console.log(userLogin())


export default UserSlice.reducer