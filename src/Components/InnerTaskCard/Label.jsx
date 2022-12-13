/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import styled from "styled-components"
import DisplayFlex from "../../layout/DisplayFlex"
import Input from "../UI/Input"
import { colorsLabel } from "../../utilits/constants/Constants"
import Button from "../UI/Button"
import checked from "../../assets/svg/Galochka.svg"
import { axiosInstance } from "../../api/axiosInstance"
import editIcon from "../../assets/icons/Icon Shape (1).svg"
import Arrow from "../UI/Arrow"
import CloseButton from "../UI/CloseButton"
import ReusableDropDown from "../UI/ReusableDropDown"
import ContainerButtons from "../UI/ContainerButtons"

const AddLabel = ({ dataCardById, setTwoActive, firstActive, getCardById }) => {
   const readyLabel = [
      {
         id: 1,
         title: "Done",
         color: "green",
      },
      {
         id: 2,
         title: "Code review",
         color: "blue",
      },
      {
         id: 3,
         title: "kick back",
         color: "red",
      },
      {
         id: 4,
         title: "in progress",
         color: "violet",
      },
   ]

   const [selectedLabelColors, setSelectedLabelColor] = useState("#51e2f5")
   const [inputValue, setInputValue] = useState("")
   const [editLabel, setEditLabel] = useState(0)

   const addLabelToCard = async () => {
      try {
         const response = await axiosInstance.post("/api/labels", {
            cardId: dataCardById.id,
            description: inputValue,
            color: "RED",
         })
         getCardById(firstActive)
         setTwoActive(firstActive, "nothing")
         return console.log(response)
      } catch (error) {
         return console.log(error.message)
      }
   }

   return (
      <DisplayFlex AI="center" FD="column" padding="0 7px 15px 7px">
         <DisplayFlex margin="5px 5px 0 0" FD="column">
            {readyLabel.map((item) => {
               return (
                  <>
                     <DisplayFlex>
                        <ReadyLabel backColor={item.color}>
                           {item.title}
                        </ReadyLabel>
                        <img
                           onClick={() =>
                              setEditLabel(editLabel !== item.id ? item.id : 0)
                           }
                           src={editIcon}
                           alt="pencil"
                        />
                     </DisplayFlex>

                     <ReusableDropDown
                        width="370px"
                        padding="20px 15px 20px 15px"
                        top="0"
                        left="0"
                        showState={editLabel === item.id}
                     >
                        <Input
                           value={item.title}
                           label="Title label"
                           onChange={(e) => setInputValue(e.target.value)}
                        />
                        <DisplayFlex
                           margin="20px 2px 14px 10px"
                           FW="wrap"
                           gap="10px"
                        >
                           {colorsLabel.map((item) => {
                              return (
                                 <div
                                    onClick={() => setSelectedLabelColor(item)}
                                    style={{
                                       backgroundColor: item,
                                       width: "45px",
                                       height: "45px",
                                       borderRadius: "7px",
                                    }}
                                 >
                                    {selectedLabelColors === item && (
                                       <img
                                          style={{
                                             width: "20px",
                                             height: "20px",
                                             margin: "8px 0 0 10px",
                                          }}
                                          src={checked}
                                          alt="checked"
                                       />
                                    )}
                                 </div>
                              )
                           })}
                        </DisplayFlex>
                        <ContainerButtons
                           titleBlueButton="Save"
                           titleGrayButton="Cancel"
                           widthGrayButton="90px"
                           widthBlueButton="90px"
                           clickGrayButton={() => setEditLabel(0)}
                        />
                     </ReusableDropDown>
                  </>
               )
            })}
         </DisplayFlex>
      </DisplayFlex>
   )
}

export default AddLabel

const ReadyLabel = styled.div`
   width: 290px;
   height: 32px;
   color: white;
   background-color: ${(props) => props.backColor};
   border-radius: 6px;
   margin: 4px 7px 4px 0;
   padding: 4px 0 0 10px;
`
