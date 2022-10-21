import React, { useState } from "react"
import styled from "styled-components"
import { SideBarItems, Workspaces } from "../../utilits/constants/Constants"
import SvgGenerator from "../../Components/UI/SvgGenerator"
import IconButton from "../../Components/UI/IconButton"
import arrowDown from "../../assets/icons/arrowDown.svg"
import showSideBarIcon from "../../assets/icons/showSideBar.svg"
import arrowRight from "../../assets/icons/arrowRight.svg"
import CustomIcons from "../../Components/UI/TaskCard/CustomIcons"
import BlueIconWorkspaces from "../../assets/icons/BlueIconWorkspaces.svg"
import SubMenu from "./SubMenu"
import DropDownSideBar from "./DropDownSideBar"

const SideBar = ({ nameWorkspaces }) => {
   const [activeIndex, setActiveIndex] = useState(0)
   const [showSideBar, setSideBar] = useState(false)
   const [DropDown, setDropDown] = useState({
      id: 0,
      stateDropDown: true,
   })
   const [showSubMenu, setShowSubMenu] = useState({})

   const showSubMenuHandler = (item) => {
      return () => {
         setActiveIndex(null)
         setShowSubMenu((prevState) => ({ [item.id]: !prevState[item.id] }))
      }
   }

   const onClickSideBarItem = (index) => {
      setActiveIndex(index)
   }

   const showSideBarHandler = () => {
      setSideBar(!showSideBar)
   }

   const onMouseHandler = (id, state) => {
      setTimeout(() => {
         setDropDown({
            id,
            stateDropDown: state,
         })
      }, 120)
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
                  <SideBarItem stateSideBar={showSideBar} key={item.id}>
                     <SideBarTitleBlock
                        onClick={() => onClickSideBarItem(index)}
                        active={activeIndex === index}
                     >
                        <SvgGenerator
                           id={item.id}
                           activeColor={activeIndex === index}
                        />
                        {showSideBar ? (
                           <Title>
                              <span>{item.title}</span>
                              {item.id === 1 && (
                                 <SvgGenerator
                                    activeColor={activeIndex === index}
                                    id="plus"
                                 />
                              )}
                              {item.id === 1 && (
                                 <SvgGenerator
                                    activeColor={activeIndex === index}
                                    id="arrowDown"
                                 />
                              )}
                              {item.amount && <span>({item.amount})</span>}
                           </Title>
                        ) : (
                           ""
                        )}
                     </SideBarTitleBlock>
                  </SideBarItem>
               )
            })}
            {Workspaces.map((item) => {
               return (
                  <WorkspacesItem
                     stateSideBar={showSideBar}
                     key={item.id}
                     workspacesHover
                  >
                     <SideBarTitleBlock
                        stateSideBar={showSideBar}
                        workspacesHover
                     >
                        <CustomIcons
                           onMouseEnter={() => onMouseHandler(item.id, true)}
                           onMouse={() => onMouseHandler(item.id, false)}
                           src={item.icon}
                        />
                        {showSideBar && (
                           <Title onClick={showSubMenuHandler(item)}>
                              <span>{item.title}</span>

                              <CustomIcons src={item.arrowDown} />
                           </Title>
                        )}
                        {!showSideBar &&
                           DropDown.id === item.id &&
                           DropDown.stateDropDown && (
                              <DropDownSideBar
                                 state={DropDown.stateDropDown}
                                 setStateDropDown={setDropDown}
                                 nameWorkspaces={item.title}
                                 onMouseEnter={() =>
                                    onMouseHandler(item.id, true)
                                 }
                                 onMouseLeave={() =>
                                    onMouseHandler(item.id, false)
                                 }
                              />
                           )}
                     </SideBarTitleBlock>
                     {showSideBar && showSubMenu[item.id] && <SubMenu />}
                  </WorkspacesItem>
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
   width: ${(props) => (props.stateSideBar ? "250px" : "90px")};
   background-color: white;
   height: 800px;
   transition: transform 0.35s ease-in-out;
   ul {
      padding: 0;
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 500px;
      position: relative;
   }
   img {
      width: 25px;
      height: 25px;
   }
`
const HeaderSideBar = styled.div`
   width: 100%;
   height: 40px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   p {
      width: 60px;
      font-size: 18px;
      margin-left: 25px;
      margin-right: 70px;
   }
   img {
      margin-left: 33px;
   }
`
const SideBarItem = styled.li`
   display: flex;
   width: ${(props) => (props.stateSideBar ? "100%" : "100%")};
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
`
const SideBarTitleBlock = styled.div`
   width: 100%;
   padding: 0 0 0 30px;
   margin-left: -8px;
   height: 37px;
   display: flex;
   justify-content: center;
   transition: 0.2s;
   align-items: center;
   padding-right: 25px;
   background-color: ${(props) => props.active && "rgba(58, 104, 131, 0.6)"};
   color: ${(props) => (props.active ? "white" : "black")};
   border-top-right-radius: ${(props) => (props.active ? "20px" : "")};
   border-bottom-right-radius: ${(props) => (props.active ? "20px" : "")};
   svg {
      margin-top: 5px;
   }
   img {
      position: relative;
   }
`
const Title = styled.div`
   width: 160px;
   height: 30px;
   display: flex;
   align-items: center;
   span {
      width: 155px;
   }
`
const ShowMoreText = styled.span`
   display: flex;
   height: 30px;
   align-items: center;
   margin-left: 24px;
   color: #909090;
`
const ShowSideBarButton = styled.img`
   background-color: #f8f8f8;
   padding: 7px;
   border-radius: 8px;
   cursor: pointer;
   margin-left: 20px;
`
const WorkspacesItem = styled.div`
   display: flex;
   flex-wrap: wrap;
   width: 100%;
   justify-content: center;
   cursor: pointer;
   margin-left: -8px;
   padding-right: 9px;
   position: relative;
   &:hover {
      transition: 0.3s;
      background-color: ${(props) =>
         !props.stateSideBar && props.workspacesHover && "#e2e8ea"} !important;
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
   }
   span {
      text-align: start;
      margin-left: 10px;
   }
   img {
      margin-left: 15px;
   }
`
