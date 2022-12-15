import React from "react"
import styled from "styled-components"
import DisplayFlex from "../../../layout/DisplayFlex"
import ReusableDropDown from "../../UI/ReusableDropDown"
import Galochka from "../../../assets/svg/Galochka.svg"

const ImageBlock = ({
   selectedBoardHandler,
   selectedBoard,
   secondActive,
   BackImage,
}) => {
   return (
      <DisplayFlex JK="space-between">
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
                        top="-40px"
                        width="320px"
                        left="487px"
                        padding="8px"
                        height="580px"
                        showState={secondActive === "imagesDropDown"}
                     >
                        <h4>Photo</h4>
                        <DisplayFlex FW="wrap" JK="center" gap="5px">
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
                        </DisplayFlex>
                     </ReusableDropDown>
                  )}
               </>
            )
         })}
      </DisplayFlex>
   )
}

export default ImageBlock

const Check = styled.img`
   width: 25px !important;
   height: 25px !important;
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
