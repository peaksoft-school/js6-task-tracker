import React, { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import WallpaperBoardCard from "../UI/WallpaperBoardCard"
import Button from "../UI/Button"
import Modal from "../UI/Modal"
import CreateBoard from "./CreateBoard/CreateBoard"
import useOpenClose from "../../utilits/hooks/useOpenClose"
import { getBoards } from "../../store/boardSlice"
import { axiosInstance } from "../../api/axiosInstance"

const Boards = ({ role, getBoardById }) => {
   const { id } = useParams()
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const { isShowing, toggle } = useOpenClose()

   useEffect(() => {
      dispatch(getBoards(id))
   }, [])

   const getBoardIdPlusNavigate = async (boardId, boardTitle) => {
      try {
         const { data } = await axiosInstance.get(`/api/boards/${boardId}`)
         navigate(boardTitle)
         return getBoardById(data)
      } catch (error) {
         return console.log(error.message)
      }
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
            <CreateBoard toggle={toggle} />
         </Modal>
         <WallpaperBoardCard getBoardById={getBoardIdPlusNavigate} />
      </Container>
   )
}

export default Boards

const Container = styled.div`
   width: 95vw;
`
const TitleButtonBlock = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   height: 50px;
   margin: 25px 14px 10px 0;
`
