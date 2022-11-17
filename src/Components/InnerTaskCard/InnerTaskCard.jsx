import styled from "styled-components"
import { TextareaAutosize } from "@mui/material"
import React from "react"
import ProgressBar from "../UI/ProgressBar"
import DisplayFlexJCSB from "../../layout/DisplayFlexJCSB"
import { Labels } from "../../utilits/constants/Constants"
import closeIcon from "../../assets/icons/closeWhite.svg"
import Button from "../UI/Button"
import CustomIcons from "../UI/TaskCard/CustomIcons"
import plusIcon from "../../assets/icons/whitePlus.svg"
import SecondBlock from "./SecondBlock"

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
            <SecondBlock />
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
const FirstBlock = styled.div`
   width: 130vw;
   height: 90vh;
   overflow: scroll;
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
