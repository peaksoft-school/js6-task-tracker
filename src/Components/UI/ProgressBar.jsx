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
            {+widthProgressPercent <= 100 ? widthProgressPercent : "100"}%
         </span>
      </BlockProgressBar>
   )
}

export default ProgressBar

const BlockProgressBar = styled.div`
   width: 680px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   height: 20px;
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
   width: 601px;
   height: 10px;
   background: #f0f0f0;
   border-radius: 8px;
   padding: 0 3px 0 3px;
`

const StyledProgress = styled.div`
   width: ${(props) => props.width};
   height: 6px;
   background: #0079bf;
   border-radius: 8px;
   transition: width 1s ease-in-out;
`
