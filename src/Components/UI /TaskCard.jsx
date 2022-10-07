import React, { useState } from "react"
import styled from "styled-components"
import threePoint from "../../assets/icons/threePoint.svg"
import DisplayFlexJCSB from "../../layout/DisplayFlexJCSB"
import EditIcon from "../../assets/icons/Icon Shape (1).svg"
import CustomIcons from "./CustomIcons"
import People from "../../assets/icons/People Icon.svg"
import descriptionIcon from "../../assets/icons/Typography Icon (1).svg"
import completeIcon from "../../assets/icons/UI and Keyboard Icon.svg"
import commentIcon from "../../assets/icons/Vector (1).svg"
import timeIcon from "../../assets/icons/Real World Icon.svg"
import { Labels } from "../../utilits/constants/Constants"

const TaskCard = () => {
   const [showLabel, setShowLabel] = useState(false)

   const showLabelHandler = () => {
      setShowLabel(!showLabel)
   }

   return (
      <>
         <AddButtonColumn>+ Add a column</AddButtonColumn>

         <br />
         <br />

         <CardColumn>
            <DisplayFlexJCSB width="270px" heigth="50px">
               <p>Title</p>
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
                     <CustomIcons src={commentIcon} />
                     <CustomIcons src={completeIcon} />
                     <span>1/3</span>
                     <CustomIcons src={People} />
                     <span>5</span>
                  </DisplayFlexJCSB>
               </DisplayFlexJCSB>
            </BlockCard>
            <span>+ Add a card</span>
         </CardColumn>
      </>
   )
}

export default TaskCard

const AddButtonColumn = styled.button`
   border: none;
   width: 280px;
   height: 44px;
   background: rgba(145, 145, 145, 0.11);
   border-radius: 8px;
   font-family: "Nunito", sans-serif;
   font-style: normal;
   font-weight: 400;
   font-size: 18px;
   line-height: 20px;
   color: #111111;
`

const CardColumn = styled.div`
   width: 288px;
   padding: 5px 5px 10px 12px;
   background: rgba(145, 145, 145, 0.11);
   border-radius: 8px;
   font-family: "Nunito", sans-serif;
   p {
      font-size: 22px;
   }
   span {
      font-size: 22px;
      cursor: pointer;
   }
`

const BlockCard = styled.p`
   position: relative;
   width: 264px;
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
   padding: ${(props) => (props.showLabel ? "1px 4px" : "3px 27px")};
   background-color: ${(props) => props.color};
   font-size: 14px;
   color: white;
   font-weight: 700;
   border-radius: 8px;
`

const BlockLables = styled.div`
   display: flex;
   flex-wrap: wrap;
   gap: 8px;
   margin-bottom: 10px;
`
