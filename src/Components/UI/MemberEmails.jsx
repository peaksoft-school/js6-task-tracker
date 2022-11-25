import React from "react"
import styled from "styled-components"
import closeIcon from "../../assets/icons/close.svg"

const MemberEmails = ({ text, deleteEmailInEmails }) => {
   return (
      <Text>
         <span>
            {text}
            <img onClick={deleteEmailInEmails} src={closeIcon} alt="delete" />
         </span>
      </Text>
   )
}
export default MemberEmails

const Text = styled.div`
   padding: 3px;
   margin: 4px;
   span {
      background: #f0f0f0;
      border-radius: 16px;
      color: #919191;
      padding: 2px 1.4rem 2px 1.4rem;
      margin: 0;
   }
   img {
      margin: 0 0 -0.9px 10px;
   }
`
