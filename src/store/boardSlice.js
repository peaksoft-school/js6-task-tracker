/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { axiosInstance } from "../api/axiosInstance"
import {
   loadingToastifyAction,
   errorToastifyAction,
   successToastifyAction,
   warningToastifyAction,
} from "./toastifySlice"
import { getFavourites } from "./FavouritesSlice"

// ПОЛУЧИТЬ BOARDS ИЗ БАЗЫ ДАННЫХ
export const getBoards = createAsyncThunk("get/board", async (id) => {
   try {
      const { data } = await axiosInstance.get(`/api/boards/list/${id}`)
      data.sort((a, b) => (a.id > b.id ? 1 : -1))
      return data
   } catch (error) {
      return console.log(error.message)
   }
})
// СОЗДАТЬ НОВЫЙ BOARD
export const createBoard = createAsyncThunk("create/board", async (value) => {
   const { readyData, dispatch } = value
   try {
      dispatch(loadingToastifyAction())
      const { data } = await axiosInstance.post("/api/boards", readyData)
      dispatch(getBoards(readyData.workspaceId))
      dispatch(successToastifyAction(`Created board ${data.title}`))
      return data
   } catch (error) {
      return dispatch(errorToastifyAction(error.message))
   }
})
// ДОБАВИТЬ  BOARD В ИЗБРАННОЕ
export const addBoardToFavourites = createAsyncThunk(
   "board/favourites",
   async (value) => {
      const { dispatch, id } = value
      try {
         dispatch(loadingToastifyAction())
         const { data } = await axiosInstance.put(
            `/api/boards/make-favorite/${id}`
         )
         dispatch(getBoards(data.workspaceId))
         dispatch(getFavourites())
         if (data.isFavorite) {
            dispatch(
               successToastifyAction(`Board ${data.title} added to favourites `)
            )
         } else {
            dispatch(
               warningToastifyAction(
                  `Board ${data.title} deleted in favourites`
               )
            )
         }
         return data
      } catch (error) {
         return dispatch(errorToastifyAction(error.message))
      }
   }
)
// ПОЛУЧИТЬ ОПРЕДЕЛЕННЫЙ BOARD
export const getBoardByIdQuery = createAsyncThunk(
   "getBoard/ById",
   async (boardId) => {
      try {
         const { data } = await axiosInstance.get(`/api/boards/${boardId}`)
         return data
      } catch (error) {
         return console.log(error.message)
      }
   }
)
// УДАЛИТЬ BOARD
export const deleteBoardById = createAsyncThunk(
   "delete/board",
   async (value) => {
      const { boardId, dispatch, navigate, workspaceId } = value
      try {
         dispatch(loadingToastifyAction())
         const response = await axiosInstance.delete(`/api/boards/${boardId}`)
         dispatch(warningToastifyAction(`Deleted board`))
         navigate(`/admin/workspaces/${workspaceId}/boards`)
         return console.log(response)
      } catch (error) {
         return dispatch(errorToastifyAction(error.message))
      }
   }
)

export const boardSlice = createSlice({
   name: "board",
   initialState: {
      board: [],
      boardById: {},
      loading: false,
   },
   reducers: {
      clearBoards: (state) => {
         state.board = []
      },
      clearBoardById: (state) => {
         state.boardById = {}
      },
   },
   extraReducers: {
      [getBoards.pending]: (state) => {
         state.loading = true
      },
      [getBoards.fulfilled]: (state, actions) => {
         state.board = actions.payload
         state.loading = false
      },
      [getBoards.rejected]: (state) => {
         state.loading = false
      },
      [getBoardByIdQuery.fulfilled]: (state, actions) => {
         state.boardById = actions.payload
      },
   },
})

export const { clearBoards, clearBoardById } = boardSlice.actions
