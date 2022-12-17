import React from "react"
import { useDispatch } from "react-redux"
import { useFormik } from "formik"
import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import { resetPassword } from "../../store/AuthSlice"
import PasswordInput from "../UI/PasswordInput"
import Button from "../UI/Button"
import { validationConfirmPassword } from "./Validation"

const ForgotPassword = () => {
   const dispatch = useDispatch()
   const params = useParams()
   const navigate = useNavigate()

   const formik = useFormik({
      initialValues: {
         password: "",
         confirmPassword: "",
      },
      validationSchema: validationConfirmPassword,
      onSubmit: (value) => {
         return dispatch(
            resetPassword({
               userId: +params.id,
               newPassword: value.password,
               navigate,
            })
         )
      },
   })

   return (
      <Form onSubmit={formik.handleSubmit}>
         <h3>PASSWORD</h3>
         <ContainerInputErrorText>
            <PasswordInput
               id="password"
               label="Password"
               value={formik.values.password}
               type="text"
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
               <ErrorText>{formik.errors.password}</ErrorText>
            )}
         </ContainerInputErrorText>
         <ContainerInputErrorText>
            <PasswordInput
               id="confirmPassword"
               label="confirmPassword"
               value={formik.values.confirmPassword}
               type="text"
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
            />
            {formik.touched.confirmPassword &&
               formik.errors.confirmPassword && (
                  <ErrorText>{formik.errors.confirmPassword}</ErrorText>
               )}
         </ContainerInputErrorText>

         <Button fullHeight="2.7rem" type="submit" fullWidth="180px">
            Log in
         </Button>
      </Form>
   )
}

export default ForgotPassword

const Form = styled.form`
   width: 340px;
   height: 330px;
   display: flex;
   justify-content: center;
   align-items: center;
`
const ContainerInputErrorText = styled.div`
   height: 43px;
   width: 320px;
`
const ErrorText = styled.p`
   color: red;
   margin: 0;
   text-align: start;
   font-size: 16px;
   margin-left: 5px;
`
