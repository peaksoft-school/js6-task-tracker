import React from "react"
import styled from "styled-components"
import UserAvatar from "./UserAvatar"
import UserName from "./UserName"

const CommentSection = ({ comment, dateAdded, userAvatar, userName }) => {
   return (
      <ContainerComments>
         <Comment>
            <UserAvatar userAvatar={userAvatar} />
            <div>
               <UserName userName={userName} />
               <p>{comment} I will do it only in a week,after the vacation</p>

               <div>
                  <p>{dateAdded} 12 sep ,2021 / 6:30pm</p>
                  <div>
                     <span>Edit</span>
                     <span>Delete</span>
                  </div>
               </div>
            </div>
         </Comment>
      </ContainerComments>
   )
}

export default CommentSection

const ContainerComments = styled.div`
   width: 385px;
   background: #f4f5f7;
   padding: 15px;
`

const Comment = styled.div`
   display: flex;
   width: 360px;
   border-bottom: 1px solid #e4e4e4;
   font-weight: 300;
   line-height: 18px;
   font-size: 17px;
   color: #919191;
   margin: 10px;
   img {
      margin-right: 10px;
   }
   h3 {
      margin: 3px 0 3px 0;
   }
   div {
      display: flex;
      flex-direction: column;
      p {
         margin-left: 14px;
         font-size: 16px;
         margin: 10px 2px 10px 2px;
      }
      div {
         display: flex;
         flex-direction: row;
         align-items: center;
         p {
            font-size: 16px;
            margin-right: 30px;
         }
         span {
            margin-left: 10px;
            cursor: pointer;
            &:hover {
               text-decoration: underline;
            }
         }
      }
   }
`
