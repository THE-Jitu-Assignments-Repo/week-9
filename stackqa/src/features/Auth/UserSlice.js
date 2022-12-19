import {
    createAsyncThunk,
    createSlice
} from "@reduxjs/toolkit";
import axios from "axios"
import {
    validateLoginSchema,
    validateSignUpSchema
} from "../../Helpers/auth/Validate";
import {
    toast
} from "react-toastify";

const initialState = {
    user: '',
    token: localStorage.getItem('token'),
    error: null
}



export const registerUser = createAsyncThunk(
    'user/registerUser',
    async (userDetails, {
        rejectWithValue
    }) => {
        try {
            await validateSignUpSchema(userDetails)

            const response = await axios.post("http://localhost:3000/user", userDetails)
            toast.success("Account created succesfully")

        } catch (error) {
            return rejectWithValue(error.response ? error.response.data.message : error.message)

        }
    }
)

export const signUser = createAsyncThunk(
    'user/signUser',
    async (details, {
        rejectWithValue
    }) => {
        try {
            await validateLoginSchema(details)
            const response = await axios.post('http://localhost:3000/user/login', details)

            toast.success("Welcome to stackQA")

            return response.data
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data.message : error.message)
        }
    }
)

export const getuserdetails=createAsyncThunk(
    "user/getuserdetails",
    async()=>{
        try {
            const Token= localStorage.getItem('token')
            const response = await axios.get('http://localhost:3001/userdetails',{
                headers: {
                    Authorization: `Bearer ${Token}`,
                }
            })
            return response.data
        } catch (error) {
            return error.message
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
        },
        setError: (state, action) => {
            state.error = null
        }

    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.fulfilled, (state, action) => {
                // console.log(action.payload)
            }),
            builder.addCase(registerUser.rejected, (state, action) => {
                // console.log({
                //     "Rejaected": action.payload
                // })
                state.error = action.payload

            }),
            builder.addCase(signUser.fulfilled, (state, action) => {
                localStorage.setItem('token', action.payload.Token)
                state.token = localStorage.getItem('token')
                state.error = null

            }),
            builder.addCase(signUser.rejected, (state, action) => {
                // console.log()
                state.token = null
                state.error = action.payload
            }),
            builder.addCase(getuserdetails.fulfilled, (state,action)=>{
                state.user=action.payload.userDetails
            })
    }
})


export const {
    userLogin,
    logout,
    setError
} = UserSlice.actions

// console.log(userLogin())


export default UserSlice.reducer