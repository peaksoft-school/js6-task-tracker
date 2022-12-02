import { useState } from "react"

const useOpenClose = () => {
   const [isShowing, setIsShowing] = useState(false)

   function toggle() {
      setIsShowing(!isShowing)
   }

   return {
      isShowing,
      toggle,
   }
}

export default useOpenClose
