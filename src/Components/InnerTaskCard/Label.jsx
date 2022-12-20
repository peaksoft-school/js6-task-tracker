/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import DisplayFlex from "../../layout/DisplayFlex"
import { colorsLabel } from "../../utilits/constants/Constants"
import checked from "../../assets/svg/Galochka.svg"
import { axiosInstance } from "../../api/axiosInstance"
import editIcon from "../../assets/icons/Icon Shape (1).svg"
import ReusableDropDown from "../UI/ReusableDropDown"
import ContainerButtons from "../UI/ContainerButtons"
import {
   loadingToastifyAction,
   successToastifyAction,
   errorToastifyAction,
   warningToastifyAction,
} from "../../store/toastifySlice"
import CustomIcons from "../Column/CustomIcons"
import deleteIcon from "../../assets/svg/Delete.svg"

const AddLabel = ({
   readyLabels,
   getReadyLabelsQuery,
   dataCardById,
   getCardById,
}) => {
   const dispatch = useDispatch()
   const [selectedLabel, setSelectedLabel] = useState({
      id: 0,
      title: "",
      color: "",
   })

   const changeSelectedLabelTitle = (e) => {
      setSelectedLabel({ ...selectedLabel, title: e.target.value })
   }
   const changeSelectedLabelInReadyLabel = async () => {
      try {
         const response = await axiosInstance.put("/api/labels", {
            id: selectedLabel.id,
            newTitle: selectedLabel.title,
            color: selectedLabel.color,
         })
         getReadyLabelsQuery()
         setSelectedLabel({})
         dispatch(successToastifyAction("Changed label"))
         return null
      } catch (error) {
         return dispatch(errorToastifyAction("Error something went wrong"))
      }
   }
   const createNewLabelQuery = async () => {
      dispatch(loadingToastifyAction("...Loading"))
      try {
         const response = await axiosInstance.post("/api/labels", {
            description: selectedLabel.title,
            color: selectedLabel.color,
         })
         setSelectedLabel({})
         getReadyLabelsQuery()
         dispatch(successToastifyAction("Created label"))
         return null
      } catch (error) {
         return dispatch(errorToastifyAction("Error something went wrong"))
      }
   }
   const createOrChangeLabel = () => {
      if (selectedLabel.id) {
         changeSelectedLabelInReadyLabel()
      } else {
         createNewLabelQuery()
      }
   }
   const deleteLabel = async (id) => {
      dispatch(loadingToastifyAction("...Loading"))
      try {
         const response = await axiosInstance.delete(`/api/labels/${id}`)
         getReadyLabelsQuery()
         dispatch(warningToastifyAction("Deleted label"))
         return null
      } catch (error) {
         return dispatch(errorToastifyAction())
      }
   }
   const addLabelToCard = async (id) => {
      dispatch(loadingToastifyAction("...Loading"))
      try {
         const response = await axiosInstance.post("/api/labels/card", {
            cardId: dataCardById.id,
            labelId: id,
         })
         getCardById(dataCardById.id)
         dispatch(successToastifyAction("Added label to card"))
         return null
      } catch (error) {
         return dispatch(warningToastifyAction("This card already exists"))
      }
   }
   return (
      <ContainerLabels>
         <CreateLabel
            onClick={() =>
               setSelectedLabel({
                  title: "",
                  color: "#51e2f5",
               })
            }
         >
            + Create new label
         </CreateLabel>
         {readyLabels?.map((item, index) => {
            return (
               <DisplayFlex
                  AI="center"
                  key={item.id}
                  margin="5px 5px 0 0"
                  gap="3px"
               >
                  <ReadyLabel
                     onClick={() => addLabelToCard(item.id)}
                     backColor={item.color}
                  >
                     {item.description}
                  </ReadyLabel>
                  <img
                     onClick={() =>
                        setSelectedLabel({
                           id: item.id,
                           title: item.description,
                           color: item.color,
                        })
                     }
                     src={editIcon}
                     alt="pencil"
                  />
                  <CustomIcons
                     onClick={() => deleteLabel(item.id)}
                     src={deleteIcon}
                  />
               </DisplayFlex>
            )
         })}
         <ReusableDropDown
            width="350px"
            padding="20px 13px 23px 10px"
            top="0"
            left="0"
            showState={selectedLabel.color}
         >
            <StyledTextArea
               placeholder="Title"
               value={selectedLabel.title}
               selectedColor={selectedLabel.color}
               onChange={(e) => changeSelectedLabelTitle(e)}
               label="Title label"
               autoFocus
            />
            <DisplayFlex margin="20px 2px 14px 10px" FW="wrap" gap="8px">
               {colorsLabel.map((item) => {
                  return (
                     <div
                        onClick={() =>
                           setSelectedLabel({
                              ...selectedLabel,
                              color: item,
                           })
                        }
                        style={{
                           backgroundColor: item,
                           width: "45px",
                           height: "45px",
                           borderRadius: "7px",
                        }}
                     >
                        {selectedLabel.color === item ? (
                           <img
                              style={{
                                 width: "20px",
                                 height: "20px",
                                 margin: "8px 0 0 10px",
                              }}
                              src={checked}
                              alt="checked"
                           />
                        ) : null}
                     </div>
                  )
               })}
            </DisplayFlex>
            <ContainerButtons
               titleBlueButton={selectedLabel.id ? "Save" : "Create"}
               titleGrayButton="Cancel"
               widthGrayButton="100px"
               widthBlueButton="100px"
               clickGrayButton={() => setSelectedLabel({})}
               clickBlueButton={
                  selectedLabel?.title?.length > 0 && createOrChangeLabel
               }
            />
         </ReusableDropDown>
      </ContainerLabels>
   )
}

export default AddLabel

const ContainerLabels = styled.div`
   display: flex;
   flex-direction: column;
   padding: 0 7px 15px 7px;
   max-height: 50vh;
   overflow: scroll;
`
const ReadyLabel = styled.div`
   cursor: pointer;
   width: 290px;
   height: 32px;
   color: white;
   background-color: ${(props) => props.backColor};
   border-radius: 6px;
   margin: 4px 7px 4px 0;
   padding: 6px 0 0 10px;
`
const StyledTextArea = styled.input`
   background-color: ${(props) => props.selectedColor};
   width: 310px;
   padding: 6px 15px 6px 15px;
   border-radius: 8px;
   font-size: 1.2rem;
   color: white;
   border: none;
   outline: none;
   margin-left: 0.7vw;
   ::placeholder {
      color: #f7f4f4;
   }
`
const CreateLabel = styled.h3`
   text-align: start;
   width: 95%;
   cursor: pointer;
`
