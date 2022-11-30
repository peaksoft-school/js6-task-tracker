import React from "react"
import { Outlet } from "react-router-dom"
import styled from "styled-components"
import SideBar from "../../layout/SideBar/SideBar"

const AllBoards = ({ boardById }) => {
   return (
      <ContainerBoard backgroundImage={boardById.background}>
         <SideBar />
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
