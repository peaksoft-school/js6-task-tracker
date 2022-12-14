/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { useParams } from "react-router-dom"
import avatarPhoto from "../../assets/images/avatarPhotoo.jpg"
import deleteIcon from "../../assets/icons/delete.svg"
import CommentSection from "../UI/CommentSection"
import { GrayButtonsInnerTaskCard } from "../../utilits/constants/Constants"
import GrayButton from "../UI/GrayButtons"
import DropDown from "../UI/ReusableDropDown"
import closeSvg from "../../assets/icons/close.svg"
import Input from "../UI/Input"
import searchIcon from "../../assets/svg/SearchIcon.svg"
import MemberItem from "../UI/MemberItem"
import avatar from "../../assets/svg/userAvatar.svg"
import Button from "../UI/Button"
import CloseButton from "../UI/CloseButton"
import DateTimePicker from "../UI/DateTimePicker"
import CustomIcons from "../Column/CustomIcons"
import useTwoActive from "../../utilits/hooks/useTwoActive"
import DisplayFlex from "../../layout/DisplayFlex"
import AddLabel from "./Label"
import { axiosInstance } from "../../api/axiosInstance"
import {
   errorToastifyAction,
   loadingToastifyAction,
   successToastifyAction,
   warningToastifyAction,
} from "../../store/toastifySlice"
import { useData } from "../../utilits/hooks/useData"

const AddedToCard = ({
   dataCardById,
   getCardById,
   updateColumnAndCloseModal,
   getDataInArchive,
   addCheckList,
   newCheckListTitle,
   setNewCheckListTitle,
   updateEstimation,
}) => {
   const { secondActive, setTwoActive, firstActive } = useTwoActive()
   const [showComment, setShowComment] = useState(false)
   const [readyLabels, setReadyLabels] = useState([])
   const dispatch = useDispatch()
   const { workspaceId } = useParams()
   const { data, setData } = useData()

   // ПОИСК УЧАСТНИКОВ ДЛЯ КАРТОЧКУ
   const searchMembersQuery = async (value) => {
      try {
         const { data } = await axiosInstance.get(
            `/api/members/search/${workspaceId}?email=${value}`
         )
         return setData(data)
      } catch (error) {
         return console.log(error.message)
      }
   }
   // ДОБАВИТЬ УЧАСТНИКА В КАРТОЧКУ
   const assignMemberToCard = async (userId) => {
      dispatch(loadingToastifyAction("...Loading"))
      try {
         const { data } = await axiosInstance.post(
            `/api/members/assign/${userId}/${dataCardById.id}`
         )
         dispatch(
            successToastifyAction(
               `${data.firstName}${data.lastName} added to card`
            )
         )
         return null
      } catch (error) {
         return console.log(error.message)
      }
   }
   // УДАЛИТЬ КАРТОЧКУ
   const deleteCardHandlerById = async () => {
      dispatch(loadingToastifyAction("...Loading"))
      try {
         const response = await axiosInstance.delete(
            `/api/cards/${dataCardById.id}`
         )
         if (response.status === 200)
            dispatch(warningToastifyAction("Deleted card"))
         return updateColumnAndCloseModal()
      } catch (error) {
         return dispatch(errorToastifyAction(error.message))
      }
   }
   // ДОБАВИТЬ В АРХИВ
   const sendToArchiveCard = async () => {
      dispatch(loadingToastifyAction("...Loading"))
      try {
         const response = await axiosInstance.put(
            `/api/cards/archive/${dataCardById.id}`
         )
         if (response.status === 200)
            dispatch(warningToastifyAction("added to archive"))
         getDataInArchive()
         return updateColumnAndCloseModal()
      } catch (error) {
         return dispatch(errorToastifyAction(error.message))
      }
   }
   const getReadyLabelsQuery = async () => {
      try {
         const { data } = await axiosInstance.get("/api/labels")
         data?.sort((a, b) => b.id - a.id)
         return setReadyLabels(data)
      } catch (error) {
         return console.log(error.message)
      }
   }
   const setEstimation = async (data) => {
      dispatch(loadingToastifyAction("...Loading"))
      try {
         const response = await axiosInstance.post(
            `/api/estimation/${dataCardById.id}`,
            data
         )
         dispatch(successToastifyAction("Added estimation"))
         getCardById(firstActive)
         return setTwoActive(firstActive, "nothing")
      } catch (error) {
         return dispatch(errorToastifyAction("Error"))
      }
   }
   useEffect(() => {
      getReadyLabelsQuery()
   }, [])

   return (
      <StyledSecondBlock>
         <p>Add</p>
         <DisplayFlex FW="wrap" gap="0.7rem" margin="1rem 0 1rem 0">
            {GrayButtonsInnerTaskCard.map((item) => {
               return (
                  <>
                     <GrayButton
                        onClick={() => setTwoActive(firstActive, item.title)}
                        iconButton={item.icon}
                        fullWidth={showComment && "13rem"}
                     >
                        {showComment && item.title}
                     </GrayButton>

                     <DropDown
                        padding="0 10px 10px 20px"
                        borderRadius="10px"
                        width="310px"
                        showState={secondActive === "Members"}
                     >
                        <ContainerText>
                           <span>Member</span>
                           <CloseButton
                              onClick={() =>
                                 setTwoActive(firstActive, "nothing")
                              }
                              src={closeSvg}
                              alt="close"
                           />
                        </ContainerText>

                        <ContainerInput>
                           <Input
                              onChange={(e) =>
                                 searchMembersQuery(e.target.value)
                              }
                              placeholder="Search"
                              autoFocus
                           />
                           <CustomIcons
                              src={searchIcon}
                              position="absolute"
                              alt="search"
                              top="8px"
                              right="10px"
                           />
                        </ContainerInput>
                        <ContainerMemberItem>
                           {data.length > 0 ? (
                              data.map((item) => {
                                 return (
                                    <MemberItem
                                       onClick={() =>
                                          assignMemberToCard(item.id)
                                       }
                                       firstname={item.firstName}
                                       lastName={item.lastName}
                                       image={item.image}
                                       email={item.email}
                                    />
                                 )
                              })
                           ) : (
                              <p>Ничего не найдено</p>
                           )}
                        </ContainerMemberItem>
                     </DropDown>

                     <DropDown
                        width="310px"
                        showState={secondActive === "Estimation"}
                        top="-50px"
                        left="95px"
                        padding="5px 3px 20px 10px"
                     >
                        <ContainerText>
                           <span>Estimation</span>
                           <CloseButton
                              onClick={() =>
                                 setTwoActive(firstActive, "nothing")
                              }
                              src={closeSvg}
                              alt="close"
                           />
                        </ContainerText>

                        <DateTimePicker
                           getDateTimeValue={
                              dataCardById.estimationResponse.id
                                 ? updateEstimation
                                 : setEstimation
                           }
                        />
                     </DropDown>

                     <DropDown
                        top={showComment ? "97" : "50px"}
                        width="350px"
                        borderRadius="7px"
                        showState={secondActive === "Label"}
                     >
                        <ContainerText>
                           <span>Label</span>
                           <CloseButton
                              onClick={() =>
                                 setTwoActive(firstActive, "nothing")
                              }
                              src={closeSvg}
                              alt="close"
                           />
                        </ContainerText>
                        <AddLabel
                           readyLabels={readyLabels}
                           getReadyLabelsQuery={getReadyLabelsQuery}
                           firstActive={firstActive}
                           setTwoActive={setTwoActive}
                           dataCardById={dataCardById}
                           getCardById={getCardById}
                           setReadyLabels={setReadyLabels}
                        />
                     </DropDown>

                     <DropDown
                        padding="2px 15px 15px 15px"
                        borderRadius="10px"
                        top={showComment ? "140px" : "50px"}
                        height="150px"
                        width="280px"
                        showState={secondActive === "Checklist"}
                     >
                        <ContainerText>
                           <span>Add checklist</span>
                           <CloseButton
                              onClick={() =>
                                 setTwoActive(firstActive, "nothing")
                              }
                              src={closeSvg}
                              alt="close"
                           />
                        </ContainerText>
                        <Input
                           value={newCheckListTitle}
                           onChange={(e) =>
                              setNewCheckListTitle(e.target.value)
                           }
                           style={{ marginBottom: "10px" }}
                           placeholder="Title"
                        />
                        <Button
                           onClick={() => addCheckList()}
                           fullWidth="250px"
                           fullHeight="33px"
                        >
                           Add checklist
                        </Button>
                     </DropDown>
                  </>
               )
            })}
         </DisplayFlex>
         <p>Actions</p>
         <DisplayFlex gap="10px" margin="15px 0 15px 0">
            <GrayButton
               onClick={() => deleteCardHandlerById()}
               iconButton={deleteIcon}
               fullWidth={showComment && "13rem"}
            >
               {showComment && "Delete"}
            </GrayButton>
            <GrayButton
               onClick={() => sendToArchiveCard()}
               fullWidth={showComment && "13rem"}
               archived={dataCardById?.isArchive}
            >
               <svg
                  width="21"
                  height="17"
                  viewBox="0 0 14 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ margin: "0 13px 0 14px" }}
               >
                  <path
                     d="M0.313379 2.42866L0.277925 1.69231C0.277925 0.757672 1.08048 0 2.07048 0H5.36122C5.83663 0 6.29257 0.178296 6.62874 0.495666L7.37124 1.19664C7.70741 1.51401 8.16335 1.69231 8.63877 1.69231H12.2073C13.2614 1.69231 14.0879 2.54679 13.9925 3.53783L13.4221 9.46091C13.3382 10.3326 12.5641 11 11.6369 11H2.36305C1.43594 11 0.661802 10.3326 0.577865 9.46091L0.00750762 3.53783C-0.0319781 3.12778 0.0863757 2.7411 0.313379 2.42866ZM1.7927 2.53846C1.26566 2.53846 0.852386 2.9657 0.900102 3.46122L1.47046 9.3843C1.51243 9.82014 1.8995 10.1538 2.36305 10.1538H11.6369C12.1005 10.1538 12.4876 9.82014 12.5295 9.3843L13.0999 3.46122C13.1476 2.9657 12.7343 2.53846 12.2073 2.53846H1.7927ZM5.99498 1.09399C5.8269 0.935302 5.59893 0.846154 5.36122 0.846154H2.07048C1.58113 0.846154 1.18338 1.21639 1.17436 1.67634L1.18 1.79355C1.37073 1.72811 1.57695 1.69231 1.7927 1.69231H6.62874L5.99498 1.09399Z"
                     fill={dataCardById?.isArchive ? "white" : "#BEBFBF"}
                  />
               </svg>
               {showComment && "Archived"}
            </GrayButton>
         </DisplayFlex>
         <CommentSection
            dataCardById={dataCardById}
            sizeComment={secondActive === "showButton"}
            userAvatar={avatarPhoto}
            showComment={showComment}
            setShowComment={setShowComment}
         />
      </StyledSecondBlock>
   )
}

export default AddedToCard

const StyledSecondBlock = styled.div`
   width: 76vw;
   position: relative;
   margin-right: 15px;
`
const ContainerText = styled.div`
   height: 40px;
   width: 100%;
   display: flex;
   align-items: center;
   position: relative;
   span {
      width: 93%;
      text-align: center;
   }
`
const ContainerInput = styled.div`
   width: 270px;
   margin: 5px 0 5px 0;
   position: relative;
   input {
      border-radius: 10px;
   }
   img {
      width: 20px;
      height: 20px;
   }
`
const ContainerMemberItem = styled.div`
   max-height: 400px;
   overflow: scroll;
`
