import React from "react"
import { Outlet } from "react-router-dom"

import styled from "styled-components"
import SideBar from "../../layout/SideBar/SideBar"

const AllBoards = ({ workspacesById }) => {
   return (
      <ContainerBoard>
         <SideBar workspacesById={workspacesById} />
         <Outlet />
      </ContainerBoard>
   )
}

export default AllBoards

const ContainerBoard = styled.div`
   display: flex;
   width: 100vw;
   justify-content: space-between;
`
