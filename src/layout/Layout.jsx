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

   return (
      <>
         <Header favourites={favourites} />
         <Workspaces getFavorites={getFavorites} />
         {children}
      </>
   )
}

export default Layout
