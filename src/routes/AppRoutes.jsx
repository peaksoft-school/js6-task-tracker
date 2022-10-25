import React from "react"
import { Route, Routes } from "react-router-dom"
import { ROLES } from "../utilits/constants/general"
import SignUp from "../Components/Authorizaiton/SignUp"
import PrivateRoute from "./PrivateRoute"
import UserRoutes from "./UserRoutes"
import AdminRoutes from "./AdminRoutes"

const AppRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<SignUp />} />
         <Route element={<PrivateRoute ROLES={ROLES.ADMIN} />}>
            <Route path="/admin" element={<AdminRoutes />} />
         </Route>
         <Route element={<PrivateRoute ROLES={ROLES.USER} />}>
            <Route path="/user" element={<UserRoutes />} />
         </Route>
         <Route path="*" element={<h1>Извините страница не найдено</h1>} />
      </Routes>
   )
}

export default AppRoutes
