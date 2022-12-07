import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import { COLORS, BackImage } from "../../../utilits/constants/Constants"
import Input from "../../UI/Input"
import DisplayFlex from "../../../layout/DisplayFlex"
import ImageBlock from "./ImageBlock"
import ColorBlock from "./ColorBlock"
import { createBoard } from "../../../store/boardSlice"
import { useValidation } from "../../../utilits/hooks/useValidation"
import ContainerButtons from "../../UI/ContainerButtons"

function CreateBoard({ setTwoActive, secondActive }) {
   const dispatch = useDispatch()
   const { workspaceId } = useParams()
   const initialValue =
      "https://images.unsplash.com/photo-1669207805234-51bdb6f3bfe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"

   const [selectedBoard, setSelectedBoard] = useState(initialValue)
   const { isValid, validHandler } = useValidation()
   const [titleBoard, setTitleBoard] = useState("")

   const selectedBoardHandler = (value) => {
      setSelectedBoard(value)
   }

   const createWorkspacesHandler = () => {
      const readyData = {
         workspaceId,
         title: titleBoard,
         background: selectedBoard,
      }
      if (readyData.title.trim().length > 0) {
         dispatch(createBoard({ readyData, dispatch }))
         setTwoActive("nothing", "nothing")
      }
      if (readyData.title.trim().length === 0) {
         validHandler(true)
      }
   }

   const getTitleBoardHandler = (e) => {
      setTitleBoard(e.target.value)
      if (titleBoard.trim().length >= 0) {
         validHandler(false)
      }
   }

   return (
      <Container>
         <h4>Create new board</h4>
         <Input
            value={titleBoard}
            onChange={(e) => getTitleBoardHandler(e)}
            placeholder="Board title*"
         />
         <ErrorText>{isValid && "required field"} </ErrorText>
         <h3>Add background</h3>
         <DisplayFlex JK="space-between">
            <p>Photo</p>
            <p
               onClick={() =>
                  setTwoActive(
                     "modalCreateBoard",
                     secondActive !== "imagesDropDown"
                        ? "imagesDropDown"
                        : "nothing"
                  )
               }
            >
               See more
            </p>
         </DisplayFlex>
         <ImageBlock
            selectedBoardHandler={selectedBoardHandler}
            selectedBoard={selectedBoard}
            secondActive={secondActive}
            BackImage={BackImage}
         />
         <DisplayFlex JK="space-between">
            <p>Colors</p>
            <p
               onClick={() =>
                  setTwoActive(
                     "modalCreateBoard",
                     secondActive !== "colorsDropDown"
                        ? "colorsDropDown"
                        : "nothing"
                  )
               }
            >
               See more
            </p>
         </DisplayFlex>
         <ColorBlock
            selectedBoardHandler={selectedBoardHandler}
            selectedBoard={selectedBoard}
            secondActive={secondActive}
            COLORS={COLORS}
         />
         <ContainerButtons
            clickGrayButton={() => setTwoActive("nothing", "nothing")}
            clickBlueButton={createWorkspacesHandler}
            titleBlueButton="Create Board"
            titleGrayButton="Cancel"
            paddingButton="0 20px 0 20px"
         />
      </Container>
   )
}

export default CreateBoard

const Container = styled.div`
   position: relative;
   h4 {
      text-align: center;
      font-weight: 500;
      font-size: 1.2rem;
   }
   h3 {
      font-weight: 400;
      color: gray;
      margin-top: 10px;
   }
   p {
      color: gray;
      font-size: 1.2rem;
      font-weight: 300;
      &:last-child {
         cursor: pointer;
         text-decoration: underline;
      }
   }
   img {
      width: 140px;
      height: 65px;
      border-radius: 10px;
      margin: 3px 0 3px 0;
   }
   div {
      margin: 7px 0 7px 0;
   }
`
const ErrorText = styled.p`
   position: absolute;
   color: red !important;
   top: 79px;
   left: 5px;
`
