import React from "react"
import { Outlet } from "react-router-dom"
import SideBar from "../../layout/SideBar/SideBar"
import DisplayFlex from "../../layout/DisplayFlex"
import Header from "../Header"

const AllBoards = () => {
   return (
      <DisplayFlex width="100%" JK="space-between">
         <Header />
         <SideBar />
         <Outlet />
      </DisplayFlex>
   )
}

export default AllBoards
