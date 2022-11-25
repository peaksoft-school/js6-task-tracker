import React from "react"

export const useActiveIndex = () => {
   const [activeIndex, setActiveIndex] = React.useState(0)

   const getActiveIndexHandler = (index) => {
      setActiveIndex(index)
   }
   return { activeIndex, getActiveIndexHandler }
}
