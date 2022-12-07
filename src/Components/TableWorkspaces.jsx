import React from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import styled from "styled-components"
import actionTrueSvg from "../assets/icons/actionTrue.svg"
import actionFalseSvg from "../assets/icons/actionFalse.svg"
import UserAvatar from "./UI/UserAvatar"
import avatar from "../assets/svg/userAvatar.svg"
import {
   addWorkspacesToFavourites,
   getWorkspacesId,
} from "../store/workspacesSlice"

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

         {workspaces.workspaces.map((item, index) => {
            return (
               <thead key={item.id}>
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
                           src={item.action ? actionTrueSvg : actionFalseSvg}
                           onClick={() =>
                              addToFavouritesWorkspacesHandler(item.id)
                           }
                           alt="star"
                        />
                     </td>
                  </WorkspacesItem>
               </thead>
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
