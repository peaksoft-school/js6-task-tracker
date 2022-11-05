import styled from "styled-components"
import { useState } from "react"
import ReusableDropDown from "./UI/ReusableDropDown"
import CustomIcons from "./UI/TaskCard/CustomIcons"
import searchIcon from "../assets/svg/SearchIcon.svg"
import MemberItem from "./UI/MemberItem"
import photoAvatar from "../assets/images/avatarPhotoo.jpg"

const Assignee = ({ assigneeMembers }) => {
   const [searchTerm, setSearchTerm] = useState("")

   return (
      <div>
         <ReusableDropDown showState width="310px">
            <ContainerInput>
               <input
                  placeholder="Search"
                  onChange={(e) => setSearchTerm(e.target.value)}
               />

               <CustomIcons
                  top="3px"
                  right="10px"
                  position="absolute"
                  src={searchIcon}
               />
            </ContainerInput>
            <ContainerMembers>
               {assigneeMembers
                  .filter((item) =>
                     item.userName
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                  )
                  .map((item) => {
                     return (
                        <>
                           <MemberItem
                              key={item.id}
                              userName={item.userName}
                              userGmail={item.userEmail}
                              photoUser={photoAvatar}
                           />
                           <input type="checkbox" />
                        </>
                     )
                  })}
            </ContainerMembers>
         </ReusableDropDown>
      </div>
   )
}
export default Assignee

const ContainerInput = styled.div`
   position: relative;
   margin: 20px 20px 5px 20px;
   width: 270px;
   height: 32px;
   border-radius: 8px;
   border: 1px solid #d0d0d0;
   input {
      width: 200px;
      height: 25px;
      outline: none;
      border-radius: 10px;
      border: none;
      font-size: 15px;
      padding-left: 15px;
   }
`
const ContainerMembers = styled.div`
   padding: 0 25px 0 15px;
   display: flex;
   flex-direction: column;
   input {
      width: 4vw;
      height: 3vh;
      position: relative;
      left: -2rem;
      top: -2.8rem;
   }
   div {
      margin-left: 20px;
      p,
      span {
         font-size: 16px;
      }
   }
`
