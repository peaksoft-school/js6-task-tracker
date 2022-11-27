import React from "react"
import { axiosInstance } from "../../api/axiosInstance"

export const useBoard = () => {
   const [board, setBoard] = React.useState([])
   const getBoard = async () => {
      try {
         const { data } = await axiosInstance.get("/api/boards/list/2")
         return setBoard(data)
      } catch (error) {
         return console.log(error.message)
      }
   }

   const createBoard = async (boardData) => {
      try {
         const { data } = await axiosInstance.post("/api/boards", boardData)
         return console.log(data)
      } catch (error) {
         return console.log(error)
      }
   }

   return { createBoard, getBoard, board }
}
