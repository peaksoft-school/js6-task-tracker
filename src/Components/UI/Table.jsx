import React from "react"
import styled from "styled-components"

const Table = ({ data }) => {
   const columns = [
      { field: "id", header: "№" },
      { field: "Name", header: "Name" },
      { field: "Lead", header: "Lead" },
      { field: "Action", header: "Action" },
   ]
   return (
      <Div>
         <ReTable>
            <thead>
               <tr>
                  {columns.map((head) => (
                     <th>{head.header}</th>
                  ))}
               </tr>
            </thead>
            <tbody>
               {data.map((row) => (
                  <tr>
                     {columns.map((col) => (
                        <td>{row[col.field]}</td>
                     ))}
                  </tr>
               ))}
            </tbody>
         </ReTable>
      </Div>
   )
}
export default Table
const Div = styled.div`
   position: absolute;
   width: 1360px;
   left: 40px;
   top: 84px;
   background: #ffff;
   border-radius: 8px;
   border: 1px solid black;
`
const ReTable = styled.table`
   th {
      position: relative;
      width: 1320px;
      height: 18px;
      padding-bottom: 8px;
      border-bottom: 1px solid #d7d7d7;
   }
   td {
      position: relative;
      width: 1320px;
      height: 54px;
      left: 20px;
   }
`
