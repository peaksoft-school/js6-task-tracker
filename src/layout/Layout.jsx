import React from "react"
import Header from "../Components/Header"

const Layout = ({ children, role }) => {
   return (
      <>
         <Header role={role} />
         {children}
      </>
   )
}

export default Layout
