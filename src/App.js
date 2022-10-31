import React from "react"
import Assignee from "./Components/Assignee"

const assigneeMembers = [
   {
      id: 1,
      userName: "Daniel",
      userEmail: "zadrot105217@gmail.com",
   },
]
function App() {
   return (
      <div className="App">
         <Assignee assigneeMembers={assigneeMembers} />
      </div>
   )
}

export default App
