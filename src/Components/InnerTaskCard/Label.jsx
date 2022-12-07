import React from "react"
import styled from "styled-components"
import editIcon from "../../assets/svg/editIcon.svg"

const Label = ({ color }) => {
   return (
      <ContainerLabel>
         <StyledLabel color={color}>Done</StyledLabel>
         <img src={editIcon} alt="edit" />
      </ContainerLabel>
   )
}

export default Label

const ContainerLabel = styled.div`
   display: flex;
   :last-child {
      margin-bottom: 10px;
   }
`

const StyledLabel = styled.div`
   display: flex;
   align-items: center;
   width: 300px;
   height: 35px;
   background-color: ${(props) => props.color};
   border-radius: 7px;
   margin: 3px 10px 6px 10px;
   padding-left: 15px;
   color: white;
`
