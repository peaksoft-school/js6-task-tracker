import React from "react"

export const useValidation = () => {
   const [isValid, setIsValid] = React.useState(false)

   const validHandler = (valid) => {
      setIsValid(valid)
   }

   return { isValid, validHandler }
}
