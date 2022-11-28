import React from "react"
import styled from "styled-components"
import { Workspaces } from "../../utilits/constants/Constants"

const SubMenuBoards = ({ click }) => {
   const RenderSubMenuBoards = () =>
      Workspaces[1].boards.map((item) => {
         return (
            <span key={item.id} onClick={click}>
               {item.title}
            </span>
         )
      })

   return <ContainerSubMenu>{RenderSubMenuBoards()}</ContainerSubMenu>
}

export default SubMenuBoards

const ContainerSubMenu = styled.div`
   display: flex;
   width: 150px !important;
   flex-direction: column;
   border-left: 1px solid #a9a9a9;
   align-items: flex-end;
   margin-left: 70px;
   transition: 3s;
   list-style: none;
   span {
      width: 157px;
      text-align: start;
      font-size: 17px;
      padding: 6px 8px 6px 15px;
      border-bottom-right-radius: 18px;
      border-top-right-radius: 18px;
      color: #a9a9a9;
      &:hover {
         background-color: #e3e8eb;
         transition: 0.35s;
      }
   }
`
