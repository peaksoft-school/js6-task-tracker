/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
// import { toast } from "react-toastify"
import { getFavoritesQuery } from "../api/auth"
// import { axiosInstance } from "../api/axiosInstance"
// import {
//    errorToastify,
//    successToastify,
//    warningToastify,
// } from "../utilits/helpers/reactToastifyHelpers"

// GET FAVOURITES
export const getFavourites = createAsyncThunk("favourites/get", async () => {
   try {
      const { data } = await getFavoritesQuery()
      return data
   } catch (error) {
      return console.log(error)
   }
})

// PUT FAVOURITES

// export const changeAction = createAsyncThunk(
//    "favourites/put",
//    async (value) => {
//       const { id, getWorkspacesInDataBase, getFavourites } = value
//       try {
//          const { data } = await axiosInstance.put(
//             `/api/workspace/make-favorite/${id}`
//          )
//          getFavourites()
//          getWorkspacesInDataBase()
//          return data
//       } catch (error) {
//          return console.log(error.message)
//       }
//    }
// )

export const FavouritesSlice = createSlice({
   name: "Favourites",
   initialState: {
      favourites: [],
      idToast: null,
   },
   reducers: {},
   extraReducers: {
      [getFavourites.fulfilled]: (state, actions) => {
         state.favourites = actions.payload
      },
      // [changeAction.pending]: (state) => {
      //    state.idToast = toast.loading("Loading...")
      // },
      // [changeAction.fulfilled]: (state, actions) => {
      //    if (actions.payload.action) {
      //       state.idToast = successToastify(
      //          state.idToast,
      //          `You added of to favourites ${actions.payload.name}`
      //       )
      //    } else {
      //       state.idToast = warningToastify(
      //          state.idToast,
      //          `You deleted of favourites ${actions.payload.name}`
      //       )
      //    }
      // },
      // [changeAction.rejected]: (state, actions) => {
      //    errorToastify(state.idToast, actions.payload.response.data.message)
      // },
   },
})
