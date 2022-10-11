import Table from "./Components/UI/Table"
import { tableData } from "./Components/UI/data"

const columns = [
   { field: "id", header: "№" },
   { field: "Name", header: "Name" },
   { header: "Column", action: (row) => <td> {row.Name}</td> },

   {
      header: "Lead",
      action: (row) => (
         <div style={{ alignItems: "center", display: "flex", paddingTop: 60 }}>
            <img
               style={{ width: 35, height: 25, borderRadius: 50 }}
               src={row.Lead}
               alt="test"
            />
            <span>Almaz Almazov</span>
         </div>
      ),
   },
   {
      header: "Action",
      action: (row) => (
         <td>
            <img src={row.icon} alt="test" />
         </td>
      ),
   },
]

function App() {
   return (
      <div>
         <Table data={tableData} columns={columns} />
      </div>
   )
}

export default App
