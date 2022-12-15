import React from "react"

export const useGetInputValue = () => {
   const [inputValue, setInputValue] = React.useState("")

   const setInputValueHandler = ({ target: { value } }) => {
      setInputValue(value)
   }

   return { inputValue, setInputValueHandler }
}
