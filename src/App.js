import React, { useState } from "react"
import CheckBox from "./Components/UI/CheckBox"

function App() {
   const [checked, setCheked] = useState(true)

   const handleChange = (event) => {
      setCheked(event.target.checked)
   }
   return (
      <div>
         <CheckBox checked={checked} onChange={handleChange} />
      </div>
   )
}

export default App
