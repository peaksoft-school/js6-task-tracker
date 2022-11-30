import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Route, Routes, useNavigate, useLocation } from "react-router-dom"
import AllBoards from "../Components/Board/AllBoards"
import Workspaces from "../Components/Workspaces/Workspaces"
import Layout from "./Layout"
import Boards from "../Components/Board/Boards"
import InnerBoard from "../Components/Board/InnerBoard"
import { getAllWorkspaces } from "../store/workspacesSlice"
import { axiosInstance } from "../api/axiosInstance"

const AdminUserLayout = () => {
   const [boardById, setBoardById] = useState({})
   const [workspacesById, setWorkspacesById] = useState({})
   const { role } = useSelector((state) => state.auth.userInfo)
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const { pathname } = useLocation()

   useEffect(() => {
      if (pathname === "/admin/*" || pathname === "/user/*") {
         navigate("allWorkspaces")
      }
   }, [])

   const getWorkspacesId = async (id) => {
      try {
         const { data } = await axiosInstance.get(`/api/workspace/${id}`)
         setWorkspacesById(data)
         return navigate(`workspaces/${data.name}${data.id}/boards`)
      } catch (error) {
         return console.log(error)
      }
   }

   useEffect(() => {
      dispatch(getAllWorkspaces())
   }, [])

   const getBoardById = (data) => {
      setBoardById(data)
   }

   return (
      <Layout role={role}>
         <Routes>
            <Route
               path="allWorkspaces"
               element={
                  <Workspaces getWorkspacesId={getWorkspacesId} role={role} />
               }
            />
            <Route
               path="workspaces/:workspaceName:id/*"
               element={<AllBoards boardById={boardById} role={role} />}
            >
               <Route
                  path="boards"
                  element={
                     <Boards
                        workspacesById={workspacesById}
                        getBoardById={getBoardById}
                        role={role}
                     />
                  }
               />
               <Route
                  path="boards/:boardName"
                  element={<InnerBoard boardById={boardById} />}
               />
            </Route>
            <Route path="profile" element={<h1>Profile</h1>} />
         </Routes>
      </Layout>
   )
}

export default AdminUserLayout
