import React from "react"
import styled from "styled-components"

function Table({ data, columns }) {
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
                     {columns.map((col) =>
                        col?.action ? (
                           col?.action(row)
                        ) : (
                           <td>{row[col.field]}</td>
                        )
                     )}
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
`
const ReTable = styled.table`
   th {
      height: 18px;
      padding-bottom: 8px;
      border-bottom: 1px solid #d7d7d7;
   }
   td {
      position: relative;
      left: 130px;
      top: 40px;
      width: 1320px;
      height: 54px;
   }
`
