import React, { useState } from "react"

import { FormControl, OutlinedInput, InputLabel } from "@mui/material"
import styled from "styled-components"
import { HidePassword, ShowPassword } from "../../assets/icons/index"

function PasswordInput({ id, label, error, value, onChange, onBlur, right }) {
   const [inputViewOnOff, setInputViewOnOff] = useState(false)

   function handleViewOnOff() {
      setInputViewOnOff((prevState) => !prevState)
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
         />
         <Icons right={right}>
            {inputViewOnOff ? (
               <ShowPassword onClick={() => handleViewOnOff()} />
            ) : (
               <HidePassword onClick={() => handleViewOnOff()} />
            )}
         </Icons>
      </FormControl1>
   )
}

const OutlinedInput1 = styled(OutlinedInput)`
   color: #111 !important;
`
const Icons = styled.span`
   position: absolute;
   top: 28%;
   right: ${(props) => (props.right ? props.right : "4%")};
`

const FormControl1 = styled(FormControl)({
   "& label.Mui-focused": {
      color: "#919191",
      background: "transparent",
   },
   "& .MuiOutlinedInput-root": {
      borderRadius: "13px",
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
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
         background: "none",
      },
   },
})
export default PasswordInput
