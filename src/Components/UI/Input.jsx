import * as React from "react"
import { styled } from "@mui/material/styles"

import TextField from "@mui/material/TextField"

const CssTextField = styled(TextField)({
   "& label.Mui-focused": {
      color: "#919191",
   },
   "& .MuiInput-underline:after": {
      borderBottomColor: "green",
   },
   "& .MuiOutlinedInput-root": {
      "& fieldset": {
         border: "1px solid #D0D0D0",
         borderRadius: 8,
      },
      "&:hover fieldset": {
         border: "1px solid #0079BF",
         borderRadius: 8,
      },
      "&.Mui-focused fieldset": {
         border: "1px solid #D0D0D0",
         borderRadius: 8,
      },
   },
})

export default function Input({ label, type, ...other }) {
   return (
      <CssTextField
         {...other}
         label={label}
         type={type}
         id="custom-css-outlined-input"
      />
   )
}
