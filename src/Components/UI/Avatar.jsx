import React from "react"
import styled from "styled-components"
import Pen from "../../assets/svg/editIcon.svg"
import initialAvatar from "../../assets/images/initialAvatar.jpeg"

function Avatar({ src, alt, editIcon, onClick }) {
   return (
      <ParentStyled>
         {src ? (
            <Ava src={src} alt={alt} />
         ) : (
            <Ava src={initialAvatar} alt={alt} />
         )}

         <Icon>
            <Svg onClick={onClick} edit={editIcon} src={Pen} alt="pen" />
         </Icon>
      </ParentStyled>
   )
}

export default Avatar
const Ava = styled.img`
   border-radius: 50%;
   width: 141px;
   height: 141px;
   background-color: white;
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
