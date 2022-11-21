import React, { useState } from "react"
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
import searchIcon from "../../assets/svg/SearchIcon.svg"
import MemberItem from "../UI/MemberItem"
import avatar from "../../assets/svg/userAvatar.svg"
import Button from "../UI/Button"
import CloseButton from "../UI/CloseButton"
import useOpenClose from "../../hooks/useOpenClose"

const SecondBlock = () => {
   const [activeDropDown, setActiveDropDown] = useState(0)
   const { isShowing, toggle } = useOpenClose()

   const buttonClick = (id) => {
      setActiveDropDown(id)
   }

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
                        fullWidth={isShowing && "200px"}
                     >
                        {isShowing && item.title}
                     </GrayButton>

                     {activeDropDown === 1 && (
                        <DropDown
                           padding="0 10px 10px 20px"
                           borderRadius="10px"
                           width="310px"
                           showState={activeDropDown === item.id}
                        >
                           <ContainerText>
                              <span>Member</span>
                              <CloseButton
                                 onClick={() => setActiveDropDown(0)}
                                 src={closeSvg}
                                 alt="close"
                              />
                           </ContainerText>

                           <ContainerInput>
                              <Input placeholder="Search" />
                              <CloseButton
                                 onClick={() => setActiveDropDown(0)}
                                 src={searchIcon}
                                 alt="search"
                              />
                           </ContainerInput>
                           <ContainerMemberItem>
                              <MemberItem photoUser={avatar} />
                              <MemberItem photoUser={avatar} />
                              <MemberItem photoUser={avatar} />
                           </ContainerMemberItem>
                        </DropDown>
                     )}
                     {activeDropDown === 3 && (
                        <DropDown
                           top={isShowing ? "97" : "50px"}
                           width="350px"
                           borderRadius="7px"
                           showState={activeDropDown === item.id}
                        >
                           <ContainerText>
                              <span>Label</span>
                              <CloseButton
                                 onClick={() => setActiveDropDown(0)}
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
                     {activeDropDown === 5 && (
                        <DropDown
                           padding="2px 15px 15px 15px"
                           borderRadius="10px"
                           top={isShowing ? "140px" : "50px"}
                           height="150px"
                           width="280px"
                           showState={activeDropDown === item.id}
                        >
                           <ContainerText>
                              <span>Add checklist</span>
                              <CloseButton
                                 onClick={() => setActiveDropDown(0)}
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
               fullWidth={isShowing && "10rem"}
            >
               {isShowing && "Delete"}
            </GrayButton>
            <GrayButton iconButton={fileIcon} fullWidth={isShowing && "10rem"}>
               {isShowing && "Archived"}
            </GrayButton>
         </ContainerButtons>
         <CommentSection
            setActiveDropDown={setActiveDropDown}
            sizeComment={isShowing}
            sizeCommentHandler={toggle}
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
      position: absolute;
      top: 12px;
      right: 10px;
   }
`
const ContainerMemberItem = styled.div`
   max-height: 400px;
   overflow: scroll;
`
