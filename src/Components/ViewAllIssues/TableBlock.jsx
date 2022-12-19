import React from "react"
import styled from "styled-components"

const testData = [
   {
      id: 1,
      created: "12.09.22",
      period: "6 days",
      creator: "Kamchy Kuzobaev",
      column: "In progress this task",
      assignee: "avatar",
      labels: "line",
      checklist: "0/0",
      description:
         "Each programme is dedicated to one country. I am fond of foreign languages, English and German, so I watch the programmes about English and German speaking countries with special interest. It is a good chance for me to learn something new about these countries and their citizens. I may see places of historical interest, which I have only read about. I listen to legends, connected with famous people and see the places they were born in.",
   },
   {
      id: 2,
      created: "12.09.22",
      period: "5 days",
      creator: "Almaz Almazov",
      column: "In progress this task",
      assignee: "avatar",
      labels: "line",
      checklist: "0/0",
      description:
         "Each programme is dedicated to one country. I am fond of foreign languages, English and German, so I watch the programmes about English and German speaking countries with special interest. It is a good chance for me to learn something new about these countries and their citizens. I may see places of historical interest, which I have only read about. I listen to legends, connected with famous people and see the places they were born in.",
   },
   {
      id: 3,
      created: "12.09.22",
      period: "3 days",
      creator: "Ali Atahanov",
      column: "In progress this task",
      assignee: "avatar",
      labels: "line",
      checklist: "0/0",
      description:
         "Each programme is dedicated to one country. I am fond of foreign languages, English and German, so I watch the programmes about English and German speaking countries with special interest. It is a good chance for me to learn something new about these countries and their citizens. I may see places of historical interest, which I have only read about. I listen to legends, connected with famous people and see the places they were born in.",
   },
]

const TableBlock = () => {
   return (
      <TableBlockStylded>
         <TableStyled>
            <tr>
               <th>Created</th>
               <th>Period</th>
               <th>Creator</th>
               <th>Column</th>
               <th>Assignee</th>
               <th>Labels</th>
               <th>Checklist</th>
               <th>Description</th>
            </tr>
            <Line />
            {testData.map((el) => {
               return (
                  <tr key={el.id}>
                     <td>{el.created}</td>
                     <td>{el.period}</td>
                     <td>{el.creator}</td>
                     <td>{el.column}</td>
                     <td>{el.assignee}</td>
                     <td>{el.labels}</td>
                     <td>{el.checklist}</td>
                     <DescriptionStyeld>{el.description}</DescriptionStyeld>
                  </tr>
               )
            })}
         </TableStyled>
      </TableBlockStylded>
   )
}

export default TableBlock

const TableBlockStylded = styled.div`
   width: 100%;
   position: relative;
`
const Line = styled.hr`
   position: absolute;
   width: 100%;
   height: 2px;
`
const TableStyled = styled.table`
   th {
      padding: 10px;
   }
   td {
      padding: 10px;
      vertical-align: top;
   }
`
const DescriptionStyeld = styled.td`
   width: 40vw;
`
