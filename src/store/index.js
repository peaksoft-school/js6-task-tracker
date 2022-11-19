import { configureStore } from "@reduxjs/toolkit"
import { AuthSlice } from "./AuthSlice"
import { toastSlice } from "./toastifySlice"

export const store = configureStore({
   reducer: {
      auth: AuthSlice.reducer,
      toast: toastSlice.reducer,
   },
})
