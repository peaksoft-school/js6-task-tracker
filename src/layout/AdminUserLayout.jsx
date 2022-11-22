import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { Route, Routes, useNavigate } from "react-router-dom"
import Board from "../Components/Board"
import Workspaces from "../Components/Workspaces/Workspaces"
import Layout from "./Layout"

const AdminUserLayout = () => {
   const { role } = useSelector((state) => state.auth.userInfo)
   const link = window.location.href
   const navigate = useNavigate()

   useEffect(() => {
      if (
         link === "http://localhost:3000/admin/*" ||
         link === "http://localhost:3000/user/*"
      ) {
         navigate("workspaces")
      }
   }, [])

   return (
      <Layout role={role}>
         <Routes>
            <Route path="workspaces/*" element={<Workspaces role={role} />} />
            <Route path="profile" element={<h1>Profile</h1>} />
            <Route path="workspaces/2" element={<Board role={role} />} />
         </Routes>
      </Layout>
   )
}

export default AdminUserLayout
