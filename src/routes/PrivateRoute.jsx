import React from "react"
import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

const PrivateRoute = ({ ROLES }) => {
   const { role, isAuth } = useSelector((state) => state.auth)

   const RegisteredUser = isAuth && role && ROLES.includes(role)
   if (!RegisteredUser) return <Navigate to="/" />
   return <Outlet />
}

export default PrivateRoute
