/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useFormik } from "formik"
import Input from "../UI/Input"
import PasswordInput from "../UI/PasswordInput"
import Button from "../UI/Button"
import { signUp } from "../../store/AuthSlice"
import { validationSchema } from "./Validation"

const SignUp = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const formik = useFormik({
      initialValues: {
         firstName: "",
         lastName: "",
         email: "",
         password: "",
         confirmPassword: "",
      },
      validationSchema,
      onSubmit: (userInfo) => {
         return dispatch(signUp({ userInfo, navigate }))
      },
   })

   const { isValid } = formik

   return (
      <Form onSubmit={formik.handleSubmit}>
         <ContainerInputErrorText>
            <Input
               id="firstName"
               value={formik.values.firstName}
               type="text"
               label="Name"
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
            />
            {formik.touched.firstName && formik.errors.firstName && (
               <ErrorText>{formik.errors.firstName}</ErrorText>
            )}
         </ContainerInputErrorText>
         <ContainerInputErrorText>
            <Input
               name="lastName"
               value={formik.values.lastName}
               type="text"
               label="Surname"
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
            />
            {formik.touched.lastName && formik.errors.lastName && (
               <ErrorText>{formik.errors.lastName}</ErrorText>
            )}
         </ContainerInputErrorText>
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
               label="Confirm password"
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
         <QualificationText>
            Creating an account means you re okay with our <br />
            <a
               target="_blank"
               href="https://www.atlassian.com/legal/privacy-policy"
               rel="noreferrer"
            >
               Terms of Service,Privacy Policy.
            </a>
         </QualificationText>
         <Button
            fullWidth="11rem"
            fullHeight="2.6rem"
            disabled={!isValid}
            type="submit"
         >
            Sign Up
         </Button>
      </Form>
   )
}

export default SignUp

const Form = styled.form`
   width: 350px;
   height: 415px;
   display: flex;
   justify-content: center;
   align-items: center;
`
const ContainerInputErrorText = styled.div`
   height: 65px;
   width: 320px;
   margin: 0.04rem;
`
const ErrorText = styled.p`
   color: red;
   margin: 0;
   text-align: start;
   font-size: 16px;
   margin-left: 5px;
`
const QualificationText = styled.a`
   width: 310px;
   font-size: 0.9rem;
   margin: 0 0 8px 0;
   text-align: left;
   a {
      color: #2679bf;
      text-decoration: underline;
   }
`
