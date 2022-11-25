import React, { useState } from "react"
import styled from "styled-components"
import { useDispatch } from "react-redux"
import Button from "../UI/Button"
import LabelTag from "../UI/LabelTag"
import Input from "../UI/Input"
import MemberEmails from "../UI/MemberEmails"
import { createWorkspacesQuery } from "../../api/auth"
import {
   loadingToastifyAction,
   successToastifyAction,
   errorToastifyAction,
} from "../../store/toastifySlice"

const CreateWorkspaces = ({ toggle, getWorkspaces }) => {
   const link = window.location.href
   const dispatch = useDispatch()
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

   const createWorkspaces = async (value) => {
      try {
         dispatch(loadingToastifyAction())
         const { data } = await createWorkspacesQuery(value)

         getWorkspaces()
         dispatch(successToastifyAction(`Created workspace ${data.name}`))
         return data
      } catch (error) {
         return dispatch(errorToastifyAction(error.message))
      }
   }
   const sendData = () => {
      if (data.name.trim().length > 0)
         createWorkspaces({
            emails: emails.length !== 0 ? emails : [data.email],
            name: data.name,
            link,
         })
      toggle()
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
         <ButtonBlock>
            <Button
               onClick={toggle}
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