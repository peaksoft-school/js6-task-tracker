import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { createWorkspacesQuery } from "../api/auth"

export const createWorkspaces = createAsyncThunk(
   "createWorkspaces",
   async (data) => {
      try {
         const response = createWorkspacesQuery(data)
         return console.log(response)
      } catch (error) {
         return console.log(error.message)
      }
   }
)

export const WorkspacesSlice = createSlice({
   name: "Workspaces",
   initialState: [],
   reducers: {},
   extraReducers: {},
})
