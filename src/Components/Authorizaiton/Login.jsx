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
import ForgotPasswordBlock from "../ForgotPasswordBlock"

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
               id="email"
               value={formik.values.email}
               type="email"
               label="email"
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
            fullWidth="40vw"
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
const TextForgotPassword = styled.div`
   width: 25vw;
   text-align: end;
   span {
      font-size: 1.1rem;
      cursor: pointer;
   }
`
