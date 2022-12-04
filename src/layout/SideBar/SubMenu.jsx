import React from "react"
import styled from "styled-components"
import SvgGenerator from "../../Components/UI/SvgGenerator"

const SubMenu = ({ nameWorkspaces }) => {
   return (
      <ContainerSubMenu>
         {nameWorkspaces}
         <li>
            <SvgGenerator id={1} />
            <span>Boards</span>
         </li>
         <li>
            <SvgGenerator id={3} />
            <span>Participants</span>
            <SvgGenerator id="plus" />
         </li>
         <li>
            <SvgGenerator id={5} />
            <span>Setting</span>
         </li>
      </ContainerSubMenu>
   )
}

export default SubMenu

const ContainerSubMenu = styled.div`
   width: 200px;
   height: 100px;
   opacity: 0.5;
   display: flex;
   flex-direction: column;
   align-items: flex-end;
   justify-content: center;
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
