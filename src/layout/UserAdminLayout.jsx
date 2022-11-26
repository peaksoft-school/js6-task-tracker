import React from "react"
import { useDispatch } from "react-redux"
import Header from "../Components/Header"
import Participants from "../Components/Participants"
import { logout } from "../store/AuthSlice"

const UserAdminLayout = () => {
   const dispatch = useDispatch()
   const logoutHandler = () => {
      dispatch(logout())
   }
   return (
      <>
         <Header />
         <Participants />
         <button type="submit" onClick={logoutHandler}>
            LOGOUT
         </button>
      </>
   )
}

export default UserAdminLayout
