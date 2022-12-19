import { useFormik } from "formik"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { forgotPassword } from "../../store/AuthSlice"
import Button from "../UI/Button"
import { validationEmailInForgotPassword } from "./Validation"
import Input from "../UI/Input"

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
               fullHeight="40px"
               fullWidth="220px"
            >
               Send
            </Button>
         </ButtonBlock>
      </Block>
   )
}

export default ForgotPasswordBlock

const Block = styled.form`
   input {
      width: 35vw;
      height: 40px;
      border-radius: 8px;
      padding: 0 0 0 1rem;
      font-size: 1.1rem;
   }
   h3 {
      margin-left: 5px;
   }
   p {
      margin: 10px 0 10px 5px;
   }
`
const ContainerInputErrorText = styled.div`
   height: 50px;
   width: 500px;
   margin: 0.04rem;
`
const ButtonBlock = styled.div`
   width: 500px;
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
