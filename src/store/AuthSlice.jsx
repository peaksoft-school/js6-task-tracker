/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { LocalStorage } from "../utilits/helpers/General"
import { USER_KEY } from "../utilits/constants/Constants"
// eslint-disable-next-line import/extensions
import { signUpRequest, loginRequest } from "../api/auth.js"

export const signUp = createAsyncThunk(
   "authorization/signup",
   async (userInfo) => {
      try {
         const response = await signUpRequest(userInfo)

         LocalStorage.saveData(USER_KEY, response.data)

         return response
      } catch (error) {
         return console.log(error.message)
      }
   }
)

export const login = createAsyncThunk(
   "authorizaiton/login",
   async (userData) => {
      try {
         const response = await loginRequest(userData)

         LocalStorage.saveData(USER_KEY, response.data)
         return response.data
      } catch (error) {
         return console.log(error.message)
      }
   }
)

export const logout = createAsyncThunk("logout", async () => {
   LocalStorage.removeData(USER_KEY)
})

const UserInfoInLocalStorage = LocalStorage.getData(USER_KEY)

const initState = {
   userInfo: {
      jwt: null,
      role: null,
      email: null,
   },
}

export const AuthSlice = createSlice({
   name: "auth",
   initialState: UserInfoInLocalStorage
      ? { ...initState, userInfo: UserInfoInLocalStorage }
      : initState,
   reducers: {},
   extraReducers: {
      [signUp.fulfilled]: (state, actions) => {
         const responseUserInfo = actions.payload.data
         state.userInfo = responseUserInfo
      },
      [logout.fulfilled]: (state) => {
         state.userInfo = initState
      },
      [login.fulfilled]: (state, actions) => {
         const responseUserData = actions.payload
         state.userInfo = responseUserData
      },
   },
})
