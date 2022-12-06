import React from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import WallpaperBoardCard from "../UI/WallpaperBoardCard"
import Button from "../UI/Button"
import Modal from "../UI/Modal"
import CreateBoard from "./CreateBoard/CreateBoard"
import { getBoardByIdQuery } from "../../store/boardSlice"
import useModalDropDown from "../../utilits/hooks/useModalDropDown"

const Boards = ({ role }) => {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const { showSideBar } = useSelector((state) => state.showSideBar)
   const { toggle, stateModal, activeDropDownInCreateBoard } =
      useModalDropDown()

   const getBoardIdPlusNavigate = async (boardId) => {
      navigate(`${boardId}`)
      dispatch(getBoardByIdQuery(boardId))
   }

   return (
      <Container>
         <ContainerBoardsButton showSideBar={showSideBar}>
            <TitleButtonBlock>
               <h3>All Boards</h3>
               {role === "ADMIN" && (
                  <Button
                     onClick={() => toggle("true", "0")}
                     fullWidth="190px"
                     fullHeight="37px"
                  >
                     Create new board
                  </Button>
               )}
            </TitleButtonBlock>
            <Modal
               fullWidth="500px"
               onClose={() => toggle("false", "0")}
               isOpen={stateModal === "true"}
            >
               <CreateBoard
                  activeDropDown={activeDropDownInCreateBoard}
                  toggle={toggle}
               />
            </Modal>
            <WallpaperBoardCard getBoardById={getBoardIdPlusNavigate} />
         </ContainerBoardsButton>
      </Container>
   )
}

export default Boards

const Container = styled.div`
   display: flex;
   width: 100%;
   flex-direction: column;
   align-items: flex-end;
   border: 1px solid black;
`
const TitleButtonBlock = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin: 100px 14px 10px 0;
`
const ContainerBoardsButton = styled.div`
   width: ${(props) => (props.showSideBar ? "78%" : "90%")};
   transition: all 0.35s ease-out;
   height: 100%;
`
