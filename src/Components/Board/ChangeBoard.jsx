/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { axiosInstance } from "../../api/axiosInstance"
import DisplayFlex from "../../layout/DisplayFlex"
import ContainerButtons from "../UI/ContainerButtons"
import Input from "../UI/Input"
import { getBoardByIdQuery } from "../../store/boardSlice"
import {
   errorToastifyAction,
   loadingToastifyAction,
   successToastifyAction,
} from "../../store/toastifySlice"

const ChangeBoard = ({ setActive }) => {
   const { boardId, workspaceId } = useParams()
   const { boardById } = useSelector((state) => state.boards)
   const [inputValue, setInputValue] = useState(boardById.title)
   const dispatch = useDispatch()
   const changedNameBoard = async () => {
      dispatch(loadingToastifyAction("...Loading"))
      try {
         const response = await axiosInstance.put("/api/boards/title", {
            id: boardId,
            newTitle: inputValue,
         })
         dispatch(getBoardByIdQuery(boardId))
         dispatch(successToastifyAction("Changed title board"))
         return setActive("nothing")
      } catch (error) {
         return dispatch(errorToastifyAction("Error something went wrong"))
      }
   }

   return (
      <DisplayFlex gap="20px" FD="column">
         <h2 style={{ textAlign: "center" }}>Title</h2>
         <Input
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            label="New title"
         />
         <ContainerButtons
            clickGrayButton={setActive}
            titleBlueButton="Save"
            titleGrayButton="Cancel"
            clickBlueButton={changedNameBoard}
         />
      </DisplayFlex>
   )
}

export default ChangeBoard
