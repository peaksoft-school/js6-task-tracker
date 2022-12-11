import React from "react"
import styled from "styled-components"
import ReusableDropDown from "../UI/ReusableDropDown"
import DisplayFlex from "../../layout/DisplayFlex"
import { useToggle } from "../../utilits/hooks/useToggle"
import HeaderDropDown from "./HeaderDropDown"

const ColorsOrImagesDropDown = ({
   images,
   changeBackgroundBoard,
   colors,
   active,
}) => {
   const { isActive } = useToggle()
   return (
      <ReusableDropDown
         right="10px"
         showState={isActive === active}
         width="350px"
         animationTrue
      >
         <HeaderDropDown
            goBack="colorsOrImage"
            title={isActive === "colors" ? "Colors" : "Photo"}
         />
         <DisplayFlex
            FW="wrap"
            JK="center"
            gap="7px 15px"
            margin="10px 0 10px 0"
         >
            {images?.map((item) => {
               return (
                  <StyledImageBlock
                     onClick={() => changeBackgroundBoard(item)}
                     imgUrl={item}
                     color={item}
                     alt="backgroundimage"
                  />
               )
            })}
            {colors?.map((item) => {
               return (
                  <StyledImageBlock
                     onClick={() => changeBackgroundBoard(item)}
                     color={item}
                     alt="backgroundimage"
                  />
               )
            })}
            {isActive === "colors" ? (
               <StyledImageBlock
                  onClick={() => changeBackgroundBoard("green")}
                  color="green"
                  alt="backgroundimage"
               />
            ) : null}
         </DisplayFlex>
      </ReusableDropDown>
   )
}

export default ColorsOrImagesDropDown

const StyledImageBlock = styled.div`
   width: 145px;
   height: 75px;
   border-radius: 10px;
   display: flex;
   justify-content: center;
   align-items: center;
   background-image: url(${(props) => props.imgUrl});
   background-size: cover;
   background-color: ${(props) => props.color};
   margin: 0 !important;
`
