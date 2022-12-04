/* eslint-disable no-undef */
import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import TaskCard from "../UI/TaskCard/TaskCard"
import EditIcon from "../../assets/icons/Icon Shape (1).svg"
import CustomIcons from "../UI/TaskCard/CustomIcons"
import InnerTaskCard from "../InnerTaskCard/InnerTaskCard"
import Modal from "../UI/Modal"
import useOpenClose from "../../utilits/hooks/useOpenClose"
import { getBoardByIdQuery } from "../../store/boardSlice"

const InnerBoard = () => {
   const { showSideBar, boards } = useSelector((state) => state)
   const { stateModal, toggle } = useOpenClose()
   const { boardId } = useParams()
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getBoardByIdQuery(boardId))
   }, [])

   return (
      <Container backgroundImage={boards.boardById.background}>
         <ContainerInfoBoardColumn showSideBar={showSideBar.showSideBar}>
            <InfoBoard>
               <CustomIcons edit="edit" src={EditIcon} top="15px" right="7px" />
            </InfoBoard>
            <ContainerColumns>
               <TaskCard openInnerTaskCard={toggle} />
               <Modal
                  isOpen={stateModal === "true"}
                  onClose={toggle}
                  fullWidth="95vw"
               >
                  <InnerTaskCard toggle={toggle} />
               </Modal>
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
const InfoBoard = styled.div`
   width: 100%;
   height: 13vh;
   margin-top: 80px;
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
