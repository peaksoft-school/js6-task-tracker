import React from "react"
import Header from "../Components/Header"

const Layout = ({ children, role, workspacesById }) => {
   return (
      <>
         <Header workspacesById={workspacesById} role={role} />
         {children}
      </>
   )
}

export default Layout
