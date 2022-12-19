import React from "react"
import styled, { keyframes } from "styled-components"
import CustomIcons from "./CustomIcons"
import threePoint from "../../assets/icons/threePoint.svg"

const Skeleton = () => {
   return (
      <StyledContainerSkeleton>
         <div>
            <p>Title</p>
            <CustomIcons
               src={threePoint}
               position="absolute"
               top="15px"
               right="14px"
            />
         </div>
         <CardSkeleton />
         <CardSkeleton />
         <CardSkeleton />
      </StyledContainerSkeleton>
   )
}

export default Skeleton

const loading = keyframes`
    0%{
        background-color:#e6e6e6,
    }
    100% { 
        background-color:#c5c1c1;
    }
`
const loadingCard = keyframes`
    0%{
        background-color:white;
    }
    100% { 
        background-color:#ece9e9;
    }
`
const CardSkeleton = styled.div`
   position: relative;
   width: 290px;
   height: 13vh;
   border-radius: 10px;
   animation: ${loadingCard} 0.5s linear infinite alternate;
`
const StyledContainerSkeleton = styled.div`
   position: relative;
   width: 320px;
   height: 60vh;
   border-radius: 10px;
   padding: 0 1rem 0.6rem 0.75rem;
   background: #e6e6e6;
   opacity: 7;
   animation: ${loading} 0.5s linear infinite alternate;
   display: flex;
   flex-direction: column;
   gap: 15px;
   div {
      &:nth-child(1) {
         display: flex;
         align-items: center;
         height: 40px;
         margin-top: 8px;
      }
      p {
         font-size: 1.3rem;
         margin-left: 5px;
      }
   }
`
