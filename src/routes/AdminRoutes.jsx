import React from "react"
import { useDispatch } from "react-redux"
import UserLayout from "../layout/UserLayout"
import { logout } from "../store/AuthSlice"

const AdminRoutes = () => {
   const dispatch = useDispatch()
   const logoutHandler = () => {
      dispatch(logout())
   }
   return (
      <div>
         <UserLayout />
         <h1>ADMIN</h1>
         <button type="submit" onClick={logoutHandler}>
            LOGOUT
         </button>
      </div>
   )
}

export default AdminRoutes
