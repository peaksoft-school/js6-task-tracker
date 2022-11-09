import styled from "styled-components"
import React from "react"
import ProgressBar from "./UI/ProgressBar"
import DisplayFlexJCSB from "../layout/DisplayFlexJCSB"
import GrayButton from "./UI/GrayButtons"
import { GrayButtonsInnerTaskCard } from "../utilits/constants/Constants"
import CommentSection from "./UI/CommentSection"
import deleteIcon from "../assets/icons/delete.svg"
import fileIcon from "../assets/icons/file.svg"

const InnerTaskCard = () => {
   return (
      <Container>
         <DisplayFlexJCSB>
            <FirstBlock>
               <TitleCard>Какая то задача которую нужно выполнить</TitleCard>
               <ProgressBar
                  tasks={9}
                  completedTasks={10}
                  widthProgressPercent={90}
               />
            </FirstBlock>
            <SecondBlock>
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
               <CommentSection />
            </SecondBlock>
         </DisplayFlexJCSB>
      </Container>
   )
}

export default InnerTaskCard

const Container = styled.div`
   display: flex;
   flex-direction: column;
`
const TitleCard = styled.h3`
   font-weight: 500;
`
const ContainerButtons = styled.div`
   display: flex;
   flex-wrap: wrap;
   gap: 0.7rem;
   margin: 1rem 0 1rem 0;
`
const FirstBlock = styled.div`
   width: 130vw;
   height: 90vh;
   overflow: scroll;
`
const SecondBlock = styled.div`
   width: 80vw;
   height: 90vh;
`
