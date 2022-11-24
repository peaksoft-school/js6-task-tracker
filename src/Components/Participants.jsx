import React, { useState } from "react"
import styled from "styled-components"
import deleteSVG from "../assets/svg/Delete.svg"
import Modal from "./UI/Modal"
import arrow from "../assets/svg/arrow.svg"
import ReusableDropDown from "./UI/ReusableDropDown"

function Participants({ members }) {
   const [isOpen, setIsOpen] = useState(false)
   const [isActive, setIsActive] = useState(false)
   return (
      <Parents>
         <Button>
            <Title>
               <h1>View all issues</h1>
               <select>
                  <option>Role</option>
                  <option>All</option>
                  <option>Admin</option>
                  <option>Member</option>
               </select>
            </Title>

            <button type="button" onClick={() => setIsOpen(true)}>
               Create
            </button>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
               <h1>MNADNODOAD</h1>
            </Modal>
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
                     <div>
                        <li onClick={() => setIsActive(true)}>
                           Member{" "}
                           <span>
                              <img src={arrow} alt="" />
                           </span>
                           <ReusableDropDown
                              showState={isActive}
                              width="165px"
                              height="84px"
                           >
                              fds
                           </ReusableDropDown>
                        </li>
                        <img src={deleteSVG} alt="" />
                     </div>
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
   width: 1146px;
   button {
      margin-left: 700px;
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
   hr {
      position: absolute;
      width: 1146px;
   }
   th {
      font-weight: 600;
      font-size: 14px;
      line-height: 18px;
   }
   td {
      padding-top: 40px;
   }
   th,
   td {
      text-align: start;
      font-size: 16px;
      line-height: 20px;
      color: #000000;
      :first-child {
         width: 600px;
      }
      :last-child {
         text-align: end;
      }
   }
   li {
      list-style: none;
      border: none;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      cursor: pointer;
   }
   img {
      cursor: pointer;
   }
   div {
      display: flex;
      justify-content: space-around;
   }
`
