import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Route, Routes, useNavigate } from "react-router-dom"
import { axiosInstance } from "../api/axiosInstance"
import Board from "../Components/Board"
import Workspaces from "../Components/Workspaces/Workspaces"
import Layout from "./Layout"
import { useWorkspaces } from "../utilits/hooks/useWorkspaces"

const AdminUserLayout = () => {
   const { workspaces, getWorkspacesInDataBase } = useWorkspaces()
   const [workspacesById, setWorkspacesById] = useState([])

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

   const getWorkspacesId = async (id) => {
      try {
         const { data } = await axiosInstance.get(`/api/workspace/${id}`)
         setWorkspacesById(data)
         return navigate(`board/${data.name}`)
      } catch (error) {
         return console.log(error)
      }
   }

   useEffect(() => {
      getWorkspacesInDataBase()
   }, [])

   return (
      <Layout workspaces={workspaces} role={role}>
         <Routes>
            <Route
               path="workspaces/*"
               element={
                  <Workspaces
                     workspaces={workspaces}
                     getWorkspacesId={getWorkspacesId}
                     role={role}
                  />
               }
            />
            <Route path="profile" element={<h1>Profile</h1>} />
            <Route
               path="board/*"
               element={<Board workspacesById={workspacesById} role={role} />}
            />
         </Routes>
      </Layout>
   )
}

export default AdminUserLayout
