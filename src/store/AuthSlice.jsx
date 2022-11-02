/* eslint-disable import/extensions */
/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { localStorageHelpers } from "../utilits/helpers/localStorageHelpers"
import { USER_KEY } from "../utilits/constants/Constants"
import { signUpRequest, loginRequest } from "../api/auth.js"

export const signUp = createAsyncThunk(
   "authorization/signup",
   async (userInfo) => {
      try {
         const { data } = await signUpRequest(userInfo)
         console.log(data)
         localStorageHelpers.saveData(USER_KEY, data)

         return data
      } catch (error) {
         return console.log(error.message)
      }
   }
)

export const login = createAsyncThunk(
   "authorizaiton/login",
   async (userData) => {
      try {
         const { data } = await loginRequest(userData)
         if (data) localStorageHelpers.saveData(USER_KEY, data)

         return data
      } catch (error) {
         return console.log(error.message)
      }
   }
)

export const logout = createAsyncThunk("logout", async () => {
   localStorageHelpers.removeData(USER_KEY)
})

const UserInfoInLocalStorage = localStorageHelpers.getData(USER_KEY)

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
         const responseUserInfo = actions.payload
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
