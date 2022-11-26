import * as React from "react"
import { styled } from "@mui/material/styles"

import TextField from "@mui/material/TextField"

const CssTextField = styled(TextField)({
   "& .MuiInputBase-input": {
      width: "100%",
   },
   "& label.Mui-focused": {
      color: "#919191",
   },
   "& label": {
      fontSize: "16px",
      fontFamily: "Nunito, Sans-serif",
   },
   "& .MuiInput-underline:after": {
      borderBottomColor: "green",
   },
   "& .MuiOutlinedInput-root": {
      "& fieldset": {
         border: "1px solid #BDBDBD",
         borderRadius: 13,
      },
      "&:hover fieldset": {
         border: "1px solid #0079BF",
      },
      "&.Mui-focused fieldset": {
         border: "1px solid #D0D0D0",
      },
   },
})

export default function Input({ label, type, id, ref, ...other }) {
   return (
      <CssTextField
         {...other}
         fullWidth
         size="small"
         label={label}
         type={type}
         id={id}
      />
   )
}
