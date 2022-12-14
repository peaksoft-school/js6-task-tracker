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
   min-height: 43vw;
   border-radius: 10px;
   padding: 20px 0 20px 0;
   background-color: white;
   -webkit-box-shadow: 0px 6px 8px 1px rgba(34, 60, 80, 0.19);
   -moz-box-shadow: 0px 6px 8px 1px rgba(34, 60, 80, 0.19);
   box-shadow: 0px 6px 8px 1px rgba(34, 60, 80, 0.19);
`
const Block = styled.div`
   display: flex;
   justify-content: space-between;
   height: 50px;
   padding: 10px 15px 0 15px;
   align-items: center;
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
