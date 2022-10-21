import React, { useState } from "react"
import styled from "styled-components"
import { SelectIconOpen, SelectIconClose } from "../../assets/icons/index"

function ReminderSelect({ selected, setSelected, label, options }) {
   const [isActive, setIsActive] = useState(false)

   function handleListOnOff() {
      setIsActive((prevState) => !prevState)
   }
   return (
      <div>
         <TitleSelect>{label}</TitleSelect>
         <DropDown>
            <DropBtn onClick={() => setIsActive(!isActive)}>
               {selected}
               <div onClick={() => handleListOnOff()}>
                  {isActive ? <SelectIconClose /> : <SelectIconOpen />}
               </div>
            </DropBtn>
            {isActive && (
               <DropDownContent>
                  {options.map((option) => (
                     <SelectItems
                        onClick={() => {
                           setSelected(option)
                           setIsActive(false)
                        }}
                     >
                        {option}
                     </SelectItems>
                  ))}
               </DropDownContent>
            )}
         </DropDown>
      </div>
   )
}

export default ReminderSelect

const TitleSelect = styled.label`
   padding: 0 3px;
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 18px;

   color: #919191;
`

const DropDown = styled.div`
   position: relative;
   box-sizing: border-box;
   width: 247px;
   height: 32px;
   border: 1px solid #d0d0d0;
   border-radius: 8px;
   align-items: center;
   font-size: 16px;
   font-weight: 500;
`
const DropBtn = styled.div`
   position: relative;
   margin: 6px 9px 6px 16px;
   width: 222px;
   height: 20px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   div {
      cursor: pointer;
   }
`
const DropDownContent = styled.div`
   position: absolute;
   box-sizing: border-box;
   width: 247px;
   max-height: 144px;
   top: 80%;
   left: -0.4%;
   background: #ffffff;
   border: 1px solid #d0d0d0;
   border-radius: 8px;
   border-top: none;
   border-top-left-radius: 0;
   border-top-right-radius: 0;
   overflow-y: auto;
   &::-webkit-scrollbar {
      width: 28px;
   }
   &::-webkit-scrollbar-track {
      background: transparent;
   }
   &::-webkit-scrollbar-thumb {
      background-color: #d9d9d9;
      border-radius: 16px;
      border: 10px solid white;
   }
`

const SelectItems = styled.div`
   padding: 6px 16px;
   box-sizing: border-box;
   width: 100%;
   height: 36px;
   :hover {
      background: #f2f2f2;
   }
`
