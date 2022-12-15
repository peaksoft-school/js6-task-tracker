import React from "react"
import styled from "styled-components"
import Button from "./Button"

const ContainerButtons = ({
   width,
   titleBlueButton,
   titleGrayButton,
   clickGrayButton,
   clickBlueButton,
   paddingButton,
}) => {
   return (
      <StyledContainerButton width={width}>
         <Button
            color="#F0F0F0;"
            hover="none"
            fullWidth="120px"
            active="none"
            onClick={clickGrayButton}
            textColor=" #919191"
         >
            {titleGrayButton}
         </Button>
         <Button padding={paddingButton} onClick={clickBlueButton}>
            {titleBlueButton}
         </Button>
      </StyledContainerButton>
   )
}

export default ContainerButtons

const StyledContainerButton = styled.div`
   display: flex;
   justify-content: flex-end;
   width: ${(props) => props.width};
   height: 38px;
   Button {
      margin-left: 10px;
   }
`
