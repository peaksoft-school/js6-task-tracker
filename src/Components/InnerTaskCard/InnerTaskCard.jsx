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
import avatar from "../../assets/svg/userAvatar.svg"
import UserAvatar from "../UI/UserAvatar"

const InnerTaskCard = ({
   dataCardById,
   getCardById,
   updateColumnAndCloseModal,
   getDataInArchive,
}) => {
   const updateColumnAndCloseModalHandler = () => {
      updateColumnAndCloseModal()
   }

   const firstEightMembers = dataCardById?.memberResponses.slice(0, 8)

   return (
      <DisplayFlex FD="column">
         <CloseButton onClick={() => updateColumnAndCloseModalHandler()} />
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
                           <CloseButton top="9px" />
                        </Label>
                     )
                  })}

                  <CustomIcons src={plusIcon} />
               </DisplayFlex>
               <DisplayFlex margin="10px 0 0 0" gap="20px">
                  <DisplayFlex FD="column">
                     <Text>Start date</Text>
                     <Date>Sep 9,2022 at 12:51PM</Date>
                  </DisplayFlex>
                  <DisplayFlex FD="column">
                     <Text>Due date</Text>
                     <Date>Sep 9,2022 at 12:51pm</Date>
                  </DisplayFlex>
                  <DisplayFlex FD="column">
                     <Text>Members</Text>
                     <BlockMembers>
                        {firstEightMembers.map((item) => {
                           return <UserAvatar src={avatar} />
                        })}
                        {dataCardById.memberResponses.length > 0 ? (
                           <div>
                              +{+dataCardById.memberResponses.length - 8}
                           </div>
                        ) : null}
                     </BlockMembers>
                  </DisplayFlex>
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
               getDataInArchive={getDataInArchive}
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
   padding: 0.4rem 2.5rem 0.1rem 0.7rem;
   border-radius: 4px;
   list-style: none;
`
const AddDescription = styled(TextareaAutosize)`
   width: 55vw;
   min-height: 15vh;
   font-size: 1.1rem;
   resize: none;
   padding: 0.5rem 0.3rem 0.3rem 0.5rem;
   margin: 0 0 10px 0;
   border-radius: 7px;
`
const Text = styled.p`
   color: gray;
   margin: 6px 0 8px 0;
`
const Date = styled.div`
   width: 220px;
   height: 35px;
   padding: 5px 0 0 0;
   border-radius: 8px;
   border: 1px solid #909090;
   text-align: center;
   font-family: "Montserrat", sans-serif !important;
   font-weight: 500;
`
const BlockMembers = styled.div`
   width: 250px;
   display: flex;
   img {
      width: 35px;
      height: 35px;
      border-left: 3px solid white;
      border-radius: 50%;
      margin-right: -9px;
   }
   div {
      width: 35px;
      height: 35px;
      padding: 4px 0 0 6px;
      border-radius: 50%;
      margin-left: -8px;
      color: white;
      font-size: 1.2rem;
      background: #86a1b1;
   }
`
