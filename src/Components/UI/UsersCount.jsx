import React, { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import styled from "styled-components"
import MemberItem from "./MemberItem"
import ReusableDropDown from "./ReusableDropDown"
import { axiosInstance } from "../../api/axiosInstance"
import { useToggle } from "../../utilits/hooks/useToggle"
import useTwoActive from "../../utilits/hooks/useTwoActive"
import InviteParticipant from "./InviteParticipant"
import invitePlus from "../../assets/svg/InvitePlus.svg"
import Modal from "./Modal"
import Invite from "./Invite"

function UserCount({ width, height, top, left }) {
   const [state, setState] = useState([])
   const { boardId } = useParams()
   const [membersData, setMembersData] = useState([])
   const { isActive, setActive } = useToggle()
   const { setTwoActive, firstActive, secondActive } = useTwoActive()

   const getUserByIdQuery = async () => {
      try {
         const { data } = await axiosInstance.get(
            `/api/participant/board-participants/${boardId}`
         )
         return setMembersData(data)
      } catch (error) {
         return console.log(error.message)
      }
   }

   useEffect(() => {
      getUserByIdQuery()
   }, [])

   const dataFunction = (users) => {
      setState(users)
   }
   return (
      <Container top={top} left={left} width={width} height={height}>
         <UserBox>
            {membersData.map((item) => (
               <img
                  key={item.id}
                  src={item.image}
                  alt="tima"
                  onClick={() => {
                     setActive("openProfileUser")
                     dataFunction(item)
                  }}
               />
            ))}
            <div
               className="length"
               onClick={() => setTwoActive("openListUser", "nothing")}
            >
               +{membersData.length}
            </div>
            <span onClick={() => setActive("openInviteUser")}>
               Invite <img src={invitePlus} alt="" />
            </span>
         </UserBox>
         <Modal
            isOpen={isActive === "openInviteUser"}
            onClose={() => setTwoActive("openListUser", "nothing")}
            width="425px"
            height="202px"
         >
            <Invite
               closeState="nothing"
               backState="nothing"
               canselInvite="nothing"
               setTwoActive={setTwoActive}
               label="Email@gmail.com"
            />
         </Modal>
         <ReusableDropDown showState={firstActive === "openListUser"}>
            <InviteParticipant
               firstActive={firstActive}
               secondActive={secondActive}
               setTwoActive={setTwoActive}
               data={membersData}
            />
         </ReusableDropDown>
         <ReusableDropDown
            showState={isActive === "openProfileUser"}
            width="320px"
         >
            <UserInfo>
               <MemberItem
                  key={state.id}
                  role={state.role}
                  image={state.image}
                  firstname={state.firstName}
                  email={state.email}
               />
               <MoreInput role={state.role}>
                  {state.role === "ADMIN" ? (
                     <div>
                        <Link to="profile">Edit your profile</Link>
                     </div>
                  ) : (
                     <div>
                        <Link to="profile">View profile</Link>
                        <Link to="/">Remove from board</Link>
                        <Link to="/">Change availability</Link>
                     </div>
                  )}
               </MoreInput>
            </UserInfo>
         </ReusableDropDown>
      </Container>
   )
}

export default UserCount
const Container = styled.div`
   position: absolute;
   top: ${(props) => props.top};
   left: ${(props) => props.left};
   width: ${(props) => props.width};
   max-height: ${(props) => props.height};
   list-style: none;
   h2 {
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      color: #919191;
   }
`
const UserInfo = styled.div`
   margin: 16px 20px;
`
const UserBox = styled.div`
   width: 234px;
   height: 34px;
   display: flex;
   span {
      display: flex;
      margin-left: 6px;
      gap: 4px;
      align-items: center;
      color: #0079bf;
      font-weight: 900;
      font-size: 14px;
      line-height: 18px;
      img {
         width: 16px;
         height: 16px;
         border: none;
      }
   }
   img {
      margin-right: -9px;
      width: 34px;
      height: 34px;
      border-radius: 50%;
      border: 2px solid #ffffff;
   }
   .length {
      display: inline-block;
      width: 34px;
      height: 34px;
      border-radius: 50%;
      border: 2px solid #ffffff;
      color: #ffffff;
      background: #86a1b1;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
   }
`
const MoreInput = styled.div`
   display: flex;
   a {
      padding-top: 8px;
      text-decoration: none;
      display: block;
      color: #111;

      :visited {
         color: #111;
      }
   }
`
