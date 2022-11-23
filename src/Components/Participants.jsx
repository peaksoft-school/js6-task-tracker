import React from "react"
import styled from "styled-components"
import deleteSVG from "../assets/svg/Delete.svg"

function Participants({ members }) {
   return (
      <Parents>
         <Button>
            <Title>
               <h1>View all issues</h1>
               <select>
                  <option>Role</option>
               </select>
            </Title>

            <button type="button">Create</button>
         </Button>
         <Total>
            <p>
               Total: <span>254</span>
            </p>
         </Total>
         <Table>
            <tr>
               <th>Name</th>
               <th>Email</th>
               <th>Role</th>
            </tr>
            <hr />

            {members.map((item) => (
               <tr>
                  <td>{item.name}</td>
                  <td>{item.Email}</td>
                  <td>
                     <select>
                        <option value={item.role.member}>Member</option>
                        <option value={item.role.admin}>Admin</option>
                     </select>
                     <img src={deleteSVG} alt="" />
                  </td>
               </tr>
            ))}
         </Table>
      </Parents>
   )
}

export default Participants

const Parents = styled.div`
   position: absolute;
   left: 300px;
`
const Title = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   padding: 9px 14px 9px 16px;
   gap: 52px;
   h1 {
      font-size: 20px;
      line-height: 25px;
   }
   select {
      width: 125px;
      height: 36px;
      border: 1px solid #d0d0d0;
      border-radius: 8px;
      display: flex;
      padding: 8px;
   }
   option {
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      color: #111111;
   }
`
const Total = styled.div`
   display: flex;
   flex-direction: start;
   justify-content: start;
   padding: 0px 18px;
   margin-top: -30px;
   gap: 8px;
   p {
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      color: #919191;
   }
   span {
      background: #b2b2b2;
      border-radius: 16px;
      width: 37px;
      height: 18px;
      color: white;
   }
`
const Button = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 1150px;
   button {
      width: 77px;
      height: 34px;
      background: #0079bf;
      border-radius: 24px;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      letter-spacing: 0.02em;
      color: #ffffff;
      border: none;
      cursor: pointer;
   }
`
const Table = styled.table`
   width: 1146px;
   th {
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
   }
   th,
   td {
      text-align: start;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      :first-child {
         width: 600px;
      }
      :last-child {
         text-align: end;
      }
   }
   select {
      border: none;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      cursor: pointer;
   }
`
