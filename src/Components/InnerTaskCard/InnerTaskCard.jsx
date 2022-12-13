/* eslint-disable no-unused-vars */
import React, { useEffect } from "react"
import styled from "styled-components"
import { TextareaAutosize } from "@mui/material"
import ProgressBar from "../UI/ProgressBar"
import closeIcon from "../../assets/icons/closeWhite.svg"
import Button from "../UI/Button"
import CustomIcons from "../Column/CustomIcons"
import plusIcon from "../../assets/icons/whitePlus.svg"
import SecondBlock from "./SecondBlock"
import CloseButton from "../UI/CloseButton"
import ContainerButtons from "../UI/ContainerButtons"
import DisplayFlex from "../../layout/DisplayFlex"

const InnerTaskCard = ({
   dataCardById,
   firstActive,
   getCardById,
   setTwoActive,
   updateColumnAndCloseModal,
}) => {
   useEffect(() => {
      getCardById(firstActive)
   }, [])

   return (
      <DisplayFlex FD="column">
         <CloseButton onClick={() => updateColumnAndCloseModal()} />
         <DisplayFlex>
            <FirstBlock>
               <TitleCard>{dataCardById?.title}</TitleCard>
               <DisplayFlex FW="wrap" gap="0.5rem">
                  {dataCardById?.labelResponses.length !== 0 ? (
                     <Text>Labels</Text>
                  ) : (
                     ""
                  )}

                  {dataCardById?.labelResponses.map((item) => {
                     return (
                        <Label color={item.color}>
                           {item.description}
                           <CloseButton top="7px" />
                        </Label>
                     )
                  })}

                  <CustomIcons src={plusIcon} />
               </DisplayFlex>
               <Text>Description</Text>
               <AddDescription />
               <ContainerButtons
                  width="55vw"
                  titleGrayButton="Cancel"
                  titleBlueButton="Save"
                  paddingButton="8px 40px 10px 40px"
                  widthBlueButton="130px"
               />
               <ProgressBar
                  tasks={9}
                  completedTasks={10}
                  widthProgressPercent={90}
               />
            </FirstBlock>
            <SecondBlock
               updateColumnAndCloseModal={updateColumnAndCloseModal}
               getCardById={getCardById}
               dataCardById={dataCardById}
            />
         </DisplayFlex>
      </DisplayFlex>
   )
}

export default InnerTaskCard

const TitleCard = styled.h3`
   font-weight: 500;
`
const FirstBlock = styled.div`
   width: 130vw;
   overflow: scroll;
   height: 73vh;
`
const Label = styled.li`
   position: relative;
   background-color: ${(props) => props.color};
   color: white;
   padding: 0.2rem 2.5rem 0.2rem 0.7rem;
   border-radius: 4px;
   list-style: none;
`
const AddDescription = styled(TextareaAutosize)`
   width: 55vw;
   min-height: 17vh;
   font-size: 1.1rem;
   resize: none;
   padding: 3px 3px 3px 8px;
   padding: 0.5rem 0.3rem 0.3rem 0.5rem;
   border-radius: 7px;
`
const Text = styled.p`
   color: gray;
`
