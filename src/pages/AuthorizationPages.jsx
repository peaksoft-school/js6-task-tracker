import React from "react"
import { Outlet } from "react-router-dom"
import styled from "styled-components"
import logoTaskTracker from "../assets/images/LogoTaskTracker.png"
import imageLogin from "../assets/images/ImageLogin.png"

const AuthorizationPages = () => {
   return (
      <AuthorizationContainer>
         <LogoTaskTracker src={logoTaskTracker} alt="Task Tracker" />
         <ContainerForm>
            <Outlet />
         </ContainerForm>
         <BackgroundImage src={imageLogin} alt="Task Tracker" />
      </AuthorizationContainer>
   )
}

export default AuthorizationPages

const AuthorizationContainer = styled.div`
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
const ContainerForm = styled.div`
   width: 37vw;
   height: 100vh;
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
   width: 38vw;
   height: 100vh;
   margin-right: 5rem;
`
