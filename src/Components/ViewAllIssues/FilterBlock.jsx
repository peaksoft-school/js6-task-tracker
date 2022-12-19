import React from "react"
import styled from "styled-components"
import dayjs from "dayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"

import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import TextField from "@mui/material/TextField"
import FormControl from "@mui/material/FormControl"
import Box from "@mui/material/Box"
import InputLabel from "@mui/material/InputLabel"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"

const FilterBlock = () => {
   const [value, setValue] = React.useState(dayjs("2022-12-07"))
   const [labels, setLabels] = React.useState("")

   const handleChangeLabels = (event) => {
      setLabels(event.target.value)
   }
   return (
      <FilterBlockStyled>
         <h3>View all issues</h3>
         <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StyledDatePickerFrom
               views={["year", "month", "day"]}
               value={value}
               onChange={(newValue) => {
                  setValue(newValue)
               }}
               renderInput={(params) => <TextField {...params} />}
            />
            <StyledDatePickerTo
               views={["year", "month", "day"]}
               value={value}
               onChange={(newValue) => {
                  setValue(newValue)
               }}
               renderInput={(params) => <TextField {...params} />}
            />
         </LocalizationProvider>
         <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
               <InputLabel id="demo-simple-select-label">All labels</InputLabel>
               <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={labels}
                  label="All labels"
                  onChange={handleChangeLabels}
               >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
               </Select>
            </FormControl>
         </Box>
         <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
               <InputLabel id="demo-simple-select-label">All labels</InputLabel>
               <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={labels}
                  label="All labels"
                  onChange={handleChangeLabels}
               >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
               </Select>
            </FormControl>
         </Box>
      </FilterBlockStyled>
   )
}

export default FilterBlock

const FilterBlockStyled = styled.div`
   width: 1146px;
   display: flex;
   justify-content: space-around;
`
const StyledDatePickerFrom = styled(DatePicker)`
   .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input {
      width: 85px;
   }
`
const StyledDatePickerTo = styled(DatePicker)`
   .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input {
      width: 85px;
   }
`
