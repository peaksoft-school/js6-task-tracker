import React from "react"
import styled from "styled-components"
import TaskCard from "../UI/TaskCard/TaskCard"
import EditIcon from "../../assets/icons/Icon Shape (1).svg"
import CustomIcons from "../UI/TaskCard/CustomIcons"
import InnerTaskCard from "../InnerTaskCard/InnerTaskCard"
import Modal from "../UI/Modal"
import useOpenClose from "../../utilits/hooks/useOpenClose"

const InnerBoard = () => {
   const { isShowing, toggle } = useOpenClose()
   return (
      <Container>
         <InfoBoard>
            <CustomIcons edit="edit" src={EditIcon} top="15px" right="7px" />
         </InfoBoard>
         <ContainerColumns>
            <TaskCard openInnerTaskCard={toggle} />
            <Modal isOpen={isShowing} onClose={toggle} fullWidth="95vw">
               <InnerTaskCard toggle={toggle} />
            </Modal>
         </ContainerColumns>
      </Container>
   )
}

export default InnerBoard

const Container = styled.div`
   display: flex;
   width: 100%;
   flex-direction: column;
   height: 100%;
`
const InfoBoard = styled.div`
   width: 100%;
   height: 13vh;
`
const ContainerColumns = styled.div`
   width: 100%;
   overflow: scroll;
   display: flex;
   align-items: flex-start;
   gap: 10px;
   height: 80vh;
`
