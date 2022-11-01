import React from "react"
import { useDispatch } from "react-redux"
import Header from "../Components/Header"
import SideBar from "./SideBar/SideBar"
import { logout } from "../store/AuthSlice"

const UserLayout = () => {
   const dispatch = useDispatch()
   const logoutHandler = () => {
      dispatch(logout())
   }
   return (
      <>
         <Header />
         <SideBar />
         <div>
            <button type="submit" onClick={logoutHandler}>
               LOGOUT
            </button>
         </div>
      </>
   )
}

export default UserLayout
