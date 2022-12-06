import {
    createAsyncThunk,
    createSlice
} from "@reduxjs/toolkit";
import axios from "axios"
import { toast } from "react-toastify";

const initialState = {
    user: false
}



export const registerUser = createAsyncThunk(
    'user/registerUser',
    async (userDetails, {
        dispatch
    }) => {
        try {
            const response = await axios.post("htpp://localhost:3000/user/register", userDetails)


            console.log(response.data);
            toast.success("Account created succesfully")

        } catch (error) {
            console.log({
                "Registration Error": error
            })
            toast.error(error.message)
        }
    }
)


export const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        userLogin: (state, action) => {
            state.user = action.payload
        },
        logout: (state, action) => {
            state.user = false
        }

    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.fulfilled, (state, action) => {
            console.log(action.payload)
        }),
        builder.addCase(registerUser.rejected, (state, action)=>{
            console.log({"Rejaected" : action.payload})
        })
    }
})


export const {
    userLogin,
    logout
} = UserSlice.actions

// console.log(userLogin())


export default UserSlice.reducer