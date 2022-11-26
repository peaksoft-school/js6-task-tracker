import React, { useState } from "react"
import TextareaAutosize from "@mui/base/TextareaAutosize"
import Button from "@mui/material/Button"
import styled from "styled-components"
import threePoint from "../../../assets/icons/threePoint.svg"
import DisplayFlexJCSB from "../../../layout/DisplayFlexJCSB"
import EditIcon from "../../../assets/icons/Icon Shape (1).svg"
import CustomIcons from "./CustomIcons"
import comentIcon from "../../../assets/icons/Comment.svg"
import { Labels, Columns } from "../../../utilits/constants/Constants"
import timeIcon from "../../../assets/icons/Real World Icon.svg"
import descriptionIcon from "../../../assets/icons/Typography Icon (1).svg"
import peopleIcon from "../../../assets/icons/people.svg"
import completeIcon from "../../../assets/icons/UI and Keyboard Icon.svg"
import AddButton from "./AddButtonColumn"
import close from "../../../assets/icons/Vectorclose.svg"

const TaskCard = ({ getTitleColumn, showInnerTaskCard }) => {
   const [showLabel, setShowLabel] = useState(false)
   const [showAddCard, setShowAddCard] = useState(false)
   const [titleColumn, setTitleColumn] = useState("")

   const showLabelHandler = () => {
      setShowLabel(!showLabel)
   }

   const addCardHandler = () => {
      setShowAddCard(!showAddCard)
   }

   const titleColumnHandler = (e) => {
      setTitleColumn(e.target.value)
   }

   const sendTitleColumn = () => {
      if (titleColumn.trim().length > 0) getTitleColumn(titleColumn)
   }

   return Columns.length > 0 ? (
      <ContainerColumn>
         <DisplayFlexJCSB flexStart="flex-start">
            {Columns.map(() => (
               <CardColumn>
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
                  <BlockCard>
                     <BlockLables>
                        {Labels.map((item) => (
                           <Label
                              showLabel={showLabel}
                              key={item.id}
                              onClick={showLabelHandler}
                              color={item.color}
                           >
                              {showLabel ? item.text : ""}
                           </Label>
                        ))}
                     </BlockLables>
                     <TitleCard>Движение кылыш керек</TitleCard>
                     <CustomIcons
                        click={showInnerTaskCard}
                        edit="edit"
                        src={EditIcon}
                        position="absolute"
                        top="15px"
                        right="7px"
                     />
                     <DisplayFlexJCSB>
                        <p>
                           <CustomIcons src={timeIcon} /> 2 month
                        </p>
                        <DisplayFlexJCSB width="160px">
                           <CustomIcons src={descriptionIcon} />
                           <CustomIcons src={comentIcon} />
                           <CustomIcons src={completeIcon} />
                           <span>1/3</span>
                           <CustomIcons src={peopleIcon} />
                           <span>5</span>
                        </DisplayFlexJCSB>
                     </DisplayFlexJCSB>
                  </BlockCard>

                  {!showAddCard ? (
                     <AddCardButton onClick={addCardHandler}>
                        + Add a card
                     </AddCardButton>
                  ) : (
                     <>
                        <InputAddCard />
                        <DisplayFlexJCSB flexStart="flex-start" width="250px">
                           <ButtonStyled size="small" variant="contained">
                              Добавить карточку
                           </ButtonStyled>
                           <CustomIcons src={close} click={addCardHandler} />
                        </DisplayFlexJCSB>
                     </>
                  )}
               </CardColumn>
            ))}
         </DisplayFlexJCSB>
      </ContainerColumn>
   ) : (
      <AddButton>+ Add a Column</AddButton>
   )
}

export default TaskCard

const ContainerColumn = styled.div`
   display: flex;
   align-items: flex-start;
   overflow: scroll;
   height: 87vh;
   padding: 1rem;
`
const CardColumn = styled.div`
   position: relative;
   width: 330px;
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

const BlockCard = styled.p`
   border: 1px solid black;
   position: relative;
   width: 100%;
   border-radius: 4px;
   border: none;
   padding: 0.6rem;
   margin: 0 0 5px 0;
   font-size: 18px !important;
   background-color: white;
   margin-top: 10px;
   &:hover {
      background: #f4f5f7;
      img {
         display: block;
      }
   }
   p {
      background-color: #f9dcb4;
      color: #c7852c;
      border-radius: 8px;
      font-size: 16px;
      font-weight: 500;
      display: flex;
      align-items: center;
      height: 25px;
      width: 90px;
   }
   span {
      font-size: 17px;
      color: #919191;
   }
`
const AddCardButton = styled.span`
   font-size: 16px;
   line-height: 20px;
   display: block;
   margin: 15px 0 5px 4px;
`

const Label = styled.label`
   width: ${(props) => !props.showLabel && "4.8vw"};
   height: ${(props) => !props.showLabel && "1vh"};
   padding: ${(props) => props.showLabel && "2px 5px"};
   background-color: ${(props) => props.color};
   font-size: 14px;
   cursor: pointer;
   color: white;
   font-weight: 700;
   border-radius: 8px;
   -webkit-transition: width 0.3s 0s ease-out, all 0.5s 0s ease;
   -moz-transition: width 0.3s 0s ease-out, all 0.5s 0s ease;
   -o-transition: width 0.3s 0s ease-out, all 0.5s 0s ease;
   transition: width 0.3s 0s ease-out, all 0.5s 0s ease;
`

const BlockLables = styled.div`
   display: flex;
   flex-wrap: wrap;
   gap: 6px;
   margin-bottom: 10px;
`
const InputAddCard = styled.input`
   width: 260px;
   height: 15px;
   border-radius: 7px;
   padding: 10px;
   border: none;
   font-size: 17px;
   margin-bottom: 5px;
   margin-top: 8px;
`

const ButtonStyled = styled(Button)`
   &.MuiButtonBase-root {
      font-size: 10px;
      font-weight: 600;
      width: 150px;
      height: 40px;
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

const TitleCard = styled.h2`
   font-size: 1.2rem;
   margin: 0.8rem 0.3rem;
   font-weight: 500;
`
