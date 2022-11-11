import { useRef } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { forgotPassword } from "../store/AuthSlice"
import Button from "./UI/Button"

const ForgotPasswordBlock = () => {
   const link = window.location.href
   const dispatch = useDispatch()
   const inputRef = useRef(null)

   const sendHandler = () => {
      const inputValue = inputRef.current.value
      dispatch(forgotPassword({ email: inputValue, link }))
   }

   return (
      <Block>
         <h3>Forgot password?</h3>
         <p>
            A link will be setn to your Email,follow the link sent to the mail
         </p>
         <input placeholder="example@gmail.com" ref={inputRef} />
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
   input {
      width: 35vw;
      height: 5vh;
      border-radius: 8px;
      border: 1px solid gray;
      padding: 0 0 0 1rem;
      font-size: 1.1rem;
   }
`

const ButtonBlock = styled.div`
   width: 37.5vw;
   display: flex;
   justify-content: flex-end;
   padding: 1rem 0 1rem 0;
`
