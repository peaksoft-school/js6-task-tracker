import React from "react"
import { Route, Routes } from "react-router-dom"
import { ROLES } from "../utilits/constants/general"
import Login from "../Components/Authorizaiton/Login"
import PrivateRoute from "./PrivateRoute"
import UserRoutes from "./UserRoutes"
import AdminRoutes from "./AdminRoutes"

const AppRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<Login />} />
         <Route element={<PrivateRoute ROLES={ROLES.ADMIN} />}>
            <Route path="/admin" element={<AdminRoutes />} />
         </Route>
         <Route element={<PrivateRoute ROLES={ROLES.USER} />}>
            <Route path="/user" element={<UserRoutes />} />
         </Route>
      </Routes>
   )
}

export default AppRoutes
