import React from "react"
import ProgressBar from "./Components/UI/ProgressBar"

function App() {
   return (
      <div className="App">
         <ProgressBar widthProgressPercent="99" tasks="10" completedTasks="3" />
      </div>
   )
}

export default App
