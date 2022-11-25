import React from "react"
import styled from "styled-components"
import { Outlet } from "react-router-dom"
import useOpenClose from "../../hooks/useOpenClose"
import Button from "../UI/Button"
import Modal from "../UI/Modal"
import CreateWorkspaces from "./CreateWorkspace"
import TableWorkspaces from "../TableWorkspaces"

const Workspaces = ({
   getFavorites,
   role,
   getWorkspacesId,
   workspaces,
   getWorkspacesInDataBase,
}) => {
   const { toggle, isShowing } = useOpenClose()

   return (
      <ContainerWorkspaces>
         <BlockWorkspaces>
            <Block>
               <h2>Workspaces</h2>
               {role === "ADMIN" && (
                  <Button onClick={toggle} fullHeight="40px" fullWidth="100px">
                     Create
                  </Button>
               )}
            </Block>
            <Modal onClose={toggle} isOpen={isShowing}>
               <CreateWorkspaces
                  getWorkspaces={getWorkspacesInDataBase}
                  toggle={toggle}
               />
            </Modal>
            <TableWorkspaces
               getWorkspacesId={getWorkspacesId}
               updateWorkspaces={getWorkspacesInDataBase}
               workspaces={workspaces}
               toggle={toggle}
               getFavorites={getFavorites}
            />
         </BlockWorkspaces>
         <Outlet />
      </ContainerWorkspaces>
   )
}

export default Workspaces

const BlockWorkspaces = styled.div`
   width: 85vw;
   border-radius: 15px;
   padding-bottom: 20px;
   background-color: white;
`
const Block = styled.div`
   display: flex;
   justify-content: space-between;
   height: 50px;
   align-items: center;
   padding: 20px 20px 0 20px;
   h2 {
      font-weight: 500;
   }
`
const ContainerWorkspaces = styled.div`
   display: flex;
   justify-content: center;
   margin-top: 20px;
`
