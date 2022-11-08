import React, { useState, useRef } from "react"
import styled from "styled-components"
import Board2 from "../assets/svg/Board2.svg"
import Board3 from "../assets/svg/Board3.svg"
import Board1 from "../assets/svg/Board.svg"
import Galochka from "../assets/svg/Galochka.svg"
import Modal from "./UI/Modal"
import { BackImage, COLORS, MORECOLLORS } from "../utilits/constants/Constants"

const BackgroundImg = [Board1, Board2, Board3]

function CreateBoard({ getData }) {
   const [boardActive, setBoardActive] = useState(false)
   const [chooseItem, setChooseItem] = useState(false)
   const [background, setBackground] = useState(false)
   const [colorsOfBack, setColorsOfBack] = useState(false)
   const [elemData, setElemData] = useState("")

   const backRef = useRef()
   const showBackground = () => {
      setBackground(!background)
      setColorsOfBack(false)
   }
   const closeModalsOfClickBack = () => {
      setBackground(false)
      setColorsOfBack(false)
   }
   const showBoard = () => {
      setBoardActive(!boardActive)
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
      setBackground(false)
   }
   const [isChecked, setIsChecked] = useState(false)

   const getIndex = (i) => {
      setIsChecked(i)
      setElemData(backRef)
   }
   const [isCheckedBackImg, setIsCheckedBackImg] = useState(null)
   const chooseImg = (i) => {
      setIsCheckedBackImg(i)
      setElemData(backRef)
   }
   const [isCheckedColors, setIsCheckedColors] = useState(null)
   const chooseBackColor = (i) => {
      setIsCheckedColors(i)
      setElemData(backRef)
   }

   const seendingData = () => {
      getData(elemData)
   }
   return (
      <Container>
         <Button onClick={showBoard} type="button">
            Create new board
         </Button>

         <div onClick={closeModalsOfClickBack}>
            <Modal fullWidth="29.8rem" isOpen={boardActive}>
               <Board onClick={(e) => e.stopPropagation()}>
                  <h1>Create new board</h1>
                  <input ref={backRef} placeholder="Board title*" />
                  <h3>Add background</h3>
                  <div>
                     <p>Photo</p>
                     <span onClick={showBackground}>See more</span>
                  </div>
                  <ImgContainer>
                     {BackgroundImg.map((item, index) => (
                        <div
                           ref={backRef}
                           style={{ backgroundImage: `url(${item})` }}
                           onClick={() => getIndex(index)}
                        >
                           {isChecked === index && (
                              <img
                                 style={{ paddingLeft: "30px" }}
                                 src={Galochka}
                                 alt="galochka"
                              />
                           )}
                        </div>
                     ))}
                  </ImgContainer>
                  <div>
                     <p>Colors</p>
                     <span onClick={showColorsOfBack}>See more</span>
                  </div>

                  <Colors>
                     {COLORS.map((color, index) => (
                        <span
                           ref={backRef}
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
                     <button type="button" onClick={seendingData}>
                        Create board
                     </button>
                  </BtnContainer>
               </Board>

               {background && (
                  <BackgroundContainer onClick={(e) => e.stopPropagation()}>
                     <h1>Photo</h1>
                     <div>
                        {BackImage.map((img, index) => (
                           <div ref={backRef} onClick={() => chooseImg(index)}>
                              <img src={img} alt="img" />

                              {isCheckedBackImg === index && (
                                 <img
                                    style={{
                                       position: "absolute",
                                       paddingTop: "30px",
                                    }}
                                    src={Galochka}
                                    alt="galochka"
                                 />
                              )}
                           </div>
                        ))}
                     </div>
                  </BackgroundContainer>
               )}
               {colorsOfBack && (
                  <ColorsContainer onClick={(e) => e.stopPropagation()}>
                     <h1>Colors</h1>
                     <div>
                        {MORECOLLORS.map((color, index) => (
                           <span
                              ref={backRef}
                              onClick={() => chooseBackColor(index)}
                              style={{ background: color }}
                           >
                              {isCheckedColors === index && (
                                 <img
                                    style={{
                                       paddingTop: "12px",
                                       paddingLeft: "28px",
                                    }}
                                    src={Galochka}
                                    alt="galochka"
                                 />
                              )}
                           </span>
                        ))}
                     </div>
                  </ColorsContainer>
               )}
            </Modal>
         </div>
      </Container>
   )
}

export default CreateBoard

const Button = styled.button`
   font-size: 1rem !important;
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   width: 21vh;
   height: 6vh;
   background: #0079bf;
   border-radius: 24px;
   border: none;
   color: white;
   font-size: 0.8rem;
   cursor: pointer;
   margin-top: 0.3rem;
   margin-left: 0.3rem;
`
const Container = styled.div`
   height: 100vh;
   width: 100vw;
   position: fixed;
   margin-top: 0.4rem;
   margin-left: 0.4rem;
`
const Board = styled.div`
   h1 {
      width: 118vw;
      height: 4vh;
      font-weight: 400;
      font-size: 1rem;
      color: black;
      padding: 8px 171px;
   }
   input {
      padding-left: 1.25rem;
      outline: none;
      box-sizing: border-box;
      width: 29vw;
      height: 4.5vh;
      border-radius: 8px;
      border: 1px solid #d0d0d0;
      align-items: center;
      margin-left: 1.1rem;
   }
   h3 {
      font-size: 1rem;
      color: #919191;
      padding: 0rem 20rem 0rem 1.4rem;
      font-weight: 400;
   }
   div {
      margin-top: -0.6rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left: 1.7rem;
      padding-right: 1.7rem;
      height: 18px;
      p {
         color: #919191;
         font-size: 0.8rem;
         font-weight: 400;
      }
      span {
         color: #919191;
         text-decoration-line: underline;
         font-size: 0.8rem;
         font-weight: 400;
         cursor: pointer;
      }
   }
`
const ImgContainer = styled.p`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding-left: 1.8rem;
   padding-right: 0.9rem;
   padding-bottom: 0.5rem;
   padding-top: 0.6rem;
   div {
      width: 8.4vw;
      height: 9vh;
      border-radius: 8px;
      background-repeat: no-repeat;
      cursor: pointer;
   }
`
const Colors = styled.div`
   padding-top: 1.6rem;
   span {
      width: 4vw;
      height: 4.3vh;
      border-radius: 8px;
   }
   img {
      padding-top: 0.5rem;
      padding-left: 1.4rem;
   }
`
const BtnContainer = styled.div`
   display: flex;
   padding-top: 2.5rem;
   width: 14vw;
   height: 3.7vh;
   justify-content: space-around;
   margin-left: 13.4rem;
   button:first-child {
      background: #f0f0f0;
      border-radius: 1.5rem;
      color: #919191;
      font-size: 0.9rem;
      font-weight: 400;
      width: 5vw;
      height: 4.5vh;
      cursor: pointer;
      border: none;
   }
   button:last-child {
      background: #0079bf;
      border-radius: 1.5rem;
      width: 7.6vw;
      height: 4.8vh;
      color: #ffffff;
      font-weight: 400;
      font-size: 0.9rem;
      border: none;
      cursor: pointer;
   }
`
const BackgroundContainer = styled.div`
   width: 19vw;
   height: 66vh;
   box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.18);
   border-radius: 0.6rem;
   position: absolute;
   right: -17.5rem;
   background: #ffffff;
   top: 5rem;
   h1 {
      font-size: 1rem;
      font-weight: 400;
      text-align: center;
   }
   div {
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
   }
   img:first-child {
      padding-top: 0.5rem;
      cursor: pointer;
   }
   span {
      width: 7.6vw;
      height: 6.8vh;
   }
`
const ColorsContainer = styled.div`
   width: 19vw;
   height: 28vh;
   box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.18);
   border-radius: 10px;
   background: #ffffff;
   position: absolute;
   right: -12.5rem;
   top: 13.1rem;
   h1 {
      font-size: 1rem;
      font-weight: 400;
      text-align: center;
   }
   span {
      width: 4.9vw;
      height: 5.4vh;
      border-radius: 8px;
      cursor: pointer;
   }
   div {
      display: flex;
      padding-left: 1.4rem;
      gap: 10px;
      flex-wrap: wrap;
   }
`
