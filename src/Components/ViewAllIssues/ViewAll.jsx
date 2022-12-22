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
   const [filteredCards, setFilteredCards] = useState([])

   const getCardsInDataBaseQuery = async () => {
      try {
         const response = await axiosInstance.get(
            `/api/issues/cards/${workspaceId}`
         )
         return setCards(response.data)
      } catch (error) {
         return console.log(error.message)
      }
   }

   useEffect(() => {
      getCardsInDataBaseQuery()
   }, [])

   const filterChangeHandler = (date) => {
      const convertDate = date.$d
      const convertLocal = convertDate.toISOString()
      const convertToSlice = convertLocal.slice(0, 10)
      const convertToString = convertToSlice.toString()
      console.log(convertToString)
      const filtered = cards.filter((el) => convertLocal.includes(el.createdAt))
      console.log(convertToString instanceof String)
      setFilteredCards(filtered)
   }
   console.log(filteredCards, "filteredCards")
   return (
      <Container>
         <ViewAllStyled showSideBar={showSideBar}>
            <FilterBlock filterChangeHandler={filterChangeHandler} />
            <TableBlock cards={cards} />
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
