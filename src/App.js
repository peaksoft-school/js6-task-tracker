import Table from "./Components/UI/Table"
import { tableData } from "./Components/UI/data"

function App() {
   const columns = [
      { field: "id", header: "№" },
      { field: "Name", header: "Name" },
      { field: "Lead", header: "Lead" },
      { field: "Action", header: "Action" },
   ]
   return (
      <div>
         <Table data={tableData} columns={columns} />
      </div>
   )
}

export default App
