import styled from "styled-components"
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import deleteSVG from "../assets/svg/Delete.svg"
import Modal from "./UI/Modal"
import { axiosInstance } from "../api/axiosInstance"
import DisplayFlex from "../layout/DisplayFlex"

function Participants() {
   const [isOpen, setIsOpen] = useState(false)
   const [user, setUser] = useState([])
   const { showSideBar } = useSelector((state) => state.showSideBar)
   const [filteredUsers, setFilteredUsers] = useState(null)
   const { workspaceId } = useParams()
   // Post
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

   // Delete
   const deleteParticipants = async (userId) => {
      try {
         await axiosInstance.delete(
            `/api/participant/workspace/${userId}/${workspaceId}`
         )
         return setUser(user)
      } catch (error) {
         return console.log(error)
      }
   }

   // FilteredUsert
   const handleFilterUsers = (req) => {
      if (req === "ALL") {
         setFilteredUsers(() => {
            return null
         })
      } else {
         setFilteredUsers(
            user.filter((item) => {
               return item.role === req
            })
         )
      }
   }
   // UseEffect
   useEffect(() => {
      getUserHandler()
   }, [])

   const userList = React.useMemo(() => {
      return filteredUsers || user
   }, [filteredUsers, user])

   return (
      <DisplayFlex
         width="100%"
         JK="flex-end"
         padding="12px 16px 0 0"
         margin="80px 24px 0 24px"
      >
         <Parents showSideBar={showSideBar}>
            <Button>
               <Title>
                  <h1>View all issues</h1>
                  <select onChange={(e) => handleFilterUsers(e.target.value)}>
                     <option value="ALL">All</option>
                     <option value="ADMIN">Admin</option>
                     <option value="USER">User</option>
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
               <p>Total: {user.length > 0 && <span>{user.length}</span>}</p>
            </Total>
            <Hr />
            <Table>
               <thead>
                  <tr>
                     <th>Name</th>
                     <th>Email</th>
                     <th>Role</th>
                  </tr>
               </thead>

               {userList.map((values) => {
                  const { firstName, email, role, id } = values
                  return (
                     <ParticipantItem background={values % 2 !== 0}>
                        <tr>
                           <td>{firstName}</td>
                           <td>{email}</td>
                           <td>
                              <div>
                                 <li>{role}</li>
                                 <img
                                    src={deleteSVG}
                                    alt=""
                                    onClick={() => deleteParticipants(id)}
                                 />
                              </div>
                           </td>
                        </tr>
                     </ParticipantItem>
                  )
               })}
            </Table>
         </Parents>
      </DisplayFlex>
   )
}

export default Participants

const Parents = styled.div`
   width: ${(props) => (props.showSideBar ? "78vw" : "88vw")}!important;
   margin: ${(props) => (props.showSideBar ? "0" : "0 0 0 110px")}!important;
   transition: all 0.35s ease-out;
`
const Title = styled.div`
   width: 289px;
   height: 36px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin: 17px 0 0 16px;
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
      outline: none;
   }
   option {
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      color: #111111;
   }
`
const Hr = styled.hr`
   position: relative;
   top: 50px;
   border-color: #d7d7d7;
   border-top: none;
   border-left: none;
   border-right: none;
`
const Total = styled.div`
   margin: 2px 0 0 16px;

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
   width: 100%;
   position: relative;
   display: flex;
   justify-content: space-between;
   align-items: center;
   button {
      width: 77px;
      height: 34px;
      position: absolute;
      top: 16px;
      right: 16px;
      background: #0079bf;
      border-radius: 24px;
      font-size: 14px;
      line-height: 18px;
      letter-spacing: 0.02em;
      color: #ffffff;
      border: none;
      cursor: pointer;
   }
`
const ParticipantItem = styled.tbody`
   background-color: ${(props) => props.background && "white"};
`
const Table = styled.table`
   width: 100%;
   border-collapse: collapse;
   margin-top: 22px;
   .border {
      width: ${(props) => (props.showSideBar ? "1246px" : "1356px")}!important;
      position: absolute;
      border-bottom: none;
      border-left: none;
      border-right: none;
   }
   th {
      border: 0px solid transparent;
      font-weight: 600;
      font-size: 14px;
      line-height: 18px;
      padding-right: 22px;
   }
   td {
      padding: 22px 0 22px 0;
   }
   th,
   td {
      text-align: start;
      font-size: 16px;
      line-height: 20px;
      color: #000000;

      :first-child {
         width: 650px;
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
