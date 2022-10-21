import React from "react"
import styled from "styled-components"

const getShowedImages = (array) => {
   if (array.length <= 8) {
      return array
   }
   return array.slice(0, 8)
}

function UsersCountry({ images = [] }) {
   const renderedImages = getShowedImages(images)

   const renderRestIcon = () => {
      if (images.length <= 8) return null

      const lastIndex = renderedImages.length

      const restUsersCount = images.slice(8).length

      return (
         <CountOfRestUsers index={lastIndex} x={(lastIndex + 1) * 25 - 25}>
            <span>+{restUsersCount}</span>
         </CountOfRestUsers>
      )
   }

   return (
      <Container>
         {renderedImages.map((item, i) => (
            <ProfileImage
               key={item.id}
               src={item.source}
               alt={item.title}
               index={i + 1}
               x={i + 1 === 1 ? 0 : (i + 1) * 25 - 25}
            />
         ))}
         {renderRestIcon()}
      </Container>
   )
}

export default UsersCountry

const Container = styled.div`
   position: relative;
`

const CountOfRestUsers = styled.div`
   position: absolute;
   box-sizing: border-box;
   width: 34px;
   height: 34px;
   border-radius: 50%;
   border: 2px solid #ffffff;
   transform: ${({ x }) => `translateX(${x}px)`};
   z-index: ${({ index }) => index};
   display: flex;
   align-items: center;
   justify-content: center;
   background: #86a1b1;
   color: #ffffff;
   & span {
      display: inline-block;
      width: 100%;
      margin: 0 auto;
      white-space: nowrap;
      text-overflow: ellipsis;
      text-align: center;
      font-size: 14px;
      transform: scale(0.85);
      cursor: pointer;
   }
`
const ProfileImage = styled.img`
   position: absolute;
   z-index: ${({ index }) => index};
   transform: ${({ x }) => `translateX(${x}px)`};
   box-sizing: border-box;
   width: 34px;
   height: 34px;
   border-radius: 50%;
   border: 2px solid #ffffff;
`
