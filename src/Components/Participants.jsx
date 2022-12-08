import React, { useState } from "react"
import styled from "styled-components"
import deleteSVG from "../assets/svg/Delete.svg"
import Modal from "./UI/Modal"
import { useActiveIndex } from "../hooks/useActiveIndex"
import { members } from "../utilits/constants/Constants"

function Participants({ total }) {
   const [isOpen, setIsOpen] = useState(false)
   const { activeIndex, getActiveIndexHandler } = useActiveIndex()
   const [membersArray, setMembersArray] = useState(members)
   const deleteItemHanlder = (id) => {
      const newArray = membersArray.filter((item) => item.id !== id)
      setMembersArray(newArray)
   }

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
               Total: <span>{total}82</span>
            </p>
         </Total>
         <Table>
            <thead>
               <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
               </tr>
            </thead>
            <hr />

            {membersArray.map((item, index) => {
               return (
                  <ParticipantItem background={index % 2 !== 0}>
                     <tr>
                        <td>{item.name}</td>
                        <td>{item.Email}</td>
                        <td>
                           <div>
                              <li
                                 onClick={() =>
                                    getActiveIndexHandler(
                                       item.id !== activeIndex ? item.id : 0
                                    )
                                 }
                              >
                                 {item.role}
                              </li>
                              <img
                                 src={deleteSVG}
                                 alt=""
                                 onClick={() => deleteItemHanlder(item.id)}
                              />
                           </div>
                        </td>
                     </tr>
                  </ParticipantItem>
               )
            })}
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
const ParticipantItem = styled.tbody`
   border: 1px solid black;
   background-color: ${(props) => props.background && "#E6E6E6"};
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
      padding-top: 30px;
      justify-content: center;
      padding-bottom: 20px;
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
      padding-left: 5px;
      cursor: pointer;
   }
   div {
      display: flex;
      justify-content: space-around;
   }
`
