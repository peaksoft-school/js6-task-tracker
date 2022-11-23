import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Route, Routes, useNavigate } from "react-router-dom"
import { axiosInstance } from "../api/axiosInstance"
import Board from "../Components/Board"
import Workspaces from "../Components/Workspaces/Workspaces"
import Layout from "./Layout"
import { getFavoriteWorkspacesQuery, getWorkspacesQuery } from "../api/auth"

const AdminUserLayout = () => {
   const [workspacesById, setWorkspacesById] = useState([])
   const [workspaces, setWorkspaces] = useState([])

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

   const getFavorites = async () => {
      try {
         const { data } = await getFavoriteWorkspacesQuery()
         return data
      } catch (error) {
         return console.log(error.message)
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
      <Layout workspaces={workspaces} getFavorites={getFavorites} role={role}>
         <Routes>
            <Route
               path="workspaces/*"
               element={
                  <Workspaces
                     getWorkspacesInDataBase={getWorkspacesInDataBase}
                     workspaces={workspaces}
                     getFavorites={getFavorites}
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
