/* eslint-disable no-return-assign */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { useDispatch } from "react-redux"
import TimeAgo from "react-timeago"
import TextareaAutosize from "react-textarea-autosize"
import UserAvatar from "./UserAvatar"
import CustomIcons from "../Column/CustomIcons"
import arrowIcon from "../../assets/icons/ArrowIcons.svg"
import DisplayFlex from "../../layout/DisplayFlex"
import arrowDownComment from "../../assets/svg/ArrowComment.svg"
import Input from "./Input"
import { axiosInstance } from "../../api/axiosInstance"
import { useGetInputValue } from "../../utilits/hooks/useGetInputValue"
import { useTemporaryToggle } from "../../utilits/hooks/useTemporaryToggle"
import {
   errorToastifyAction,
   warningToastifyAction,
} from "../../store/toastifySlice"

const CommentSection = ({
   comment,
   dateAdded,
   userAvatar,
   editHandle,
   deleteHandle,
   showComment,
   setShowComment,
   dataCardById,
}) => {
   const [commentValue, setCommentValue] = useState("")
   const [comments, setComments] = useState([])
   const textAreaRef = useRef([])
   const [activeInput, setActiveInput] = useState(null)
   const dispatch = useDispatch()

   // ПОЛУЧИТЬ КОМЕНТАРИИ КАРТОЧКИ
   const getAllComments = async () => {
      try {
         const { data } = await axiosInstance(
            `/api/comments/${dataCardById.id}`
         )
         data?.sort((a, b) => b.id - a.id)
         return setComments(data)
      } catch (error) {
         return console.log(error.message)
      }
   }
   // ДОБАВИТЬ НОВЫЙ КОМЕНТАРИЙ
   const addedComment = async (e) => {
      e.preventDefault()
      dispatch(loadingToastifyAction("...Loading"))
      try {
         const { data } = await axiosInstance.post(
            `/api/comments/${dataCardById.id}`,
            {
               text: commentValue,
               createdAt: new Date(),
            }
         )
         getAllComments()
         dispatch(successToastifyAction("Added comment"))
         return setCommentValue("")
      } catch (error) {
         return dispatch(errorToastifyAction("Error something went wrong"))
      }
   }
   // УДАЛИТЬ КОМЕНТАРИЙ
   const deleteComment = async (commentId) => {
      dispatch(loadingToastifyAction("...Loading"))
      try {
         const response = await axiosInstance.delete(
            `/api/comments/${commentId}`
         )
         getAllComments()
         dispatch(warningToastifyAction("Deleted comment"))
         return null
      } catch (error) {
         return dispatch(errorToastifyAction("Error something went wrong"))
      }
   }
   // ИЗМЕНИТЬ КОМЕНТАРИЙ
   const changeValueHandler = (e) => {
      const newComments = [...comments]
      newComments[e.target.name].text = e.target.value
      return setComments(newComments)
   }
   const changeComment = async (e, id) => {
      e.preventDefault()
      try {
         const response = await axiosInstance.put(`/api/comments/`, {
            id,
            newTitle: e.target.value,
         })
         setActiveInput(0)
         return getAllComments()
      } catch (error) {
         return console.log(error.message)
      }
   }

   useEffect(() => {
      getAllComments()
   }, [])

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
            {comments?.length > 0 &&
               comments?.map((item, index) => {
                  return (
                     <Comment key={item.id}>
                        <UserAvatar src={item.image} />
                        <div>
                           <p>
                              {item.commentedUserResponse.firstName}
                              {"    "}
                              {item.commentedUserResponse.lastName}
                           </p>
                           <form onSubmit={(e) => changeComment(e, item.id)}>
                              {activeInput === item.id ? (
                                 <StyledTextAreaAutoSize
                                    ref={textAreaRef}
                                    onChange={(e) => changeValueHandler(e)}
                                    onBlur={(e) => changeComment(e, item.id)}
                                    value={item.text}
                                    name={`${index}`}
                                    autoFocus
                                 />
                              ) : (
                                 <CommentText>{item.text}</CommentText>
                              )}
                           </form>

                           <DisplayFlex
                              width="25vw"
                              margin="9px 0 0 0"
                              JK="space-between"
                           >
                              <TimeAgo date={item.createdAt} />
                              <BlockEditDeleteButton>
                                 <p
                                    onClick={() =>
                                       setActiveInput(
                                          activeInput !== item.id
                                             ? item.id
                                             : null
                                       )
                                    }
                                 >
                                    Edit
                                 </p>
                                 <p onClick={() => deleteComment(item.id)}>
                                    Delete
                                 </p>
                              </BlockEditDeleteButton>
                           </DisplayFlex>
                        </div>
                     </Comment>
                  )
               })}

            <ContainerInput>
               <form onSubmit={addedComment}>
                  <Input
                     value={commentValue}
                     onChange={(e) => setCommentValue(e.target.value)}
                     placeholder="Write a comment"
                  />
               </form>
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
   max-height: ${(props) => (props.sizeComment ? "51vh" : "62.6vh")};
   min-height: ${(props) => (props.sizeComment ? "34.3vh" : "45.8vh")};
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
   margin-left: 48px;
   text-decoration: underline;
   p {
      margin-right: 1rem;
   }
`
const CommentText = styled.p`
   width: 20vw;
   margin: 0.5rem 0 0rem 0;
   padding: 4px 0 4px 8px;
   font-size: 1.1rem;
   line-height: 22px;
`
const ContainerInput = styled.div`
   position: fixed;
   right: 3.6vw;
   width: 32vw;
   bottom: 20px;
   Input {
      background: #f4f5f7 !important;
   }
`
const StyledTextAreaAutoSize = styled(TextareaAutosize)`
   width: 20vw;
   background: #f4f5f7;
   margin: 0.5rem 0 0rem 0;
   padding: 4px 0 4px 8px;
   font-size: 1.1rem;
   border: none;
   &:focus {
      background-color: white;
   }
`
