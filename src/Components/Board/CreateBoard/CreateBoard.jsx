import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import { COLORS, BackImage } from "../../../utilits/constants/Constants"
import Input from "../../UI/Input"
import DisplayFlexJCSB from "../../../layout/DisplayFlexJCSB"
import Button from "../../UI/Button"
import { useActiveIndex } from "../../../utilits/hooks/useActiveIndex"
import ImageBlock from "./ImageBlock"
import ColorBlock from "./ColorBlock"
import { createBoard } from "../../../store/boardSlice"

function CreateBoard({ toggle }) {
   const initialValue =
      "https://images.unsplash.com/photo-1669207805234-51bdb6f3bfe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"

   const dispatch = useDispatch()
   const { id } = useParams()
   const [selectedBoard, setSelectedBoard] = useState(initialValue)
   const [titleBoard, setTitleBoard] = useState("")
   const { getActiveIndexHandler, isActiveDropDown } = useActiveIndex()

   const selectedBoardHandler = (value) => {
      setSelectedBoard(value)
   }

   const createWorkspacesHandler = () => {
      const readyData = {
         workspaceId: Number(id),
         title: titleBoard,
         background: selectedBoard,
      }
      dispatch(createBoard({ readyData, dispatch }))
      toggle()
   }

   return (
      <Container>
         <h4>Create new board</h4>
         <Input
            value={titleBoard}
            onChange={(e) => setTitleBoard(e.target.value)}
            placeholder="Board title*"
         />
         <p>Add background</p>
         <DisplayFlexJCSB>
            <p>Photo</p>
            <p
               onClick={() =>
                  getActiveIndexHandler(isActiveDropDown !== "4" ? "4" : "0")
               }
            >
               See more
            </p>
         </DisplayFlexJCSB>
         <ImageBlock
            selectedBoardHandler={selectedBoardHandler}
            selectedBoard={selectedBoard}
            activeIndex={isActiveDropDown}
            BackImage={BackImage}
         />
         <DisplayFlexJCSB>
            <p>Colors</p>
            <p
               onClick={() =>
                  getActiveIndexHandler(isActiveDropDown !== "5" ? "5" : "0")
               }
            >
               See more
            </p>
         </DisplayFlexJCSB>
         <ColorBlock
            selectedBoardHandler={selectedBoardHandler}
            selectedBoard={selectedBoard}
            activeIndex={isActiveDropDown}
            COLORS={COLORS}
         />
         <ContainerButton>
            <Button
               onClick={toggle}
               active="none"
               hover="none"
               fullWidth="110px"
               textColor=" #919191"
               color="#F0F0F0"
            >
               Cancel
            </Button>
            <Button onClick={createWorkspacesHandler} fullWidth="140px">
               Create Board
            </Button>
         </ContainerButton>
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
const ContainerButton = styled.div`
   height: 40px;
   display: flex;
   justify-content: flex-end;
   button {
      margin-left: 15px;
   }
`
