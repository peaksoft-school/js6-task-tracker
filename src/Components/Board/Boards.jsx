import React, { useEffect } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import WallpaperBoardCard from "../UI/WallpaperBoardCard"
import Button from "../UI/Button"
import Modal from "../UI/Modal"
import CreateBoard from "./CreateBoard/CreateBoard"
import {
   clearBoardById,
   getBoardByIdQuery,
   getBoards,
} from "../../store/boardSlice"
import DisplayFlex from "../../layout/DisplayFlex"
import useTwoActive from "../../utilits/hooks/useTwoActive"

const Boards = ({ role }) => {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const { workspaceId } = useParams()
   const { pathname } = useLocation()
   const { showSideBar } = useSelector((state) => state.showSideBar)

   const { setTwoActive, firstActive, secondActive } = useTwoActive()

   const getBoardIdPlusNavigate = async (boardId) => {
      navigate(`${boardId}`)
      dispatch(getBoardByIdQuery(boardId))
   }

   useEffect(() => {
      if (pathname === `/admin/workspaces/${workspaceId}/boards`) {
         dispatch(clearBoardById())
      }
   }, [])

   useEffect(() => {
      dispatch(getBoards(workspaceId))
   }, [workspaceId])

   return (
      <DisplayFlex width="100%" FD="column" AI="flex-end">
         <ContainerBoardsButton showSideBar={showSideBar}>
            <DisplayFlex
               JK="space-between"
               AI="center"
               margin="100px 14px 10px 0"
            >
               <h3>All Boards</h3>

               {role === "ADMIN" && (
                  <Button
                     onClick={() => setTwoActive("modalCreateBoard", "nothing")}
                     fullWidth="190px"
                     fullHeight="37px"
                  >
                     Create new board
                  </Button>
               )}
            </DisplayFlex>
            <Modal
               fullWidth="500px"
               onClose={() => setTwoActive("nothing", "nothing")}
               isOpen={firstActive === "modalCreateBoard"}
            >
               <CreateBoard
                  secondActive={secondActive}
                  setTwoActive={setTwoActive}
               />
            </Modal>
            <WallpaperBoardCard getBoardById={getBoardIdPlusNavigate} />
         </ContainerBoardsButton>
      </DisplayFlex>
   )
}

export default Boards

const ContainerBoardsButton = styled.div`
   width: ${(props) => (props.showSideBar ? "78%" : "90%")};
   transition: all 0.35s ease-out;
   height: 100%;
`
