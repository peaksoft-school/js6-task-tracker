import React from "react"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import useOpenClose from "./hooks/useOpenClose"
import AppRoutes from "./routes/AppRoutes"

function App() {
   const { toggle } = useOpenClose()
   return (
      <div onClick={toggle} className="App">
         <AppRoutes />
         <ToastContainer />
      </div>
   )
}

export default App
