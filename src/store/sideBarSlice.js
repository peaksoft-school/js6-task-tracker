/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit"

export const sideBarSlice = createSlice({
   name: "SideBar",
   initialState: {
      showSideBar: false,
   },
   reducers: {
      showSideBarAction: (state) => {
         state.showSideBar = !state.showSideBar
      },
   },
})

export const { showSideBarAction } = sideBarSlice.actions
