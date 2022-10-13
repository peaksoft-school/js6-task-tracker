import * as React from "react"
import Stack from "@mui/material/Stack"
import Snackbar from "@mui/material/Snackbar"
import MuiAlert from "@mui/material/Alert"
import styled from "styled-components"
import { useState } from "react"

const Alert = React.forwardRef(function Alert(props, ref) {
   return <Message ref={ref} variant="outlined" {...props} />
})

export default function SnackBar({ status, text, description }) {
   const [open, setOpen] = useState(true)

   const handleClose = (event, reason) => {
      if (reason === "clickaway") {
         return
      }
      setOpen(false)
   }

   return (
      <Stack spacing={2} sx={{ width: "100%" }}>
         <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
               onClose={handleClose}
               severity={status}
               sx={{ width: "100%" }}
            >
               <StyleOfText>
                  <h1>{text}</h1> <span>{description}</span>
               </StyleOfText>
            </Alert>
         </Snackbar>
      </Stack>
   )
}

const Message = styled(MuiAlert)`
   width: 336px;
   height: 67px;
   border-radius: 8px;
   box-sizing: "border-box";
   text-align: "start";
   align-items: "center";
`
const StyleOfText = styled.div`
   display: flex;
   flex-direction: column;
   line-height: 13px;
   text-align: start;
   margin-top: -7px;
   h1 {
      font-size: 18px;
   }
   span {
      font-size: 16px;
   }
`
