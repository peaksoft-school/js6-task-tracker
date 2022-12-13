/* eslint-disable no-unused-vars */
import React from "react"
import styled from "styled-components"
import UserAvatar from "./UserAvatar"
import CustomIcons from "../Column/CustomIcons"
import arrowIcon from "../../assets/icons/ArrowIcons.svg"
import DisplayFlex from "../../layout/DisplayFlex"
import arrowDownComment from "../../assets/svg/ArrowComment.svg"
import Input from "./Input"

const CommentSection = ({
   comment,
   dateAdded,
   userAvatar,
   editHandle,
   deleteHandle,
   showComment,
   setShowComment,
}) => {
   return (
      <StyledCommentSection>
         <DisplayFlex JK="space-between">
            <h3>Comments</h3>
            <CustomIcons
               onClick={() => setShowComment(!showComment)}
               src={showComment ? arrowIcon : arrowDownComment}
            />
         </DisplayFlex>
         <ContainerComment sizeComment={showComment}>
            {/* <Comment>
               <UserAvatar src={userAvatar} />
               <div>
                  <p>Nazira Nazirova</p>
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
            </Comment> */}
            <ContainerInput>
               <Input placeholder="Write a comment" />
            </ContainerInput>
         </ContainerComment>
      </StyledCommentSection>
   )
}

export default CommentSection

const StyledCommentSection = styled.div`
   width: 33vw;
   position: relative;
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
   position: relative;
   overflow: scroll;
   max-height: ${(props) => (props.sizeComment ? "340px" : "428px")};
   min-height: ${(props) => (props.sizeComment ? "34.2vh" : "47vh")};
`
const Comment = styled.div`
   display: flex;
   border-bottom: 1px solid #e4e4e4;
   font-weight: 200;
   line-height: 18px;
   font-size: 1rem;
   padding: 0 0 1rem 0;
   margin: 7px 0 7px 0;
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
const ContainerInput = styled.div`
   position: fixed;
   right: 4.5vw;
   width: 32vw;
   bottom: 20px;
   Input {
      background: #f4f5f7 !important;
   }
`
