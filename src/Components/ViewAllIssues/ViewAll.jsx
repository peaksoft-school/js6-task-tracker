import React from "react"
import styled from "styled-components"
import FilterBlock from "./FilterBlock"
import TableBlock from "./TableBlock"

const ViewAll = () => {
   return (
      <ViewAllStyled>
         <FilterBlock />
         <TableBlock />
      </ViewAllStyled>
   )
}

export default ViewAll

const ViewAllStyled = styled.div`
   margin-top: 80px;
   margin-left: 270px;
`
