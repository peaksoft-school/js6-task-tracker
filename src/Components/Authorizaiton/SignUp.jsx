import React from "react"
import { useFormik } from "formik"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import styled from "styled-components"
import Input from "../UI/Input"
import PasswordInput from "../UI/PasswordInput"
import logoTaskTracker from "../../assets/images/LogoTaskTracker.png"
import imageLogin from "../../assets/images/ImageLogin.png"
import Button from "../UI/Button"
import { LocalStorage } from "../../utilits/helpers/General"
import { USER_KEY } from "../../utilits/constants/Constants"
import { signUp as fetchSignUp } from "../../store/AuthSlice"

const SignUp = () => {
   const dispatch = useDispatch()

   const formik = useFormik({
      initialValues: {
         firstName: "",
         lastName: "",
         email: "",
         password: "",
         repeatPassword: "",
      },
      onSubmit: (values) => {
         dispatch(fetchSignUp(values))
         LocalStorage.saveData(USER_KEY, values)
      },
   })

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
               />
               <Input
                  name="lastName"
                  value={formik.values.lastName}
                  type="text"
                  label="Surname"
                  onChange={formik.handleChange}
               />
               <Input
                  id="email"
                  value={formik.values.email}
                  type="email"
                  label="email"
                  onChange={formik.handleChange}
               />
               <PasswordInput
                  id="password"
                  label="Password"
                  value={formik.values.password}
                  type="text"
                  onChange={formik.handleChange}
               />
               <PasswordInput
                  id="repeatPassword"
                  label="repeatPassword"
                  value={formik.values.repeatPassword}
                  type="text"
                  onChange={formik.handleChange}
               />
               <Button type="submit" fullWidth="180px">
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
