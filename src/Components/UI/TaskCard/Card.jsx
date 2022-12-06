import React, { useState } from "react"
import styled from "styled-components"
import CustomIcons from "./CustomIcons"
import EditIcon from "../../../assets/icons/Icon Shape (1).svg"
import comentIcon from "../../../assets/icons/Comment.svg"
import { Labels } from "../../../utilits/constants/Constants"
import timeIcon from "../../../assets/icons/Real World Icon.svg"
import descriptionIcon from "../../../assets/icons/Typography Icon (1).svg"
import peopleIcon from "../../../assets/icons/people.svg"
import completeIcon from "../../../assets/icons/UI and Keyboard Icon.svg"
import DisplayFlexJCSB from "../../../layout/DisplayFlexJCSB"

const Card = ({ showInnerTaskCard }) => {
   const [showLabel, setShowLabel] = useState(false)
   const showLabelHandler = () => {
      setShowLabel(!showLabel)
   }

   return (
      <StyledCard>
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
            onClick={() => showInnerTaskCard("true")}
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
      </StyledCard>
   )
}

export default Card

const StyledCard = styled.div`
   position: relative;
   width: 100%;
   border-radius: 4px;
   border: none;
   padding: 13px 3px 13px 3px;
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
const Label = styled.label`
   width: ${(props) => !props.showLabel && "4vw"};
   height: ${(props) => !props.showLabel && "0.6vh"};
   padding: ${(props) => props.showLabel && "1px 7px"};
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
const TitleCard = styled.h2`
   font-size: 1.2rem;
   margin: 0.8rem 0.3rem;
   font-weight: 500;
`
