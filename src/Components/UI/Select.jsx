import React, { useState } from "react"
import styled from "styled-components"
import { CloseSelectIcon, DefaultSelectIcon } from "../../assets/icons/index"

function Select({ list, reminder, setReminder }) {
   const [open, setOpen] = useState(false)

   return (
      <AllBox>
         <Box onClick={() => setOpen(!open)}>
            {reminder.time}
            {open ? <CloseSelectIcon /> : <DefaultSelectIcon />}
         </Box>
         {open && (
            <SelectItem>
               {list.map((item) => (
                  <li
                     onClick={() => {
                        setReminder(item)
                        setOpen(false)
                     }}
                  >
                     {item.time}
                  </li>
               ))}
            </SelectItem>
         )}
      </AllBox>
   )
}

export default Select
const AllBox = styled.div`
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
`

const SelectItem = styled.div`
   padding: 6px 16px;
   width: 246px;
   height: 191px;
   box-sizing: border-box;
   margin: auto;
   margin-top: 1px;
   border-radius: 10px;
   overflow-x: hidden;
   position: absolute;
   ::-webkit-scrollbar {
      width: 16px;
   }
   ::-webkit-scrollbar-track {
      background: transparent;
   }
   ::-webkit-scrollbar-thumb {
      border-radius: 16px;
      border: 4px solid #ffffff;
      background-color: #d9d9d9;
   }
   ::-webkit-scrollbar-button:single-button {
      background-color: transparent;
      display: block;
      border-style: solid;
   }
   ::-webkit-scrollbar-button:single-button:vertical:decrement {
      border-width: 0 8px 10px 8px;
      border-color: transparent transparent #a3a3a3 transparent;
   }

   ::-webkit-scrollbar-button:single-button:vertical:increment {
      border-width: 10px 8px 0 8px;
      border-color: #a3a3a3 transparent;
   }

   li {
      display: flex;
      align-items: center;
      width: 210px;
      height: 36px;
      box-sizing: border-box;
      list-style: none;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      color: #000000;
      :hover {
         background: #f2f2f2;
         cursor: pointer;
      }
   }
`
