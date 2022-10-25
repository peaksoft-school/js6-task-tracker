import React, { useState } from "react"
import styled from "styled-components"
import Board1 from "../assets/svg/Board.svg"
import Board2 from "../assets/svg/Board2.svg"
import Board3 from "../assets/svg/Board3.svg"
import Galochka from "../assets/svg/Galochka.svg"

function CreateBoard() {
   const [boardActive, setBoardActive] = useState(false)
   const [Choose, setChoose] = useState(false)
   const showBoard = () => {
      setBoardActive(!boardActive)
   }
   const ChooseColor = () => {
      setChoose(!Choose)
   }
   let svg
   if (Choose === true) {
      svg = <img src={Galochka} alt="galochka" />
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
                  <input placeholder="Board title*" />
                  <h3>Add background</h3>
                  <div>
                     <p>Photo</p>
                     <span>See more</span>
                  </div>
                  <ImgContainer>
                     <img src={Board1} alt="" />
                     <img src={Board2} alt="" />
                     <img src={Board3} alt="" />
                  </ImgContainer>
                  <div>
                     <p>Colors</p>
                     <span>See more</span>
                  </div>

                  <Colors>
                     <span
                        id={1}
                        onClick={ChooseColor}
                        style={{ background: "#CBCBCB" }}
                     >
                        {svg}
                     </span>

                     <span
                        id={2}
                        onClick={ChooseColor}
                        style={{ background: "#B04632" }}
                     >
                        {svg}
                     </span>
                     <span
                        id={3}
                        onClick={ChooseColor}
                        style={{ background: "#385f38" }}
                     >
                        {svg}
                     </span>

                     <span
                        id={4}
                        onClick={ChooseColor}
                        style={{ background: "#D29034" }}
                     >
                        {svg}
                     </span>
                     <span
                        id={5}
                        onClick={ChooseColor}
                        style={{ background: "#89609E" }}
                     >
                        {svg}
                     </span>
                     <span
                        id={6}
                        onClick={ChooseColor}
                        style={{ background: "#005C92" }}
                     >
                        {svg}
                     </span>
                  </Colors>
                  <BtnContainer>
                     <button type="button">Cancel</button>
                     <button type="button">Create board</button>
                  </BtnContainer>
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
   cursor: pointer;
`
const Board = styled.div`
   width: 477px;
   height: 363px;
   border-radius: 10px;
   background-color: white;
   border: 1px solid black;
   text-align: center;
   h1 {
      width: 135px;
      height: 20px;
      font-weight: 400;
      font-size: 16px;
      color: black;
      padding: 8px 171px;
   }
   input {
      padding-left: 20px;
      outline: none;
      box-sizing: border-box;
      width: 437px;
      height: 32px;
      border-radius: 8px;
      border: 1px solid #d0d0d0;
   }
   h3 {
      font-size: 16px;
      color: #919191;
      padding: 0px 335px 0px 20px;
      font-weight: 400;
   }
   div {
      margin-top: -10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left: 23px;
      padding-right: 23px;
      height: 18px;
      p {
         color: #919191;
         font-size: 14px;
         font-weight: 400;
      }
      span {
         color: #919191;
         text-decoration-line: underline;
         font-size: 14px;
         font-weight: 400;
      }
   }
`
const ImgContainer = styled.p`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding-left: 23px;
   padding-right: 23px;
   padding-bottom: 8px;
`
const Colors = styled.div`
   padding-top: 25px;
   span {
      width: 59px;
      height: 31px;
      border-radius: 8px;
   }
`
const BtnContainer = styled.div`
   display: flex;
   padding-top: 40px;
   width: 216px;
   height: 34px;
   justify-content: space-around;
   margin-left: 215px;
   button:first-child {
      background: #f0f0f0;
      border-radius: 24px;
      color: #919191;
      font-size: 14px;
      font-weight: 400;
      width: 78px;
      height: 34px;
      cursor: pointer;
      border: none;
   }
   button:last-child {
      background: #0079bf;
      border-radius: 24px;
      width: 122px;
      height: 34px;
      color: #ffffff;
      font-weight: 400;
      font-size: 14px;
      border: none;
      cursor: pointer;
   }
`
