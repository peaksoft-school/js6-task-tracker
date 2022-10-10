import * as React from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Modal from "@mui/material/Modal"
import styled from "styled-components"

export default function ModalWindow({ children, fullWidth }) {
   const [open, setOpen] = React.useState(false)
   const handleOpen = () => setOpen(true)
   const handleClose = () => setOpen(false)

   return (
      <div>
         <Button onClick={handleOpen}>Modal Window</Button>
         <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
         >
            <StyledBox fullWidth={fullWidth}>{children}</StyledBox>
         </Modal>
      </div>
   )
}

const StyledBox = styled(Box)`
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   width: ${(props) => (props.fullWidth ? props.fullWidth : "425px")};
   background-color: white;
   border-radius: 2px;
`
