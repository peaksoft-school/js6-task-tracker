import React from "react"
import styled from "styled-components"
import UserAvatar from "./UserAvatar"
import UserName from "./UserName"
import CustomIcons from "./TaskCard/CustomIcons"
import arrowIcon from "../../assets/icons/ArrowIcons.svg"
import DisplayFlexJCSB from "../../layout/DisplayFlexJCSB"

const CommentSection = ({
   comment,
   dateAdded,
   userAvatar,
   userName,
   editHandle,
   deleteHandle,
   click,
}) => {
   return (
      <ContainerComments>
         <DisplayFlexJCSB>
            <h3>Comments</h3>
            <CustomIcons click={click} src={arrowIcon} />
         </DisplayFlexJCSB>
         <Comment>
            <UserAvatar userAvatar={userAvatar} />
            <div>
               <UserName userName={userName} />
               <CommentText>
                  {comment} I will do it only in a week,after the
               </CommentText>

               <div>
                  <span>{dateAdded} 12 sep ,2021 / 6:30pm</span>
                  <div>
                     <p onClick={editHandle}>Edit</p>
                     <p onClick={deleteHandle}>Delete</p>
                  </div>
               </div>
            </div>
         </Comment>
      </ContainerComments>
   )
}

export default CommentSection

const ContainerComments = styled.div`
   position: relative;
   width: 385px;
   background: #f4f5f7;
   padding: 15px;
   border-radius: 8px;
   h3 {
      font-size: 16px;
      line-height: 18px;
      color: #919191;
   }
`

const Comment = styled.div`
   display: flex;
   width: 360px;
   border-bottom: 1px solid #e4e4e4;
   font-weight: 500;
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
      div {
         display: flex;
         flex-direction: row;
         align-items: center;
         span {
            font-size: 16px;
            margin-right: 30px;
         }
         p {
            margin-left: 10px;
            cursor: pointer;
            &:hover {
               text-decoration: underline;
            }
         }
      }
   }
`
const CommentText = styled.p`
   width: 250px;
`
