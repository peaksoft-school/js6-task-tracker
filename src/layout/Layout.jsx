import React, { useState, useEffect } from "react"
import Header from "../Components/Header"
import Workspaces from "../Components/Workspaces/Workspaces"
import { getFavoriteWorkspacesQuery } from "../api/auth"
import AdminRoutes from "../routes/AdminRoutes"

const Layout = () => {
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

   return (
      <>
         <Header favourites={favourites} />
         <AdminRoutes />
         <Workspaces getFavorites={getFavorites} />
      </>
   )
}

export default Layout
