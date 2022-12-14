/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react"
import styled from "styled-components"
import TextareaAutosize from "@mui/base/TextareaAutosize"
import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
// import Button from "../Button"
// import close from "../../../assets/icons/Vectorclose.svg"
// import Input from "../Input"
import threePoint from "../../assets/icons/threePoint.svg"
import DisplayFlex from "../../layout/DisplayFlexJCSB"
import CustomIcons from "./CustomIcons"
import CloseButton from "../UI/CloseButton"
import Input from "../UI/Input"
import Button from "../UI/Button"
import { useToggle } from "../../utilits/hooks/useToggle"
import { axiosInstance } from "../../api/axiosInstance"
import Skeleton from "./Skeleton"
import ReusableDropDown from "../UI/ReusableDropDown"
import {
   loadingToastifyAction,
   errorToastifyAction,
   successToastifyAction,
   warningToastifyAction,
} from "../../store/toastifySlice"
import { useGetInputValue } from "../../utilits/hooks/useGetInputValue"
import Cards from "./Card"
import useTwoActive from "../../utilits/hooks/useTwoActive"

const Columns = ({
   getDataInArchive,
   columns,
   setColumns,
   loading,
   getColumnsInDataBase,
   getCardById,
   cardById,
}) => {
   const { inputValue, setInputValueHandler } = useGetInputValue()
   const dispatch = useDispatch()
   const { boardId } = useParams()
   const { setActive, isActive } = useToggle()
   const { firstActive } = useTwoActive()
   const [nameNewColumn, setNameNewColumn] = useState("")

   const titleColumnHandler = (e) => {
      const newColumns = [...columns]
      newColumns[e.target.name].columnName = e.target.value
      return setColumns(newColumns)
   }
   const changeTitleColumnQuery = async (e, id) => {
      try {
         const response = await axiosInstance.put("/api/column", {
            id,
            newTitle: e.target.value,
         })
         return console.log(response)
      } catch (error) {
         return console.log(error.message)
      }
   }

   // СОЗДАТЬ НОВУЮ КОЛОНУ
   const createNewColumn = async () => {
      try {
         dispatch(loadingToastifyAction())
         const { data } = await axiosInstance.post("/api/column", {
            columnName: nameNewColumn,
            boardId,
         })
         getColumnsInDataBase(boardId)
         dispatch(
            successToastifyAction(`Your created column ${data.columnName}`)
         )
         setActive("nothing")
         setNameNewColumn("")
         return null
      } catch (error) {
         return dispatch(errorToastifyAction(error.message))
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
   // УДАЛИТЬ ВСЕ КАРТОЧКИ
   const deleteAllCardsInColumn = async (columnId) => {
      try {
         dispatch(loadingToastifyAction("...Loading"))
         const response = await axiosInstance.delete(
            `/api/column/cards/${columnId}`
         )
         setActive("nothing")
         getColumnsInDataBase(boardId)
         dispatch(warningToastifyAction("Deleted all cards"))
         return null
      } catch (error) {
         return console.log(error.message)
      }
   }
   // ОТКРЫТЬ DROP DOWN КОЛОНЫ
   const getActiveIndexDropDownHandler = (id) => {
      setActive(
         isActive !== `DropDownColumnById=${id}`
            ? `DropDownColumnById=${id}`
            : "nothing"
      )
   }
   // СОЗДАТЬ НОВУЮ КАРТОЧКУ
   const createCardToColumn = async (id) => {
      try {
         dispatch(loadingToastifyAction("...Loading"))

         const { data } = await axiosInstance.post("/api/cards", {
            columnId: id,
            title: inputValue,
            description: "",
         })
         dispatch(successToastifyAction(`Created card a ${data.title}`))
         setActive("nothing")
         getColumnsInDataBase(boardId)
         setInputValueHandler("")
         return console.log(data, "data")
      } catch (error) {
         return console.log(error.message)
      }
   }
   // ДОБАВИТЬ В АРХИВ ВСЕ КАРТОЧКИ
   const addToArchiveAllCards = async (columnId) => {
      try {
         dispatch(loadingToastifyAction("...Loading"))
         const response = await axiosInstance.put(
            `/api/column/archive-column-cards/${columnId}`
         )
         getDataInArchive()
         setActive("nothing")
         getColumnsInDataBase(boardId)
         dispatch(warningToastifyAction("Archived all cards"))
         return console.log(response)
      } catch (error) {
         return console.log(error.message)
      }
   }

   const openInputCreateCard = (columnId) => {
      setActive(`addCardTyColumnById=${columnId}`)
   }

   //  ФУНКЦИИ DRAG AND DROP
   const [boardIdSelet, setBoardIdSelect] = useState()

   const dragStartHandler = (e, column, item) => {
      setBoardIdSelect(item.id)
   }
   const dragOverHandler = (e) => {
      e.preventDefault()
   }
   const dropCardHandler = async (e, id) => {
      try {
         const response = await axiosInstance(
            `/api/cards/move-card/${boardIdSelet}/${id}`
         )
         getColumnsInDataBase(boardId)
         return console.log(response)
      } catch (error) {
         return console.log(error.message)
      }
   }

   useEffect(() => {
      getCardById(firstActive)
   }, [])

   return (
      <DisplayFlex heigth="75vh" AI="flex-start" gap="10px">
         {loading
            ? [...new Array(6)].map((item, index) => <Skeleton key={index} />)
            : columns?.map((item, index) => {
                 return (
                    <CardColumn
                       onDragOver={(e) => dragOverHandler(e)}
                       onDrop={(e) => dropCardHandler(e, item.id)}
                       key={item.id}
                    >
                       <ReusableDropDown
                          width="290px"
                          top="40px"
                          left="260px"
                          showState={
                             isActive === `DropDownColumnById=${item.id}`
                          }
                       >
                          <ListInDropDown>
                             <p>Actions</p>
                             <li onClick={() => openInputCreateCard(item.id)}>
                                Add card
                             </li>
                             <li onClick={() => deleteColumnHandler(item.id)}>
                                Delete a column
                             </li>
                             <hr />
                             <li
                                onClick={() => deleteAllCardsInColumn(item.id)}
                             >
                                Delete all cards in this column
                             </li>
                             <li onClick={() => addToArchiveAllCards(item.id)}>
                                Archive all cards in this column
                             </li>
                             <hr />
                             <li>Archive this column</li>
                          </ListInDropDown>
                       </ReusableDropDown>
                       <CustomIcons
                          onClick={() =>
                             getActiveIndexDropDownHandler(`${item.id}`)
                          }
                          src={threePoint}
                          position="absolute"
                          top="15px"
                          right="14px"
                       />
                       <TitleColumn
                          aria-label="empty textarea"
                          value={item.columnName}
                          onChange={(e) => titleColumnHandler(e, item.id)}
                          name={`${index}`}
                          placeholder="Название колонки"
                          onBlur={(e) => changeTitleColumnQuery(e, item.id)}
                       />
                       <Cards
                          dragStartHandler={dragStartHandler}
                          dragOverHandler={dragOverHandler}
                          columnItem={item}
                          getCardById={getCardById}
                          cardById={cardById}
                          activeAddCardButton={
                             isActive === `addCardTyColumnById=${item.id}`
                          }
                          cards={item.columnCards}
                       />

                       {isActive === `addCardTyColumnById=${item.id}` ? (
                          <AddCardContainer>
                             <Input
                                onChange={(e) => setInputValueHandler(e)}
                                autoFocus
                             />
                             <Button
                                onClick={() =>
                                   inputValue.length > 0 &&
                                   createCardToColumn(item.id)
                                }
                                fullWidth="150px"
                                fullHeight="38px"
                             >
                                Add a card
                             </Button>
                             <CloseButton
                                right="100px"
                                top="54px"
                                onClick={() => setActive("nothing")}
                             />
                          </AddCardContainer>
                       ) : (
                          <AddCardButton
                             onClick={() => openInputCreateCard(item.id)}
                          >
                             + Add a card
                          </AddCardButton>
                       )}
                    </CardColumn>
                 )
              })}

         {isActive !== "inputAddColumn" ? (
            <AddColumnButton onClick={() => setActive("inputAddColumn")}>
               + Add a column
            </AddColumnButton>
         ) : null}
         {isActive === "inputAddColumn" ? (
            <BlockInputCreateColumn>
               <p>Name of the column</p>
               <CloseButton onClick={() => setActive("nothing")} />
               <Input
                  onChange={(e) => setNameNewColumn(e.target.value)}
                  placeholder="Name"
               />
               <Button
                  padding="5px 28px"
                  onClick={() => nameNewColumn.length > 0 && createNewColumn()}
               >
                  Create
               </Button>
            </BlockInputCreateColumn>
         ) : null}
      </DisplayFlex>
   )
}

export default Columns

const CardColumn = styled.div`
   position: relative;
   width: 310px;
   max-height: 77vh;
   padding: 1rem 1rem 0.6rem 0.75rem;
   background: #e6e6e6;
   border-radius: 8px;
   font-family: "Nunito", sans-serif;
   p {
      font-size: 0.8rem;
   }
   span {
      font-size: 1.1rem;
      cursor: pointer;
   }
`
const AddCardButton = styled.span`
   font-size: 1.3rem !important;
   line-height: 20px;
   display: block;
   margin: 12px 0 5px 8px;
`
const TitleColumn = styled(TextareaAutosize)`
   border: 5px solid red;
   width: 250px;
   border: none;
   background: #e6e6e6;
   font-size: 19px;
   resize: none;
   padding: 3px 3px 3px 8px;
   &:focus {
      background: white;
   }
`
const AddColumnButton = styled.button`
   width: 280px;
   height: 45px;
   border-radius: 10px;
   font-size: 1.2rem;
   border: none;
   cursor: pointer;
   color: black;
   &:hover {
      background: #c7c7c7;
   }
   &:active {
      background: #a5a3a3;
   }
`
const BlockInputCreateColumn = styled.div`
   position: relative;
   background: #e6e6e6;
   width: 300px;
   height: 130px;
   padding: 8px;
   border-radius: 6px;
   p {
      color: gray;
      margin: 0 0 5px 5px;
      font-size: 1.1rem;
   }
   Input {
      background-color: white;
      border-radius: 13px;
   }
   Button {
      margin: 8px 0 0 170px;
   }
`
const ListInDropDown = styled.ul`
   list-style: none;
   padding: 12px 0;
   p {
      text-align: center;
      font-size: 1.2rem;
      font-weight: 400;
   }
   li {
      margin: 6px 0 0 0;
      padding: 5px 0 5px 20px;
      font-size: 1rem;
      font-weight: 300;
      cursor: pointer;
      &:hover {
         background: #f2f2f2;
      }
      &:last-child {
         margin-bottom: 4px;
      }
   }
   hr {
      width: 230px;
      border: 0.8px solid #dfe2e7;
      margin: 5px 0 5px 18px;
   }
`
const AddCardContainer = styled.div`
   position: relative;
   margin-top: 7px;
   Button {
      margin-top: 5px;
   }
   Input {
      margin-top: 2px;
   }
   img {
      width: 20px;
      height: 20px;
   }
`
