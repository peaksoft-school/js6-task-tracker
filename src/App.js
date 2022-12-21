import React from "react"
import { ToastContainer } from "react-toastify"
import AppRoutes from "./routes/AppRoutes"
import "react-toastify/dist/ReactToastify.css"
import "./App.css"

function App() {
   return (
      <div className="App">
         <AppRoutes />
         <ToastContainer />
      </div>
   )
}

export default App
