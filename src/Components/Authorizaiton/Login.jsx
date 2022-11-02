import React, { useEffect } from "react"
import { useFormik } from "formik"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import Input from "../UI/Input"
import PasswordInput from "../UI/PasswordInput"
import Button from "../UI/Button"
import { login } from "../../store/AuthSlice"
import { PATH_IN_ROLES } from "../../utilits/constants/general"

const Login = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { role, errorText } = useSelector((state) => state.auth.userInfo)

   const formik = useFormik({
      initialValues: {
         email: "",
         password: "",
      },
      onSubmit: (values) => {
         dispatch(login(values))
      },
   })

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
         <ErrorText>{errorText}</ErrorText>
         <Button type="submit" fullWidth="180px">
            Log in
         </Button>
         <p>
            Not a member ?<Link to="/">Sign up now</Link>
         </p>
      </Form>
   )
}

export default Login

const Form = styled.form`
   width: 60vw;
   height: 40vh;
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
