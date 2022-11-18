import React from "react"
import styled from "styled-components"
import UserAvatar from "./UserAvatar"
import UserName from "./UserName"
import CustomIcons from "./TaskCard/CustomIcons"
import arrowIcon from "../../assets/icons/ArrowIcons.svg"
import DisplayFlexJCSB from "../../layout/DisplayFlexJCSB"
import arrowDownComment from "../../assets/svg/ArrowComment.svg"

const CommentSection = ({
   comment,
   dateAdded,
   userAvatar,
   userName,
   editHandle,
   deleteHandle,
   sizeCommentHandler,
   sizeComment,
}) => {
   return (
      <StyledCommentSection>
         <DisplayFlexJCSB>
            <h3>Comments</h3>
            <CustomIcons
               click={sizeCommentHandler}
               src={sizeComment ? arrowIcon : arrowDownComment}
            />
         </DisplayFlexJCSB>
         <ContainerComment sizeComment={sizeComment}>
            <Comment>
               <UserAvatar src={userAvatar} />
               <div>
                  <UserName userName={userName} />
                  <CommentText>
                     {comment} I will do it only in a week,after the
                  </CommentText>

                  <div>
                     <span>{dateAdded} 12 sep ,2021 / 6:30pm</span>
                     <BlockEditDeleteButton>
                        <p onClick={editHandle}>Edit</p>
                        <p onClick={deleteHandle}>Delete</p>
                     </BlockEditDeleteButton>
                  </div>
               </div>
            </Comment>
         </ContainerComment>
      </StyledCommentSection>
   )
}

export default CommentSection

const StyledCommentSection = styled.div`
   position: relative;
   width: 430px;
   background: #f4f5f7;
   padding: 1rem;
   border-radius: 8px;
   h3 {
      font-size: 0.9rem;
      line-height: 18px;
      color: #919191;
   }
`
const ContainerComment = styled.div`
   overflow: scroll;
   max-height: ${(props) => (props.sizeComment ? "340px" : "428px")};
`

const Comment = styled.div`
   display: flex;
   border-bottom: 1px solid #e4e4e4;
   font-weight: 200;
   line-height: 18px;
   font-size: 1rem;
   padding: 0 0 1rem 0;
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
         color: #919191;
         span {
            font-size: 16px;
            margin-right: 30px;
         }
      }
   }
`
const BlockEditDeleteButton = styled.div`
   cursor: pointer;
   text-decoration: underline;
   p {
      margin-right: 1rem;
   }
`

const CommentText = styled.p`
   width: 23vw;
   margin: 0.5rem 0 0.5rem 0;
`
