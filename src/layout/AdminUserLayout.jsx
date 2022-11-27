import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Route, Routes, useNavigate, useLocation } from "react-router-dom"
import { axiosInstance } from "../api/axiosInstance"
import AllBoards from "../Components/Board/AllBoards"
import Workspaces from "../Components/Workspaces/Workspaces"
import Layout from "./Layout"
import { getWorkspacesQuery } from "../api/auth"

const AdminUserLayout = () => {
   const [workspacesById, setWorkspacesById] = useState([])
   const [workspaces, setWorkspaces] = useState([])

   const { role } = useSelector((state) => state.auth.userInfo)
   const navigate = useNavigate()
   const { pathname } = useLocation()

   useEffect(() => {
      if (pathname === "/admin/*" || pathname === "/user/*") {
         navigate("allWorkspaces")
      } else {
         navigate(pathname)
      }
   }, [])

   const getWorkspacesId = async (id) => {
      try {
         const { data } = await axiosInstance.get(`/api/workspace/${id}`)
         console.log(data)
         setWorkspacesById("Task Tracker")
         return navigate(`workspaces/TaskTracker/*`)
      } catch (error) {
         return console.log(error)
      }
   }

   const getWorkspacesInDataBase = async () => {
      try {
         const { data } = await getWorkspacesQuery()
         return setWorkspaces(data)
      } catch (error) {
         return error.message
      }
   }

   useEffect(() => {
      getWorkspacesInDataBase()
   }, [])

   return (
      <Layout workspaces={workspaces} role={role}>
         <Routes>
            <Route
               path="/allWorkspaces"
               element={
                  <Workspaces
                     getWorkspacesInDataBase={getWorkspacesInDataBase}
                     workspaces={workspaces}
                     getWorkspacesId={getWorkspacesId}
                     role={role}
                  />
               }
            />
            <Route
               path="workspaces/*"
               element={
                  <AllBoards workspacesById={workspacesById} role={role} />
               }
            />
            <Route path="profile" element={<h1>Profile</h1>} />
         </Routes>
      </Layout>
   )
}

export default AdminUserLayout
