import React, { useState } from "react"
import styled from "styled-components"
import { CloseSelectIcon, DefaultSelectIcon } from "../../assets/icons/index"
import scrollUp from "../../assets/icons/SelectSkrollUp.svg"
import scrollDown from "../../assets/icons/SelectSkrollDown.svg"

function Select({ list, label, handleClick }) {
   const [open, setOpen] = useState(false)
   const [reminder, setReminder] = useState(list[0])

   return (
      <Container>
         <Label htmlFor="name" label={label}>
            {label}
         </Label>
         <Box onClick={() => setOpen(!open)}>
            {reminder.time}
            <span>{open ? <CloseSelectIcon /> : <DefaultSelectIcon />}</span>
         </Box>

         {open && (
            <SelectItem>
               {list.map((item) => (
                  <li
                     onClick={() => {
                        setReminder(item)
                        handleClick(item)
                        setOpen(false)
                     }}
                  >
                     <span>{item.time} </span>
                  </li>
               ))}
            </SelectItem>
         )}
      </Container>
   )
}

export default Select

const Label = styled.label`
   color: #919191;
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 18px;
   margin-left: 3px;
`
const Container = styled.div`
   width: 247px;
   height: 32px;
   box-sizing: border-box;
   position: relative;
`
const Box = styled.div`
   width: 100%;
   height: 100%;
   padding: 6px 16px;
   border: 1px solid gray;
   border-radius: 8px;
   box-sizing: border-box;
   cursor: pointer;
   display: flex;
   align-items: center;
   justify-content: space-between;
   position: relative;
   span {
      position: absolute;
      right: 20px;
   }
`

const SelectItem = styled.div`
   width: 246px;
   height: 191px;
   box-sizing: border-box;
   margin: auto;
   margin-top: 1px;
   border-radius: 10px;
   overflow-x: hidden;
   position: absolute;
   ::-webkit-scrollbar {
      width: 26px;
   }
   ::-webkit-scrollbar-track {
      background: #ffffff;
   }
   ::-webkit-scrollbar-thumb {
      border-radius: 16px;
      border: 9px solid #ffffff;
      background-color: #d9d9d9;
   }

   ::-webkit-scrollbar-button {
      display: block;
      background-color: #ffffff;
      background-repeat: no-repeat;
      background-size: 50%;
      background-position: center;
   }

   ::-webkit-scrollbar-button:vertical:start:decrement {
      background-image: url(${scrollUp});
   }

   ::-webkit-scrollbar-button:vertical:start:increment {
      display: none;
   }

   ::-webkit-scrollbar-button:vertical:end:decrement {
      display: none;
   }

   ::-webkit-scrollbar-button:vertical:end:increment {
      background-image: url(${scrollDown});
   }
   li {
      padding: 6px 16px;
      display: flex;
      align-items: center;
      width: 220px;
      height: 36px;
      box-sizing: border-box;
      list-style: none;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      color: #000000;
      :checked {
         background-color: #f2f2f2;
      }
      :hover {
         background: #f2f2f2;
         cursor: pointer;
      }
   }
`
