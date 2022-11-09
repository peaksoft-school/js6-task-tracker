/* eslint-disable import/extensions */
/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import { localStorageHelpers } from "../utilits/helpers/localStorageHelpers"
import { USER_KEY } from "../utilits/constants/Constants"
import { signUpRequest, loginRequest } from "../api/auth.js"
import { PATH_IN_ROLES } from "../utilits/constants/general"

// РЕГИСТРАЦИЯ
export const signUp = createAsyncThunk(
   "authorization/signup",
   async (value, { rejectWithValue }) => {
      const { userInfo, navigate } = value

      try {
         const { data } = await signUpRequest(userInfo)
         localStorageHelpers.saveData(USER_KEY, data)
         navigate(PATH_IN_ROLES[data.role].path)
         return data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

// ВОЙТИ
export const login = createAsyncThunk(
   "authorizaiton/login",
   async (value, { rejectWithValue }) => {
      const { userData, navigate } = value
      try {
         const { data } = await loginRequest(userData)
         console.log(data)
         if (data) localStorageHelpers.saveData(USER_KEY, data)
         navigate(PATH_IN_ROLES[data.role].path)
         return data
      } catch (error) {
         return rejectWithValue(error)
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
         state.loading = false
         toast.success(`Welcome ${responseUserInfo.firstName}`)
      },
      [signUp.rejected]: (state, actions) => {
         toast.error(actions.payload.response.data.message)
         state.loading = false
      },
      [logout.fulfilled]: (state) => {
         state.userInfo = initState
      },
      [login.fulfilled]: (state, actions) => {
         const responseUserData = actions.payload
         state.userInfo = responseUserData
         toast.success(`Welcome ${responseUserData.firstName}`)
      },
      [login.rejected]: (state, actions) => {
         toast.error(actions.payload.response.data.message)
      },
   },
})