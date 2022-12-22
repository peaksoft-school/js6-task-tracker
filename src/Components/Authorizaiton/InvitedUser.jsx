/* eslint-disable no-unused-vars */
import React, { useEffect } from "react"
import GoogleButton from "react-google-button"
import styled, { keyframes } from "styled-components"
import { useSelector, useDispatch } from "react-redux"
import { useParams, useNavigate } from "react-router-dom"
import { authWithGoogleInvitedUser } from "../../store/AuthSlice"
import logoTaskTracker from "../../assets/images/LogoTaskTracker.png"
import imageLogin from "../../assets/images/ImageLogin.png"
import DisplayFlex from "../../layout/DisplayFlex"
import rightImage from "../../assets/images/image.png"

const InvitedUser = () => {
   const { boardId, workspaceId, role } = useParams()
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const authWithGoogleHandler = () => {
      dispatch(
         authWithGoogleInvitedUser({
            role,
            workspaceId,
            navigate,
            dispatch,
            boardId,
         })
      )
   }

   return (
      <AuthorizationContainer>
         <LeftBlock> </LeftBlock>
         <ContentBlock>
            <ContentLefBlueBlock> </ContentLefBlueBlock>
            <DisplayFlex margin="0 0 0 150px" width="70%" JK="space-between">
               <LogoTaskTracker src={logoTaskTracker} alt="Task Tracker" />
               <DisplayFlex AI="center" gap="20px" JK="center" FD="column">
                  <h2>Join our {boardId ? "board" : "workspace"} faster</h2>
                  <GoogleButton onClick={authWithGoogleHandler}>
                     Sign up with google
                  </GoogleButton>
               </DisplayFlex>

               <RightImg src={rightImage} />
            </DisplayFlex>
         </ContentBlock>
      </AuthorizationContainer>
   )
}

export default InvitedUser

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
   align-items: center;
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
   margin: 10% 5% 0 0;
`
const LogoTaskTracker = styled.img`
   position: absolute;
   top: 2%;
   left: 7%;
   width: 180px;
   height: 38px;
   margin: 15px 0 0 30px;
`
