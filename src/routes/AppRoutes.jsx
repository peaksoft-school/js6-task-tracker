import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import PrivateRoute from "./PrivateRoute"
import AuthorizationPages from "../pages/AuthorizationPages"
import SignUp from "../Components/Authorizaiton/SignUp"
import AdminUserLayout from "../layout/AdminUserLayout"
import Login from "../Components/Authorizaiton/Login"
import ForgotPassword from "../Components/Authorizaiton/ForgotPassword"
import InvitedUser from "../Components/Authorizaiton/InvitedUser"

const AppRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<AuthorizationPages />}>
            <Route path="" element={<Navigate to="/signup" />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/login/:id" element={<ForgotPassword />} />
         </Route>
         <Route
            path="signIn/:role/workspaceId/:workspaceId/boardId/:boardId"
            element={<InvitedUser />}
         />
         <Route
            path="signIn/:role/workspaceId/:workspaceId"
            element={<InvitedUser />}
         />
         <Route
            path="allWorkspaces/*"
            element={<PrivateRoute COMPONENT={<AdminUserLayout />} />}
         />
         <Route path="/*" element={<h1>Извините страница не найдено</h1>} />
      </Routes>
   )
}

export default AppRoutes
