import React from "react"
import dateFormat from "dateformat"
import styled from "styled-components"

const DateAdded = ({ date }) => {
   const formatDate = new Date(date)
   const monthDay = dateFormat(formatDate, "mmm d")
   const time = dateFormat(formatDate, "HH:MM TT")
   const fullDate = `${monthDay} at ${time}`
   return <StyledDateAdded>{fullDate}</StyledDateAdded>
}

export default DateAdded

const StyledDateAdded = styled.p`
   color: #919191;
   font-size: 17px;
   margin: 0;
`
