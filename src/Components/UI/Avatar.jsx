import React, { useEffect, useState } from "react"
import styled from "styled-components"
import DefaultAvatar from "../../assets/svg/defaultAvatar.svg"
import Pen from "../../assets/svg/editIcon.svg"

function Avatar({ src, alt, editIcon }) {
   const [isEdit, setIsEdit] = useState(false)
   const handleOnError = (e) => {
      e.target.src = DefaultAvatar
   }
   useEffect(() => {
      setIsEdit(editIcon)
   }, [])
   return (
      <ParentStyled>
         {src ? (
            <Ava src={src} alt={alt} onError={handleOnError} />
         ) : (
            <Ava src={DefaultAvatar} alt={alt} />
         )}
         {isEdit && (
            <Icon>
               <Svg edit={editIcon} src={Pen} alt="pen" />
            </Icon>
         )}
      </ParentStyled>
   )
}

export default Avatar
const Ava = styled.img`
   border: 5px solid #ffffff;
   width: 141px;
   height: 141px;
`
const Icon = styled.button`
   background: #f0f0f0;
   border: none;
   border-radius: 24px;
   cursor: pointer;
   width: 36px;
   height: 36px;
   display: flex;
   justify-content: center;
   align-items: center;
   position: absolute;
   left: 100px;
   bottom: 0px;
`
const Svg = styled.img`
   color: #919191;
`
const ParentStyled = styled.div`
   position: relative;
   width: 141px;
   height: 141px;
`
