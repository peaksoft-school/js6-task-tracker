import React from "react"
import styled from "styled-components"
import TextAreaAutoSize from "react-textarea-autosize"
import ContainerButtons from "../UI/ContainerButtons"

const Description = () => {
   return (
      <ContainerDesctiption>
         <StyledDescription />
         <ContainerButtons
            width="55vw"
            titleGrayButton="Cancel"
            titleBlueButton="Save"
            paddingButton="8px 40px 10px 40px"
            widthBlueButton="130px"
         />
      </ContainerDesctiption>
   )
}

export default Description
const ContainerDesctiption = styled.div`
   border: 1px solid red;
`

const StyledDescription = styled(TextAreaAutoSize)`
   width: 55vw;
   min-height: 15vh;
   font-size: 1.1rem;
   resize: none;
   padding: 0.5rem 0.3rem 0.3rem 0.5rem;
   margin: 0 0 10px 0;
   border-radius: 7px;
`
