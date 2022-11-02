import React, { useEffect } from "react"
import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useFormik } from "formik"
import Input from "../UI/Input"
import PasswordInput from "../UI/PasswordInput"
import Button from "../UI/Button"
import { signUp as fetchSignUp } from "../../store/AuthSlice"
import { PATH_IN_ROLES } from "../../utilits/constants/general"
import { validationSchema } from "./Validation"
import googleIcon from "../../assets/svg/googleIcon.svg"
import CustomIcons from "../UI/TaskCard/CustomIcons"
import arrowDownIcon from "../../assets/icons/arrowDown.svg"
import img from "../../assets/icons/BlueIconWorkspaces.svg"

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
         <SignUpGoogleBlock>
            <CustomIcons src={img} />
            <p>Register with google example@gmail.com</p>

            <CustomIcons src={arrowDownIcon} />
            <CustomIcons src={googleIcon} />
         </SignUpGoogleBlock>
         <TextOr>or</TextOr>
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

         <Button
            fullWidth="11rem"
            fullHeight="2.3rem"
            disabled={!isValid}
            type="submit"
         >
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
   width: 60vw;
   height: 85vh;
   display: flex;
   justify-content: center;
   align-items: center;
`
const ContainerInputErrorText = styled.div`
   height: 60px;
   width: 320px;
   margin: 0.05rem;
`
const TextOr = styled.p`
   margin: 0;
   font-size: 1.4rem;
   color: #919191;
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
const SignUpGoogleBlock = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-around;
   width: 23vw;
   height: 6vh;
   background-color: #f0f0f0;
   border-radius: 8px;
   padding: 0.4rem 1rem 0.4rem 1rem;
   img {
      width: 4vw;
      height: 4vh;
   }
   p {
      font-size: 1rem;
      margin: 0;
      color: #919191;
      margin-left: 0.6rem;
   }
`
