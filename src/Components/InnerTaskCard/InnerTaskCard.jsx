/* eslint-disable no-self-compare */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { useDispatch } from "react-redux"
import CustomIcons from "../Column/CustomIcons"
import plusIcon from "../../assets/icons/whitePlus.svg"
import AddedToCard from "./AddedToCard"
import CloseButton from "../UI/CloseButton"
import DisplayFlex from "../../layout/DisplayFlex"
import avatar from "../../assets/svg/userAvatar.svg"
import UserAvatar from "../UI/UserAvatar"
import { axiosInstance } from "../../api/axiosInstance"
import {
   loadingToastifyAction,
   successToastifyAction,
   errorToastifyAction,
   warningToastifyAction,
} from "../../store/toastifySlice"
import useTwoActive from "../../utilits/hooks/useTwoActive"
import CheckList from "./CheckList"
import Arrow from "../UI/Arrow"
import Description from "./Description"
import EditIcon from "../../assets/icons/Icon Shape (1).svg"
import DateAdded from "../UI/DateAdded"
import ContainerButtons from "../UI/ContainerButtons"

const InnerTaskCard = ({
   dataCardById,
   getCardById,
   updateColumnAndCloseModal,
   getDataInArchive,
   setCardById,
}) => {
   const dispatch = useDispatch()
   const [checkList, setCheckList] = useState([])
   const [newCheckListTitle, setNewCheckListTitle] = useState("")
   const [showInputTitle, setShowInputTitle] = useState(false)
   const { setTwoActive, firstActive, secondActive } = useTwoActive()
   const changeTitle = (e) => {
      const newDataCardById = { ...dataCardById }
      newDataCardById.title = e.target.value
      return setCardById(newDataCardById)
   }
   const setNewTitle = async () => {
      dispatch(loadingToastifyAction("...Loading"))
      try {
         const response = await axiosInstance.put("/api/cards", {
            cardId: dataCardById.id,
            newTitle: dataCardById.title,
            description: "",
         })
         setShowInputTitle(false)
         return dispatch(successToastifyAction("Updated title"))
      } catch (error) {
         return dispatch(errorToastifyAction("Error,something went wrong"))
      }
   }
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
   const deleteLabelInInnerTaskCard = async (id) => {
      dispatch(loadingToastifyAction("...Loading"))
      try {
         const response = await axiosInstance.put(
            `/api/labels/${dataCardById.id}/${id}`
         )
         getCardById(firstActive)
         dispatch(warningToastifyAction("Deleted label in card"))
         return console.log(response)
      } catch (error) {
         return dispatch(errorToastifyAction("Error something went wrong"))
      }
   }
   const firstEightMembers = dataCardById?.memberResponses.slice(0, 8)

   const updateEstimation = async (data) => {
      dispatch(loadingToastifyAction("...Loading"))
      try {
         const response = await axiosInstance.put(
            `/api/estimation/${dataCardById.id}`,
            data
         )
         getCardById(firstActive)
         setTwoActive(firstActive, "nothing")
         return dispatch(successToastifyAction("Updated estimation"))
      } catch (error) {
         return dispatch(errorToastifyAction("Error, something went wrong"))
      }
   }

   useEffect(() => {
      getAllCheckList()
   }, [])

   return (
      <DisplayFlex FD="column">
         <CloseButton onClick={() => updateColumnAndCloseModalHandler()} />
         <DisplayFlex>
            <FirstBlock>
               <TitleCard>
                  <CustomIcons
                     onClick={() => setShowInputTitle(!showInputTitle)}
                     position="absolute"
                     right="96.5%"
                     top="17px"
                     src={EditIcon}
                  />
                  {showInputTitle ? (
                     <>
                        <InputTitle
                           onChange={(e) => changeTitle(e)}
                           value={dataCardById?.title}
                           autoFocus
                        />
                        <ContainerButtons
                           width="50vw"
                           titleGrayButton="Cancel"
                           titleBlueButton="Save"
                           paddingButton="5px 40px 5px 40px"
                           widthBlueButton="130px"
                           clickBlueButton={setNewTitle}
                           clickGrayButton={() => setShowInputTitle(false)}
                        />
                     </>
                  ) : (
                     dataCardById?.title
                  )}
               </TitleCard>
               {dataCardById?.labelResponses.length !== 0 ? (
                  <DisplayFlex margin="10px 0 0 0" gap="0.5rem" FD="column">
                     <Text>Labels</Text>
                     <DisplayFlex FW="wrap" gap="0.5rem">
                        {dataCardById?.labelResponses.map((item) => {
                           return (
                              <Label key={item.id} color={item.color}>
                                 {item.description}
                                 <CloseButton
                                    top="7px"
                                    onClick={() =>
                                       deleteLabelInInnerTaskCard(item.id)
                                    }
                                 />
                              </Label>
                           )
                        })}
                     </DisplayFlex>
                  </DisplayFlex>
               ) : (
                  ""
               )}

               <DisplayFlex margin="10px 0 0 0" gap="20px">
                  <DisplayFlex FD="column">
                     <Text>Start date</Text>
                     <Date>
                        <DateAdded
                           date={dataCardById.estimationResponse.startDateTime}
                        />
                     </Date>
                  </DisplayFlex>
                  <DisplayFlex FD="column">
                     <Text>Due date</Text>

                     <Date>
                        <DateAdded
                           date={dataCardById.estimationResponse.dueDateTime}
                        />
                     </Date>
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
                  <Description
                     firstActive={firstActive}
                     setTwoActive={setTwoActive}
                     setCardById={setCardById}
                     dataCardById={dataCardById}
                  />
               ) : (
                  <DescriptionText>{dataCardById.description}</DescriptionText>
               )}
               <CheckList
                  dataCardById={dataCardById}
                  getCardById={getCardById}
                  getAllCheckList={getAllCheckList}
                  checkList={checkList}
               />
            </FirstBlock>
            <AddedToCard
               updateEstimation={updateEstimation}
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
   min-height: 20px;
   font-weight: 500;
   margin: 0 0 0 40px;
   overflow: hidden;
   word-wrap: break-word;
`
const InputTitle = styled.input`
   min-width: 50vw;
   height: 40px;
   font-size: 1.1rem;
   padding: 0 0 0 10px;
   margin-bottom: 10px;
`
const FirstBlock = styled.div`
   width: 130vw;
   overflow-y: scroll;
   height: 73vh;
   ::-webkit-scrollbar {
      width: 20px;
   }
   ::-webkit-scrollbar-thumb {
      border-radius: 16px;
      background-color: #d9d9d9;
      border: 6px solid white;
   }
`
const Label = styled.li`
   position: relative;
   background-color: ${(props) => props.color};
   color: white;
   padding: 5px 35px 5px 20px;
   border-radius: 4px;
   list-style: none;
`
const Text = styled.p`
   cursor: pointer;
   position: relative;
   color: gray;
   margin: 3px 0 8px 0;
`
const DescriptionText = styled.div`
   max-width: 55vw;
   min-height: 10px;
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
