import React from "react"
import { Outlet } from "react-router-dom"
import styled from "styled-components"
import SideBar from "../../layout/SideBar/SideBar"

const AllBoards = ({ workspaceById }) => {
   return (
      <ContainerBoard>
         <SideBar workspaceById={workspaceById} />
         <Outlet />
      </ContainerBoard>
   )
}

export default AllBoards

const ContainerBoard = styled.div`
   display: flex;
   width: 100%;
   justify-content: space-between;
   background-repeat: no-repeat;
   background-size: cover;
`
