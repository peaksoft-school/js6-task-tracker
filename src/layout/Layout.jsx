import React, { useState, useEffect } from "react"
import Header from "../Components/Header"
import { getFavoriteWorkspacesQuery } from "../api/auth"

const Layout = ({ children, role }) => {
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
         <Header role={role} favourites={favourites} />
         {children}
      </>
   )
}

export default Layout
