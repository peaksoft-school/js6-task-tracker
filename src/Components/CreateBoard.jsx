import React, { useState } from "react"
import styled from "styled-components"
import Board2 from "../assets/svg/Board2.svg"
import Board3 from "../assets/svg/Board3.svg"
import Board1 from "../assets/svg/Board.svg"
import Galochka from "../assets/svg/Galochka.svg"
import { BackImage, COLORS, MORECOLLORS } from "../utilits/constants/Constants"

function CreateBoard() {
   const [boardActive, setBoardActive] = useState(false)
   const [chooseItem, setChooseItem] = useState(false)
   const [background, setBackground] = useState(false)
   const [colorsOfBack, setColorsOfBack] = useState(false)
   const showBackground = () => {
      setBackground(!background)
   }
   const showBoard = () => {
      setBoardActive(!boardActive)
      setBackground(false)
      setColorsOfBack(false)
   }
   const ChooseColor = (i) => {
      setChooseItem(i)
   }
   const CloseBoard = () => {
      setBoardActive(false)
      setBackground(false)
      setColorsOfBack(false)
   }
   const showColorsOfBack = () => {
      setColorsOfBack(!colorsOfBack)
   }
   return (
      <div>
         <Button onClick={showBoard} type="button">
            Create new board
         </Button>

         <Container>
            {boardActive && (
               <Board>
                  <h1>Create new board</h1>
                  <input placeholder="Board title*" />
                  <h3>Add background</h3>
                  <div>
                     <p>Photo</p>
                     <span onClick={showBackground}>See more</span>
                  </div>
                  <ImgContainer>
                     <div style={{ backgroundImage: `url(${Board1})` }} />
                     <div style={{ backgroundImage: `url(${Board2})` }} />
                     <div style={{ backgroundImage: `url(${Board3})` }} />
                  </ImgContainer>
                  <div>
                     <p>Colors</p>
                     <span onClick={showColorsOfBack}>See more</span>
                  </div>

                  <Colors>
                     {COLORS.map((color, index) => (
                        <span
                           style={{ background: color }}
                           onClick={() => ChooseColor(index)}
                        >
                           {chooseItem === index && (
                              <img src={Galochka} alt="galochka" />
                           )}
                        </span>
                     ))}
                  </Colors>
                  <BtnContainer>
                     <button onClick={CloseBoard} type="button">
                        Cancel
                     </button>
                     <button type="button">Create board</button>
                  </BtnContainer>
               </Board>
            )}
            {background && (
               <BackgroundContainer>
                  <h1>Photo</h1>
                  <div>
                     {BackImage.map((img) => (
                        <img src={img} alt="img" />
                     ))}
                  </div>
               </BackgroundContainer>
            )}
            {colorsOfBack && (
               <ColorsContainer>
                  <h1>Colors</h1>
                  <div>
                     {MORECOLLORS.map((color) => (
                        <span style={{ background: color }} />
                     ))}
                  </div>
               </ColorsContainer>
            )}
         </Container>
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
const Container = styled.div`
   margin: 0 auto;
`
const Board = styled.div`
   width: 477px;
   height: 363px;
   border-radius: 10px;
   background-color: white;
   align-items: center;
   margin: 0 auto;
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
      align-items: center;
      margin-left: 17px;
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
         cursor: pointer;
      }
   }
`
const ImgContainer = styled.p`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding-left: 30px;
   padding-right: 23px;
   padding-bottom: 8px;
   padding-top: 10px;
   div {
      width: 135px;
      height: 62px;
      border-radius: 8px;
      background-repeat: no-repeat;
      cursor: pointer;
   }
`
const Colors = styled.div`
   padding-top: 25px;
   span {
      width: 59px;
      height: 31px;
      border-radius: 8px;
   }
   img {
      padding-top: 8px;
      padding-left: 20px;
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
const BackgroundContainer = styled.div`
   width: 293px;
   height: 480px;
   box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.18);
   border-radius: 10px;
   position: absolute;
   right: 100px;
   top: 60px;
   h1 {
      font-size: 16px;
      font-weight: 400;
      text-align: center;
   }
   div {
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
   }
   img {
      padding-top: 8px;
      cursor: pointer;
   }
   span {
      width: 123px;
      height: 62px;
   }
`
const ColorsContainer = styled.div`
   width: 293px;
   height: 204px;
   box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.18);
   border-radius: 10px;
   /* position: absolute;
   left: 820px;
   top: 50px; */
   h1 {
      font-size: 16px;
      font-weight: 400;
      text-align: center;
   }
   span {
      width: 79px;
      height: 40px;
      border-radius: 8px;
      cursor: pointer;
   }
   div {
      display: flex;
      padding-left: 20px;
      gap: 10px;
      flex-wrap: wrap;
   }
`
