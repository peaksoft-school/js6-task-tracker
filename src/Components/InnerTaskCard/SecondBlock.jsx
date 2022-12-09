/* eslint-disable no-undef */
import React from "react"
import styled from "styled-components"
import avatarPhoto from "../../assets/images/avatarPhotoo.jpg"
import CommentSection from "../UI/CommentSection"
import deleteIcon from "../../assets/icons/delete.svg"
import fileIcon from "../../assets/icons/file.svg"
import { GrayButtonsInnerTaskCard } from "../../utilits/constants/Constants"
import GrayButton from "../UI/GrayButtons"
import DropDown from "../UI/ReusableDropDown"
import closeSvg from "../../assets/icons/close.svg"
import Label from "./Label"
import Input from "../UI/Input"
import { useToggle } from "../../utilits/hooks/useToggle"
import searchIcon from "../../assets/svg/SearchIcon.svg"
import MemberItem from "../UI/MemberItem"
import avatar from "../../assets/svg/userAvatar.svg"
import Button from "../UI/Button"
import CloseButton from "../UI/CloseButton"
import DateTimePicker from "../UI/DateTimePicker"
import CustomIcons from "../UI/TaskCard/CustomIcons"

const SecondBlock = () => {
   const { isActive, setActive } = useToggle()

   return (
      <StyledSecondBlock>
         <p>Add</p>
         <ContainerButtons>
            {GrayButtonsInnerTaskCard.map((item) => {
               return (
                  <>
                     <GrayButton
                        onClick={() => buttonClick(item.id)}
                        iconButton={item.icon}
                        fullWidth={isActive === "showButton" && "200px"}
                     >
                        {isActive === "showButton" && item.title}
                     </GrayButton>

                     {isActive === "addMember" && (
                        <DropDown
                           padding="0 10px 10px 20px"
                           borderRadius="10px"
                           width="310px"
                           showState={isActive === "addMember"}
                        >
                           <ContainerText>
                              <span>Member</span>
                              <CloseButton
                                 onClick={() => setActive("addMember")}
                                 src={closeSvg}
                                 alt="close"
                              />
                           </ContainerText>

                           <ContainerInput>
                              <Input placeholder="Search" />{" "}
                              <CustomIcons
                                 click={() => setActive(0)}
                                 src={searchIcon}
                                 position="absolute"
                                 alt="search"
                                 top="8px"
                                 right="10px"
                              />
                           </ContainerInput>
                           <ContainerMemberItem>
                              <MemberItem photoUser={avatar} />
                              <MemberItem photoUser={avatar} />
                              <MemberItem photoUser={avatar} />
                           </ContainerMemberItem>
                        </DropDown>
                     )}
                     {isActive === "addEstimation" && (
                        <DropDown
                           showState={isActive === "addEstimation"}
                           top="65px"
                           left="105px"
                           padding="6px 0 0 20px"
                        >
                           <ContainerText>
                              <span>Estimation</span>
                              <CloseButton
                                 onClick={() => setActive("addEstimation")}
                                 src={closeSvg}
                                 alt="close"
                              />
                           </ContainerText>

                           <DateTimePicker />
                        </DropDown>
                     )}
                     {isActive === "addLabel" && (
                        <DropDown
                           top={isActive === "showButton" ? "97" : "50px"}
                           width="350px"
                           borderRadius="7px"
                           showState={isActive === "addLabel"}
                        >
                           <ContainerText>
                              <span>Label</span>
                              <CloseButton
                                 onClick={() => setActive("addLabel")}
                                 src={closeSvg}
                                 alt="close"
                              />
                           </ContainerText>

                           <Label color="orange" />
                           <Label color="red" />
                           <Label color="blue" />
                           <Label color="green" />
                        </DropDown>
                     )}
                     {isActive === "addCheckList" && (
                        <DropDown
                           padding="2px 15px 15px 15px"
                           borderRadius="10px"
                           top={isActive === "showButton" ? "140px" : "50px"}
                           height="150px"
                           width="280px"
                           showState={isActive === "addCheckList"}
                        >
                           <ContainerText>
                              <span>Add checklist</span>
                              <CloseButton
                                 onClick={() => setActive("addCheckList")}
                                 src={closeSvg}
                                 alt="close"
                              />
                           </ContainerText>
                           <Input
                              style={{ marginBottom: "10px" }}
                              placeholder="Title"
                           />
                           <Button fullWidth="250px" fullHeight="33px">
                              Add checklist
                           </Button>
                        </DropDown>
                     )}
                  </>
               )
            })}
         </ContainerButtons>

         <p>Actions</p>
         <ContainerButtons>
            <GrayButton
               iconButton={deleteIcon}
               fullWidth={isActive === "showButton" && "10rem"}
            >
               {isActive === "showButton" && "Delete"}
            </GrayButton>
            <GrayButton iconButton={fileIcon} fullWidth={isActive && "10rem"}>
               {isActive === "showButton" && "Archived"}
            </GrayButton>
         </ContainerButtons>
         <CommentSection
            sizeComment={isActive === "showButton"}
            setActive={setActive}
            userAvatar={avatarPhoto}
         />
      </StyledSecondBlock>
   )
}

export default SecondBlock

const ContainerButtons = styled.div`
   display: flex;
   flex-wrap: wrap;
   gap: 0.7rem;
   margin: 1rem 0 1rem 0;
`
const StyledSecondBlock = styled.div`
   width: 80vw;
   height: 90vh;
   position: relative;
   margin-right: 15px;
`
const ContainerText = styled.div`
   height: 40px;
   width: 100%;
   display: flex;
   align-items: center;
   position: relative;
   span {
      width: 93%;
      text-align: center;
   }
`
const ContainerInput = styled.div`
   width: 270px;
   margin: 5px 0 5px 0;
   position: relative;
   input {
      border-radius: 10px;
   }
   img {
      width: 20px;
      height: 20px;
   }
`
const ContainerMemberItem = styled.div`
   max-height: 400px;
   overflow: scroll;
`
