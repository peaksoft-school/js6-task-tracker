import React, { useEffect } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"
import Board from "../Components/Board"
import Workspaces from "../Components/Workspaces/Workspaces"
import Layout from "./Layout"

const AdminUserLayout = () => {
   const link = window.location.href
   const navigate = useNavigate()

   useEffect(() => {
      if (
         link === "http://localhost:3000/admin/*" ||
         link === '"http://localhost:3000/admin/*"'
      ) {
         navigate("workspaces")
      }
   }, [])
   return (
      <Layout>
         <Routes>
            <Route path="workspaces/*" element={<Workspaces />} />
            <Route path="workspaces/2" element={<Board />} />
         </Routes>
      </Layout>
   )
}

export default AdminUserLayout
