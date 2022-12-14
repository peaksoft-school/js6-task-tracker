import React from "react"

export const useTemporaryToggle = () => {
   const [show, setOpen] = React.useState(false)

   const toggle = () => {
      setOpen(!show)
   }
   return { show, toggle }
}
