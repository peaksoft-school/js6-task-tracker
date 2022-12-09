/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from "react"
import styled from "styled-components"
import TextareaAutosize from "@mui/base/TextareaAutosize"
import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
// import Button from "../Button"
// import close from "../../../assets/icons/Vectorclose.svg"
// import Input from "../Input"
import threePoint from "../../../assets/icons/threePoint.svg"
import DisplayFlex from "../../../layout/DisplayFlex"
import CustomIcons from "./CustomIcons"
import CloseButton from "../CloseButton"
import Cards from "./Card"
import Input from "../Input"
import Button from "../Button"
import { useToggle } from "../../../utilits/hooks/useToggle"
import { axiosInstance } from "../../../api/axiosInstance"
import Skeleton from "./Skeleton"
import ReusableDropDown from "../ReusableDropDown"
import {
   loadingToastifyAction,
   errorToastifyAction,
   successToastifyAction,
   warningToastifyAction,
} from "../../../store/toastifySlice"

const Columns = () => {
   const [columns, setColumns] = useState([])
   const dispatch = useDispatch()
   const [loading, setLoading] = useState(true)
   const { boardId } = useParams()
   const [nameNewColumn, setNameNewColumn] = useState()
   const { setActive, isActive } = useToggle()

   const titleColumnHandler = ({ target: { name, value } }) => {
      const newColumns = [...columns]
      newColumns[name].columnName = value
      return setColumns(newColumns)
   }

   // ОТКРЫТЬ DROP DOWN КОЛОНЫ
   const getActiveIndexDropDownHandler = (id) => {
      setActive(
         isActive !== `DropDownColumnById=${id}`
            ? `DropDownColumnById=${id}`
            : "nothing"
      )
   }
   // ПОЛУЧИТЬ КОЛОНЫ ИЗ БАЗА ДАННЫХ
   const getColumnsInDataBase = async (id) => {
      try {
         const { data } = await axiosInstance.get(`/api/column/${id}`)
         data.columnResponses?.sort((a, b) => (a.id > b.id ? 1 : -1))
         setColumns(data.columnResponses ? data.columnResponses : [])
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
   const createNewColumn = async () => {
      try {
         dispatch(loadingToastifyAction())
         const { data } = await axiosInstance.post("/api/column", {
            columnName: nameNewColumn,
            boardId,
         })
         getColumnsInDataBase(boardId)
         setActive("nothing")
         return dispatch(
            successToastifyAction(`Your created column ${data.columnName}`)
         )
      } catch (error) {
         return dispatch(errorToastifyAction(error.message))
      }
   }

   useEffect(() => {
      getColumnsInDataBase(boardId)
   }, [boardId])
   return (
      <DisplayFlex AI="flex-start" gap="10px">
         {loading
            ? [...new Array(6)].map((item, index) => <Skeleton key={index} />)
            : columns?.map((item, index) => {
                 return (
                    <CardColumn key={item.id}>
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
                             <li>Add card</li>
                             <li onClick={() => deleteColumnHandler(item.id)}>
                                Delete a column
                             </li>
                             <hr />
                             <li>Delete all cards in this column</li>
                             <li>Archive all cards in this column</li>
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
                          onChange={titleColumnHandler}
                          name={`${index}`}
                          placeholder="Название колонки"
                       />
                       <Cards cards={item.columnCards} />
                       <AddCardButton>+ Add a card</AddCardButton>
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
               <Button padding="5px 28px" onClick={createNewColumn}>
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
   width: 320px;
   max-height: 82vh;
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
   font-size: 16px;
   line-height: 20px;
   display: block;
   margin: 5px 0 5px 8px;
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
   background: #e6e6e6;
   cursor: pointer;
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
      font-size: 1.1rem;
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
