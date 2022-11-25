import { configureStore } from "@reduxjs/toolkit"
import { AuthSlice } from "./AuthSlice"
import { FavouritesSlice } from "./FavouritesSlice"
import { toastSlice } from "./toastifySlice"

export const store = configureStore({
   reducer: {
      auth: AuthSlice.reducer,
      toast: toastSlice.reducer,
      favourites: FavouritesSlice.reducer,
   },
})
