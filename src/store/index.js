import { configureStore } from "@reduxjs/toolkit"
import { AuthSlice } from "./AuthSlice"
import { boardSlice } from "./boardSlice"
import { FavouritesSlice } from "./FavouritesSlice"
import { sideBarSlice } from "./sideBarSlice"
import { toastSlice } from "./toastifySlice"
import { workspacesSlice } from "./workspacesSlice"

export const store = configureStore({
   reducer: {
      auth: AuthSlice.reducer,
      toast: toastSlice.reducer,
      favourites: FavouritesSlice.reducer,
      workspaces: workspacesSlice.reducer,
      boards: boardSlice.reducer,
      showSideBar: sideBarSlice.reducer,
   },
})
