import React from "react"
import styled from "styled-components"
import useOpenClose from "../../hooks/useOpenClose"
import Button from "../UI/Button"
import Modal from "../UI/Modal"
import CreateWorkspaces from "./CreateWorkspace"
import TableWorkspaces from "../TableWorkspaces"

const Workspaces = () => {
   const { toggle, isShowing } = useOpenClose()

   return (
      <ContainerWorkspaces>
         <Block>
            <h2>Workspaces</h2>
            <Button onClick={toggle} fullHeight="40px" fullWidth="100px">
               Create
            </Button>
         </Block>
         <Modal onClose={toggle} isOpen={isShowing}>
            <CreateWorkspaces clickCancel={toggle} />
         </Modal>
         <TableWorkspaces />
      </ContainerWorkspaces>
   )
}

export default Workspaces

const ContainerWorkspaces = styled.div`
   width: 85vw;
   height: 85vh;
   border-radius: 15px;
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
