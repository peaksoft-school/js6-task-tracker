/* eslint-disable no-unused-vars */
import styled from "styled-components"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import deleteSVG from "../assets/svg/Delete.svg"
import Modal from "./UI/Modal"
import { axiosInstance } from "../api/axiosInstance"
import DisplayFlex from "../layout/DisplayFlex"
import { useToggle } from "../utilits/hooks/useToggle"
import ContainerButtons from "./UI/ContainerButtons"
import Input from "./UI/Input"
import RadioButton from "./UI/RadioButton"
import {
   errorToastifyAction,
   loadingToastifyAction,
   successToastifyAction,
   warningToastifyAction,
} from "../store/toastifySlice"

function Participants({ getCountParticipants }) {
   const [user, setUser] = useState([])
   getCountParticipants(user.length)
   const [filteredUsers, setFilteredUsers] = useState(null)
   const [deleteId, setDeleteId] = useState()
   const [value, setValue] = useState({})
   const { isActive, setActive } = useToggle()
   const { showSideBar } = useSelector((state) => state.showSideBar)
   const dispatch = useDispatch()
   const { workspaceId } = useParams()

   const getParticipantsWorkspace = async () => {
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
      dispatch(loadingToastifyAction("...Loading"))
      try {
         await axiosInstance.delete(
            `/api/participant/workspace/${userId}/${workspaceId}`
         )
         getParticipantsWorkspace()
         setActive("nothing")
         dispatch(warningToastifyAction("Participants deleted"))
         return setUser(user)
      } catch (error) {
         return dispatch(errorToastifyAction("Error,something went wrong"))
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
   const inviteNewParticipants = async () => {
      dispatch(loadingToastifyAction("...Loading"))
      try {
         const response = await axiosInstance.post(
            "/api/participant/invite-workspace",
            {
               email: value.email,
               role: value.role,
               link: "192.168.1.210:3000/signIn",
               workspaceOrBoardId: workspaceId,
            }
         )
         setActive("nothing")
         return dispatch(successToastifyAction("Invitation sent by mail"))
      } catch (error) {
         return dispatch(errorToastifyAction("Error,something went wrong"))
      }
   }
   // UseEffect
   useEffect(() => {
      getParticipantsWorkspace()
   }, [])

   const userList = React.useMemo(() => {
      return filteredUsers || user
   }, [filteredUsers, user])

   return (
      <DisplayFlex width="100%" JK="flex-end" margin="88px 0 0 0 ">
         <Parents showSideBar={showSideBar}>
            <Block>
               <Title>
                  <h1>View all issues</h1>
                  <select onChange={(e) => handleFilterUsers(e.target.value)}>
                     <option value="ALL">All</option>
                     <option value="ADMIN">Admin</option>
                     <option value="USER">User</option>
                  </select>
               </Title>

               <button
                  type="button"
                  onClick={() => setActive("openCreatModal")}
               >
                  Invite
               </button>
               <Modal
                  isOpen={isActive === "openCreatModal"}
                  onClose={() => setActive("nothing")}
               >
                  <h3 style={{ textAlign: "center" }}>
                     Invite a new participants
                  </h3>

                  <Input
                     label="example@gmail.com"
                     style={{ margin: "20px 0 0 0" }}
                     onChange={(e) =>
                        setValue({ ...value, email: e.target.value })
                     }
                     autoFocus
                  />
                  <RadioButton
                     onChange={(e) =>
                        setValue({ ...value, role: e.target.value })
                     }
                     name="role"
                  />
                  <ContainerButtons
                     clickGrayButton={() => setActive("nothing")}
                     clickBlueButton={() => inviteNewParticipants()}
                     titleBlueButton="Invite"
                     titleGrayButton="Cancel"
                  />
               </Modal>
            </Block>
            <Total>
               <p>Total: {user.length > 0 && <span>{user.length}</span>}</p>
            </Total>
            <Hr />
            <Table>
               <thead>
                  <tr>
                     <th>Name</th>
                     <th>Email</th>
                     <th className="role">Role</th>
                  </tr>
               </thead>

               {userList.map((values, index) => {
                  const { firstName, email, role, id } = values
                  return (
                     <ParticipantItem key={id} background={index % 2 !== 0}>
                        <tr>
                           <td>{firstName}</td>
                           <td>{email}</td>
                           <td>
                              <div>
                                 <li>{role}</li>
                                 <img
                                    src={deleteSVG}
                                    alt=""
                                    onClick={() => {
                                       setDeleteId(id)
                                       setActive("modalDelete")
                                    }}
                                 />
                              </div>
                           </td>
                        </tr>
                     </ParticipantItem>
                  )
               })}
            </Table>
            <Modal
               fullWidth="250px"
               onClose={() => setActive("nothing")}
               isOpen={isActive === "modalDelete"}
            >
               <p
                  style={{
                     textAlign: "center",
                     fontSize: "1.2rem",
                     margin: "20px 0 20px 0",
                  }}
               >
                  Delete participant?
               </p>
               <ContainerButtons
                  titleBlueButton="Delete"
                  clickBlueButton={() => deleteParticipants(deleteId)}
                  titleGrayButton="Cancel"
                  clickGrayButton={() => setActive("nothing")}
                  paddingButton="0 20px 0 20px"
               />
            </Modal>
         </Parents>
      </DisplayFlex>
   )
}

export default Participants

const Parents = styled.div`
   width: ${(props) => (props.showSideBar ? "79vw" : "89vw")}!important;
   transition: all 0.35s ease-out;
   padding: 0 10px 0 0;
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
const Block = styled.div`
   width: 100%;
   position: relative;
   display: flex;
   justify-content: space-between;
   align-items: center;
   button {
      width: 130px;
      height: 40px;
      position: absolute;
      top: 16px;
      right: 16px;
      background: #0079bf;
      border-radius: 24px;
      font-size: 1.1rem;
      line-height: 18px;
      letter-spacing: 0.02em;
      color: #ffffff;
      border: none;
      cursor: pointer;
   }
`
const ParticipantItem = styled.tbody`
   background-color: ${(props) => props.background && "#F0F2F3;"};
   &.css-i9fmh8-MuiBackdrop-root-MuiModal-backdrop {
      background-color: white !important;
   }
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
   .role {
      display: flex;
      position: relative;
      margin-left: 20%;
   }
   th {
      border: 0px solid transparent;
      font-weight: 600;
      font-size: 14px;
      line-height: 18px;
      padding-left: 16px;
   }
   td {
      padding: 22px 0 22px 0;
      padding-left: 16px;
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
