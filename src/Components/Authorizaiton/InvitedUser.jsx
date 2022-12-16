/* eslint-disable no-unused-vars */
import React, { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { authWithGoogleInvitedUser } from "../../store/AuthSlice"

const InvitedUser = () => {
   const { role, workspaceId } = useParams()
   const dispatch = useDispatch()
   const navigate = useNavigate()

   useEffect(() => {
      dispatch(authWithGoogleInvitedUser({ role, workspaceId, navigate }))
   }, [])

   return <div>InvitedUser</div>
}

export default InvitedUser
