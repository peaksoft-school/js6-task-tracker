import React from "react"

export const useTemporaryToggle = () => {
   const [show, setOpen] = React.useState(null)

   const toggle = (idOrIndex) => {
      setOpen(idOrIndex)
   }
   return { show, toggle }
}
