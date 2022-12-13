import React from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import styled from "styled-components"
import actionTrueSvg from "../../assets/icons/actionTrue.svg"
import actionFalseSvg from "../../assets/icons/actionFalse.svg"
import UserAvatar from "../UI/UserAvatar"
import avatar from "../../assets/svg/userAvatar.svg"
import {
   addWorkspacesToFavourites,
   getWorkspacesId,
} from "../../store/workspacesSlice"
import LoadingSpinner from "../UI/LoadingSpinner"
import TextForEmpty from "../UI/TextForEmpty"
import empty from "../../assets/images/emptyBox.webp"

const TableWorkspaces = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { workspaces } = useSelector((state) => state)

   const addToFavouritesWorkspacesHandler = (id) => {
      dispatch(addWorkspacesToFavourites({ id, dispatch }))
   }

   const getWorkspaceByIdPlusNavigate = (id) => {
      dispatch(getWorkspacesId({ id, navigate }))
   }

   console.log(workspaces)

   return (
      <Table>
         <thead>
            <tr>
               <th>№</th>
               <th>Name</th>
               <th>Lead</th>
               <th>Action</th>
            </tr>
         </thead>

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

         {workspaces.workspaces.map((item, index) => {
            return (
               <tbody key={item.id}>
                  <WorkspacesItem itemIndex={index % 2 !== 0}>
                     <td>{index}</td>
                     <td onClick={() => getWorkspaceByIdPlusNavigate(item.id)}>
                        <span>{item.name}</span>
                     </td>
                     <td>
                        <UserAvatar src={avatar} />
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
               </tbody>
            )
         })}
      </Table>
   )
}

export default TableWorkspaces

const Table = styled.table`
   border-collapse: collapse;
   width: 100%;
   margin-top: 10px;
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
      padding-right: 30px;
      img {
         width: 23px;
         height: 23px;
      }
   }
   td:nth-child(2) {
      width: 60vw;
      padding-left: 12px;
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
