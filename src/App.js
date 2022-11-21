import React from "react"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import AppRoutes from "./routes/AppRoutes"

function App() {
   return (
      <div className="App">
         <AppRoutes />
         <ToastContainer />
      </div>
   )
}

export default App
