/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import { axiosInstance } from "../../api/axiosInstance"
import FilterBlock from "./FilterBlock"
import TableBlock from "./TableBlock"

const ViewAll = () => {
   const { showSideBar } = useSelector((state) => state.showSideBar)

   const { workspaceId } = useParams()
   const [cards, setCards] = useState([])
   const getCardsInDataBaseQuery = async () => {
      try {
         const response = await axiosInstance.get(
            `/api/issues/cards/${workspaceId}`
         )
         console.log(response)
         return setCards(response.data)
      } catch (error) {
         return console.log(error.message)
      }
   }

   useEffect(() => {
      getCardsInDataBaseQuery()
   }, [])
   return (
      <Container>
         <ViewAllStyled showSideBar={showSideBar}>
            <FilterBlock />
            <TableBlock />
         </ViewAllStyled>
      </Container>
   )
}

export default ViewAll

const Container = styled.div`
   width: 100%;
   display: flex;
   justify-content: flex-end;
   font-size: 0.9rem !important;
   padding-top: 40px;
`

const ViewAllStyled = styled.div`
   width: ${(props) => (props.showSideBar ? "80vw" : "90vw")};
   margin-top: 80px;
   transition: all 0.35s ease-out;
`
