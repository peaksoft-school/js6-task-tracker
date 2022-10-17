import React from "react"
import styled from "styled-components"
import { SideBarItems } from "../utilits/constants/Constants"

const SideBar = ({ nameWorkspaces }) => {
   return (
      <StyledContainerSideBar>
         <h3>{nameWorkspaces}LMS</h3>
         <ul>
            {SideBarItems.map((item) => {
               return <li>{item.title} </li>
            })}
         </ul>
      </StyledContainerSideBar>
   )
}

export default SideBar

const StyledContainerSideBar = styled.div`
   display: flex;
   width: 250px;
   background-color: white;
   border: 1px solid black;
   height: 800px;
   img {
      width: 25px;
      height: 25px;
   }
`
