import React from "react"
import { ToastContainer } from "react-toastify"
import AppRoutes from "./routes/AppRoutes"
import "react-toastify/dist/ReactToastify.css"

function App() {
   // salam
   return (
      <div className="App">
         <AppRoutes />
         <ToastContainer />
      </div>
   )
}

export default App
