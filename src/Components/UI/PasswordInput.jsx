import React, { useState } from "react"

import {
   IconButton,
   FormControl,
   OutlinedInput,
   InputLabel,
} from "@mui/material"
import styled from "styled-components"
import { HidePassword, ShowPassword } from "../../assets/icons/index"

function PasswordInput({ id, label, error, value, onChange, onBlur }) {
   const [inputViewOnOff, setInputViewOnOff] = useState(false)

   function handleViewOnOff() {
      setInputViewOnOff((prevState) => !prevState)
   }

   if (HidePassword) {
      setTimeout(() => {
         setInputViewOnOff(false)
      }, 400)
   }

   return (
      <FormControl1>
         <InputLabel size="small">{label}</InputLabel>
         <OutlinedInput1
            id={id}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            size="small"
            error={error}
            label={label}
            type={inputViewOnOff ? "text" : "password"}
            endAdornment={
               <IconButton onClick={() => handleViewOnOff()}>
                  {inputViewOnOff ? <ShowPassword /> : <HidePassword />}
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
