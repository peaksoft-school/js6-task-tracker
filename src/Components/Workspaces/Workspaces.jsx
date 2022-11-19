import React, { useEffect, useState } from "react"
import styled from "styled-components"
import useOpenClose from "../../hooks/useOpenClose"
import Button from "../UI/Button"
import Modal from "../UI/Modal"
import CreateWorkspaces from "./CreateWorkspace"
import TableWorkspaces from "../TableWorkspaces"
import { getWorkspacesQuery } from "../../api/auth"

const Workspaces = ({ getFavorites }) => {
   const { toggle, isShowing } = useOpenClose()
   const [workspaces, setWorkspaces] = useState([])

   const getWorkspacesInDataBase = async () => {
      try {
         const { data } = await getWorkspacesQuery()
         return setWorkspaces(data)
      } catch (error) {
         return error.message
      }
   }

   useEffect(() => {
      getWorkspacesInDataBase()
   }, [])

   return (
      <ContainerWorkspaces>
         <BlockWorkspaces>
            <Block>
               <h2>Workspaces</h2>
               <Button onClick={toggle} fullHeight="40px" fullWidth="100px">
                  Create
               </Button>
            </Block>
            <Modal onClose={toggle} isOpen={isShowing}>
               <CreateWorkspaces
                  getWorkspaces={getWorkspacesInDataBase}
                  toggle={toggle}
               />
            </Modal>
            <TableWorkspaces
               updateWorkspaces={getWorkspacesInDataBase}
               workspaces={workspaces}
               toggle={toggle}
               getFavorites={getFavorites}
            />
         </BlockWorkspaces>
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
