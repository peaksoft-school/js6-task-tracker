import React, { useEffect } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"
import styled from "styled-components"
import SideBar from "../../layout/SideBar/SideBar"
import Boards from "./Boards"
import InnerBoard from "./InnerBoard"

const AllBoards = ({ workspacesById, role }) => {
   const navigate = useNavigate()
   useEffect(() => {
      navigate("board")
   }, [])

   return (
      <ContainerBoard>
         <SideBar workspacesById={workspacesById} />
         {/* <Navigate to="/admin/workspaces/TaskTracker/allBoards" /> */}
         <Routes>
            <Route path="allBoards" element={<Boards role={role} />} />
            <Route path="board" element={<InnerBoard />} />
         </Routes>
      </ContainerBoard>
   )
}

export default AllBoards

const ContainerBoard = styled.div`
   display: flex;
   width: 100vw;
   justify-content: space-between;
`
