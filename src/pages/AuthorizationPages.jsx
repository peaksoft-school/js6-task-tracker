import React from "react"
import GoogleButton from "react-google-button"
import {
   Link,
   Outlet,
   useLocation,
   useNavigate,
   useParams,
} from "react-router-dom"
import styled from "styled-components"
import { useDispatch } from "react-redux"
import logoTaskTracker from "../assets/images/LogoTaskTracker.png"
import imageLogin from "../assets/images/ImageLogin.png"
import { authWithGoogle } from "../store/AuthSlice"

const AuthorizationPages = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const params = useParams()
   const { pathname } = useLocation()
   const IamInRegistration = pathname === "/signup"

   const authWithGoogleHandler = () => {
      dispatch(authWithGoogle({ navigate }))
   }

   return (
      <AuthorizationContainer>
         <LogoTaskTracker src={logoTaskTracker} alt="Task Tracker" />
         <ContainerForm>
            {typeof params.id === "undefined" && (
               <>
                  <Title> {IamInRegistration ? "Sign Up" : "Sign Up"} </Title>
                  <AuthWithGoogleButton onClick={authWithGoogleHandler} />

                  <TextOr>or</TextOr>
               </>
            )}

            <Outlet />

            {typeof params.id === "undefined" && (
               <NavigationText>
                  {IamInRegistration
                     ? "You already have an account?"
                     : "Not a member?"}
                  <Link to={IamInRegistration ? "/login" : "/signup"}>
                     {IamInRegistration ? "Log in" : "Sign up now"}
                  </Link>
               </NavigationText>
            )}
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
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin-right: 120px;
   form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
   }
`
const TextOr = styled.p`
   margin: 0.6rem 0 0.6rem 0;
   font-size: 1.4rem;
   color: #919191;
`
const BackgroundImage = styled.img`
   width: 38vw;
   height: 100vh;
   margin-right: 5rem;
`
const Title = styled.h2`
   font-weight: 500;
`
const NavigationText = styled.p`
   margin: 20px 0 0 0;
   a {
      color: #2679bf;
      margin-left: 4px;
   }
`
const AuthWithGoogleButton = styled(GoogleButton)`
   border: 5px solid red;
   margin-top: 10px;
`
