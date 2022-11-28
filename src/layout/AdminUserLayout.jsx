import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Route, Routes, useNavigate, useLocation } from "react-router-dom"
import { axiosInstance } from "../api/axiosInstance"
import AllBoards from "../Components/Board/AllBoards"
import Workspaces from "../Components/Workspaces/Workspaces"
import Layout from "./Layout"
import { getWorkspacesQuery } from "../api/auth"
import InnerBoard from "../Components/Board/InnerBoard"
import Boards from "../Components/Board/Boards"

const AdminUserLayout = () => {
   const [workspacesById, setWorkspacesById] = useState([])
   const [workspaces, setWorkspaces] = useState([])

   const { role } = useSelector((state) => state.auth.userInfo)
   const navigate = useNavigate()

   const { pathname } = useLocation()

   if (pathname === "/admin/*" || pathname === "/user/*")
      navigate("allWorkspaces")

   const getWorkspacesId = async (id) => {
      try {
         const { data } = await axiosInstance.get(`/api/workspace/${id}`)
         console.log(data)
         setWorkspacesById("TaskTracker")
         return navigate(`workspaces/TaskTracker/boards`)
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
               path="workspaces/:workspaceName/*"
               element={
                  <AllBoards workspacesById={workspacesById} role={role} />
               }
            >
               <Route path="boards" element={<Boards role={role} />} />
               <Route path="board" element={<InnerBoard />} />
            </Route>

            <Route path="profile" element={<h1>Profile</h1>} />
         </Routes>
      </Layout>
   )
}

export default AdminUserLayout
