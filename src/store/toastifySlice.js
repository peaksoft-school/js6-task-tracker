/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import {
   errorToastify,
   successToastify,
   warningToastify,
} from "../utilits/helpers/reactToastifyHelpers"

export const toastSlice = createSlice({
   name: "toast",
   initialState: {
      toastId: null,
   },
   reducers: {
      loadingToastifyAction: (state) => {
         state.toastId = toast.loading("...loading")
      },
      successToastifyAction: (state, actions) => {
         state.toastId = successToastify(state.toastId, actions.payload)
      },
      errorToastifyAction: (state, actions) => {
         state.toastId = errorToastify(
            state.toastId,
            actions.payload.response.data.error
         )
      },
      warningToastifyAction: (state, actions) => {
         console.log(actions.payload)
         state.toastId = warningToastify(
            state.toastId,
            "Вы удалили из израбранное"
         )
      },
   },
})

export const {
   loadingToastifyAction,
   successToastifyAction,
   errorToastifyAction,
   warningToastifyAction,
} = toastSlice.actions
