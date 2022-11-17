import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { v4 as uuid } from "uuid"
import styled from "styled-components"
import Button from "../UI/Button"
import LabelTag from "../UI/LabelTag"
import Input from "../UI/Input"
import MemberEmails from "../UI/MemberEmails"
import { createWorkspaces } from "../../store/WorkspacesSlice"

const CreateWorkspaces = ({ clickCancel }) => {
   const dispatch = useDispatch()
   const link = window.location.href
   const [emails, setEmails] = useState([])
   const [data, setData] = useState({
      email: "",
      name: "",
   })

   const addEmailInEmails = (e) => {
      e.preventDefault()
      if (data.email.trim().length > 0)
         setEmails([...emails, { emails: data.email, idEmail: uuid() }])
      setData({ ...data, email: "" })
   }

   const deleteEmailInEmails = (id) => {
      const emailsAfterRemove = emails.filter((item) => item.idEmail !== id)
      setEmails(emailsAfterRemove)
   }

   const sendData = () => {
      if (data.name.trim().length > 0)
         dispatch(
            createWorkspaces({
               emails: emails.length !== 0 ? emails : [data.email],
               name: data.name,
               link,
            })
         )
   }

   return (
      <>
         <Title>Create a new workspaces</Title>
         <Label>Name of the workspaces</Label>
         <Input
            onChange={(event) => setData({ ...data, name: event.target.value })}
            type="text"
            id="nameWorkspaces"
            placeholder="Name"
         />
         <Label>Invite a member</Label>
         <form onSubmit={addEmailInEmails}>
            <InputBlock>
               {emails.map((item) => {
                  return (
                     <MemberEmails
                        deleteEmailInEmails={() =>
                           deleteEmailInEmails(item.idEmail)
                        }
                        key={item.idEmail}
                        text={item.emails}
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
         <ButtonBlock>
            <Button
               onClick={clickCancel}
               hover="none"
               active="none"
               textColor=" #919191"
               color="#F0F0F0"
               fullWidth="110px"
            >
               Cancel
            </Button>
            <Button onClick={sendData} fullWidth="110px">
               Create
            </Button>
         </ButtonBlock>
      </>
   )
}

export default CreateWorkspaces

const Title = styled.h3`
   font-weight: 500;
   text-align: center;
`
const Label = styled.p`
   margin: 14px 0 8px 0;
   color: #919191;
   font-size: 1.1rem;
`
const ButtonBlock = styled.div`
   display: flex;
   height: 44px;
   justify-content: flex-end;
   padding: 27px 0 20px 0;
   button {
      margin-left: 8px;
   }
`
const InputBlock = styled.div`
   border: 1px solid gray;
   border-radius: 13px;
   padding: 0 0 0 10px;
`
const StyledInput = styled.input`
   outline: none;
   border: none;
   width: 400px;
   height: 30px;
   font-size: 1.1rem;
`
