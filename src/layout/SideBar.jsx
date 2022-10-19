import React, { useState } from "react"
import styled from "styled-components"
import { SideBarItems, Workspaces } from "../utilits/constants/Constants"
import SvgGenerator from "../Components/UI/SvgGenerator"
import IconButton from "../Components/UI/IconButton"
import arrowDown from "../assets/icons/arrowDown.svg"
import showSideBarIcon from "../assets/icons/showSideBar.svg"
import arrowRight from "../assets/icons/arrowRight.svg"
import CustomIcons from "../Components/UI/TaskCard/CustomIcons"
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
                  <SideBarItem stateSideBar={showSideBar} key={item.id}>
                     <SideBarTitleBlock
                        stateSideBar={showSideBar}
                        workspacesHover
                     >
                        <CustomIcons src={item.icon} />
                        {showSideBar ? (
                           <Title>
                              <span>{item.title}</span>

                              <CustomIcons src={item.arrowDown} />
                           </Title>
                        ) : (
                           ""
                        )}
                     </SideBarTitleBlock>
                  </SideBarItem>
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
      padding-left: 20px;
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
      margin-left: 32px;
   }
`

const SideBarItem = styled.li`
   display: flex;
   width: ${(props) => (props.stateSideBar ? "215px" : "55px")};
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
   padding: 0 0 0 20px;
   margin-left: -36px;
   height: 37px;
   display: flex;
   justify-content: center;
   transition: 0.2s;
   align-items: center;
   background-color: ${(props) => props.active && "rgba(58, 104, 131, 0.6)"};
   color: ${(props) => (props.active ? "white" : "black")};
   border-top-right-radius: ${(props) => (props.active ? "20px" : "")};
   border-bottom-right-radius: ${(props) => (props.active ? "20px" : "")};
   svg {
      margin-top: 5px;
   }
   &:hover {
      width: ${(props) =>
         !props.stateSideBar && props.workspacesHover && "140px"};
      background-color: ${(props) =>
         !props.stateSideBar && props.workspacesHover && "#e2e8ea"};
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
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
   margin-left: 3px;
   color: #909090;
`

const ShowSideBarButton = styled.img`
   background-color: #fcf9f9;
   padding: 7px;
   border-radius: 8px;
   cursor: pointer;
   margin-left: 27px;
`
