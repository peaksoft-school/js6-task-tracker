import React, { useState } from "react"

import {
   IconButton,
   FormControl,
   InputLabel,
   OutlinedInput,
} from "@mui/material"
import styled from "styled-components"
import { HidePassword, ShowPassword } from "../../assets/icons/index"

function PasswordInput() {
   const [inputViewOnOff, setInputViewOnOff] = useState(false)

   function handleViewOnOff() {
      setInputViewOnOff((prevState) => !prevState)
   }
   return (
      <FormControl1>
         <InputLabel size="small">Password</InputLabel>
         <OutlinedInput1
            size="small"
            error={false}
            type={inputViewOnOff ? "password" : "text"}
            endAdornment={
               <IconButton onClick={() => handleViewOnOff()}>
                  {inputViewOnOff ? <HidePassword /> : <ShowPassword />}
               </IconButton>
            }
            label="Password"
         />
      </FormControl1>
   )
}

const OutlinedInput1 = styled(OutlinedInput)`
   color: #757575 !important;
`
const FormControl1 = styled(FormControl)({
   width: "321px",

   "& label.Mui-focused": {
      color: "#919191",
   },
   "& .MuiOutlinedInput-root": {
      "& fieldset": {
         borderColor: "#BDBDBD",
      },
      "&:hover fieldset": {
         borderColor: "#0079BF",
      },
      "&.Mui-focused fieldset": {
         borderColor: "#919191",
      },
   },
})
export default PasswordInput
