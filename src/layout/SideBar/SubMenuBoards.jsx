import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { getBoardByIdQuery } from "../../store/boardSlice"

const SubMenuBoards = ({ click }) => {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const { board } = useSelector((state) => state.boards)

   const getBoardIdPlusNavigate = async (boardId) => {
      navigate(`boards/${boardId}`)
      dispatch(getBoardByIdQuery(boardId))
   }

   return (
      <ContainerSubMenu onClick={click}>
         {board.map((item) => {
            return (
               <span onClick={() => getBoardIdPlusNavigate(item.id)}>
                  {item.title}
               </span>
            )
         })}
      </ContainerSubMenu>
   )
}

export default SubMenuBoards

const ContainerSubMenu = styled.div`
   display: flex;
   width: 158px !important;
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
      padding: 6px 8px 6px 12px;
      border-bottom-right-radius: 18px;
      border-top-right-radius: 18px;
      color: #807e7e;
      &:hover {
         background-color: #e6eaed;
         transition: 0.35s;
      }
   }
`
