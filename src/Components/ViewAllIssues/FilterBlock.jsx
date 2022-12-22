import React from "react"
import styled from "styled-components"
import dayjs from "dayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import TextField from "@mui/material/TextField"
import { Checkbox } from "@mui/material"
import FormControlLabel from "@mui/material/FormControlLabel"

const today = new Date()
const startDate = dayjs(`${today.getFullYear()}-01-01`)
const endDate = dayjs(`${today.getFullYear()}-12-31`)

const FilterBlock = ({ filterChangeHandler }) => {
   const [fromDate, setFromDate] = React.useState(startDate)
   const [toDate, setToDate] = React.useState(endDate)

   const dateFromChangeHandler = (newValue) => {
      setFromDate(newValue)
      filterChangeHandler(newValue)
   }
   return (
      <FilterBlockStyled>
         <h3>View all issues</h3>
         <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StyledDatePickerFrom
               views={["year", "month", "day"]}
               value={fromDate}
               onChange={(newValue) => {
                  dateFromChangeHandler(newValue)
               }}
               renderInput={(params) => <TextField {...params} />}
            />
            <StyledDatePickerTo
               views={["year", "month", "day"]}
               value={toDate}
               onChange={(newValue) => {
                  setToDate(newValue)
               }}
               renderInput={(params) => <TextField {...params} />}
            />
         </LocalizationProvider>
         <FormControlLabel control={<Checkbox />} label="Checklist" />
      </FilterBlockStyled>
   )
}

export default FilterBlock

const FilterBlockStyled = styled.div`
   width: 100%;
   display: flex;
   justify-content: space-around;
`
const StyledDatePickerFrom = styled(DatePicker)`
   .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input {
      width: 90px;
   }
`
const StyledDatePickerTo = styled(DatePicker)`
   .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input {
      width: 90px;
   }
`
