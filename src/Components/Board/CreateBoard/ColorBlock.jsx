import React from "react"
import styled from "styled-components"
import DisplayFlexJCSB from "../../../layout/DisplayFlex"
import Galochka from "../../../assets/svg/Galochka.svg"
import ReusableDropDown from "../../UI/ReusableDropDown"

const ColorBlock = ({
   COLORS,
   selectedBoard,
   selectedBoardHandler,
   activeIndex,
}) => {
   return (
      <DisplayFlexJCSB>
         {COLORS.map((color) => (
            <>
               {typeof color === "string" && (
                  <StyledColorBlock
                     onClick={() => selectedBoardHandler(color)}
                     color={color}
                  >
                     {color === selectedBoard && <Check src={Galochka} />}
                  </StyledColorBlock>
               )}
               <ReusableDropDown
                  top="137px"
                  width="320px"
                  left="487px"
                  height="400px"
                  padding="8px 0 0 0"
                  showState={activeIndex === "5"}
               >
                  <h4>Color</h4>
                  <ContainerBlock>
                     {typeof color === "object" &&
                        color.map((item) => {
                           return (
                              <StyledColorBlock
                                 onClick={() => selectedBoardHandler(item)}
                                 bigSize
                                 color={item}
                              >
                                 {item === selectedBoard && (
                                    <Check src={Galochka} />
                                 )}
                              </StyledColorBlock>
                           )
                        })}
                  </ContainerBlock>
               </ReusableDropDown>
            </>
         ))}
      </DisplayFlexJCSB>
   )
}

export default ColorBlock

const ContainerBlock = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   gap: 5px;
`
const Check = styled.img`
   width: 25px !important;
   height: 25px !important;
`
const StyledColorBlock = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: ${(props) => (props.bigSize ? "90px" : "65px")};
   height: ${(props) => (props.bigSize ? "50px" : "35px")};
   background-color: ${(props) => props.color};
   border-radius: 7px;
`
