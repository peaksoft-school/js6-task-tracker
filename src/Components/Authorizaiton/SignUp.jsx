import React, { useEffect } from "react"
import { useFormik } from "formik"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
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
         <Title>Sign in</Title>
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
               label="email"
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

         <Button disabled={!isValid} type="submit" fullWidth="180px">
            Sign Up
         </Button>
         <p>
            You already have an account? <Link to="/login">Log in</Link>
         </p>
      </Form>
   )
}

export default SignUp

const Form = styled.form`
   width: 25vw;
   height: 72vh;
   display: flex;
   justify-content: center;
   align-items: center;
`
const ContainerInputErrorText = styled.div`
   height: 60px;
   width: 320px;
`

const Title = styled.h2`
   font-weight: 500;
`
const ErrorText = styled.p`
   color: red;
   margin: 0;
   text-align: start;
   font-size: 16px;
   margin-left: 5px;
`
