import React from "react"
import CreateBoard from "./Components/CreateBoard"

function App() {
   const getData = (data) => {
      console.log(data)
   }
   return (
      <div className="App">
         <CreateBoard getData={getData} />
      </div>
   )
}

export default App
