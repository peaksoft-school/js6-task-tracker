/* eslint-disable no-unused-vars */
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { axiosInstance } from "./axiosInstance"
import {
   loadingToastifyAction,
   warningToastifyAction,
   errorToastifyAction,
   successToastifyAction,
} from "../store/toastifySlice"
import { useToggle } from "../utilits/hooks/useToggle"

export const useColumnQuery = () => {
   const [columns, setColumns] = useState([])
   const [loading, setLoading] = useState(false)
   const [nameNewColumn, setNameNewColumn] = useState("")
   const { isActive, setActive } = useToggle()
   const dispatch = useDispatch()
   const { boardId } = useParams()

   const getColumnsInDataBase = async () => {
      try {
         const { data } = await axiosInstance.get(`/api/column/${boardId}`)
         setColumns(data.columnResponses ? data.columnResponses : [])
         return setLoading(false)
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

   return {
      getColumnsInDataBase,
      deleteColumnHandler,
      columns,
      loading,
      setColumns,
      setNameNewColumn,
      nameNewColumn,
      createNewColumn,
      deleteAllCardsInColumn,
   }
}
