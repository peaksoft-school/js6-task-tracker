import React from "react"
import styled from "styled-components"
import SvgGenerator from "../../Components/UI/SvgGenerator"

const SubMenu = ({
   nameWorkspaces,
   clickSettings,
   clickBoards,
   clickParticipants,
}) => {
   return (
      <ContainerSubMenu>
         {nameWorkspaces}
         <li onClick={clickBoards}>
            <SvgGenerator id={1} />
            <span>Boards</span>
         </li>
         <li onClick={clickParticipants}>
            <SvgGenerator id={3} />
            <span>Participants</span>
            <SvgGenerator id="plus" />
         </li>
         <li onClick={clickSettings}>
            <SvgGenerator id={5} />
            <span>Setting</span>
         </li>
      </ContainerSubMenu>
   )
}

export default SubMenu

const ContainerSubMenu = styled.ul`
   width: 150px;
   height: 100px;
   opacity: 0.5;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: flex-end;
   margin-right: 25px;
   li {
      display: flex;
      align-items: center;
      width: 158px;
      height: 25px;
      margin: 2px;
   }
   span {
      margin: 0 19px 4px 8px;
   }
`
