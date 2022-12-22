/* eslint-disable no-unused-vars */
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
      data?.sort((a, b) => a.id - b.id)
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
      console.log(readyData, "ready data")
      try {
         dispatch(loadingToastifyAction())
         const { data } = await createWorkspacesQuery(readyData)
         console.log(data, "data")
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
         if (data.isFavorite) {
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
      const { id, navigate, path } = value

      try {
         const { data } = await axiosInstance.get(`/api/workspace/${id}`)
         if (navigate) {
            navigate(`/allWorkspaces/workspaces/${id}/${path}`)
         }
         console.log(data)
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
      dispatch(loadingToastifyAction("...Loading"))
      try {
         const response = await axiosInstance.delete(
            `/api/workspace/${workspaceId}`
         )
         navigate("/allWorkspaces")
         dispatch(getAllWorkspaces())
         return dispatch(warningToastifyAction("Deleted workspace"))
      } catch (error) {
         return dispatch(errorToastifyAction("Error"))
      }
   }
)
// ИЗМЕНИТЬ TITLE WORKSPACE
export const changeTitleWorkspace = createAsyncThunk(
   "changeTitle/workspace",
   async (value) => {
      const { workspaceId, name, dispatch } = value
      try {
         const { data } = await axiosInstance.put("/api/workspace", {
            id: workspaceId,
            newTitle: name,
         })
         dispatch(getAllWorkspaces())
         return data
      } catch (error) {
         return console.log(error.message)
      }
   }
)

export const workspacesSlice = createSlice({
   name: "workspaces",
   initialState: {
      workspaces: [],
      workspaceById: {},
      loading: false,
      idToast: 0,
   },
   reducers: {
      clearWorkspaces: (state) => {
         state.workspaces = []
      },
   },
   extraReducers: {
      [getAllWorkspaces.pending]: (state) => {
         state.loading = true
      },
      [getAllWorkspaces.fulfilled]: (state, actions) => {
         state.workspaces = actions.payload
         state.loading = false
      },
      [getAllWorkspaces.rejected]: (state) => {
         state.loading = false
      },
      [getWorkspacesId.fulfilled]: (state, actions) => {
         state.workspaceById = actions.payload
      },
      [changeTitleWorkspace.fulfilled]: (state, actions) => {
         if (actions.payload.id === state.workspaceById.id) {
            state.workspaceById = actions.payload
         }
      },
   },
})

export const { clearWorkspaces } = workspacesSlice.actions
