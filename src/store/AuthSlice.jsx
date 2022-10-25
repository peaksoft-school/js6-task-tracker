import axios from "axios"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const signUp = createAsyncThunk("signup", async (userInfo) => {
   let data
   try {
      const response = axios.post(
         "http://18.192.179.151/api/public/registration",
         { ...userInfo }
      )
      data = response.json()
   } catch (error) {
      console.log(error)
   }
   return data
})

const initialState = {
   isAuth: true,
   token: "test",
   role: "USER",
   firstName: "Kamchybek",
   lastName: "Kuzobaev",
}

export const AuthSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {},
   extraReducers: {
      [signUp.fulfilled]: (state, action) => {
         console.log(action.payload, "payload")
      },
   },
})
