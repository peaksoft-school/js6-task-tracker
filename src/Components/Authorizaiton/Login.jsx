import React from "react"
import { useFormik } from "formik"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import Input from "../UI/Input"
import PasswordInput from "../UI/PasswordInput"
import Button from "../UI/Button"
import { login } from "../../store/AuthSlice"

const Login = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const formik = useFormik({
      initialValues: {
         email: "",
         password: "",
      },
      onSubmit: (userData) => {
         return dispatch(login({ userData, navigate }))
      },
   })

   return (
      <Form onSubmit={formik.handleSubmit}>
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
         <Button fullHeight="2.8rem" type="submit" fullWidth="180px">
            Log in
         </Button>
      </Form>
   )
}

export default Login

const Form = styled.form`
   width: 60vw;
   height: 28vh;
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
