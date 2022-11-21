import React from "react"
import dateFormat from "dateformat"
import styled from "styled-components"

const DateAdded = ({ date }) => {
   const formatDate = new Date(date)
   //    const newFormatDate = dateFormat(formatDate, " d at h:MM TT")
   const month = dateFormat(formatDate, "mmm")
   const fullDate = `${month} `
   console.log(fullDate)
   return <StyledDateAdded>DateAdded</StyledDateAdded>
}

export default DateAdded

const StyledDateAdded = styled.p`
   color: #919191;
   font-size: 17px;
   margin: 0;
`
