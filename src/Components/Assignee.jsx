import React from "react"
import styled from "styled-components"
import ReusableDropDown from "./UI/ReusableDropDown"
import CustomIcons from "./UI/TaskCard/CustomIcons"
import searchIcon from "../assets/svg/SearchIcon.svg"
import MemberItem from "./UI/MemberItem"
import userAvatar from "../assets/images/avatarPhotoo.jpg"

const Assignee = ({ assigneeMembers }) => {
   return (
      <ReusableDropDown width="300px">
         <ContainerInput>
            <input placeholder="Search" />
            <CustomIcons
               top="3px"
               right="10px"
               position="absolute"
               src={searchIcon}
            />
         </ContainerInput>
         <ContainerMembers>
            {assigneeMembers.map((item) => {
               return (
                  <MemberItem
                     key={item.id}
                     userName={item.userName}
                     userEmail={item.userEmail}
                     photoUser={userAvatar}
                  />
               )
            })}
         </ContainerMembers>
      </ReusableDropDown>
   )
}
export default Assignee
const ContainerInput = styled.div`
   position: relative;
   margin: 20px 20px 5px 20px;
   width: 250px;
   height: 30px;
   border-radius: 10px;
   border: 1px solid gray;
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
   padding: 0 20px 0 20px;
   div {
      margin-left: 20px;
      p,
      span {
         font-size: 16px;
      }
   }
`
