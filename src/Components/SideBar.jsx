import React, { useState } from "react"
import styled from "styled-components"
import { SideBarItems, Workspaces } from "../utilits/constants/Constants"
import IconButton from "./UI/IconButton"
import arrowDown from "../assets/icons/arrowDown.svg"
import showSideBarIcon from "../assets/icons/showSideBar.svg"
import arrowRight from "../assets/icons/arrowRight.svg"
import CustomIcons from "./UI/TaskCard/CustomIcons"
import BlueIconWorkspaces from "../assets/icons/BlueIconWorkspaces.svg"

const SideBar = ({ nameWorkspaces }) => {
   const [activeIndex, setActiveIndex] = useState(0)
   const [showSideBar, setSideBar] = useState(true)

   const onClickSideBarItem = (index) => {
      setActiveIndex(index)
   }

   const showSideBarHandler = () => {
      setSideBar(!showSideBar)
   }

   return (
      <StyledContainerSideBar stateSideBar={showSideBar}>
         <HeaderSideBar>
            {showSideBar ? (
               <>
                  <IconButton iconSvg={arrowRight} />
                  <p>{nameWorkspaces}LMS</p>
               </>
            ) : (
               <CustomIcons src={BlueIconWorkspaces} />
            )}
            <ShowSideBarButton
               onClick={showSideBarHandler}
               src={showSideBarIcon}
               alt="button"
            />
         </HeaderSideBar>

         <ul>
            {SideBarItems.map((item, index) => {
               return (
                  <li key={item.id}>
                     <SideBarItem
                        onClick={() => onClickSideBarItem(index)}
                        active={activeIndex === index}
                     >
                        <CustomIcons src={item.icon} />
                        {showSideBar ? (
                           <Title>
                              <span>{item.title}</span>
                              {item.plusIcon && (
                                 <CustomIcons src={item.plusIcon} />
                              )}
                              {item.arrowDown && (
                                 <CustomIcons src={item.arrowDown} />
                              )}
                              {item.amount && <span>({item.amount})</span>}
                           </Title>
                        ) : (
                           ""
                        )}
                     </SideBarItem>
                  </li>
               )
            })}
            {Workspaces.map((item) => {
               return (
                  <li key={item.id}>
                     <SideBarItem>
                        <CustomIcons src={item.icon} />
                        {showSideBar ? (
                           <Title>
                              <span>{item.title}</span>

                              <CustomIcons src={item.arrowDown} />
                           </Title>
                        ) : (
                           ""
                        )}
                     </SideBarItem>
                  </li>
               )
            })}
            <ShowMoreText>
               <IconButton iconSvg={arrowDown} />
               {showSideBar && "Show More"}
            </ShowMoreText>
         </ul>
      </StyledContainerSideBar>
   )
}

export default SideBar

const StyledContainerSideBar = styled.div`
   display: flex;
   flex-direction: column;
   width: ${(props) => (props.stateSideBar ? "190px" : "60px")};
   transition: 0.1s;
   background-color: white;
   height: 800px;
   p {
      width: 130px;
      font-size: 18px;
      margin-left: 15px;
   }
   ul {
      padding: 0;
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 500px;
      position: relative;
      padding-left: 20px;
      img {
         width: 25px;
         height: 25px;
      }
   }
   li {
      display: flex;
      width: 100%;
      justify-content: center;
      text-align: center;
      list-style: none;
      align-items: center;
      cursor: pointer;
      span {
         text-align: start;
         margin-left: 10px;
      }
      &:first-child {
         border-top: 2px solid #e0e0e0;
         padding-top: 15px;
      }
      &:nth-child(2) {
         margin-top: 20px;
         border-top: 2px solid #e0e0e0;
         padding-top: 15px;
      }
      &:nth-child(4) {
         margin-bottom: 20px;
         border-bottom: 2px solid #e0e0e0;
         padding-bottom: 15px;
      }
      &:last-child {
         margin: 15px 0 8px 0;
      }
   }
`
const HeaderSideBar = styled.div`
   width: 100%;
   height: 40px;
   display: flex;
   align-items: center;
   img {
      width: 25px;
      height: 25px;
      margin-left: 32px;
      &:nth-child(2) {
         width: 26px;
         height: 26px;
      }
   }
`

const SideBarItem = styled.div`
   width: 100%;
   padding: 0 0 0 20px;
   margin-left: -36px;
   height: 37px;
   display: flex;
   justify-content: center;
   align-items: center;
   transition: 0.2s;
   background-color: ${(props) => props.active && "rgba(58, 104, 131, 0.6)"};
   color: ${(props) => (props.active ? "white" : "black")};
   border-top-right-radius: ${(props) => (props.active ? "20px" : "")};
   border-bottom-right-radius: ${(props) => (props.active ? "20px" : "")};
`
const Title = styled.div`
   width: 140px;
   height: 30px;
   display: flex;
   align-items: center;
   justify-content: space-between;
`
const ShowMoreText = styled.span`
   display: flex;
   height: 30px;
   align-items: center;
   margin-left: 5px;
   color: #909090;
`

const ShowSideBarButton = styled.img`
   background-color: #e7e3e3;
   padding: 7px;
   border-radius: 8px;
   cursor: pointer;
   margin-left: 27px;
`
