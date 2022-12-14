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
         state.toastId = errorToastify(state.toastId, actions.payload)
      },
      warningToastifyAction: (state, actions) => {
         state.toastId = warningToastify(state.toastId, actions.payload)
      },
   },
})

export const {
   loadingToastifyAction,
   successToastifyAction,
   errorToastifyAction,
   warningToastifyAction,
} = toastSlice.actions
