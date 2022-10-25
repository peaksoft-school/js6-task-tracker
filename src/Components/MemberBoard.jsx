import React from "react"
import styled from "styled-components"

function MemberBoard({ memberedItems, titleBoard, discription, boardIcon }) {
   return (
      <>
         <Container>
            <h1>Involved in project</h1>
            <div>
               <span>{memberedItems}8</span>
            </div>
         </Container>
         <BoardContainer>
            <Board>
               <img src={boardIcon} alt="" />
               <p>{titleBoard}</p>
               <span>{discription}</span>
            </Board>
         </BoardContainer>
      </>
   )
}

export default MemberBoard
const Container = styled.div`
   width: 147px;
   height: 20px;
   display: flex;
   flex-wrap: wrap;
   flex-direction: column;
   justify-content: center;
   h1 {
      font-size: 16px;
   }
   span {
      font-size: 14px;
      color: white;
   }
   div {
      margin-left: 6px;
      height: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-bottom: 1px;
      width: 19px;
      background: #b2b2b2;
      border-radius: 16px;
   }
`
const Board = styled.div`
   width: 146px;
   height: 66px;
   display: flex;
   position: relative;
   top: 16px;
   padding-bottom: 16px;
   p {
      font-size: 18px;
      color: black;
      position: absolute;
      left: 80px;
      bottom: 30px;
      font-weight: 500;
   }
   span {
      font-size: 16px;
      color: gray;
      position: absolute;
      left: 80px;
      top: 35px;
   }
   img {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 68px;
      height: 66px;
      background: #0079bf;
      border-radius: 10px;
   }
`
const BoardContainer = styled.div`
   height: 330px;
   display: flex;
   flex-direction: column;
   flex-wrap: wrap;
   padding-right: 249px;
`
