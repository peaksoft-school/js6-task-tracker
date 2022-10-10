import Table from "./Components/UI/Table"
import { tableData } from "./Components/UI/data"

const columns = [
   { field: "id", header: "№" },
   { field: "Name", header: "Name" },
   { header: "Column", action: (row) => <td> {row.Name}</td> },

   {
      header: "Lead",
      action: (row) => (
         <div style={{ display: "flex", alignItems: "center" }}>
            <img
               style={{ borderRadius: 50, width: 30, height: 30 }}
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
