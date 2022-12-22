import React from "react"
import { Outlet } from "react-router-dom"
import SideBar from "../../layout/SideBar/SideBar"
import DisplayFlex from "../../layout/DisplayFlex"

const AllBoards = ({ countParticipants }) => {
   return (
      <DisplayFlex width="100%" JK="space-between">
         <SideBar countParticipants={countParticipants} />
         <Outlet />
      </DisplayFlex>
   )
}

export default AllBoards
