import * as React from "react"
import styled from "styled-components"
import dayjs from "dayjs"
import isBetweenPlugin from "dayjs/plugin/isBetween"
import TextField from "@mui/material/TextField"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker"
import FormControl from "@mui/material/FormControl"
import Button from "./Button"

dayjs.extend(isBetweenPlugin)
export default function DateTimePicker({ getDateTimeValue }) {
   const [value, setValue] = React.useState(dayjs("2022-04-07"))
   const [timeValue, setTimeValue] = React.useState("")
   const [dueDate, setDueDate] = React.useState(dayjs("2022-04-07"))
   const [startDate, setStartDate] = React.useState(dayjs("2022-04-08"))
   const [reminder, setRemainder] = React.useState("None")
   const startDateRef = React.useRef()
   const dueDateRef = React.useRef()
   const timeValueRef = React.useRef()

   const reminderChangeHandler = (event) => {
      setRemainder(event.target.value)
   }
   const creteTemplateHandler = () => {
      const dateData = {
         startDate: startDate.$d.toLocaleDateString(),
         dueDate: dueDate.$d.toLocaleDateString(),
         time: timeValue.target.value,
         reminder,
      }
      getDateTimeValue(dateData)
   }
   const calendarChangeHandler = (newValue) => {
      if (value !== startDate) {
         setValue(newValue)
         setStartDate(newValue)
         dueDateRef.current.focus()
      } else {
         setValue(newValue)
         setDueDate(newValue)
         timeValueRef.current.focus()
      }
   }

   React.useEffect(() => {
      startDateRef.current.focus()
   }, [])
   return (
      <DateStyeled>
         <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Calendar
               displayStaticWrapperAs="desktop"
               label="Week picker"
               value={value}
               onChange={(newValue) => calendarChangeHandler(newValue)}
               renderInput={(params) => <TextField {...params} />}
               inputFormat="‘Week of’ MMM d"
            />
         </LocalizationProvider>
         <label htmlFor="startDate">Start date</label>
         <input
            ref={startDateRef}
            type="text"
            name="startDate"
            value={startDate.$d.toLocaleDateString()}
            // onFocus={startDateFocusHandler}
            readOnly
         />
         <label htmlFor="dueDate">Due date</label>
         <DueDateBlock>
            <input
               ref={dueDateRef}
               type="text"
               name="dueDate"
               value={dueDate.$d.toLocaleDateString()}
               // onFocus={dueDatefocusHandler}
               readOnly
            />
            <Time
               ref={timeValueRef}
               type="time"
               onChange={(newValue) => {
                  setTimeValue(newValue)
               }}
            />
         </DueDateBlock>
         <FormControl fullWidth>
            <label htmlFor="demo-simple-select-label">
               Set due date remainder
            </label>
            <Select value={reminder} onChange={reminderChangeHandler}>
               <option value="None">None</option>
               <option value="5">5 min.before</option>
               <option value="15">15 min.before</option>
               <option value="60">1 hour before</option>
            </Select>
         </FormControl>
         <Button fullWidth="270px" onClick={creteTemplateHandler}>
            Create a new template
         </Button>
      </DateStyeled>
   )
}
const DateStyeled = styled.div`
   display: flex;
   flex-direction: column;
   width: 285px;
   height: 606px;
   background: white;
   border-radius: 12px;
   padding: 10px 7px 5px 13px;
   label {
      font-weight: 400;
      font-size: 16px;
      line-height: 18px;
      color: #919191;
      margin: 8px 0 5px 0;
   }
   input {
      width: 100px;
      height: 33px;
      border-radius: 6px;
      border: 1px solid #919191;
      text-align: center;
      font-weight: 600;
      font-size: 16px;
      font-family: "Nunito", sans-serif;
      outline: none;
      &:focus {
         border: 2px solid #1976d2;
      }
   }
`
const Calendar = styled(StaticDatePicker)`
   .css-169iwlq-MuiCalendarPicker-root {
      width: 270px;
      margin: 0;
   }
`
const DueDateBlock = styled.div`
   width: 240px;
   display: flex;
   height: 40px;
   align-items: center;
   input {
      width: 100px;
   }
`
const Time = styled.input`
   margin-left: 30px;
`
const Select = styled.select`
   width: 270px;
   height: 40px;
   border-radius: 10px;
   font-size: 17px;
   border: 2px solid #919191;
   margin: 3px 0 18px 0px;
`
