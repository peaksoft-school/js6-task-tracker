import React, { useState } from "react"
import styled from "styled-components"
import searchIcon from "../../assets/svg/SearchIcon.svg"
import closeDrop from "../../assets/icons/close.svg"
import Input from "./Input"
import Invite from "./Invite"
import Modal from "./Modal"

function InviteParticipant({ data, setTwoActive, secondActive, firstActive }) {
   const [value, setValue] = useState("")

   const filteredUsers = data.filter((user) => {
      return (
         user.email.toLowerCase().includes(value.toLowerCase()) ||
         user.firstName.toLowerCase().includes(value.toLowerCase())
      )
   })
   return (
      <div>
         <InviteBlock>
            <TitleDrop>
               <p>Participant</p>
               <CloseDropButton
                  onClick={() => setTwoActive("nothing")}
                  src={closeDrop}
               />
            </TitleDrop>

            <ContainerInput>
               <Input
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="example@gmail.com"
               />
               <SearchIcon src={searchIcon} />
               <ListInvite>
                  {filteredUsers.map((e) => {
                     return (
                        <li key={e.id}>
                           <p>{e.firstName}</p>
                           <span>{e.role}</span>
                        </li>
                     )
                  })}
               </ListInvite>
               <span
                  className="inviteText"
                  onClick={() =>
                     setTwoActive(firstActive, "addNewParticipants", "nothing")
                  }
               >
                  + Invite a new participant
               </span>
            </ContainerInput>
            <Modal
               isOpen={secondActive === "addNewParticipants"}
               onClose={() => setTwoActive("openListUser", "nothing")}
               width="425px"
               height="202px"
            >
               <Invite
                  closeInvite="nothing"
                  setTwoActive={setTwoActive}
                  label="Email@gmail.com"
                  backForList="nothing"
               />
            </Modal>
         </InviteBlock>
      </div>
   )
}
export default InviteParticipant

const InviteBlock = styled.div`
   margin: 18px 20px;
   position: relative;
   p {
      margin: 0;
      font-style: normal;
      line-height: 20px;
      font-weight: 400;
      font-size: 16px;
      color: #000000;
   }
   .inviteText {
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      cursor: pointer;
      color: #727272;
   }
`
const ContainerInput = styled.div`
   position: relative;
   width: 385px;
   input {
      padding-left: 40px;
   }
`
const SearchIcon = styled.img`
   position: absolute;
   top: 12px;
   left: 19px;
`
const CloseDropButton = styled.img`
   margin-right: 6px;
   cursor: pointer;
`
const TitleDrop = styled.div`
   display: flex;
   margin-top: 18px;
   margin-bottom: 11px;
   margin-left: 150px;
   justify-content: space-between;
   p {
      text-align: center;
   }
`
const ListInvite = styled.div`
   overflow: auto;
   margin-top: 8px;
   width: 100%;
   max-height: 142px;
   list-style: none;
   display: flex;
   flex-direction: column;
   gap: 16px;

   &::-webkit-scrollbar {
      display: none;
   }
   li {
      font-weight: 400;
      font-style: normal;
      font-size: 16px;
      line-height: 20px;
      color: #000000;
      display: flex;
      justify-content: space-between;
      span {
         font-weight: 400;
         font-size: 16px;
         line-height: 20px;
         cursor: pointer;
         color: #787878;
      }
   }
   img {
      margin-left: 4px;
   }
`
