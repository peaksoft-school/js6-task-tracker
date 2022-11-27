import React from "react"
import styled from "styled-components"
import DisplayFlexJCSB from "../../../layout/DisplayFlexJCSB"
import ReusableDropDown from "../../UI/ReusableDropDown"
import Galochka from "../../../assets/svg/Galochka.svg"

const ImageBlock = ({
   selectedBoardHandler,
   selectedBoard,
   activeIndex,
   BackImage,
}) => {
   return (
      <DisplayFlexJCSB>
         {BackImage.map((item) => {
            return (
               <>
                  {typeof item === "string" && (
                     <StyledImageBlock
                        onClick={() => selectedBoardHandler(item)}
                        imgUrl={item}
                        alt="backgroundimage"
                     >
                        {item === selectedBoard && <Check src={Galochka} />}
                     </StyledImageBlock>
                  )}
                  {typeof item === "object" && (
                     <ReusableDropDown
                        top="0"
                        width="320px"
                        left="460px"
                        padding="8px"
                        height="580px"
                        showState={activeIndex === 1}
                     >
                        <h4>Photo</h4>
                        <ContainerBlock>
                           {item.map((photo) => {
                              return (
                                 <StyledImageBlock
                                    onClick={() => selectedBoardHandler(photo)}
                                    imgUrl={photo}
                                    alt="backgroundimage"
                                 >
                                    {photo === selectedBoard && (
                                       <Check src={Galochka} />
                                    )}
                                 </StyledImageBlock>
                              )
                           })}
                        </ContainerBlock>
                     </ReusableDropDown>
                  )}
               </>
            )
         })}
      </DisplayFlexJCSB>
   )
}

export default ImageBlock

const Check = styled.img`
   width: 25px !important;
   height: 25px !important;
`
const ContainerBlock = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   gap: 5px;
`
const StyledImageBlock = styled.div`
   width: 145px;
   height: 75px;
   border-radius: 10px;
   display: flex;
   justify-content: center;
   align-items: center;
   background-image: url(${(props) => props.imgUrl});
   background-size: cover;
   background-repeat: no-repeat;
   margin: 0 !important;
`
