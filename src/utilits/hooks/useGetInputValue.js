import React from "react"

export const useGetInputValue = () => {
   const [inputValue, setInputValue] = React.useState("")

   const setInputValueHandler = (e) => {
      e.preventDefault()
      setInputValue(e.target.value)
   }

   return { inputValue, setInputValueHandler }
}
