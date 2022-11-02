import styled from "styled-components"
import ReusableDropDown from "./UI/ReusableDropDown"
import CustomIcons from "./UI/TaskCard/CustomIcons"
import searchIcon from "../assets/svg/SearchIcon.svg"
import MemberItem from "./UI/MemberItem"
import photoAvatar from "../assets/images/avatarPhotoo.jpg"

const Assignee = ({ assigneeMembers }) => {
   return (
      <ReusableDropDown showState width="300px">
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
            <input type="Checkbox" />
            {assigneeMembers.map((item) => {
               return (
                  <MemberItem
                     key={item.id}
                     userName={item.userName}
                     userEmail={item.userEmail}
                     photoUser={photoAvatar}
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
   display: flex;
   input {
      width: 1.6rem;
      height: 1.6rem;
      margin-top: 1rem;
   }
   div {
      margin-left: 20px;
      p,
      span {
         font-size: 16px;
      }
   }
`
