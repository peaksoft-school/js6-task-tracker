/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { useDispatch } from "react-redux"
import { TextareaAutosize } from "@mui/material"
import CustomIcons from "../Column/CustomIcons"
import plusIcon from "../../assets/icons/whitePlus.svg"
import SecondBlock from "./SecondBlock"
import CloseButton from "../UI/CloseButton"
import ContainerButtons from "../UI/ContainerButtons"
import DisplayFlex from "../../layout/DisplayFlex"
import avatar from "../../assets/svg/userAvatar.svg"
import UserAvatar from "../UI/UserAvatar"
import { axiosInstance } from "../../api/axiosInstance"
import {
   loadingToastifyAction,
   successToastifyAction,
   errorToastifyAction,
} from "../../store/toastifySlice"
import useTwoActive from "../../utilits/hooks/useTwoActive"
import CheckList from "./CheckList"
import Arrow from "../UI/Arrow"

const InnerTaskCard = ({
   dataCardById,
   getCardById,
   updateColumnAndCloseModal,
   getDataInArchive,
}) => {
   const dispatch = useDispatch()
   const [checkList, setCheckList] = useState([])
   const [newCheckListTitle, setNewCheckListTitle] = useState("")
   const { setTwoActive, firstActive, secondActive } = useTwoActive()
   const updateColumnAndCloseModalHandler = () => {
      updateColumnAndCloseModal()
   }
   const getAllCheckList = async () => {
      try {
         const { data } = await axiosInstance(
            `/api/checklists/${dataCardById.id}`
         )
         data?.sort((a, b) => b.id - a.id)
         return setCheckList(data)
      } catch (error) {
         return console.log(error.message)
      }
   }
   const addCheckList = async () => {
      dispatch(loadingToastifyAction("...Loading"))
      try {
         const response = await axiosInstance.post(
            `/api/checklists/${dataCardById.id}`,
            {
               title: newCheckListTitle,
            }
         )
         getAllCheckList()
         setTwoActive(firstActive, "nothing")
         setNewCheckListTitle("")
         dispatch(successToastifyAction("Added checklist to card"))
         return null
      } catch (error) {
         return dispatch(errorToastifyAction("Error something went wrong"))
      }
   }
   const deleteLabelInInnerTaskCard = async () => {
      try {
         const response = await axiosInstance.delete(
            `/api/labels/${dataCardById.id}`
         )
         getCardById(firstActive)
         return console.log(response)
      } catch (error) {
         return console.log(error.message)
      }
   }
   const firstEightMembers = dataCardById?.memberResponses.slice(0, 8)

   useEffect(() => {
      getAllCheckList()
   }, [])
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
                        <Label key={item.id} color={item.color}>
                           {item.description}
                           <CloseButton
                              top="9px"
                              onClick={() =>
                                 deleteLabelInInnerTaskCard(item.id)
                              }
                           />
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
                           return <UserAvatar key={item.id} src={avatar} />
                        })}
                        {dataCardById.memberResponses.length > 8 ? (
                           <div>
                              +{+dataCardById.memberResponses.length - 8}
                           </div>
                        ) : null}
                     </BlockMembers>
                  </DisplayFlex>
               </DisplayFlex>
               <Text
                  onClick={() =>
                     setTwoActive(
                        firstActive,
                        secondActive !== "Description"
                           ? "Description"
                           : "nothing"
                     )
                  }
               >
                  <Arrow
                     margin="18px 15px -5px 0"
                     rotate={
                        secondActive === "Description" ? "90deg" : "270deg"
                     }
                  />
                  Description
               </Text>
               {secondActive === "Description" ? (
                  <>
                     <AddDescription />
                     <ContainerButtons
                        width="55vw"
                        titleGrayButton="Cancel"
                        titleBlueButton="Save"
                        paddingButton="8px 40px 10px 40px"
                        widthBlueButton="130px"
                     />
                  </>
               ) : null}

               <CheckList
                  dataCardById={dataCardById}
                  getCardById={getCardById}
                  getAllCheckList={getAllCheckList}
                  checkList={checkList}
               />
            </FirstBlock>
            <SecondBlock
               addCheckList={addCheckList}
               updateColumnAndCloseModal={updateColumnAndCloseModal}
               getCardById={getCardById}
               dataCardById={dataCardById}
               getDataInArchive={getDataInArchive}
               setNewCheckListTitle={setNewCheckListTitle}
               newCheckListTitle={newCheckListTitle}
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
   cursor: pointer;
   color: gray;
   margin: 3px 0 8px 0;
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
