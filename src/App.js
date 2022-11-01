import React from "react"
import Assignee from "./Components/UI/Assignee"

function App() {
   const assigneeMembers = [
      {
         id: 1,
         userName: "Daniel",
         userEmail: "zadrot105217@gmail.com",
      },
   ]
   return (
      <div className="App">
         <Assignee assigneeMembers={assigneeMembers} />
      </div>
   )
}

export default App
