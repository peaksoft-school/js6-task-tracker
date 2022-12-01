/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getWorkspacesQuery, createWorkspacesQuery } from "../api/auth"
import {
   successToastifyAction,
   loadingToastifyAction,
   errorToastifyAction,
   warningToastifyAction,
} from "./toastifySlice"
import { axiosInstance } from "../api/axiosInstance"
import { getFavourites } from "./FavouritesSlice"

// ПОЛУЧИТЬ WORSKPACES ИЗ БАЗЫ ДАННЫХ
export const getAllWorkspaces = createAsyncThunk("workspaces", async () => {
   try {
      const { data } = await getWorkspacesQuery()
      return data
   } catch (error) {
      return console.log(error.message)
   }
})

// СОЗДАТЬ НОВЫЙ WORKSPACES
export const createWorkspaces = createAsyncThunk(
   "worskpaces",
   async (value) => {
      const { readyData, dispatch } = value
      try {
         dispatch(loadingToastifyAction())
         const { data } = await createWorkspacesQuery(readyData)
         dispatch(getAllWorkspaces())
         if (data) {
            dispatch(successToastifyAction(`Created workspace ${data.name}`))
         }
         return data
      } catch (error) {
         return dispatch(errorToastifyAction(error.message))
      }
   }
)

// ДОБАВИТЬ  WORKSPACE В ИЗБРАННОЕ
export const addWorkspacesToFavourites = createAsyncThunk(
   "worskpaces/favourites",
   async (value) => {
      const { dispatch, id } = value
      console.log(id)
      try {
         dispatch(loadingToastifyAction())
         const { data } = await axiosInstance.put(
            `/api/workspace/make-favorite/${id}`
         )
         dispatch(getAllWorkspaces())
         dispatch(getFavourites())
         if (data.action) {
            dispatch(successToastifyAction(`Added to favorites ${data.name} `))
         } else {
            dispatch(warningToastifyAction(`Deleted in favorites ${data.name}`))
         }
         return data
      } catch (error) {
         return dispatch(errorToastifyAction())
      }
   }
)

export const workspacesSlice = createSlice({
   name: "workspaces",
   initialState: {
      workspaces: [],
   },
   reducers: {},
   extraReducers: {
      [getAllWorkspaces.fulfilled]: (state, actions) => {
         state.workspaces = actions.payload
      },
   },
})
