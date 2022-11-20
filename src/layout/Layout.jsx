import React, { useState, useEffect } from "react"
import Header from "../Components/Header"
import Workspaces from "../Components/Workspaces/Workspaces"
import { getFavoriteWorkspacesQuery } from "../api/auth"

const Layout = ({ children }) => {
   const [favourites, setFavourites] = useState([])

   const getFavorites = async () => {
      try {
         const { data } = await getFavoriteWorkspacesQuery()
         return setFavourites(data)
      } catch (error) {
         return console.log(error.message)
      }
   }
   useEffect(() => {
      getFavorites()
   }, [])

   // const getIdWorkspaces = async () => {
   //    try {
   //       const response = await axiosInstance.get(`/api/workspace`)
   //       return console.log(response)
   //    } catch (error) {
   //       return console.log(error.message)
   //    }
   // }

   return (
      <>
         <Header favourites={favourites} />
         <Workspaces />
         {children}
      </>
   )
}

export default Layout
