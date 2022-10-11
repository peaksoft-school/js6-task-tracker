import React from "react"
import styled from "styled-components"
import UserAvatar from "./UserAvatar"
import UserName from "./UserName"

const CommentSection = ({ comment, dateAdded, userAvatar, userName }) => {
   return (
      <ContainerComments>
         <Comment>
            <div>
               <UserAvatar userAvatar={userAvatar} />
               <UserName userName={userName} />
            </div>

            <p>{comment} I will do it only in a week,after the vacation</p>
            <p>{dateAdded} 12 sep ,2021 / 6:30pm</p>
         </Comment>
         <Comment>
            <div>
               <UserAvatar userAvatar={userAvatar} />
               <UserName userName={userName} />
            </div>

            <p>{comment} I will do it only in a week,after the vacation</p>
            <p>{dateAdded} 12 sep ,2021 / 6:30pm</p>
         </Comment>
      </ContainerComments>
   )
}

export default CommentSection

const ContainerComments = styled.div`
   width: 365px;
   background: #f4f5f7;
   padding: 15px;
`

const Comment = styled.div`
   width: 360px;
   border-bottom: 1px solid #e4e4e4;
   font-weight: 300;
   line-height: 18px;
   font-size: 17px;
   color: #919191;
   margin: 10px;
   div {
      display: flex;
      height: 60px;
      align-items: center;
      gap: 20px;
   }
`
