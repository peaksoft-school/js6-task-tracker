import React, { useState } from "react"
import { useFormik } from "formik"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import Input from "../UI/Input"
import PasswordInput from "../UI/PasswordInput"
import Button from "../UI/Button"
import Modal from "../UI/Modal"
import { login } from "../../store/AuthSlice"
import ForgotPasswordBlock from "./ForgotPasswordBlock"

const Login = () => {
   const [showModal, setShowModal] = useState(false)
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const showCloseModalHandler = () => {
      setShowModal(!showModal)
   }

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
               type="email"
               id="email"
               label="example@gmail.com"
               value={formik.values.email}
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
            />
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
         </ContainerInputErrorText>
         <TextForgotPassword>
            <span onClick={showCloseModalHandler}> Forgot password ?</span>
         </TextForgotPassword>
         <Modal
            fullWidth="530px"
            onClose={showCloseModalHandler}
            isOpen={showModal}
         >
            <ForgotPasswordBlock
               isOpen={showModal}
               showCloseModalHandler={showCloseModalHandler}
            />
         </Modal>
         <Button fullHeight="2.8rem" type="submit" fullWidth="180px">
            Log in
         </Button>
      </Form>
   )
}

export default Login

const Form = styled.form`
   width: 350px;
   height: 200px;
   display: flex;
   justify-content: center;
   align-items: center;
`
const ContainerInputErrorText = styled.div`
   height: 60px;
   width: 320px;
`
const TextForgotPassword = styled.div`
   width: 320px;
   text-align: end;
   margin-bottom: 15px;
   span {
      font-size: 1.1rem;
      cursor: pointer;
      color: #393939;
   }
`
