/* eslint-disable import/extensions */
/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import { signInWithPopup } from "firebase/auth"
import { localStorageHelpers } from "../utilits/helpers/localStorageHelpers"
import { USER_KEY } from "../utilits/constants/Constants"
import {
   signUpRequest,
   loginRequest,
   authWithGoogleQuery,
   forgotPasswordQuery,
   resetPasswordQuery,
} from "../api/auth.js"
import { PATH_IN_ROLES } from "../utilits/constants/general"
import { auth, provider } from "../firebase/firebase"
import {
   successToastify,
   errorToastify,
} from "../utilits/helpers/reactToastifyHelpers"

// РЕГИСТРАЦИЯ
export const signUp = createAsyncThunk(
   "authorization/signup",
   async (value, { rejectWithValue }) => {
      const { userInfo, navigate } = value
      try {
         const { data } = await signUpRequest(userInfo)
         if (data) localStorageHelpers.saveData(USER_KEY, data)
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
         if (data) localStorageHelpers.saveData(USER_KEY, data)
         navigate(PATH_IN_ROLES[data.role].path)
         return data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

// РЕГИСТРАЦИЯ ЧЕРЕЗ GOOGLE
export const authWithGoogle = createAsyncThunk(
   "authorization/withGoogle",
   async (value, { rejectWithValue }) => {
      const { navigate } = value
      try {
         const { user } = await signInWithPopup(auth, provider)
         const { data } = await authWithGoogleQuery(user.accessToken)

         if (data) localStorageHelpers.saveData(USER_KEY, data)
         navigate(PATH_IN_ROLES[data.role].path)

         return data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

// ПОЛУЧИТЬ ССЫЛКУ
export const forgotPassword = createAsyncThunk(
   "authorization/forgotPassword",
   async (value, { rejectWithValue }) => {
      try {
         const response = await forgotPasswordQuery(value)
         return response
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

// УСТАНОВИТЬ НОВЫЙ ПАРОЛЬ
export const resetPassword = createAsyncThunk(
   "authorization/resetPassword",
   async (value, { rejectWithValue }) => {
      const { userId, newPassword, navigate } = value
      try {
         const { data } = await resetPasswordQuery({ userId, newPassword })
         const newData = {
            ...data,
            jwt: data.jwtToken,
         }
         if (data.role) localStorageHelpers.saveData(USER_KEY, newData)
         navigate(PATH_IN_ROLES[data.role].path)
         return newData
      } catch (error) {
         return rejectWithValue(error.message)
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
      idToast: null,
   },
}

export const AuthSlice = createSlice({
   name: "auth",
   initialState: UserInfoInLocalStorage
      ? { ...initState, userInfo: UserInfoInLocalStorage }
      : initState,
   reducers: {},
   extraReducers: {
      [signUp.pending]: (state) => {
         state.idToast = toast.loading("Loading...")
      },
      [signUp.fulfilled]: (state, actions) => {
         const responseUserInfo = actions.payload
         state.userInfo = responseUserInfo
         successToastify(state.idToast, `Welcome ${responseUserInfo.firstName}`)
      },
      [signUp.rejected]: (state, actions) => {
         errorToastify(state.idToast, actions.payload.response.data.message)
      },
      [login.pending]: (state) => {
         state.idToast = toast.loading("Loading...")
      },
      [login.fulfilled]: (state, actions) => {
         const responseUserData = actions.payload
         state.userInfo = responseUserData
         successToastify(state.idToast, `Welcome ${responseUserData.firstName}`)
      },
      [login.rejected]: (state, actions) => {
         errorToastify(state.idToast, actions.payload.response.data.message)
      },
      [authWithGoogle.fulfilled]: (state, actions) => {
         const responseUserData = actions.payload
         state.userInfo = responseUserData
         successToastify(state.idToast, `Welcome ${responseUserData.firstName}`)
      },
      [authWithGoogle.pending]: (state) => {
         state.idToast = toast.loading("Loading...")
      },
      [authWithGoogle.rejected]: (state, actions) => {
         errorToastify(state.idToast, actions.payload.response.data.message)
      },
      [forgotPassword.pending]: (state) => {
         state.idToast = toast.loading("Loading...")
      },
      [forgotPassword.fulfilled]: (state, actions) => {
         successToastify(state.idToast, actions.payload.data.message)
      },
      [forgotPassword.rejected]: (state, actions) => {
         errorToastify(state.idToast, actions.payload.response.data.message)
      },
      [resetPassword.pending]: (state) => {
         state.idToast = toast.loading("Loading...")
      },
      [resetPassword.fulfilled]: (state, actions) => {
         const responseUserData = actions.payload
         state.userInfo = responseUserData
         successToastify(state.idToast, actions.payload.message)
      },
      [resetPassword.rejected]: (state) => {
         errorToastify(state.idToast, "Something went wrong")
      },
      [logout.fulfilled]: (state) => {
         state.userInfo = initState
      },
   },
})
