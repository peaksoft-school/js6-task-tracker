/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { createWorkspacesQuery, getWorkspacesQuery } from "../api/auth"

export const createWorkspaces = createAsyncThunk(
   "createWorkspaces",
   async (data) => {
      try {
         const response = createWorkspacesQuery(data)
         return console.log(response, "response")
      } catch (error) {
         return console.log(error.message)
      }
   }
)

export const getWorkspacesInDataBase = createAsyncThunk(
   "getworkspaces",
   async () => {
      try {
         const { data } = await getWorkspacesQuery()
         return console.log(data)
      } catch (error) {
         return console.log(error.message)
      }
   }
)

const initialState = {
   workspacesItem: {
      name: "",
      emails: [],
      link: "",
   },
}

export const WorkspacesSlice = createSlice({
   name: "workspaces",
   initialState,
   reducers: {},
   extraReducers: {},
})
