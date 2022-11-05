import React from "react"
import { Toastify } from "./Components/UI/Toastify"
import "react-toastify/dist/ReactToastify.css"
import AppRoutes from "./routes/AppRoutes"

function App() {
   return (
      <div className="App">
         <AppRoutes />
         <Toastify />
      </div>
   )
}

export default App
