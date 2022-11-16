import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { tableData } from "../utilits/constants/Constants"

const TableWorkspaces = () => {
   return (
      <Table>
         <thead>
            <tr>
               <th>№</th>
               <th>Name</th>
               <th>Lead</th>
               <th>Action</th>
            </tr>
         </thead>

         {tableData.map((item, index) => {
            return (
               <thead key={item.id}>
                  <WorkspacesItem itemIndex={index % 2 !== 0}>
                     <td>{index}</td>
                     <td>
                        <Link to="/">{item.Name}</Link>
                     </td>
                     <td>{item.leadName}</td>
                     <td>
                        <img src={item.icon} alt="star" />
                     </td>
                  </WorkspacesItem>
               </thead>
            )
         })}
      </Table>
   )
}

export default TableWorkspaces

const Table = styled.table`
   border-collapse: collapse;
   width: 100%;
   th {
      text-align: start;
      height: 30px;
      font-weight: 500;
      border-bottom: 2px solid #d7d7d7;
      &:first-child {
         padding-left: 20px;
      }
   }
   th:last-child,
   td:last-child {
      text-align: end;
      padding-right: 30px;
   }
   td:nth-child(2) {
      width: 50vw;
   }
   td:first-child {
      padding: 0 0 0 20px;
   }
   a {
      color: #0073de;
   }
`
const WorkspacesItem = styled.tr`
   height: 50px;
   background-color: ${({ itemIndex }) => itemIndex && "#F3F3F3;"};
`
