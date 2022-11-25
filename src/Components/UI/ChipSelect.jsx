import React, { useState, useEffect } from "react"
import styled from "styled-components"
import deleteUser from "../../assets/icons/close.svg"

const ChipSelect = ({ usersEmail, getResultList }) => {
   const [filteredEmail, setFilteredEmail] = useState([])
   const deleteUserEmail = (id) => {
      const deletedUserEmail = filteredEmail.filter((item) => item.id !== id)
      setFilteredEmail(deletedUserEmail)
   }
   useEffect(() => {
      setFilteredEmail(usersEmail)
   }, [])
   useEffect(() => {
      getResultList(filteredEmail)
   }, [filteredEmail])
   return (
      <Container>
         {filteredEmail.map((item) => {
            return (
               <p key={item.id}>
                  {item.email}
                  {item.email && (
                     <img
                        onClick={() => deleteUserEmail(item.id)}
                        src={deleteUser}
                        alt="delete button"
                     />
                  )}
               </p>
            )
         })}
      </Container>
   )
}
export default ChipSelect
const Container = styled.div`
   width: 300px;
   flex-direction: column;
   border: 2px solid #e1e1e1;
   border-radius: 10px;
   padding: 5px;
   p {
      display: inline-block;
      background-color: #f0f0f0;
      padding: 0 15px;
      border-radius: 15px;
      color: #919191;
      font-weight: 300;
      align-items: center;
      margin: 3px;
      img {
         width: 9px;
         height: 9px;
         margin-left: 5px;
      }
   }
`
