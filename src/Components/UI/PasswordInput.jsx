import React, { useState } from "react"

import {
   IconButton,
   FormControl,
   OutlinedInput,
   InputLabel,
} from "@mui/material"
import styled from "styled-components"
import { HidePassword, ShowPassword } from "../../assets/icons/index"

function PasswordInput({ label, error, value, setValue }) {
   const [inputViewOnOff, setInputViewOnOff] = useState(false)

   function handleViewOnOff() {
      setInputViewOnOff((prevState) => !prevState)
   }
   return (
      <FormControl1>
         <InputLabel size="small">{label}</InputLabel>
         <OutlinedInput1
            value={value}
            onChange={(e) => setValue(e.target.value)}
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
   color: #111 !important;
`
const FormControl1 = styled(FormControl)({
   "& label.Mui-focused": {
      color: "#919191",
      background: "white",
   },
   "& .MuiOutlinedInput-root": {
      width: "321px",
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
