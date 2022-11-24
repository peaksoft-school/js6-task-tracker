import React from "react"
import Header from "../Components/Header"

const Layout = ({ children, role, workspaces }) => {
   return (
      <>
         <Header workspaces={workspaces} role={role} />
         {children}
      </>
   )
}

export default Layout
