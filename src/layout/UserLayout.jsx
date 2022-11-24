import React from "react"
import { useDispatch } from "react-redux"
import Header from "../Components/Header"
import Participants from "../Components/Participants"
import SideBar from "./SideBar/SideBar"
import { logout } from "../store/AuthSlice"

const members = [
   {
      id: 1,
      name: "Salamat Salamat",
      Email: "salamat@gmail.com",
      role: {
         member: "Member",
         admin: "Admin",
      },
   },
   {
      id: 2,
      name: "Salamat Salamat",
      Email: "salamat@gmail.com",
      role: {
         member: "Member",
         admin: "Admin",
      },
   },
]

const UserLayout = () => {
   const dispatch = useDispatch()
   const logoutHandler = () => {
      dispatch(logout())
   }
   return (
      <>
         <Header />
         <Participants members={members} />
         <SideBar />
         <div>
            <button type="submit" onClick={logoutHandler}>
               LOGOUT
            </button>
         </div>
      </>
   )
}

export default UserLayout
