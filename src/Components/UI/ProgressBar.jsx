import React from "react"
import styled from "styled-components"

const ProgressBar = ({ widthProgressPercent, tasks, completedTasks }) => {
   return (
      <BlockProgressBar>
         <div>
            <span>
               {tasks}/{completedTasks}
            </span>
         </div>
         <StyledBoxProgress>
            <StyledProgress width={`${widthProgressPercent}%`} />
         </StyledBoxProgress>
         <span>
            {+widthProgressPercent <= 100 ? widthProgressPercent : "0"}%
         </span>
      </BlockProgressBar>
   )
}

export default ProgressBar

const BlockProgressBar = styled.div`
   width: 56vw;
   display: flex;
   align-items: center;
   justify-content: space-between;
   height: 5vh;
   span {
      font-size: 15px;
      color: #787878;
      margin: 5px;
   }
`

const StyledBoxProgress = styled.div`
   display: flex;
   align-items: center;
   justify-content: flex-start;
   width: 55vw;
   height: 1.8vh;
   background: #f0f0f0;
   border-radius: 8px;
   padding: 0 3px 0 3px;
`

const StyledProgress = styled.div`
   width: ${(props) => props.width};
   height: 1vh;
   background: #0079bf;
   border-radius: 8px;
   transition: width 1s ease-in-out;
`
