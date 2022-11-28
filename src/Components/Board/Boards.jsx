import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import WallpaperBoardCard from "../UI/WallpaperBoardCard"
import Button from "../UI/Button"
import Modal from "../UI/Modal"
import CreateBoard from "./CreateBoard/CreateBoard"
import useOpenClose from "../../utilits/hooks/useOpenClose"
import { useBoard } from "../../utilits/hooks/useBoard"

const Boards = ({ workspacesById, role, getBoardById }) => {
   const navigate = useNavigate()
   const { isShowing, toggle } = useOpenClose()
   const { getBoard, board } = useBoard()

   useEffect(() => {
      getBoard()
   }, [])

   const getBoardIdPlusNavigate = (boardId, boardTitle) => {
      // getBoardById(boardId)
      navigate(boardTitle)
   }

   return (
      <Container>
         <TitleButtonBlock>
            <h3>All Boards</h3>
            {role === "ADMIN" && (
               <Button onClick={toggle} fullWidth="190px" fullHeight="37px">
                  Create new board
               </Button>
            )}
         </TitleButtonBlock>
         <Modal fullWidth="500px" onClose={toggle} isOpen={isShowing}>
            <CreateBoard
               getBoardById={getBoardById}
               workspacesId={workspacesById}
               toggle={toggle}
            />
         </Modal>
         <WallpaperBoardCard
            getBoardById={getBoardIdPlusNavigate}
            board={board}
         />
      </Container>
   )
}

export default Boards

const Container = styled.div`
   width: 100%;
`
const TitleButtonBlock = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   height: 50px;
   margin: 25px 14px 10px 0;
`
