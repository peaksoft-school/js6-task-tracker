import { useFormik } from "formik"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { forgotPassword } from "../store/AuthSlice"
import Button from "./UI/Button"
import { validationEmailInForgotPassword } from "./Authorizaiton/Validation"
import Input from "./UI/Input"

const ForgotPasswordBlock = ({ showCloseModalHandler }) => {
   const link = window.location.href
   const dispatch = useDispatch()

   const formik = useFormik({
      initialValues: {
         email: "",
      },
      validationSchema: validationEmailInForgotPassword,
      onSubmit: ({ email }) => {
         showCloseModalHandler()
         return dispatch(forgotPassword({ email, link }))
      },
   })

   const isValid = typeof formik.errors.email === "string"

   return (
      <Block onSubmit={formik.handleSubmit}>
         <h3>Forgot password?</h3>
         <p>
            A link will be setn to your Email,follow the link sent to the mail
         </p>
         <ContainerInputErrorText>
            <Input
               id="email"
               value={formik.values.email}
               type="email"
               label="example@gmail.com"
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
               <ErrorText>{formik.errors.email}</ErrorText>
            )}
         </ContainerInputErrorText>
         <ButtonBlock>
            <Button
               type="submit"
               disabled={isValid}
               fullHeight="5vh"
               fullWidth="13vw"
            >
               Send
            </Button>
         </ButtonBlock>
      </Block>
   )
}

export default ForgotPasswordBlock

const Block = styled.form`
   padding: 0 1rem 0 1rem;
   input {
      width: 35vw;
      height: 5vh;
      border-radius: 8px;
      padding: 0 0 0 1rem;
      font-size: 1.1rem;
   }
`
const ContainerInputErrorText = styled.div`
   height: 65px;
   width: 37vw;
   margin: 0.04rem;
`
const ButtonBlock = styled.div`
   width: 37.5vw;
   display: flex;
   justify-content: flex-end;
   padding: 1rem 0 1rem 0;
`
const ErrorText = styled.p`
   color: red;
   margin: 0;
   text-align: start;
   font-size: 16px;
   margin-left: 5px;
`
