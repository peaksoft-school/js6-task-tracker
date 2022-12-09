import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import DisplayFlex from "../../layout/DisplayFlex"
import { getBoardByIdQuery } from "../../store/boardSlice"
import Columns from "../UI/TaskCard/Columns"
import CustomIcons from "../UI/TaskCard/CustomIcons"
import EditIcon from "../../assets/icons/Icon Shape (1).svg"
import Menu from "./Menu"

const InnerBoard = () => {
   const dispatch = useDispatch()
   const { boardId } = useParams()
   const { showSideBar, boards } = useSelector((state) => state)

   useEffect(() => {
      dispatch(getBoardByIdQuery(boardId))
   }, [boardId])

   return (
      <Container backgroundImage={boards.boardById.background}>
         <ContainerInfoBoardColumn showSideBar={showSideBar.showSideBar}>
            <DisplayFlex
               width="100%"
               heigth="80px"
               margin="100px 0 0 0"
               JK="space-between"
               AI="center"
            >
               <LeftBlock>
                  <CustomIcons top="3px" position="absolute" src={EditIcon} />
                  <h3>{boards.boardById.title}</h3>
                  <p>
                     Columns: <span>0</span>
                  </p>
               </LeftBlock>
               <Menu />
            </DisplayFlex>
            <ContainerColumns>
               <Columns />
            </ContainerColumns>
         </ContainerInfoBoardColumn>
      </Container>
   )
}

export default InnerBoard

const Container = styled.div`
   display: flex;
   width: 100%;
   flex-direction: column;
   align-items: flex-end;
   height: 100vh;
   background-image: url(${(props) => props.backgroundImage});
   background-color: ${(props) => props.backgroundImage};
   background-repeat: no-repeat;
   background-size: cover;
`
const ContainerColumns = styled.div`
   width: 100%;
   overflow: scroll;
   display: flex;
   align-items: flex-start;
   gap: 10px;
   height: 76vh;
`
const ContainerInfoBoardColumn = styled.div`
   width: ${(props) => (props.showSideBar ? "78%" : "90%")};
   transition: all 0.35s ease-out;
   height: 100%;
`
const LeftBlock = styled.div`
   color: white;
   position: relative;
   margin-left: 20px;
   h3 {
      display: inline-block;
      margin-left: 30px;
      font-weight: 500;
      font-size: 1.4rem;
   }
   span {
      background-color: #b7b5b5;
      padding: 0 8px 0 8px;
      border-radius: 10px;
   }
`
