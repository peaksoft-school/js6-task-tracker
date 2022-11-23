import React from "react"
import { Route, Routes } from "react-router-dom"
import { PATH_IN_ROLES } from "../utilits/constants/general"
import PrivateRoute from "./PrivateRoute"
import UserRoutes from "./UserRoutes"
import AdminRoutes from "./AdminRoutes"
import AuthorizationPages from "../pages/AuthorizationPages"
import SignUp from "../Components/Authorizaiton/SignUp"
import Login from "../Components/Authorizaiton/Login"
import ForgotPassword from "../Components/Authorizaiton/ForgotPassword"

const AppRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<AuthorizationPages />}>
            <Route path="/" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/login/:id" element={<ForgotPassword />} />
         </Route>

         <Route
            path={PATH_IN_ROLES.ADMIN.path}
            element={
               <PrivateRoute
                  ROLES={Object.keys(PATH_IN_ROLES)[0]}
                  COMPONENT={<AdminRoutes />}
               />
            }
         />
         <Route
            path={PATH_IN_ROLES.USER.path}
            element={
               <PrivateRoute
                  ROLES={Object.keys(PATH_IN_ROLES)[1]}
                  COMPONENT={<UserRoutes />}
               />
            }
         />
         <Route path="/*" element={<h1>Извините страница не найдено</h1>} />
      </Routes>
   )
}

export default AppRoutes
