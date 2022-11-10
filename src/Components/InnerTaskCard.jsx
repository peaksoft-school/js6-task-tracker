import styled from "styled-components"
import { TextareaAutosize } from "@mui/material"
import React from "react"
import ProgressBar from "./UI/ProgressBar"
import DisplayFlexJCSB from "../layout/DisplayFlexJCSB"
import GrayButton from "./UI/GrayButtons"
import {
   GrayButtonsInnerTaskCard,
   Labels,
} from "../utilits/constants/Constants"
import avatarPhoto from "../assets/images/avatarPhotoo.jpg"
import CommentSection from "./UI/CommentSection"
import deleteIcon from "../assets/icons/delete.svg"
import fileIcon from "../assets/icons/file.svg"
import closeIcon from "../assets/icons/closeWhite.svg"
import Button from "./UI/Button"
import CustomIcons from "./UI/TaskCard/CustomIcons"
import plusIcon from "../assets/icons/whitePlus.svg"

const InnerTaskCard = () => {
   return (
      <Container>
         <DisplayFlexJCSB>
            <FirstBlock>
               <TitleCard>Какая то задача которую нужно выполнить</TitleCard>
               <Text>Labels</Text>
               <BlockLabels>
                  {Labels.map((item) => {
                     return (
                        <Label color={item.color}>
                           {item.text} <img src={closeIcon} alt="close" />
                        </Label>
                     )
                  })}
                  <CustomIcons src={plusIcon} />
               </BlockLabels>

               <Text>Description</Text>
               <AddDescription />
               <Block>
                  <Button
                     hover="none"
                     active="none"
                     fullHeight="5vh"
                     fullWidth="8vw"
                     color="#F0F0F0"
                  >
                     Cancel
                  </Button>
                  <Button fullHeight="5vh" fullWidth="8vw">
                     Save
                  </Button>
               </Block>

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
               <CommentSection userAvatar={avatarPhoto} />
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
const BlockLabels = styled.ul`
   display: flex;
   flex-wrap: wrap;
   gap: 0.5rem;
`
const Label = styled.li`
   background-color: ${(props) => props.color};
   color: white;
   padding: 0.2rem 0.7rem 0.2rem 0.7rem;
   border-radius: 4px;
`
const AddDescription = styled(TextareaAutosize)`
   width: 55vw;
   font-size: 1.1rem;
   resize: none;
   padding: 3px 3px 3px 8px;
   padding: 0.5rem 0.3rem 0.3rem 0.5rem;
   border-radius: 7px;
`
const Text = styled.p`
   color: gray;
`

const Block = styled.div`
   width: 55vw;
   display: flex;
   justify-content: flex-end;
   button {
      margin-left: 0.8rem;
   }
`
