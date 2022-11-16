import React, { useState } from "react"
import styled from "styled-components"
import Button from "../UI/Button"
import Input from "../UI/Input"
import LabelTag from "../UI/LabelTag"

const CreateWorkspaces = ({ clickCancel }) => {
   // const [emails, setEmails] = useState([])
   const [email, setEmail] = useState("")

   const getInputEmail = (e) => {
      setEmail(e.target.value)
   }
   console.log(email)
   return (
      <>
         <Title>Create a new workspaces</Title>
         <Label>Name of the workspaces</Label>
         <Input type="text" id="nameWorkspaces" placeholder="Name" />
         <Label>Invite a member</Label>
         <Input
            onChange={getInputEmail}
            type="email"
            id="email"
            placeholder="example@gmail.com"
         />
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
            <Button fullWidth="110px">Create</Button>
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
