import React from "react"
import Header from "../Components/Header"

const Layout = ({ children, role, getFavorites, workspaces }) => {
   return (
      <>
         <Header
            workspaces={workspaces}
            getFavorites={getFavorites}
            role={role}
         />
         {children}
      </>
   )
}

export default Layout
