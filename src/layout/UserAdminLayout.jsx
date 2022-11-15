import React from "react"
import Header from "../Components/Header"
import MemberBoard from "../Components/MemberBoard"
import Table from "../Components/UI/Table"

const UserAdminLayout = () => {
   return (
      <>
         <Header />
         <Table />
         <MemberBoard />
      </>
   )
}

export default UserAdminLayout
