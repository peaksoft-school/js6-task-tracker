/* eslint-disable import/extensions */
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
import { auth, provider } from "../firebase/firebase"
import { axiosInstance } from "../api/axiosInstance"
import {
   successToastify,
   errorToastify,
} from "../utilits/helpers/reactToastifyHelpers"
import {
   errorToastifyAction,
   loadingToastifyAction,
   successToastifyAction,
} from "./toastifySlice"

// РЕГИСТРАЦИЯ
export const signUp = createAsyncThunk(
   "authorization/signup",
   async (value, { rejectWithValue }) => {
      const { userInfo, navigate } = value
      try {
         const { data } = await signUpRequest(userInfo)
         if (data) localStorageHelpers.saveData(USER_KEY, data)
         if (data.jwt) navigate("/allWorkspaces")
         return data
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
         if (data) localStorageHelpers.saveData(USER_KEY, data)
         if (data.jwt) navigate("/allWorkspaces")
         return data
      } catch (error) {
         return rejectWithValue(error.message)
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
         if (data.jwt) navigate("/allWorkspaces")
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
         if (data.jwt) navigate("/allWorkspaces")
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
// SIGN UP WITH GOOGLE INVITED USER
export const authWithGoogleInvitedUser = createAsyncThunk(
   "singinWithGoogle/InvitedUser",
   async ({ role, workspaceId, navigate, dispatch, boardId }) => {
      dispatch(loadingToastifyAction("...Loading"))
      try {
         const { user } = await signInWithPopup(auth, provider)
         const isAdmin = role === "ADMIN"
         const { data } = await axiosInstance.post(
            `/api/public/authenticate/google/invite-member`,
            {
               token: user.accessToken,
               isAdmin,
               isBoard: false,
               workspaceOrBoardId: boardId || workspaceId,
            }
         )
         if (data.jwt) localStorageHelpers.saveData(USER_KEY, data)
         if (boardId) {
            navigate(
               `/allWorkspaces/workspaces/${workspaceId}/boards/${boardId}`
            )
         } else {
            navigate(`/allWorkspaces/workspaces/${workspaceId}/boards`)
         }
         dispatch(successToastifyAction(`Welcome ${data.firstName}`))
         return data
      } catch (error) {
         return dispatch(
            errorToastifyAction("You have forbidden to open popup")
         )
      }
   }
)
// ВЫЙТИ
export const logout = createAsyncThunk(
   "logout",
   async ({ dispatch, clearWorkspaces }) => {
      localStorageHelpers.removeData(USER_KEY)
      dispatch(clearWorkspaces())
   }
)

const UserInfoInLocalStorage = localStorageHelpers.getData(USER_KEY)

const initState = {
   userInfo: {
      jwt: null,
      role: null,
      email: null,
      idToast: null,
   },
   loading: false,
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
      [authWithGoogleInvitedUser.pending]: (state) => {
         state.loading = true
      },
      [authWithGoogleInvitedUser.fulfilled]: (state, actions) => {
         const responseUserData = actions.payload
         state.userInfo = responseUserData
         successToastify(state.idToast, `Welcome}`)
         state.loading = false
      },
      [authWithGoogleInvitedUser.rejected]: (state) => {
         state.loading = false
      },
   },
})
