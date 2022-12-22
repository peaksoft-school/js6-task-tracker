import React from "react"
import GoogleButton from "react-google-button"
import { fadeIn } from "react-animations"
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
// import imageLogin from "../assets/images/ImageLogin.png"
import rightImage from "../assets/images/image.png"
import { authWithGoogle } from "../store/AuthSlice"

const AuthorizationPages = ({ children }) => {
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
         <LeftBlock> </LeftBlock>
         <ContentBlock>
            <ContentLefBlueBlock> </ContentLefBlueBlock>
            <LogoTaskTracker src={logoTaskTracker} alt="Task Tracker" />
            {children}
            <ContainerForm>
               {typeof params.id === "undefined" && (
                  <>
                     <Title>
                        {" "}
                        {IamInRegistration ? "Sign Up" : "Sign Up"}{" "}
                     </Title>
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
            <RightImg src={rightImage} />
         </ContentBlock>
      </AuthorizationContainer>
   )
}

export default AuthorizationPages

const AuthorizationContainer = styled.div`
   width: 100%;
   position: relative;
   display: flex;
   justify-content: flex-start;
   height: 100vh;
`

const LeftBlock = styled.div`
   width: 20vw;
   background-color: #227af0;
   height: 100%;
`

const ContentBlock = styled.div`
   position: absolute;
   display: flex;
   align-items: flex-start;
   left: 7%;
   top: 6%;
   z-index: 50;
   height: 90%;
   width: 88%;
   background-color: white;
   -webkit-box-shadow: 1px 5px 10px 9px rgba(34, 60, 80, 0.2);
   -moz-box-shadow: 1px 5px 10px 9px rgba(34, 60, 80, 0.2);
   box-shadow: 1px 5px 10px 9px rgba(34, 60, 80, 0.2);
`

const ContentLefBlueBlock = styled.div`
   width: 100px;
   height: 100%;
   background-color: #227af0;
   border-top-right-radius: 50px;
   border-bottom-right-radius: 50px;
   -webkit-box-shadow: 1px 5px 10px 9px rgba(34, 60, 80, 0.2);
   -moz-box-shadow: 1px 5px 10px 9px rgba(34, 60, 80, 0.2);
   box-shadow: 1px 5px 10px 9px rgba(34, 60, 80, 0.2);
`

const RightImg = styled.img`
   width: 400px;
   height: 300px;
   margin: 15% 5% 0 0;
`
const LogoTaskTracker = styled.img`
   position: absolute;
   top: 2%;
   left: 7%;
   width: 180px;
   height: 38px;
   margin: 15px 0 0 30px;
`
const ContainerForm = styled.div`
   width: 57vw;
   height: 90vh;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   padding: 0 0 0 80px;
   animation: 1s ${fadeIn};
   form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      input {
         background-color: white;
      }
   }
`
const TextOr = styled.p`
   margin: 0.6rem 0 0.6rem 0;
   font-size: 1.4rem;
   color: #919191;
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
