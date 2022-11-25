import styled from "styled-components"
import ReusableDropDown from "./UI/ReusableDropDown"
import CustomIcons from "./UI/TaskCard/CustomIcons"
import searchIcon from "../assets/svg/SearchIcon.svg"
import MemberItem from "./UI/MemberItem"
import photoAvatar from "../assets/images/avatarPhotoo.jpg"

const Assignee = ({ assigneeMembers, onSearch, searchValue }) => {
   return (
      <div>
         <ReusableDropDown showState width="310px">
            <ContainerInput>
               <input
                  placeholder="Search"
                  value={searchValue}
                  onChange={onSearch}
               />
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
      height: 2vh;
      position: relative;
      left: -2rem;
      top: -2.6rem;
   }
   div {
      margin-left: 20px;
      p,
      span {
         font-size: 16px;
      }
   }
`
