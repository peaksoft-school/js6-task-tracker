import React from "react"
import styled from "styled-components"
import Header from "../Components/Header"
import Workspaces from "../Components/Workspaces/Workspaces"

const UserAdminLayout = () => {
   return (
      <>
         <Header />
         <ContainerWorkspaces>
            <Workspaces />
         </ContainerWorkspaces>
      </>
   )
}

export default UserAdminLayout

const ContainerWorkspaces = styled.div`
   display: flex;
   justify-content: center;
   margin-top: 20px;
`
