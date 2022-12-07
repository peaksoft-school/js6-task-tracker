/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import TaskCard from "../UI/TaskCard/TaskCard"
import InnerTaskCard from "../InnerTaskCard/InnerTaskCard"
import Modal from "../UI/Modal"
import useOpenClose from "../../utilits/hooks/useOpenClose"
import { getBoardByIdQuery } from "../../store/boardSlice"
import CustomIcons from "../UI/TaskCard/CustomIcons"
import EditIcon from "../../assets/icons/Icon Shape (1).svg"
import openMenu from "../../assets/icons/openMenu.svg"
import star from "../../assets/icons/star.svg"
import { axiosInstance } from "../../api/axiosInstance"
import {
   loadingToastifyAction,
   errorToastifyAction,
   successToastifyAction,
   warningToastifyAction,
} from "../../store/toastifySlice"

const InnerBoard = () => {
   const { showSideBar, boards } = useSelector((state) => state)
   const { stateModal, toggle } = useOpenClose()
   const { boardId } = useParams()
   const dispatch = useDispatch()
   const [columns, setColumns] = useState([])
   const [loading, setLoading] = useState(true)

   // ПОЛУЧИТЬ КОЛОНЫ ИЗ БАЗА ДАННЫХ
   const getColumnsInDataBase = async (id) => {
      try {
         const { data } = await axiosInstance.get(
            `http://ec2-3-123-0-248.eu-central-1.compute.amazonaws.com/api/column/${id}`
         )
         setColumns(data)
         return setLoading(false)
      } catch (error) {
         return console.log(error.message)
      }
   }
   // УДАЛИТЬ КОЛОНУ
   const deleteColumnHandler = async (id) => {
      try {
         dispatch(loadingToastifyAction())
         const response = await axiosInstance.delete(`/api/column/${id}`)
         getColumnsInDataBase(boardId)
         return dispatch(warningToastifyAction("Deleted column"))
      } catch (error) {
         return console.log(error)
      }
   }
   // СОЗДАТЬ НОВУЮ КОЛОНУ
   const createNewColumn = async (nameNewColumn) => {
      try {
         dispatch(loadingToastifyAction())
         const { data } = await axiosInstance.post("/api/column", {
            columnName: nameNewColumn,
            boardId,
         })
         getColumnsInDataBase(boardId)
         return dispatch(
            successToastifyAction(`Your created column ${data.columnName}`)
         )
      } catch (error) {
         return dispatch(errorToastifyAction(error.message))
      }
   }

   useEffect(() => {
      dispatch(getBoardByIdQuery(boardId))
      getColumnsInDataBase(boardId)
   }, [boardId])

   return (
      <Container backgroundImage={boards.boardById.background}>
         <ContainerInfoBoardColumn showSideBar={showSideBar.showSideBar}>
            <InfoBoard>
               <LeftBlock>
                  <CustomIcons top="3px" position="absolute" src={EditIcon} />
                  <h3>{boards.boardById.title}</h3>
                  <p>
                     Columns: <span>{+columns.length}</span>
                  </p>
               </LeftBlock>
               <RightBlock>
                  <img src={star} alt="star" />
                  <img src={openMenu} alt="open menu" />
               </RightBlock>
            </InfoBoard>
            <ContainerColumns>
               <TaskCard
                  loading={loading}
                  createColumn={createNewColumn}
                  changeColumn={setColumns}
                  columns={columns}
                  openInnerTaskCard={toggle}
                  deleteColumnHandler={deleteColumnHandler}
               />
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
   display: flex;
   justify-content: space-between;
   align-items: center;
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
const RightBlock = styled.div`
   display: flex;
   width: 40%;
   justify-content: space-between;
   margin-right: 30px;
`
