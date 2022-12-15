import React, { useState } from "react"
import styled from "styled-components"
import TextareaAutosize from "@mui/base/TextareaAutosize"
import Button from "../Button"
import threePoint from "../../../assets/icons/threePoint.svg"
import DisplayFlexJCSB from "../../../layout/DisplayFlex"
import CustomIcons from "./CustomIcons"
import { Columns } from "../../../utilits/constants/Constants"
import AddButton from "./AddButtonColumn"
import close from "../../../assets/icons/Vectorclose.svg"
import Card from "./Card"
import Input from "../Input"
import useOpenClose from "../../../utilits/hooks/useOpenClose"

const TaskCard = ({ getTitleColumn, openInnerTaskCard }) => {
   const [titleColumn, setTitleColumn] = useState("")

   const { isShowing, toggle } = useOpenClose()

   const titleColumnHandler = (e) => {
      setTitleColumn(e.target.value)
   }

   const sendTitleColumn = () => {
      if (titleColumn.trim().length > 0) getTitleColumn(titleColumn)
   }

   return Columns.length > 0 ? (
      <DisplayFlexJCSB flexStart="flex-start">
         {Columns.map((item) => (
            <CardColumn key={item.id}>
               <CustomIcons
                  src={threePoint}
                  position="absolute"
                  top="15px"
                  right="14px"
               />

               <TitleColumn
                  onBlur={sendTitleColumn}
                  aria-label="empty textarea"
                  value={titleColumn}
                  onChange={titleColumnHandler}
                  placeholder={
                     titleColumn.trim().length < 1 && "Название колонки"
                  }
               />
               <ContainerCard>
                  <Card showInnerTaskCard={openInnerTaskCard} />
               </ContainerCard>

               {!isShowing ? (
                  <AddCardButton onClick={toggle}>+ Add a card</AddCardButton>
               ) : (
                  <ContainerAddCard>
                     <Input />
                     <DisplayFlexJCSB flexStart="flex-start" width="250px">
                        <Button fullHeight="30px" fullWidth="220px">
                           Add a card
                        </Button>
                        <CustomIcons src={close} click={toggle} />
                     </DisplayFlexJCSB>
                  </ContainerAddCard>
               )}
            </CardColumn>
         ))}
      </DisplayFlexJCSB>
   ) : (
      <AddButton>+ Add a Column</AddButton>
   )
}

export default TaskCard

const CardColumn = styled.div`
   position: relative;
   width: 330px;
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
const ContainerCard = styled.div`
   max-height: 57vh;
   overflow: scroll;
`
const AddCardButton = styled.span`
   font-size: 16px;
   line-height: 20px;
   display: block;
   margin: 15px 0 5px 4px;
`
const ContainerAddCard = styled.div`
   height: 70px;
   margin: 5px 0 5px;
   Input {
      height: 12px;
      background-color: white;
      border-radius: 13px;
   }
   button {
      margin-top: 6px;
   }
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
