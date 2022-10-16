import * as React from "react"
import styleds from "styled-components"
import dayjs from "dayjs"
import isBetweenPlugin from "dayjs/plugin/isBetween"
import { styled } from "@mui/material/styles"
import TextField from "@mui/material/TextField"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker"
import { PickersDay } from "@mui/x-date-pickers/PickersDay"
import { TimePicker } from "@mui/x-date-pickers/TimePicker"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import Button from "./Button"

dayjs.extend(isBetweenPlugin)

const CustomPickersDay = styled(PickersDay, {
   shouldForwardProp: (prop) =>
      prop !== "dayIsBetween" && prop !== "isFirstDay" && prop !== "isLastDay",
})(({ theme, dayIsBetween, isFirstDay, isLastDay }) => ({
   ...(dayIsBetween && {
      borderRadius: 0,
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      "&:hover, &:focus": {
         backgroundColor: theme.palette.primary.dark,
      },
   }),
   ...(isFirstDay && {
      borderTopLeftRadius: "50%",
      borderBottomLeftRadius: "50%",
   }),
   ...(isLastDay && {
      borderTopRightRadius: "50%",
      borderBottomRightRadius: "50%",
   }),
}))

export default function DateTimePicker({ getDateTimeValue }) {
   const [value, setValue] = React.useState(dayjs("2022-04-07"))
   const [timeValue, setTimeValue] = React.useState(null)
   const [dueDate, setDueDate] = React.useState(dayjs("2022-04-07"))
   const [startDate, setStartDate] = React.useState(dayjs("2022-04-07"))
   const [reminder, setRemainder] = React.useState("None")

   const renderWeekPickerDay = (date, selectedDates, pickersDayProps) => {
      if (!value) {
         return <PickersDay {...pickersDayProps} />
      }

      const start = value.startOf("week")
      const end = value.endOf("week")

      const dayIsBetween = date.isBetween(start, end, null, "[]")
      const isFirstDay = date.isSame(start, "day")
      const isLastDay = date.isSame(end, "day")

      return (
         <CustomPickersDay
            {...pickersDayProps}
            disableMargin
            dayIsBetween={dayIsBetween}
            isFirstDay={isFirstDay}
            isLastDay={isLastDay}
         />
      )
   }

   const dueDatefocusHandler = () => {
      setDueDate(value)
   }
   const startDateFocusHandler = () => {
      setStartDate(value)
   }
   const reminderChangeHandler = (event) => {
      setRemainder(event.target.value)
   }
   const creteTemplateHandler = () => {
      const dateData = {
         startDate,
         dueDate,
         time: timeValue,
      }
      getDateTimeValue(dateData)
   }

   return (
      <DateStyeled>
         <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticDatePicker
               displayStaticWrapperAs="desktop"
               label="Week picker"
               value={value}
               onChange={(newValue) => {
                  setValue(newValue)
               }}
               renderDay={renderWeekPickerDay}
               renderInput={(params) => <TextField {...params} />}
               inputFormat="'Week of' MMM d"
            />
         </LocalizationProvider>
         <label htmlFor="startDate">Start date</label>
         <input
            type="text"
            name="startDate"
            value={startDate.$d.toLocaleDateString()}
            onFocus={startDateFocusHandler}
            readOnly
         />
         <label htmlFor="dueDate">Due date</label>
         <input
            type="text"
            name="dueDate"
            value={dueDate.$d.toLocaleDateString()}
            onFocus={dueDatefocusHandler}
            readOnly
         />
         <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
               label="Basic example"
               value={timeValue}
               onChange={(newValue) => {
                  setTimeValue(newValue)
               }}
               renderInput={(params) => <TextField {...params} />}
            />
         </LocalizationProvider>
         <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
               Set due date remainder
            </InputLabel>
            <Select
               labelId="demo-simple-select-label"
               id="demo-simple-select"
               value={reminder}
               label="Reminder"
               onChange={reminderChangeHandler}
            >
               <MenuItem value={10}>5 min. before</MenuItem>
               <MenuItem value={20}>15 min. before</MenuItem>
               <MenuItem value={30}>30 min. before</MenuItem>
               <MenuItem value={40}>1 hour before</MenuItem>
            </Select>
         </FormControl>
         <Button fullWidth="244px" onClick={creteTemplateHandler}>
            Create a new template
         </Button>
      </DateStyeled>
   )
}

const DateStyeled = styleds.div`
   width: 284px;
`
