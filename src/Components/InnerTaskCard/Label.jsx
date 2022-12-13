/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import styled from "styled-components"
import editIcon from "../../assets/svg/editIcon.svg"
import DisplayFlex from "../../layout/DisplayFlex"
import Input from "../UI/Input"
import { colorsLabel } from "../../utilits/constants/Constants"
import Button from "../UI/Button"
import checked from "../../assets/svg/Galochka.svg"
import { axiosInstance } from "../../api/axiosInstance"

const AddLabel = ({ dataCardById, setTwoActive, firstActive, getCardById }) => {
   const [selectedLabelColors, setSelectedLabelColor] = useState("#51e2f5")
   const [inputValue, setInputValue] = useState("")

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
         <Input onChange={(e) => setInputValue(e.target.value)} />
         <DisplayFlex margin="10px 2px 14px 2px" FW="wrap" gap="8px">
            {colorsLabel.map((item) => {
               return (
                  <div
                     onClick={() => setSelectedLabelColor(item)}
                     style={{
                        backgroundColor: item,
                        width: "40px",
                        height: "40px",
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
         <Button onClick={addLabelToCard} fullWidth="80%" fullHeight="35px">
            Create
         </Button>
      </DisplayFlex>
   )
}

export default AddLabel
