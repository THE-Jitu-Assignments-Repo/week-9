import {
    createAsyncThunk,
    createSlice
} from "@reduxjs/toolkit";
import axios from "axios"
import {
    validateLoginSchema,
    validateSignUpSchema
} from "../../Helpers/Validate";
import {
    toast
} from "react-toastify";

const initialState = {
    user: false,
    token: null
}



export const registerUser = createAsyncThunk(
    'user/registerUser',
    async (userDetails, {
        dispatch
    }) => {
        try {
            await validateSignUpSchema(userDetails)

            const response = await axios.post("http://localhost:3000/user", userDetails)


            // console.log(response.data);
            toast.success("Account created succesfully")

        } catch (error) {
            console.log({
                "Registration Error": error.message
            })
            toast.error(error.message)
        }
    }
)

export const signUser = createAsyncThunk(
    'user/signUser',
    async (details) => {
        try {
            await validateLoginSchema(details)
            const response = await axios.post('http://localhost:3000/user/login', details)

            toast.success("Welcome to stackQA")

            return response.data
        } catch (error) {
            toast.error(error.message)
            toast.error(error.response.data.message)
            console.log('jknjnjk', error.message);
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
            state.token = localStorage.removeItem('token')
            toast.success("User Logout successfully")
        }

    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.fulfilled, (state, action) => {
                console.log(action.payload)
            }),
            builder.addCase(registerUser.rejected, (state, action) => {
                console.log({
                    "Rejaected": action.payload
                })
            }),
            builder.addCase(signUser.fulfilled, (state, action) => {
                localStorage.setItem('token', action.payload.Token)
                state.token = localStorage.getItem('token')

            }),
            builder.addCase(signUser.rejected, (state, action) => {
                console.log(action.payload)
            })
    }
})


export const {
    userLogin,
    logout
} = UserSlice.actions

// console.log(userLogin())


export default UserSlice.reducer