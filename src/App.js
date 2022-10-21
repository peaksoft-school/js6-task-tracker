import React from "react"
import MemberBoard from "./Components/MemberBoard"
import Ava from "./assets/svg/Frame 15 (1).svg"

function App() {
   return (
      <div className="App">
         <MemberBoard titleBoard="LMS" discription="System" boardIcon={Ava} />
      </div>
   )
}

export default App
