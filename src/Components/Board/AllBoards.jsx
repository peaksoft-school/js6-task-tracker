import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"

import styled from "styled-components"
import SideBar from "../../layout/SideBar/SideBar"
import Boards from "./Boards"
import InnerBoard from "./InnerBoard"

const AllBoards = ({ workspacesById, role }) => {
   return (
      <ContainerBoard>
         <SideBar workspacesById={workspacesById} />
         <Routes>
            <Route path="/*" element={<Navigate to="boards" />} />
            <Route path="boards" element={<Boards role={role} />} />
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
