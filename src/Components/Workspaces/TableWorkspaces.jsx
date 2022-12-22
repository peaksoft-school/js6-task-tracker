import React from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import styled from "styled-components"
import actionTrueSvg from "../../assets/icons/actionTrue.svg"
import actionFalseSvg from "../../assets/icons/actionFalse.svg"
import UserAvatar from "../UI/UserAvatar"
import {
   addWorkspacesToFavourites,
   getWorkspacesId,
} from "../../store/workspacesSlice"
import LoadingSpinner from "../UI/LoadingSpinner"
import TextForEmpty from "../UI/TextForEmpty"
import empty from "../../assets/images/emptyBox.webp"
import DisplayFlex from "../../layout/DisplayFlex"

const TableWorkspaces = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { workspaces } = useSelector((state) => state)
   const addToFavouritesWorkspacesHandler = (id) => {
      dispatch(addWorkspacesToFavourites({ id, dispatch }))
   }

   const getWorkspaceByIdPlusNavigate = (id) => {
      dispatch(getWorkspacesId({ id, navigate, path: "boards" }))
   }

   return (
      <Table>
         <DisplayFlex JK="space-between">
            <p>№</p>
            <p>Name</p>
            <p>Lead</p>
            <p>Action</p>
         </DisplayFlex>

         {workspaces.loading && workspaces.workspaces.length === 0 ? (
            <LoadingSpinner top="28%" left="46%" />
         ) : null}

         {!workspaces.loading && workspaces.workspaces.length === 0 ? (
            <>
               <TextForEmpty top="30%" left="41%">
                  You don t have workspaces
               </TextForEmpty>
               <EmptyBox src={empty} alt="empty box" />
            </>
         ) : null}
         <ol>
            {workspaces.workspaces.map((item, index) => {
               return (
                  <WorkspacesItem itemIndex={index % 2 !== 0}>
                     <td>
                        <li> </li>
                     </td>
                     <td onClick={() => getWorkspaceByIdPlusNavigate(item.id)}>
                        <span>{item.name}</span>
                     </td>
                     <td>
                        <UserAvatar src={item.lead.image} />
                        <span> {item.lead.firstName}</span>
                        <span> {item.lead.lastName}</span>
                     </td>
                     <td>
                        <img
                           src={
                              item.isFavorite ? actionTrueSvg : actionFalseSvg
                           }
                           onClick={() =>
                              addToFavouritesWorkspacesHandler(item.id)
                           }
                           alt="star"
                        />
                     </td>
                  </WorkspacesItem>
               )
            })}
         </ol>
      </Table>
   )
}

export default TableWorkspaces

const Table = styled.table`
   border-collapse: collapse;
   width: 100%;
   min-height: 70px;
   margin-top: 10px;
   div {
      p {
         :nth-child(1) {
            padding-left: 15px;
         }
         :nth-child(2) {
            width: 52vw;
         }
         :nth-child(3) {
            width: 25vw;
         }
         :nth-child(4) {
            margin-right: 5px;
         }
      }
   }
   th {
      text-align: start;
      height: 30px;
      font-weight: 500;
      border-bottom: 2px solid #d7d7d7;
      &:first-child {
         padding-left: 20px;
      }
      &:nth-child(2) {
         padding-left: 12px;
      }
   }
   th:last-child,
   td:last-child {
      text-align: end;
      padding-right: 15px;
      img {
         width: 23px;
         height: 23px;
         cursor: pointer;
      }
   }
   td:nth-child(1) {
      margin-left: 10px;
   }
   td:nth-child(2) {
      width: 60vw;
      padding: 0 0 0 12px;
      span {
         color: #0073de;
         cursor: pointer;
         text-decoration: underline;
      }
   }
   td:nth-child(3) {
      display: flex;
      align-items: center;
      height: 45px;
      width: 30vw;
      img {
         width: 35px;
         height: 35px;
      }
      span {
         margin-left: 5px;
      }
   }
   td:first-child {
      padding: 0 0 0 20px;
   }
`
const WorkspacesItem = styled.tr`
   display: flex;
   width: 85vw;
   align-items: center;
   height: 50px;
   background-color: ${({ itemIndex }) => itemIndex && "#F3F3F3;"};
`
const EmptyBox = styled.img`
   position: absolute;
   left: 41%;
   top: 28%;
   width: 250px;
   height: 250px;
   opacity: 0.4;
`
