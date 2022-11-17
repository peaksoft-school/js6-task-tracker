import * as React from "react"
import Box from "@mui/material/Box"
import UiModal from "@mui/material/Modal"
import styled from "styled-components"

export default function Modal({ children, fullWidth, isOpen, onClose }) {
   return (
      <div>
         <UiModal
            open={isOpen}
            onClose={() => onClose()}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
         >
            <StyledBox fullWidth={fullWidth}>{children}</StyledBox>
         </UiModal>
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
   border-radius: 8px;
   padding: 15px;
   outline: none;
`
