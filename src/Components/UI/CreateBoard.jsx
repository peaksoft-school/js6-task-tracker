import React, { useState } from "react"
import styled from "styled-components"
import Input from "./Input"

function CreateBoard() {
   const [boardActive, setBoardActive] = useState(false)
   const showBoard = () => {
      setBoardActive(!boardActive)
   }
   return (
      <div>
         <Button onClick={showBoard} type="button">
            Create new board
         </Button>

         <div>
            {boardActive && (
               <Board>
                  <h1>Create new board</h1>
                  <Input />
                  <h2>Add background</h2>
                  <p>Photo</p>
                  <a href="s">See more</a>
                  <img src="" alt="" />
                  <img src="" alt="" />
                  <img src="" alt="" />
               </Board>
            )}
         </div>
      </div>
   )
}

export default CreateBoard

const Button = styled.button`
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   width: 154px;
   height: 34px;
   background: #0079bf;
   border-radius: 24px;
   border: none;
   color: white;
   font-size: 14px;
`
const Board = styled.div`
   width: 477px;
   height: 363px;
   border-radius: 10px;
   background-color: white;
   margin: 0 auto;
   h1 {
      position: absolute;
      width: 135px;
      height: 20px;
      left: 575px;
      top: 16px;
      font-size: 16px;
      color: black;
      margin: 0 auto;
   }
   input {
      width: 437px;
      height: 32px;
      border: 1px solid #d0d0d0;
      border-radius: 8px;
      padding: 6px 16px;
   }
`
