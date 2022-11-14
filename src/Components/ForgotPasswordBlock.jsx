import { useRef } from "react"
import styled from "styled-components"
import Button from "./UI/Button"

const ForgotPasswordBlock = () => {
   const inputRef = useRef(null)

   const sendHandler = () => {
      const inputValue = inputRef.current.value
      console.log(inputValue)
   }

   return (
      <Block>
         <h3>Forgot password?</h3>
         <p>
            A link will be setn to your Email,follow the link sent to the mail
         </p>
         <input ref={inputRef} />
         <ButtonBlock>
            <Button onClick={sendHandler} fullHeight="5vh" fullWidth="13vw">
               Send
            </Button>
         </ButtonBlock>
      </Block>
   )
}

export default ForgotPasswordBlock

const Block = styled.div`
   padding: 0 1rem 0 1rem;
   Input {
      &::placeholder {
         font-family: "Nunito", sans-serif;
      }
   }
`

const ButtonBlock = styled.div`
   width: 37.5vw;
   display: flex;
   justify-content: flex-end;
   padding: 1rem 0 1rem 0;
`
