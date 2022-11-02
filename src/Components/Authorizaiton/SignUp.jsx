/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useFormik } from "formik"
import Input from "../UI/Input"
import PasswordInput from "../UI/PasswordInput"
import Button from "../UI/Button"
import { signUp as fetchSignUp } from "../../store/AuthSlice"
import { PATH_IN_ROLES } from "../../utilits/constants/general"
import { validationSchema } from "./Validation"

const SignUp = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { role } = useSelector((state) => state.auth.userInfo)

   const formik = useFormik({
      initialValues: {
         firstName: "",
         lastName: "",
         email: "",
         password: "",
         confirmPassword: "",
      },
      validationSchema,
      onSubmit: (values) => {
         return dispatch(fetchSignUp(values))
      },
   })

   const { isValid } = formik
   useEffect(() => {
      if (PATH_IN_ROLES[role]) {
         navigate(`${PATH_IN_ROLES[role].path}`)
      }
   }, [role])

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
         <QualificationText>
            Creating an account means you re okay with our <br />
            <a>Terms of Service,Privacy Policy.</a>
         </QualificationText>
         <Button
            fullWidth="11rem"
            fullHeight="2.8rem"
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
   width: 30vw;
   height: 61vh;
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

const QualificationText = styled.p`
   width: 28vw;
   padding: 0 0 8px 40px;
   font-size: 0.9rem;
   a {
      color: #2679bf;
      margin-left: 4px;
      text-decoration: underline;
   }
`
