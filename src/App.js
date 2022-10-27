import React from "react"
import { useSelector } from "react-redux"
import AppRoutes from "./routes/AppRoutes"

function App() {
   const state = useSelector((state) => state)
   console.log(state)
   return (
      <div className="App">
         <AppRoutes />
      </div>
   )
}

export default App
