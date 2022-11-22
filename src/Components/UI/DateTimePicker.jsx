import * as React from "react"
import styled from "styled-components"
import dayjs from "dayjs"
import isBetweenPlugin from "dayjs/plugin/isBetween"
import TextField from "@mui/material/TextField"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker"
import { PickersDay } from "@mui/x-date-pickers/PickersDay"
import FormControl from "@mui/material/FormControl"
import Button from "./Button"

dayjs.extend(isBetweenPlugin)
export default function DateTimePicker({ getDateTimeValue }) {
   const [value, setValue] = React.useState(dayjs(new Date()))
   const [timeValue, setTimeValue] = React.useState("")
   const [dueDate, setDueDate] = React.useState(dayjs(new Date()))
   const [startDate, setStartDate] = React.useState(dayjs(new Date()))
   const [reminder, setRemainder] = React.useState("None")
   const [highlightedDays, setHighlightedDays] = React.useState([])
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
      if (
         value === startDate &&
         newValue.$D > startDate.$D &&
         newValue.$M >= startDate.$M
      ) {
         setValue(newValue)
         setDueDate(newValue)
         setHighlightedDays((state) => [...state, newValue.$D])
         timeValueRef.current.focus()
      } else {
         setValue(newValue)
         setStartDate(newValue)
         setHighlightedDays([newValue.$D])
         dueDateRef.current.focus()
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
               renderDay={(day, _value, DayComponentProps) => {
                  let selectedMuiClass = " "
                  if (highlightedDays.includes(day.$D)) {
                     selectedMuiClass = "Mui-selected"
                  }

                  return (
                     <PickersDay
                        className={selectedMuiClass}
                        {...DayComponentProps}
                     />
                  )
               }}
            />
         </LocalizationProvider>
         <label htmlFor="startDate">Start date</label>
         <input
            ref={startDateRef}
            type="text"
            name="startDate"
            value={startDate.$d.toLocaleDateString()}
            readOnly
         />
         <label htmlFor="dueDate">Due date</label>
         <DueDateBlock>
            <input
               ref={dueDateRef}
               type="text"
               name="dueDate"
               value={dueDate.$d.toLocaleDateString()}
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
               <option value="5">5 min. before</option>
               <option value="15">15 min. before</option>
               <option value="60">1 hour before</option>
            </Select>
         </FormControl>
         <Button
            fullWidth="270px"
            fullHeight="30px"
            onClick={creteTemplateHandler}
         >
            Create a new template
         </Button>
      </DateStyeled>
   )
}
const DateStyeled = styled.div`
   display: flex;
   flex-direction: column;
   width: 285px;
   height: 550px;
   background: white;
   border-radius: 12px;
   padding: 0 7px 5px 5px;
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
   .css-nk89i7-MuiPickersCalendarHeader-root {
      padding-left: 10px;
   }
   .css-sf5t6v-PrivatePickersSlideTransition-root-MuiDayPicker-slideTransition {
      min-height: 190px;
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
   margin: 3px 0 8px 0px;
`
