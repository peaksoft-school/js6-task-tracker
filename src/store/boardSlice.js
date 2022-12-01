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

// ПОЛУЧИТЬ BOARD ИЗ БАЗЫ ДАННЫХ
export const getBoards = createAsyncThunk("get/board", async (id) => {
   try {
      const { data } = await axiosInstance.get(`/api/boards/list/${id}`)
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
      const { dispatch, id, workspaceId } = value
      try {
         dispatch(loadingToastifyAction())
         const { data } = await axiosInstance.put(
            `/api/boards/make-favorite/${id}`
         )
         dispatch(getBoards(workspaceId))
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

export const boardSlice = createSlice({
   name: "board",
   initialState: {
      board: [],
   },
   reducers: {},
   extraReducers: {
      [getBoards.fulfilled]: (state, actions) => {
         state.board = actions.payload
      },
   },
})
