import styled from "styled-components"
import { useState } from "react"
import { DefaultStarIcon, ActiveStarIcon } from "../../assets/icons/index"

function WallpaperBoardCard({ PhotoArray, ref, onHandlerImg }) {
   const [inputViewOnOff, setInputViewOnOff] = useState(false)
   function handleViewOnOff() {
      setInputViewOnOff((prevState) => !prevState)
   }

   return (
      <CardThemeBox ref={ref}>
         {PhotoArray.map((item) => {
            return (
               <CardTheme
                  backgroundImage={item.photo}
                  style={{ background: item.colors }}
                  key={item.id}
                  onClick={() => onHandlerImg(item.photo, item.colors)}
               >
                  <span>{item.nameWallpaper}</span>
                  {item.photo && <Img src={item.photo} />}
                  <IconContainer onClick={() => handleViewOnOff()}>
                     {inputViewOnOff ? <DefaultStarIcon /> : <ActiveStarIcon />}
                  </IconContainer>
               </CardTheme>
            )
         })}
      </CardThemeBox>
   )
}

export default WallpaperBoardCard

const CardThemeBox = styled.div`
   box-sizing: border-box;
   width: 100%;
   border: none;
   position: relative;
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   grid-template-rows: repeat(5, 1fr);
   grid-column-gap: 9px;
   grid-row-gap: 9px;
`

const CardTheme = styled.div`
   position: relative;
   width: 100%;
   color: #ffffff;
   height: 130px;
   border-radius: 8px;

   span {
      position: absolute;
      left: 17px;
      top: 16px;
      font-style: normal;
      font-weight: 500;
   }
`
const Img = styled.img`
   border-radius: 8px;
   width: 100%;
   height: 100%;
`

const IconContainer = styled("div")`
   position: absolute;
   bottom: 12.44px;
   right: 12.44px;
`
