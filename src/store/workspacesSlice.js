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
// ПОЛУЧИТЬ ОПРЕДЕЛННЫЙ WORKSPACES
export const getWorkspacesId = createAsyncThunk(
   "getWorkspace/ById",
   async (value) => {
      console.log("done")
      const { id, navigate } = value
      try {
         const { data } = await axiosInstance.get(`/api/workspace/${id}`)
         navigate(`/admin/workspaces/${data.id}/boards`)
         return data
      } catch (error) {
         return console.log(error)
      }
   }
)
// УДАЛИТЬ WORKSPACE
export const deleteWorkspaceById = createAsyncThunk(
   "delete/workspaces",
   async (value) => {
      const { workspaceId, dispatch, navigate } = value
      try {
         dispatch(loadingToastifyAction())
         const response = await axiosInstance.delete(
            `http://ec2-3-123-0-248.eu-central-1.compute.amazonaws.com/api/workspace/${workspaceId}`
         )
         navigate("/admin/allWorkspaces")
         dispatch(warningToastifyAction(`Deleted workspace`))
         dispatch(getAllWorkspaces())
         return console.log(response)
      } catch (error) {
         return dispatch(errorToastifyAction(error.message))
      }
   }
)

export const workspacesSlice = createSlice({
   name: "workspaces",
   initialState: {
      workspaces: [],
      workspaceById: {},
   },
   reducers: {},
   extraReducers: {
      [getAllWorkspaces.fulfilled]: (state, actions) => {
         state.workspaces = actions.payload
      },
      [getWorkspacesId.fulfilled]: (state, actions) => {
         state.workspaceById = actions.payload
      },
   },
})
