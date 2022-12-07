import React, { useState } from "react"
import styled from "styled-components"
import { useDispatch } from "react-redux"
import LabelTag from "../UI/LabelTag"
import MemberEmails from "../UI/MemberEmails"
import { createWorkspaces } from "../../store/workspacesSlice"
import ContainerButtons from "../UI/ContainerButtons"

const CreateWorkspaces = ({ toggle }) => {
   const dispatch = useDispatch()
   const link = window.location.href
   const [emails, setEmails] = useState([])
   const [data, setData] = useState({
      email: "",
      name: "",
   })

   const addEmailInEmails = (e) => {
      e.preventDefault()
      if (data.email.trim().length > 0) setEmails([...emails, data.email])
      setData({ ...data, email: "" })
   }
   const deleteEmailInEmails = (i) => {
      const emailsAfterRemove = emails.filter((item, index) => index !== i)
      setEmails(emailsAfterRemove)
   }

   const sendData = () => {
      const readyData = {
         emails: emails.length !== 0 ? emails : [data.email],
         name: data.name,
         link,
      }
      dispatch(createWorkspaces({ readyData, dispatch }))
      toggle("false")
   }

   const getInputWorkspaceTitle = (e) => {
      setData({ ...data, name: e.target.value })
   }

   return (
      <>
         <Title>Create a new workspaces</Title>
         <Label>Name of the workspaces</Label>
         <InputBlock>
            <StyledInput
               type="text"
               value={data.name}
               onChange={(e) => getInputWorkspaceTitle(e)}
               placeholder="Name"
               autoFocus
            />
         </InputBlock>

         <Label>Invite a member</Label>
         <form onSubmit={addEmailInEmails}>
            <InputBlock>
               {emails.map((item, index) => {
                  return (
                     <MemberEmails
                        deleteEmailInEmails={() => deleteEmailInEmails(index)}
                        key={item.emailID}
                        text={item}
                     />
                  )
               })}
               <StyledInput
                  type="email"
                  value={data.email}
                  onChange={(event) =>
                     setData({ ...data, email: event.target.value })
                  }
                  placeholder="example@gmail.com"
                  autoFocus
               />
            </InputBlock>
         </form>

         <LabelTag text="asdfas" />
         <ContainerButtons
            clickGrayButton={() => toggle("false")}
            clickBlueButton={sendData}
            titleBlueButton="Create"
            titleGrayButton="Cancel"
            paddingButton="0 40px 0 40px"
         />
      </>
   )
}

export default CreateWorkspaces

const Title = styled.h3`
   font-weight: 500;
   text-align: center;
`
const Label = styled.p`
   margin: 18px 0 8px 7px;
   color: #919191;
   font-size: 1.1rem;
`
const InputBlock = styled.div`
   border: 1px solid #afafaf;
   border-radius: 13px;
   padding: 0 0 0 10px;
`
const StyledInput = styled.input`
   outline: none;
   border: none;
   width: 370px;
   height: 40px;
   font-size: 1.1rem;
`
