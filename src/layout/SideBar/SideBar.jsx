import React, { useState, useEffect } from "react"
import { useParams, useLocation, useNavigate, Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import styled from "styled-components"
import { SideBarItems } from "../../utilits/constants/Constants"
import SvgGenerator from "../../Components/UI/SvgGenerator"
import IconButton from "../../Components/UI/IconButton"
import showSideBarIcon from "../../assets/icons/showSideBar.svg"
import arrowRight from "../../assets/icons/arrowRight.svg"
import CustomIcons from "../../Components/UI/TaskCard/CustomIcons"
import BlueIconWorkspaces from "../../assets/icons/BlueIconWorkspaces.svg"
import SubMenu from "./SubMenu"
import DropDownSideBar from "./DropDownSideBar"
import SubMenuBoards from "./SubMenuBoards"
import { showSideBarAction } from "../../store/sideBarSlice"
import { clearBoardById, getBoards } from "../../store/boardSlice"
import arrowDown from "../../assets/icons/arrowDown.svg"
import arrowUp from "../../assets/icons/ArrowUp.svg"
import Modal from "../../Components/UI/Modal"
import Settings from "./Settings"

const SideBar = () => {
   const { workspaceId, boardId } = useParams()
   const { pathname } = useLocation()
   const { showSideBar } = useSelector((state) => state.showSideBar)
   const { workspaces } = useSelector((state) => state.workspaces)
   const [showModal, setShowModal] = useState(false)
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const [activeSideBar, setActiveSideBar] = useState("boards")
   const [showSubMenu, setShowSubMenu] = useState({})
   const [showSubMenuBoards, setShowSubMenuBoards] = useState({})
   const [DropDown, setDropDown] = useState({
      id: 0,
      stateDropDown: false,
      isMenuHovered: false,
   })
   useEffect(() => {
      dispatch(getBoards(workspaceId))
   }, [])

   const goBackHandle = () => {
      if (pathname === `/admin/workspaces/${workspaceId}/boards`)
         navigate("/admin/allWorkspaces")
      else if (
         pathname === `/admin/workspaces/${workspaceId}/boards/${boardId}`
      )
         navigate(`/admin/workspaces/${workspaceId}/boards`)
      dispatch(clearBoardById())
   }
   const showSubMenuHandler = (item) => {
      return () => {
         setShowSubMenuBoards({})
         setShowSubMenu((prevState) => ({ [item.id]: !prevState[item.id] }))
      }
   }
   const showSubMenuBoardsHandler = (item) => {
      return () => {
         setShowSubMenu({})
         setShowSubMenuBoards((prevState) => ({
            [item.id]: !prevState[item.id],
         }))
      }
   }
   const onClickSideBarItem = (path) => {
      setActiveSideBar(path)
      setShowSubMenu({})
   }
   const showSideBarHandler = () => {
      dispatch(showSideBarAction())
   }
   const onMouseOverHandler = (id) => {
      if (showSideBar) {
         return
      }
      setDropDown({
         id,
         stateDropDown: true,
         isMenuHovered: true,
      })
   }
   const onMouseLeaveFormMenuHandler = (id) => {
      setDropDown({
         id,
         stateDropDown: false,
         isMenuHovered: false,
      })
   }
   const onMouseLeaveFromContainerHandler = (id) => {
      setDropDown((prevState) => {
         if (prevState.isMenuHovered) {
            return {
               id,
               stateDropDown: true,
            }
         }
         return {
            id,
            stateDropDown: false,
         }
      })
   }
   const renderHeaderSideBar = () =>
      showSideBar ? (
         <IconButton onClick={goBackHandle} iconSvg={arrowRight} />
      ) : (
         <CustomIcons src={BlueIconWorkspaces} />
      )
   const renderSVGs = (item) =>
      item.id === 1 && (
         <SvgGenerator
            click={showSubMenuBoardsHandler(item)}
            activeColor={activeSideBar === item.path ? "true" : "false"}
            id={showSubMenuBoards[1] ? "arrowUp" : "arrowDown"}
         />
      )
   const renderSideBar = (item) => {
      if (!showSideBar && DropDown.id === item.id && DropDown.stateDropDown) {
         return (
            <DropDownSideBar
               state={DropDown.stateDropDown}
               setStateDropDown={setDropDown}
               nameWorkspaces={item.name}
               onMouseLeave={() => onMouseLeaveFromContainerHandler(item.id)}
            />
         )
      }

      return null
   }
   const placeOfWorkSpace = workspaces.filter(
      (item) => item.id === +workspaceId
   )

   return (
      <StyledContainerSideBar stateSideBar={showSideBar}>
         <HeaderSideBar>
            {renderHeaderSideBar()}
            <p>{showSideBar && placeOfWorkSpace[0]?.name}</p>
            <ShowSideBarButton
               showSideBar={showSideBar}
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
                        onClick={() => onClickSideBarItem(item.path)}
                        active={activeSideBar === item.path ? "true" : "false"}
                     >
                        <ContainerNavItem
                           active={
                              activeSideBar === item.path ? "true" : "false"
                           }
                           to={item.path}
                        >
                           <SvgGenerator
                              id={item.id}
                              activeColor={
                                 activeSideBar === item.path ? "true" : "false"
                              }
                           />
                           {showSideBar ? (
                              <>
                                 <span>{item.title}</span>
                                 {item.amount && <span>{item.amount})</span>}
                              </>
                           ) : null}
                        </ContainerNavItem>
                        {showSideBar ? renderSVGs(item, index) : null}
                     </SideBarTitleBlock>

                     {activeSideBar === item.path &&
                        showSideBar &&
                        showSubMenuBoards[item.id] && <SubMenuBoards />}
                  </SideBarItem>
               )
            })}
            <ContainerNavItem onClick={() => setShowModal(true)}>
               <SvgGenerator id={5} />
               {showSideBar && <span>Settings</span>}
            </ContainerNavItem>
            <Modal onClose={() => setShowModal(false)} isOpen={showModal}>
               <Settings
                  nameWorkspaces={placeOfWorkSpace[0]?.name}
                  closeModal={() => setShowModal(false)}
               />
            </Modal>
            {/* <Line top="5px" showSideBar={showSideBar} />
            <Line top="62px" showSideBar={showSideBar} />
            <Line top="200px" showSideBar={showSideBar} /> */}
            <ContainerNavItem>
               <SvgGenerator id={6} />
               {showSideBar && <span>Workspaces</span>}
            </ContainerNavItem>
            <ContainerWorkspaces>
               {workspaces.map((item) => {
                  return (
                     <WorkspacesItem
                        stateSideBar={showSideBar}
                        key={item.id}
                        workspacesHover
                        onMouseEnter={() => onMouseOverHandler(item.id)}
                        onMouseLeave={() =>
                           onMouseLeaveFormMenuHandler(item.id)
                        }
                     >
                        <SideBarTitleBlock
                           onClick={showSubMenuHandler(item)}
                           stateSideBar={showSideBar}
                           workspacesHover
                        >
                           {renderSideBar(item)}

                           <ContainerNavItem>
                              <p>{item.name.charAt(0)}</p>
                              {showSideBar ? <span>{item.name}</span> : null}
                           </ContainerNavItem>

                           {showSideBar ? (
                              <CustomIcons
                                 src={
                                    showSubMenu[item.id] ? arrowUp : arrowDown
                                 }
                              />
                           ) : null}
                        </SideBarTitleBlock>
                        {showSideBar && showSubMenu[item.id] && <SubMenu />}
                     </WorkspacesItem>
                  )
               })}
            </ContainerWorkspaces>
         </ul>
      </StyledContainerSideBar>
   )
}

export default SideBar

const StyledContainerSideBar = styled.aside`
   display: flex;
   flex-direction: column;
   width: ${(props) => (props.stateSideBar ? "260px" : "110px")};
   background: rgba(248, 248, 248, 0.7);
   transition: all 0.35s ease-out;
   padding-top: 1.7rem;
   margin: 0 20px 0 0;
   position: fixed;
   z-index: 150;
   top: 78px;
   left: 0;
   height: 100vh;
   ul {
      padding: 0;
      display: flex;
      flex-direction: column;
      width: 100%;
      position: relative;
   }
   img {
      width: 25px;
      height: 25px;
   }
`
const ContainerNavItem = styled(Link)`
   display: flex;
   width: 100%;
   height: 40px;
   align-items: center;
   padding: 0 0 0 40px;
   text-decoration: none;
   color: ${(props) => (props.active === "true" ? "white" : "black")};
   span {
      text-align: start;
      margin: 0 0 0 0.6rem;
   }
   svg {
      margin-top: 5px;
   }
   p {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 30px;
      background-color: #2cb107;
      color: white;
      border-radius: 50%;
      margin-left: -4px;
   }
`
const HeaderSideBar = styled.div`
   width: 100%;
   height: 40px;
   display: flex;
   align-items: center;
   p {
      width: 160px;
      font-size: 1.3rem;
      margin-left: 25px;
   }
   img {
      margin-left: 2.4rem;
   }
`
const SideBarItem = styled.li`
   display: flex;
   width: 100%;
   justify-content: center;
   text-align: center;
   list-style: none;
   align-items: center;
   cursor: pointer;
   &:first-child {
      padding-top: 0.9rem;
      flex-direction: column !important;
   }
   &:nth-child(2) {
      margin-top: 1.25rem;
      padding-top: 1rem;
   }
`
const SideBarTitleBlock = styled.div`
   width: 100%;
   height: 37px;
   display: flex;
   justify-content: center;
   align-items: center;
   padding-right: 15px;
   background-color: ${(props) =>
      props.active === "true" && "rgba(58, 104, 131, 0.6)"};
   border-top-right-radius: 20px;
   border-bottom-right-radius: 20px;
   svg {
      margin-top: 5px;
   }
   img {
      position: relative;
   }
`
const WorkspacesItem = styled.li`
   display: flex;
   flex-wrap: wrap;
   width: 100%;
   justify-content: center;
   cursor: pointer;
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
`
const ShowSideBarButton = styled.img`
   position: absolute;
   z-index: 1000;
   left: ${(props) => (props.showSideBar ? "200px" : "46px")};
   background: rgba(248, 248, 248, 10);
   padding: 7px;
   width: 40px !important;
   height: 40px !important;
   border-radius: 8px;
   transition: all 0.3s ease-out;
`
const ContainerWorkspaces = styled.ul`
   margin-bottom: 30px;
   max-height: 42vh;
   overflow: scroll;
`
// const Line = styled.div`
//    position: absolute;
//    top: ${(props) => props.top};
//    left: 33px;
//    width: ${(props) => (props.showSideBar ? "180px" : "35px")};
//    height: 1px;
//    background-color: white;
//    transition: all 0.35s ease-out;
// `
