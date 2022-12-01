import React from "react"
import { useParams, useLocation, Outlet } from "react-router-dom"
import styled from "styled-components"
import SideBar from "../../layout/SideBar/SideBar"

const AllBoards = ({ boardById, workspaceById }) => {
   const { workspaceId, boardId } = useParams()
   const { pathname } = useLocation()
   const backgroundTrue =
      pathname === `/admin/workspaces/${workspaceId}/boards/${boardId}`
   return (
      <ContainerBoard backgroundImage={backgroundTrue && boardById.background}>
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
   background-image: url(${(props) => props.backgroundImage});
   background-color: ${(props) => props.backgroundImage};
   background-repeat: no-repeat;
   background-size: cover;
`
