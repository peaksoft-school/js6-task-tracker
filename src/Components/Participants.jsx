import styled from "styled-components"
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import deleteSVG from "../assets/svg/Delete.svg"
import Modal from "./UI/Modal"
import { members } from "../utilits/constants/Constants"
import { axiosInstance } from "../api/axiosInstance"


function Participants() {
   const [isOpen, setIsOpen] = useState(false)
   const [membersArray, setMembersArray] = useState(members)
   const [user, setUser] = useState([])
   const { showSideBar } = useSelector((state) => state.showSideBar)
   const { workspaceId } = useParams()
   const getUserHandler = async () => {
      try {
         const { data } = await axiosInstance.get(
            `/api/participant/workspace-participants/${workspaceId}`
         )
         return setUser(data)
      } catch (error) {
         return console.log(error)
      }
   }

   useEffect(() => {
      getUserHandler()
   }, [])

   const deleteItemHanlder = (id) => {
      const newArray = membersArray.filter((item) => item.id !== id)
      setMembersArray(newArray)
   }

   return (
      <Parents showSideBar={showSideBar}>
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
         <br />
         <Total>
            <p>Total: {user.length > 0 && <span>{user.length}</span>}</p>
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

            {user.map((item, index) => {
               return (
                  <ParticipantItem background={index % 2 !== 0}>
                     <tr>
                        <td>{item.name}</td>
                        <td>{item.Email}</td>
                        <td>
                           <div>
                              <li>{item.role}</li>
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
   padding: 22px 16px;
   width: ${(props) => (props.showSideBar ? "80%" : "90%")}!important;
   transition: all 0.35s ease-out;
   border: 2px solid red;
`
const Title = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
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
   padding: 8px 0;
   margin-top: -30px;
   p {
      display: flex;
      gap: 8px;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      color: #919191;
      text-align: center;
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
   margin-top: 22px;
   hr {
      position: absolute;
      border-bottom: none;
      border-left: none;
      border-right: none;
      width: 1146px;
   }
   th {
      font-weight: 600;
      font-size: 14px;
      line-height: 18px;
      padding-right: 22px;
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
