import React, { useState } from "react"
import styled from "styled-components"
import { SideBarItems, Workspaces } from "../utilits/constants/Constants"
import IconButton from "./UI/IconButton"
import CustomIcons from "./UI/TaskCard/CustomIcons"
import arrowDown from "../assets/icons/arrowDown.svg"

const SideBar = ({ nameWorkspaces }) => {
   const [activeIndex, setActiveIndex] = useState(0)

   const onClickSideBarItem = (index) => {
      setActiveIndex(index)
   }

   return (
      <StyledContainerSideBar>
         <h3>{nameWorkspaces}LMS</h3>
         <ul>
            {SideBarItems.map((item, index) => {
               return (
                  <SideBarItems
                     onClick={() => onClickSideBarItem(index)}
                     key={item.title}
                     active={activeIndex === index}
                  >
                     <IconButton iconSvg={item.icon} />
                     <span> {item.title}</span>
                     {item.plusIcon && <IconButton iconSvg={item.plusIcon} />}
                     {item.arrowDown && <IconButton iconSvg={item.arrowDown} />}
                     {item.amount && <span>({item.amount})</span>}
                  </SideBarItems>
               )
            })}
            {Workspaces.map((item) => {
               return (
                  <li key={item.icon}>
                     <CustomIcons src={item.icon} /> <span> {item.title} </span>
                     <IconButton iconSvg={item.arrowDown} />
                  </li>
               )
            })}
            <span>
               Show more <IconButton iconSvg={arrowDown} />
            </span>
         </ul>
      </StyledContainerSideBar>
   )
}

export default SideBar

const StyledContainerSideBar = styled.div`
   display: flex;
   flex-direction: column;
   width: 250px;
   background-color: white;
   border: 1px solid black;
   height: 800px;
   ul {
      display: flex;
      flex-direction: column;
      width: 180px;
      height: 500px;
      img {
         width: 25px;
         height: 25px;
         margin-right: 5px;
      }
   }
   li {
      display: flex;
      width: 200px;
      text-align: center;
      list-style: none;
      align-items: center;
      margin: 5px 0 5px 0;
      background-color: ${(props) => props.active && "gray"};
      cursor: pointer;
      &:hover {
         background-color: black;
      }
      span {
         margin: 0 0 0 9px;
         width: 150px;
         text-align: start;
      }
      &:first-child {
         border-top: 1px solid #e0e0e0;
         border-bottom: 1px solid #e0e0e0;
         padding: 10px 0 10px 0;
      }
      &:nth-child(2) {
         border-top-color: 1px solid #e0e0e0;
         padding-top: 13px;
      }
      &:nth-child(4) {
         border-bottom: 1px solid #e0e0e0;
         padding-bottom: 13px;
      }
      &:last-child {
         margin: 15px 0 8px 0;
      }
   }
`
