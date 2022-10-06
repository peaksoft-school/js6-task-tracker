import React from "react"
import styled from "styled-components"
import threePoint from "../../assets/icons/threePoint.svg"
import DisplayFlexJCSB from "../../layout/DisplayFlexJCSB.jsx"
import EditIcon from "../../assets/icons/Icon Shape.svg"
import CustomIcons from "./CustomIcons"

const TaskCard = () => {
   return (
      <>
         <AddButtonColumn>+ Add a column</AddButtonColumn>

         <CardColumn>
            <DisplayFlexJCSB>
               <p>Title</p>
               <CustomIcons src={threePoint} alt="ThreePointIcon" />
            </DisplayFlexJCSB>

            <BlockCard>
               <input placeholder="Какая то задача,которую нужно выполнить" />
               <CustomIcons src={EditIcon} alt="EditIcon" />
            </BlockCard>
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
   position: relative;
   width: 250px;
   background: rgba(145, 145, 145, 0.11);
   border-radius: 8px;
   padding: 0 20px 0 20px;
   padding: 15px;
   display: flex;
   flex-direction: column;
   align-items: center;
`

const BlockCard = styled.div`
   height: 60px;
   width: 264px;
   border-radius: 4px;
   border: none;
   background-color: white;
   input {
      border: none;
      outline: none;
      width: 264px;
      height: 60px;
   }
`
