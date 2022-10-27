import React, { useEffect } from "react"
import { useFormik } from "formik"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import Input from "../UI/Input"
import PasswordInput from "../UI/PasswordInput"
import logoTaskTracker from "../../assets/images/LogoTaskTracker.png"
import imageLogin from "../../assets/images/ImageLogin.png"
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
         dispatch(fetchSignUp(values))
      },
   })

   const { isValid } = formik
   useEffect(() => {
      if (PATH_IN_ROLES[role]) {
         navigate(`${PATH_IN_ROLES[role].path}`)
      }
   }, [role])

   return (
      <LoginContainer>
         <LogoTaskTracker src={logoTaskTracker} alt="Task Tracker" />
         <ContainerForm>
            <Form onSubmit={formik.handleSubmit}>
               <Title>Sign in</Title>
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
               <Button disabled={!isValid} type="submit" fullWidth="180px">
                  Sign Up
               </Button>
               <p>
                  You already have an account? <Link to="/login">Log in</Link>
               </p>
            </Form>
         </ContainerForm>
         <BackgroundImage src={imageLogin} alt="Task Tracker" />
      </LoginContainer>
   )
}

export default SignUp

const LoginContainer = styled.div`
   width: 100%;
   display: flex;
   justify-content: space-evenly;
   height: 600px;
`
const LogoTaskTracker = styled.img`
   width: 167px;
   height: 36px;
   margin: 15px 0 0 30px;
`
const Form = styled.form`
   width: 400px;
   height: 500px;
   display: flex;
   justify-content: center;
   align-items: center;
`
const ContainerForm = styled.div`
   width: 420px;
   height: 720px;
   display: flex;
   align-items: center;
   margin-right: 120px;
   form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
   }
`
const BackgroundImage = styled.img`
   width: 497px;
   height: 724px;
   margin-right: 70px;
`
const Title = styled.h2`
   font-weight: 500;
`
const ErrorText = styled.p`
   color: red;
   margin: 0;
   text-align: start;
   width: 300px;
`
