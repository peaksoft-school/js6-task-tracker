/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getFavoritesQuery } from "../api/auth"

export const getFavourites = createAsyncThunk("favourites", async () => {
   try {
      const { data } = await getFavoritesQuery()
      return data
   } catch (error) {
      return console.log(error)
   }
})

export const FavouritesSlice = createSlice({
   name: "Favourites",
   initialState: {
      favourites: [],
   },
   reducers: {},
   extraReducers: {
      [getFavourites.fulfilled]: (state, actions) => {
         state.favourites = actions.payload
      },
   },
})
