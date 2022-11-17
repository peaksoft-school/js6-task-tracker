import React from "react"
import styled from "styled-components"
import avatarPhoto from "../../assets/images/avatarPhotoo.jpg"
import CommentSection from "../UI/CommentSection"
import deleteIcon from "../../assets/icons/delete.svg"
import fileIcon from "../../assets/icons/file.svg"
import { GrayButtonsInnerTaskCard } from "../../utilits/constants/Constants"
import GrayButton from "../UI/GrayButtons"

const SecondBlock = () => {
   return (
      <StyledSecondBlock>
         <p>Add</p>
         <ContainerButtons>
            {GrayButtonsInnerTaskCard.map((item) => {
               return (
                  <GrayButton iconButton={item.icon} fullWidth="10rem">
                     {item.title}
                  </GrayButton>
               )
            })}
         </ContainerButtons>
         <p>Actions</p>
         <ContainerButtons>
            <GrayButton iconButton={deleteIcon} fullWidth="10rem">
               Delete
            </GrayButton>
            <GrayButton iconButton={fileIcon} fullWidth="10rem">
               Archive
            </GrayButton>
         </ContainerButtons>
         <CommentSection userAvatar={avatarPhoto} />
      </StyledSecondBlock>
   )
}

export default SecondBlock

const ContainerButtons = styled.div`
   display: flex;
   flex-wrap: wrap;
   gap: 0.7rem;
   margin: 1rem 0 1rem 0;
`
const StyledSecondBlock = styled.div`
   width: 80vw;
   height: 90vh;
`
