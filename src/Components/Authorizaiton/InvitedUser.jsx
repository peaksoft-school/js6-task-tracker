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

const InvitedUser = () => {
   const { role, workspaceId } = useParams()
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const authWithGoogleHandler = () => {
      dispatch(
         authWithGoogleInvitedUser({ role, workspaceId, navigate, dispatch })
      )
   }

   return (
      <DisplayFlex JK="space-evenly">
         <LogoTaskTracker src={logoTaskTracker} alt="Task Tracker" />
         <DisplayFlex AI="center" gap="20px" JK="center" FD="column">
            <h2>Join our workspaces faster</h2>
            <GoogleButton onClick={authWithGoogleHandler}>
               Sign up with google
            </GoogleButton>
         </DisplayFlex>
         <BackgroundImage src={imageLogin} alt="Task Tracker" />
      </DisplayFlex>
   )
}

export default InvitedUser

const BackgroundImage = styled.img`
   width: 38vw;
   height: 100vh;
   margin-right: 5rem;
`
const LogoTaskTracker = styled.img`
   width: 167px;
   height: 36px;
   margin: 15px 0 0 30px;
`
