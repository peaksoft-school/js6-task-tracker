import React from "react"
import { Route, Routes } from "react-router-dom"
import { PATH_IN_ROLES } from "../utilits/constants/general"
import SignUp from "../Components/Authorizaiton/SignUp"
import PrivateRoute from "./PrivateRoute"
import UserRoutes from "./UserRoutes"
import AdminRoutes from "./AdminRoutes"

const AppRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<SignUp />} />
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
