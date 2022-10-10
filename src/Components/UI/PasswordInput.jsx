import React, { useState } from "react"

import {
   IconButton,
   FormControl,
   OutlinedInput,
   InputLabel,
} from "@mui/material"
import styled from "styled-components"
import { HidePassword, ShowPassword } from "../../assets/icons/index"

function PasswordInput({ label, error }) {
   const [inputViewOnOff, setInputViewOnOff] = useState(false)

   function handleViewOnOff() {
      setInputViewOnOff((prevState) => !prevState)
   }
   return (
      <FormControl1>
         <InputLabel size="small">{label}</InputLabel>
         <OutlinedInput1
            size="small"
            error={error}
            label={label}
            type={inputViewOnOff ? "password" : "text"}
            endAdornment={
               <IconButton onClick={() => handleViewOnOff()}>
                  {inputViewOnOff ? <HidePassword /> : <ShowPassword />}
               </IconButton>
            }
         />
      </FormControl1>
   )
}

const OutlinedInput1 = styled(OutlinedInput)`
   color: #757575 !important;
`
const FormControl1 = styled(FormControl)({
   width: "321px",
   "&MuiInputBase-input": {
      background: "white",
   },
   "& label.Mui-focused": {
      color: "#919191",
      background: "white",
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
