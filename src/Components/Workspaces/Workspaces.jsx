import React from "react"
import styled from "styled-components"
import { Outlet } from "react-router-dom"
import Button from "../UI/Button"
import Modal from "../UI/Modal"
import CreateWorkspaces from "./CreateWorkspace"
import TableWorkspaces from "./TableWorkspaces"
import useOpenClose from "../../utilits/hooks/useOpenClose"

const Workspaces = ({ getFavorites, role }) => {
   const { toggle, stateModal } = useOpenClose()
   return (
      <ContainerWorkspaces>
         <BlockWorkspaces>
            <Block>
               <h2>Workspaces</h2>
               {role === "ADMIN" && (
                  <Button
                     onClick={() => toggle("true")}
                     fullHeight="40px"
                     fullWidth="100px"
                  >
                     Create
                  </Button>
               )}
            </Block>
            <Modal onClose={toggle} isOpen={stateModal === "true"}>
               <CreateWorkspaces toggle={toggle} />
            </Modal>
            <TableWorkspaces getFavorites={getFavorites} />
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
   -webkit-box-shadow: 9px 6px 8px 0px rgba(34, 60, 80, 0.17);
   -moz-box-shadow: 9px 6px 8px 0px rgba(34, 60, 80, 0.17);
   box-shadow: 9px 6px 8px 0px rgba(34, 60, 80, 0.17);
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
   padding-top: 85px;
`
