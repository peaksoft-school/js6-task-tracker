import React, { useState } from "react"
import Button from "@mui/material/Button"
import styled from "styled-components"
import threePoint from "../../../assets/icons/threePoint.svg"
import DisplayFlexJCSB from "../../../layout/DisplayFlexJCSB"
import EditIcon from "../../../assets/icons/Icon Shape (1).svg"
import CustomIcons from "./CustomIcons"
import { Labels, Columns } from "../../../utilits/constants/Constants"
import timeIcon from "../../../assets/icons/Real World Icon.svg"
import comentIcon from "../../../assets/icons/Vector (1).svg"
import descriptionIcon from "../../../assets/icons/Typography Icon (1).svg"
import peopleIcon from "../../../assets/icons/People Icon.svg"
import completeIcon from "../../../assets/icons/UI and Keyboard Icon.svg"
import AddButton from "./AddButtonColumn"

const TaskCard = () => {
   const [showLabel, setShowLabel] = useState(false)
   const [showAddCard, setShowAddCard] = useState(false)

   const showLabelHandler = () => {
      setShowLabel(!showLabel)
   }

   const addCardHandler = () => {
      setShowAddCard(!showAddCard)
   }

   return Columns.length > 0 ? (
      Columns.map((item) => (
         <CardColumn>
            <DisplayFlexJCSB width="270px" heigth="50px">
               <p>{item.titleColumn}</p>
               <CustomIcons src={threePoint} alt="ThreePointIcon" />
            </DisplayFlexJCSB>
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
               Какая то задача, которую нужно выполнить
               <CustomIcons src={EditIcon} alt="EditIcon" />
               <DisplayFlexJCSB>
                  <p>
                     <CustomIcons src={timeIcon} /> 2 month
                  </p>
                  <DisplayFlexJCSB width="150px">
                     <CustomIcons src={descriptionIcon} />
                     <CustomIcons src={comentIcon} />
                     <CustomIcons src={completeIcon} />
                     <span>1/3</span>
                     <CustomIcons src={peopleIcon} />
                     <span>5</span>
                  </DisplayFlexJCSB>
               </DisplayFlexJCSB>
            </BlockCard>

            {showAddCard ? (
               <span onClick={addCardHandler}>+ Add a Card</span>
            ) : (
               <>
                  <InputAddCard />
                  <DisplayFlexJCSB width="250px">
                     <ButtonStyled size="small" variant="contained">
                        Добавить карточку
                     </ButtonStyled>
                     <span onClick={addCardHandler}>Закрыть</span>
                  </DisplayFlexJCSB>
               </>
            )}
         </CardColumn>
      ))
   ) : (
      <AddButton>+ Add a Column</AddButton>
   )
}

export default TaskCard

const CardColumn = styled.div`
   width: 288px;
   padding: 15px 15px 10px 12px;
   background: rgba(145, 145, 145, 0.11);
   border-radius: 8px;
   font-family: "Nunito", sans-serif;
   p {
      font-size: 17px;
   }
   span {
      font-size: 22px;
      cursor: pointer;
   }
`

const BlockCard = styled.p`
   position: relative;
   width: 272px;
   border-radius: 4px;
   border: none;
   padding: 8px;
   margin: 0 0 5px 0;
   font-size: 18px !important;
   background-color: white;
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
      padding-left: 6px;
   }
   span {
      font-size: 17px;
      color: #919191;
   }
`

const Label = styled.label`
   width: ${(props) => !props.showLabel && "56px"};
   height: ${(props) => !props.showLabel && "7px"};
   padding: ${(props) => props.showLabel && "2px 5px"};
   background-color: ${(props) => props.color};
   font-size: 14px;
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
   gap: 8px;
   margin-bottom: 10px;
`
const InputAddCard = styled.input`
   width: 240px;
   height: 12px;
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
      height: 30px;
   }
`
