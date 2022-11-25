import React from "react"
import styled from "styled-components"
import { useDispatch } from "react-redux"
import actionTrueSvg from "../assets/icons/actionTrue.svg"
import actionFalseSvg from "../assets/icons/actionFalse.svg"
import UserAvatar from "./UI/UserAvatar"
import { axiosInstance } from "../api/axiosInstance"
import avatar from "../assets/svg/userAvatar.svg"
import { getFavourites } from "../store/FavouritesSlice"
import {
   loadingToastifyAction,
   successToastifyAction,
   warningToastifyAction,
} from "../store/toastifySlice"

const TableWorkspaces = ({ workspaces, updateWorkspaces, getWorkspacesId }) => {
   const dispatch = useDispatch()

   const changeAction = async (id) => {
      try {
         dispatch(loadingToastifyAction())
         const { data, status } = await axiosInstance.put(
            `/api/workspace/make-favorite/${id}`
         )
         if (status === 200) {
            getFavourites()
            updateWorkspaces()
            if (data.action) {
               dispatch(
                  successToastifyAction(`You added favourite ${data.name}`)
               )
            } else {
               dispatch(
                  warningToastifyAction(
                     `You deleted from favorites ${data.name}`
                  )
               )
            }
         }

         return data
      } catch (error) {
         return console.log(error.message)
      }
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

         {workspaces.map((item, index) => {
            return (
               <thead key={item.id}>
                  <WorkspacesItem itemIndex={index % 2 !== 0}>
                     <td>{index}</td>
                     <td onClick={() => getWorkspacesId(item.id)}>
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
                           onClick={() => changeAction(item.id)}
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